import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Ethical Hacking",
      issuer: "IIT Kharagpur",
      date: "Nov 2024",
      credentialId: "NPTEL24CS94S456900350",
      link: "https://drive.google.com/file/d/1Fsb1lx19wuIt-if0wbPyzXxkT_l0Es7P/view",
      description: "Gained practical knowledge in penetration testing, network security, vulnerability assessment, and ethical hacking techniques to identify and mitigate cyber threats."
    }
    ,
    {
      title: "Python (Problem Solving)",
      issuer: "HackerRank",
      date: "Mar 2023",
      credentialId: "e657e6658372",
      link: "https://www.hackerrank.com/certificates/e657e6658372",
      description: "Demonstrated proficiency in solving algorithmic problems using Python, including data structures, loops, conditionals, and functional programming techniques."
    }
    ,
   {
  title: "Data Structure and Algorithm",
  issuer: "Linux Social",
  date: "July 2024",
  credentialId: "LinuX-07-2024",
  link: "https://drive.google.com/file/d/1cpqjVkDGcaDZ15hu75ZgsfuRhu-ELlSx/view?usp=drivesdk",
  description: "Acquired strong problem-solving skills through implementation of data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, recursion) to solve computational challenges efficiently."
}
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications validating my expertise across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-card hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Award size={20} />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-accent">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
