'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function GalaxyBackground() {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="absolute top-0 w-full h-[750px] -z-10 transition-all duration-300">
      <Image
        src={isDark ? '/background_galaxy.svg' : '/background_galaxy_light.svg'}
        alt=""
        fill
        priority
        quality={85}
        className="object-cover"
      />
    </div>
  );
}
