import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
  },
  {
    icon: Briefcase,
    label: "Status",
    value: "B.Tech CSE student",
  },
  {
    icon: GraduationCap,
    label: "Institution",
    value: "Techno Main Salt Lake (MAKAUT)",
  },
  {
    icon: Heart,
    label: "Interests",
    value: "Systems, algorithms, competitive problem solving",
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
        <h2 className="section-title">About</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I approach software engineering with a problem-solving mindset: break problems
              into clear constraints, validate assumptions, and iterate until there is a
              correct, maintainable solution.
            </p>

            <p className="text-lg">
              As a B.Tech CSE student, I focus on systems, data structures, and algorithms.
              I value clarity, consistency, and small, measurable improvements in code and
              architecture.
            </p>

            <p className="text-lg">
              Chess has influenced how I think about trade-offs and planning — I prefer
              deliberate moves with long-term value. Outside classwork, I compete in
              problem-solving challenges and build projects that sharpen practical skills.
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