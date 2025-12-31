import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Concurrent Task Runner",
    description:
      "A small-scale job scheduler for batching compute tasks with concurrency control and simple retries.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/HarshMrigank/concurrent-task-runner",
    live: "",
    image: "https://images.unsplash.com/photo-1551368678-6d5f9b4d9d4a?w=600&h=400&fit=crop",
  },
  {
    title: "Realtime Collaboration (Notes)",
    description:
      "A collaborative notes app using operational transforms to sync edits across clients with low latency.",
    tech: ["React", "WebSocket", "Node.js", "Redis"],
    github: "https://github.com/HarshMrigank/realtime-notes",
    live: "",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizations for classic algorithms (graphs, sorting, search) to aid learning and interviews.",
    tech: ["TypeScript", "React", "D3"],
    github: "https://github.com/HarshMrigank/algorithm-visualizer",
    live: "",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&h=400&fit=crop",
  },
  {
    title: "Placement Dashboard",
    description:
      "An internal dashboard to track coding practice, interview timelines, and system design study progress.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/HarshMrigank/placement-dashboard",
    live: "",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button variant="ghost" size="sm" asChild className="px-0 hover:bg-transparent hover:text-primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1.5" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="px-0 hover:bg-transparent hover:text-primary">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;