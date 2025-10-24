import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Newsletter Management System",
      description:
        "A full-stack web application enabling automated newsletter creation, subscription, and distribution. Features a public landing page for subscribers and an admin panel for newsletter management and publishing.",
      technologies: ["Next.js", "React", "Node.js", "Nest.js", "PostgreSQL", "TypeORM", "SendGrid", "JWT"],
      github: "https://github.com/Ashugithubb/NewsLetterD",
      demo: "https://github.com/Ashugithubb/NewsLetterD",
      highlights: [
        "Built a complete subscription and publishing workflow for newsletters",
        "Designed a landing page for users to subscribe and manage preferences",
        "Developed a secure admin panel for creating, editing, and publishing newsletters",
        "Integrated email automation using SendGrid for real-time newsletter delivery",
        "Implemented JWT-based authentication for admin access control",
        "Used PostgreSQL with TypeORM for relational data management",
      ],
    }
    ,
    {
      title: "ZenLook",
      description:
        "A full-stack web application for salon service booking, billing, and automated email notifications. Customers can book appointments, receive booking confirmations, and manage cancellations in real-time.",
      technologies: ["Next.js", "React", "Node.js", "Nest.js", "PostgreSQL", "TypeORM", "Nodemailer", "MUI"],
      github: "https://github.com/Ashugithubb/zenLooks",
      demo: "https://zen-looks.vercel.app/",
      highlights: [
        "Implemented secure user authentication and role-based access for customers and admins",
        "Integrated automated email system for booking confirmation and cancellation using Nodemailer",
        "Designed an intuitive booking interface with date, time, and service selection",
        "Added billing and payment summary generation for each booking",
        "Built an admin dashboard to manage services, slots, and customer data",
        "Used MUI for a modern, responsive user experience",
      ],
    }
    ,
    {
      title: "Rising Star – Edtech Website",
      description:
        "Full-stack platform built for a coaching institute, featuring student login, personalized dashboards, test and fee management, and admin communication tools.",
      technologies: ["Next.js", "React", "Node.js", "Nest.js", "PostgreSQL", "TypeORM", "Nodemailer", "MUI"],
      github: "https://github.com/Ashugithubb/rbackend",
      demo: "https://github.com/Ashugithubb/rbackend",
      highlights: [
        "Developed personalized dashboards for students with real-time data",
        "Implemented test scheduling, result management, and fee tracking system",
        "Added announcement and contact modules for institute-wide communication",
        "Integrated secure authentication with role-based access control",
      ],
    },

    {
      title: "Instagram Profile Monitor",
      description:
        "Built an automation tool using Node.js, Puppeteer, and Twilio API to monitor Instagram profile and bio changes in real-time, with instant WhatsApp alerts and session persistence.",
      technologies: ["Node.js", "Puppeteer", "Twilio API", "Railway"],
      github: "https://github.com/Ashugithubb/Instagram-Profile-Monitor",
      demo: "https://github.com/Ashugithubb/Instagram-Profile-Monitor",
      highlights: [
        "Automated detection of Instagram bio and profile picture changes",
        "Used file hashing for precise image difference tracking",
        "Integrated Twilio API for real-time WhatsApp notifications",
        "Deployed on Railway with persistent session management for continuous monitoring"
      ],
    },
    {
      title: "Sandesh – Real-Time Chat Application",
      description:
        "A WhatsApp-like real-time chat application built with React.js and Firebase, featuring instant messaging, user authentication, and dynamic chat updates.",
      technologies: ["React.js", "Firebase", "Firebase Authentication", "Firestore", "Tailwind CSS"],
      github: "https://github.com/Ashugithubb/Sandesh",
      demo: " https://sandesh-chi.vercel.app/",
      highlights: [
        "Implemented real-time one-to-one and group messaging using Firebase Firestore",
        "Integrated Firebase Authentication for secure user sign-up and login",
        "Designed a responsive chat interface inspired by WhatsApp UI",
        "Added message status indicators and live updates using Firestore listeners",
        "Used Firebase Storage for handling profile pictures and media sharing",
        "Deployed using Firebase Hosting for fast, reliable access",
      ],
    },
    {
      title: "Session-Based Authentication System",
      description:
        "A secure full-stack authentication system built with Next.js and Nest.js, featuring session-based login, real-time OTP validation with WebSockets, and concurrent session management.",
      technologies: [
        "Next.js",
        "React",
        "Nest.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "WebSockets",
      ],
      github: "https://github.com/Ashugithubb/sessionsManegment",
      demo: "https://github.com/Ashugithubb/sessionsManegment",
      highlights: [
        "Implemented secure session-based authentication with 60-minute validity and inactivity timeout",
        "Developed real-time OTP validation system using WebSockets for device verification",
        "Allowed maximum of two active sessions per user with automatic session control",
        "Created dashboard displaying session logs with device info, IP address, and login timestamps",
        "Designed robust backend using Nest.js and TypeORM with PostgreSQL for data management",
        "Ensured complete session lifecycle handling — creation, expiry, validation, and termination",
      ],
    }


  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Other Full Stack Projects</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Apart from my featured work, I’ve built and deployed several full-stack applications covering diverse use-cases like
          expense tracking, education tech, surveys, and real-time session systems.
        </p>


        <div className="flex flex-wrap justify-center gap-3">
          {[
            {
              name: "FeedBackLoop (Stack Overflow)",
            },
            { name: "NewRequirements" },
            { name: "SplitKro App" },
            { name: "E-commerce App" },
            { name: "Survey Platform" },
            { name: "Bus Management System" },
            { name: "Asana Clone" },
            { name: "TeachMint Clone" },
            { name: "Contact Diary" },
            { name: "Recipe Management System" },
            { name: "Todo App" },
            {
              name: "Expense Tracker",
              link: "https://expense-tracker-frontend-liard.vercel.app/",
            },
            { name: "Session Management using WebSockets" },
            { name: "Contact Management System (CMS)" },
            { name: "Wheater DashBoard" },
            { name: "AI Safety Incident Dashboard" }
          ].map((project, idx) => (
            project.link ? (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  {project.name}  <ExternalLink size={14} className="ml-1" />
                </Badge>
              </a>
            ) : (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {project.name}
              </Badge>
            )
          ))}
        </div>

      </div>
      <div className="text-center mt-8">
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() =>
            window.open("https://github.com/Ashugithubb", "_blank")
          }
        >
          <Github className="mr-2" /> Check More on GitHub
        </Button>
      </div>

    </section>

  );
};

export default Projects;
