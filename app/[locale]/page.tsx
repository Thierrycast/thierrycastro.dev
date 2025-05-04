export const dynamic = 'force-static';
export const revalidate = false;

import { getLocale } from 'next-intl/server';
import { buildHomeLabels } from '@/i18n/buildHomeLabels';

import DynamicTimeline from '../components/dynamic/DynamicTimeline';
import DynamicSkills from '../components/dynamic/DynamicSkills';

import HeaderSection from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import GalaxyBackground from '../components/GalaxyBackground';

export default async function Home() {
  const locale = await getLocale();
  const labels = await buildHomeLabels(locale);

  return (
    <main className="flex flex-col items-center">
      <GalaxyBackground />
      <HeaderSection labels={labels.header} />
      <HeroSection labels={labels.hero} />
      <AboutSection labels={labels.about} />
      <ProjectsSection labels={labels.projects} />
      <DynamicTimeline labels={labels.timeline} />
      <DynamicSkills labels={labels.skills} />
      <ContactSection labels={labels.contact} />
      <Footer labels={labels.footer} />
    </main>
  );
}
