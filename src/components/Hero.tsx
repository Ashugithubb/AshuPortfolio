import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { SiLeetcode } from 'react-icons/si';
import { SiCodeforces } from "react-icons/si";

const Hero = () => {
 const socialLinks = [
   { icon: Github, href: "https://github.com/Ashugithubb", label: "GitHub" },
   { icon: Linkedin, href: "https://www.linkedin.com/in/ashutosh160", label: "LinkedIn" },
   { icon: SiLeetcode, href: "https://leetcode.com/u/ashutosh25leet/", label: "LeetCode" },
   { icon: SiCodeforces, href: "https://codeforces.com/profile/ashutosh_25_", label: "Codeforces" }
 ];
 

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
              Full Stack Developer & AI/ML Enthusiast
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Ashutosh Kumar</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Final-year B.Tech Computer Science student passionate about building
              intelligent, scalable, and user-friendly applications using modern
              technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
