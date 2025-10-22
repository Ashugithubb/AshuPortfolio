import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "2022 - 2026",
      grade: "CGPA: 8.8/10.0",
      achievements: [
        "Dean's List for Academic Excellence (2022-2024)",
        "Top 100 students out of 6000+ in B.Tech Computer Science program",
        "Top 6 Finalist | Dr. Code Hackathon (400+ participants, 100+ teams) – Developed a Lead Management System with a dashboard to track user engagement"
      ]

    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Govt. Sen. Sec. School Phagwara",
      location: "Phagwara, Punjab",
      period: "2019 - 2021",
      grade: "Percentage: 97.4%",
      achievements: [
        "State Topper in CAT Exam – Excelled in Mathematics, Physics, Chemistry, and Aptitude, showcasing strong analytical and problem-solving skills",
        "District Topper in Science Stream – Secured 97.4% in Board Exams",
        "State-level Special Prize Winner – Science Exhibition"
      ]

    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My educational journey and academic achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {edu.institution}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    <span className="text-sm font-semibold text-accent">{edu.grade}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">Key Achievements:</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
