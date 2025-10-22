import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

import { Zap } from "lucide-react";


import { Code2, Database, Cpu, Cloud, GitBranch, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
      color: "text-primary",
    },
    {
      title: "Frontend Development",
      icon: Layers,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux", "Vue.js","MUI","Bootstrap"],
      color: "text-accent",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express","Nest.js" ,"FastAPI", "Django", "PostgreSQL", "MongoDB","TypeOrm","WebSockets"],
      color: "text-primary",
    },
    {
      title: "AI/ML & Data Science",
      icon: Cpu,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
      color: "text-accent",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "AWS", "GCP", "CI/CD", "Kubernetes", "Linux"],
      color: "text-primary",
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Figma","GitLab","Firebase"],
      color: "text-accent",
    },
    {
  title: "Whatever you want, I’ll learn it.",
  icon:  Zap, // from lucide-react
  skills: [
    "🔧 Ready for Challenges",
    "   ",
    "   ",
    "   ",
   ,
    
  ],
  color: "text-accent",
}

     
  ];
 const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      solved: 551,
      level: "Advanced",
      color: "from-orange-400 to-orange-600",
      link: "https://leetcode.com/u/ashutosh25leet/",
    },
    {
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      solved: 150,
      level: "Intermediate",
      color: "from-green-400 to-green-600",
      link: "https://www.geeksforgeeks.org/user/ashu4oq/",
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      solved: 1, 
      level: "Newbie",
      color: "from-blue-400 to-blue-600",
      link: "https://codeforces.com/profile/ashutosh_25_",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      solved: 0,
      level: "beginnner",
      color: "from-yellow-400 to-yellow-600",
      link: "https://www.codechef.com/users/ashu1525",
    },
  ];
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-sm bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Skill Level Indicators */}
          <section id="coding-profile" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competitive <span className="gradient-text">Coding</span> Profile
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platforms, solved problems, and ratings showcasing my competitive programming journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color} text-white`}>
                  <platform.icon size={28} />
                </div>
                <h3 className="text-lg font-bold">{platform.name}</h3>
              </div>

              <p className="text-muted-foreground mb-2">Problems Solved</p>
              <div className="w-full bg-muted h-3 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full bg-gradient-to-r ${platform.color} transition-all duration-1000`}
                  style={{ width: `${Math.min(platform.solved / 600 * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm font-medium text-accent">{platform.solved} solved</p>
              <p className="text-sm text-muted-foreground mt-1">Level: {platform.level}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
        
      </div>
    </section>
  );
};

export default Skills;



