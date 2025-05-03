import { getLocale } from 'next-intl/server';
import { buildHomeLabels } from '@/i18n/buildHomeLabels';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import TimelineSection from '../components/TimelineSection';
import GalaxyBackground from '../components/GalaxyBackground';

export default async function Home() {
  const locale = await getLocale();
  const labels = await buildHomeLabels(locale);

  return (
    <main className="flex flex-col items-center">
      <GalaxyBackground />
      <Header labels={labels.header} />
      <HeroSection labels={labels.hero} />
      <AboutSection labels={labels.about} />
      <ProjectsSection labels={labels.projects} />
      < TimelineSection labels={labels.timeline} />
      <SkillsSection labels={labels.skills} />
      <ContactSection labels={labels.contact} />
      <Footer labels={labels.footer} />
    </main>
  );
}