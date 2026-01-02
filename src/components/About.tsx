import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Kolkata, India" },
  { icon: Briefcase, label: "Status", value: "B.Tech CSE student" },
  { icon: GraduationCap, label: "Institution", value: "Techno Main Salt Lake (MAKAUT)" },
  { icon: Heart, label: "Interests", value: "Systems, algorithms, competitive problem solving" },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        scroll-mt-28
        bg-background
        px-6
        py-32 md:py-40
        min-h-[calc(100vh-5rem)]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          About
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I approach software engineering with a problem-solving mindset: breaking
              problems into clear constraints, validating assumptions, and iterating until
              the solution is correct and maintainable.
            </p>

            <p className="text-lg">
              As a B.Tech CSE student, I focus on systems, data structures, and algorithms.
              I value clarity, consistency, and small, measurable improvements in code and
              architecture.
            </p>

            <p className="text-lg">
              Chess has shaped how I think about trade-offs and planning — I prefer deliberate
              moves with long-term value. Outside coursework, I compete in problem-solving
              challenges and build projects that sharpen practical skills.
            </p>
          </div>

          <div>
            <div className="bg-muted/60 rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Quick Facts
              </h3>

              <div className="space-y-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
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
          </div>
        </div>
      </motion.div>

      {/* HARD STOP between sections */}
      <div className="mt-40 border-t border-border/60" />
    </section>
  );
};

export default About;
