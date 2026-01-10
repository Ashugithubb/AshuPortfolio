import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

// Chat message interface
interface Message {
    id: string;
    role: "user" | "bot";
    text: string;
    timestamp: Date;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "bot",
            text: "Hi! I'm Ashutosh's AI Assistant. Ask me anything about his projects, skills, or experience!",
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Cleanup speech on unmount
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const speak = (text: string) => {
        if (isMuted) return;
        window.speechSynthesis.cancel();
        // Remove markdown symbols for cleaner speech
        const cleanText = text.replace(/[*#_`]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        window.speechSynthesis.speak(utterance);
    };

    // Handle API Call
    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            text: inputText,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputText("");
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("API Key not found");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

            // Construct system prompt from portfolio data
            const systemPrompt = `
        You are an AI assistant for Ashutosh Kumar's portfolio website.
        Your goal is to answer questions about Ashutosh based ONLY on the following data.
        Be professional, friendly, and concise.
        
        DATA:
        ${JSON.stringify(PORTFOLIO_DATA, null, 2)}
        
        If the answer is not in the data, politely say you don't have that specific information but can tell them about his skills or projects.
        Do not make up facts.
      `;

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: systemPrompt }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I will answer questions about Ashutosh based on the provided data." }],
                    },
                ],
            });

            const result = await chat.sendMessage(userMessage.text);
            const response = await result.response;
            const text = response.text();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                text: text,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            speak(text);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                text: "I'm having trouble connecting to the AI right now. Please try again later, or ensure the API key is set correctly.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                    {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </Button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] flex flex-col rounded-2xl border bg-background/95 backdrop-blur-lg shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b bg-primary/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Bot size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Ashutosh's AI Assistant</h3>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-primary/10"
                                onClick={() => {
                                    if (!isMuted) window.speechSynthesis.cancel();
                                    setIsMuted(!isMuted);
                                }}
                                title={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX size={18} className="text-muted-foreground" /> : <Volume2 size={18} className="text-primary" />}
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""
                                            }`}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user"
                                                ? "bg-accent/10 text-accent"
                                                : "bg-primary/10 text-primary"
                                                }`}
                                        >
                                            {msg.role === "user" ? <User size={16} /> : <Sparkles size={16} />}
                                        </div>
                                        <div
                                            className={`flex flex-col gap-1 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"
                                                }`}
                                        >
                                            <div
                                                className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-tr-none"
                                                    : "bg-secondary/50 text-foreground rounded-tl-none border"
                                                    }`}
                                            >
                                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                                    <ReactMarkdown>
                                                        {msg.text}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground opacity-70">
                                                {msg.timestamp.toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-start gap-2.5">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Loader2 size={16} className="text-primary animate-spin" />
                                        </div>
                                        <div className="bg-secondary/50 rounded-2xl rounded-tl-none px-4 py-2.5">
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        {/* Input Area */}
                        <div className="p-4 border-t bg-background/50">
                            <div className="flex gap-2">
                                <Input
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask about skills, projects..."
                                    className="rounded-full bg-background border-input focus-visible:ring-primary"
                                    disabled={isLoading}
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputText.trim() || isLoading}
                                    size="icon"
                                    className="rounded-full shrink-0"
                                >
                                    <Send size={18} />
                                </Button>
                            </div>
                            <p className="text-[10px] text-center text-muted-foreground mt-2">
                                Powered by Gemini AI • Responses may vary
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
