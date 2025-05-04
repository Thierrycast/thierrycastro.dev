import { getTranslations } from 'next-intl/server';

export async function buildHomeLabels(locale: string) {
  const namespaces = [
    'Header',
    'HeroSection',
    'AboutSection',
    'ProjectsSection',
    'TimelineSection',
    'SkillsSection',
    'ContactSection',
    'Footer'
  ];

  const [
    headerT,
    heroT,
    aboutT,
    projectsT,
    timelineT,
    skillsT,
    contactT,
    footerT
  ] = await Promise.all(
    namespaces.map((ns) => getTranslations({ locale, namespace: ns }))
  );

  return {
    header: {
      home: headerT('home'),
      about: headerT('about'),
      projects: headerT('projects'),
      experiences: headerT('experiences'),
      skills: headerT('skills'),
      contact: headerT('contact')
    },

    hero: {
      greeting: heroT('greeting'),
      name: heroT('name'),
      role: heroT('role'),
      button: heroT('button'),
      scrollHint: heroT('scrollHint')
    },

    about: {
      profileAlt: aboutT('profileAlt'),
      badge: aboutT('badge'),
      name: aboutT('name'),
      description: aboutT('description')
    },

    projects: {
      badge: projectsT('badge'),
      title: projectsT('title'),
      projects: (projectsT.raw('projects') as {
        title: string;
        description: string;
      }[]).map((project, index) => ({
        ...project,
        image: `/images/${[
          'ecommerce',
          'dashboard',
          'streaming',
          'finance',
          'social',
          'fitness'
        ][index]}.png`
      }))
    },

    timeline: {
      badge: timelineT('badge'),
      title: timelineT('title'),
      companies: timelineT.raw('companies') as {
        company: string;
        experiences: { role: string; description: string }[];
      }[]
    },

    skills: {
      badge: skillsT('badge'),
      title: skillsT('title')
    },

    contact: {
      badge: contactT('badge'),
      title: contactT('title'),
      contacts: contactT.raw('contacts') as {
        label: string;
        value: string;
      }[]
    },

    footer: {
      label: footerT('label')
    }
  };
}
