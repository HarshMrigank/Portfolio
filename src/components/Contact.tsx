import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Mail, href: "mailto:hello@johndoe.dev", label: "Email" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="section-title">Get in Touch</h2>
        
        <p className="text-muted-foreground mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              maxLength={100}
              className="bg-background border-border focus:border-primary"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              maxLength={255}
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            maxLength={1000}
            className="bg-background border-border focus:border-primary resize-none"
          />
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <div className="flex justify-center gap-4 mt-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;