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
        <title>Harsh Mrigank | Software Engineer</title>
        <meta
          name="description"
          content="B.Tech CSE student focused on systems, algorithms and reliable web engineering."
        />
        <meta name="keywords" content="software engineer, algorithms, systems, react, typescript, portfolio" />
        <link rel="canonical" href="https://harshmrigank.dev" />
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
