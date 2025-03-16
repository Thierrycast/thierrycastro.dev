import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
