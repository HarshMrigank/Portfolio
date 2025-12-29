import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>John Doe | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in building clean, scalable web applications with modern technologies. View my portfolio and get in touch."
        />
        <meta name="keywords" content="full stack developer, web developer, react, typescript, portfolio" />
        <link rel="canonical" href="https://johndoe.dev" />
      </Helmet>

      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
