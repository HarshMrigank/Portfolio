import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-primary
        border-b border-primary/20
        shadow-sm
      "
    >
      <nav className="max-w-5xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-primary-foreground"
          aria-label="Harsh Mrigank — Home"
        >
          <img
            src="/logo.png"
            alt="HM logo"
            className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover ring-2 ring-primary-foreground/30"
          />
          <span>HM</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-base md:text-lg text-primary-foreground/80
                  hover:text-primary-foreground transition-colors
                  relative after:absolute after:left-0 after:-bottom-2
                  after:h-0.5 after:w-0 after:bg-primary-foreground
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="
              p-2 rounded-md
              text-primary-foreground
              hover:bg-primary-foreground/10
              transition-colors
            "
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-primary border-b border-primary/20"
          >
            <ul className="px-6 py-6 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      block text-lg
                      text-primary-foreground/80
                      hover:text-primary-foreground
                      transition-colors
                    "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
