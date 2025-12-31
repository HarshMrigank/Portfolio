import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-8 bg-background">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 md:order-1"
          >

              <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  Available for hire
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Harsh Mrigank
              </h1>

              <div>
                <p className="text-base text-foreground font-medium">Software Engineer</p>
                <p className="text-sm text-muted-foreground">systems · algorithms · reliability</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground max-w-lg mt-2">
              Building reliable web systems with emphasis on correctness and measurable outcomes.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.18 }}
              className="mt-4"
            >
              <div className="flex items-center gap-4 text-muted-foreground">
                <a href="https://github.com/HarshMrigank" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/harsh-mrigank-a29584277/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/HarshMrigank" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:hi@harshmrigank.dev" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-1 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="photo-wrap">
                <img
                  src="/profile.jpg"
                  alt="Harsh Mrigank — Software Engineer"
                  className="photo relative w-72 h-44 md:w-96 md:h-56 object-cover rounded-xl shadow-sm border border-border"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;