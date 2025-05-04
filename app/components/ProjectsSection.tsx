'use client';

import Image from 'next/image';
import { useTheme } from '../hooks/useTheme';

type Props = {
  labels: {
    badge: string;
    title: string;
    projects: {
      title: string;
      description: string;
      image: string;
    }[];
  };
};

export default function ProjectsSection({ labels }: Props) {
  const [theme, , mounted] = useTheme();

  if (!mounted) return null;

  const glowSrc =
    theme === 'dark'
      ? '/background_glow.svg'
      : '/background_glow_light.svg';

  return (
    <section
      id="projects"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-40 flex flex-col items-center justify-end relative"
    >
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image
          key={theme}
          src={glowSrc}
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
        />
      </div>

      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-variant inline-block z-10">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-variant my-6 z-10">
        {labels.title}
      </h2>

      <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-8 relative z-10">
        {labels.projects.map((project, index) => (
          <div
            key={index}
            className="card-gradient-border rounded-xl p-0.5 w-full sm:w-[45%] md:w-[30%] max-w-xs"
          >
            <div className="flex flex-col gap-4 w-full px-4 py-6 rounded-xl bg-background backdrop-blur-md h-full">
              <div className="w-full h-32 sm:h-36 bg-primary-variant rounded-lg"></div>
              <h3 className="text-sm text-subtitle font-semibold">{project.title}</h3>
              <p className="text-xs text-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
