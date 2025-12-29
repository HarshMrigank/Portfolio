import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "5+ Years",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "CS Degree",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "Open Source",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I'm a full stack developer with a passion for building products that make a difference. 
              With over 5 years of experience in web development, I've worked on everything from 
              small business websites to large-scale enterprise applications.
            </p>
            
            <p className="text-lg">
              My journey into programming started when I built my first website at 15. Since then, 
              I've been fascinated by the intersection of design and technology. I believe that 
              great software is not just about functionality—it's about creating experiences that 
              feel intuitive and delightful.
            </p>
            
            <p className="text-lg">
              My focus is on writing clean, efficient code and creating seamless user experiences. 
              I specialize in React and Node.js ecosystems, but I'm always eager to learn new 
              technologies. Currently, I'm exploring the world of AI/ML and how it can enhance 
              web applications.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you'll find me contributing to open-source projects, writing 
              technical articles on my blog, or mentoring aspiring developers. I'm also an avid 
              reader and enjoy hiking in the mountains on weekends.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;