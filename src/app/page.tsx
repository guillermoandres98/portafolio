import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Certificates from "@/components/sections/certificates";
import Hardware from "@/components/sections/hardware";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import GlobalScrollUI from "@/components/global-scroll-ui";

export default function Home() {
  return (
    <>
      <GlobalScrollUI />
      <Header />
      <main className="relative">
        <Hero />
        <hr className="section-divider" aria-hidden />
        <About />
        <hr className="section-divider" aria-hidden />
        <Certificates />
        <hr className="section-divider" aria-hidden />
        <Hardware />
        <hr className="section-divider" aria-hidden />
        <Projects />
        <hr className="section-divider" aria-hidden />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
