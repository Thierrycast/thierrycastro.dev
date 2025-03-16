import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
    </main>
  );
}
