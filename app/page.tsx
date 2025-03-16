import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div
        className="absolute top-0 w-full h-[750px] bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/background_galaxy.svg')" }}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
