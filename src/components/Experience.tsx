import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Zenmonk Software and Services (FUNIBER)",
      period: "May 2025 - Present",
      description: "Contributing to the development and deployment of scalable, responsive web applications using modern full-stack technologies.",
      responsibilities: [
        "Built and deployed responsive web applications using React.js, Next.js, Redux, and MUI.",
        "Designed and optimized RESTful APIs with Nest.js, improving scalability and reducing API response time by 30%.",
        "Integrated PostgreSQL using TypeORM for efficient relational data management.",
        "Implemented Docker-based deployment pipelines for consistent and containerized environments.",
        "Collaborated with a 5-member Agile team using Git and GitHub for version control and code reviews."
      ],
      techStack: ["React.js", "Next.js", "Redux", "TypeScript", "Nest.js", "Node.js", "PostgreSQL", "Docker", "MUI", "HTML", "CSS"]
    },
    {
      title: "Data Engineering Intern",
      company: "Devco Services",
      period: "Oct 2024 – Jan 2025",
      description: "Gained hands-on experience in cloud-based data engineering using Google Cloud Platform (GCP).",
      responsibilities: [
        "Practiced Compute Engine, IAM, VPC, and Cloud Storage through interactive labs and real-world projects.",
        "Explored best practices for managing and securing cloud-based infrastructure.",
        "Assisted in setting up scalable data pipelines and optimizing cloud resource usage."
      ],
      techStack: ["Google Cloud Platform (GCP)", "Compute Engine", "VPC", "IAM", "Cloud Storage"]
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in building innovative solutions and contributing to impactful projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-accent">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-sm text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
