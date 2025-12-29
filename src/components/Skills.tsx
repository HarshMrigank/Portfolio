import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Wrench,
  FileCode,
  Boxes,
  Terminal,
  GitBranch,
  Container,
  Cloud,
  Figma,
  Braces,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", icon: Braces },
      { name: "JavaScript", icon: FileCode },
      { name: "Python", icon: Terminal },
      { name: "Go", icon: Code2 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: [
      { name: "React", icon: Boxes },
      { name: "Next.js", icon: Server },
      { name: "Node.js", icon: Terminal },
      { name: "Express", icon: Server },
      { name: "Django", icon: Code2 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Cloud },
      { name: "Figma", icon: Figma },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div 
                key={category.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                      >
                        <SkillIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;