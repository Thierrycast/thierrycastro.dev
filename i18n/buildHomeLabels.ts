import { getTranslations } from 'next-intl/server';

export async function buildHomeLabels(locale: string) {
  const t = (ns: string) => getTranslations({ locale, namespace: ns });

  const [
    headerT,
    heroT,
    aboutT,
    projectsT,
    timelineT,
    skillsT,
    contactT,
    footerT
  ] = await Promise.all([
    t('Header'),
    t('HeroSection'),
    t('AboutSection'),
    t('ProjectsSection'),
    t('TimelineSection'),
    t('SkillsSection'),
    t('ContactSection'),
    t('Footer')
  ]);

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
      projects: Array.from({ length: 6 }, (_, i) => ({
        title: projectsT(`projects.${i}.title`),
        description: projectsT(`projects.${i}.description`),
        image: `/images/${[
          'ecommerce',
          'dashboard',
          'streaming',
          'finance',
          'social',
          'fitness'
        ][i]}.png`
      }))
    },

    timeline: {
      badge: timelineT('badge'),
      title: timelineT('title'),
      companies: (await getTranslations({ locale, namespace: 'TimelineSection' })).raw('companies') as unknown as {
        company: string;
        experiences: {
          role: string;
          description: string;
        }[];
      }[]
    },

    skills: {
      badge: skillsT('badge'),
      title: skillsT('title')
    },

    contact: {
      badge: contactT('badge'),
      title: contactT('title'),
      contacts: Array.from({ length: 4 }, (_, i) => ({
        label: contactT(`contacts.${i}.label`),
        value: contactT(`contacts.${i}.value`)
      }))
    },

    footer: {
      label: footerT('label')
    }
  };
}
