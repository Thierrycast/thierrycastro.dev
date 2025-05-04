'use client';

import Image from 'next/image';
import { useTheme } from '../hooks/useTheme';

export default function GalaxyBackground() {
  const [theme, , mounted] = useTheme();

  if (!mounted) return null;

  const imageSrc =
    theme === 'dark'
      ? '/background_galaxy.svg'
      : '/background_galaxy_light.svg';

  return (
    <div className="absolute top-0 w-full h-[750px] -z-10 transition-all duration-300">
      <Image
        key={theme}
        src={imageSrc}
        alt=""
        fill
        priority
        quality={85}
        className="object-cover"
      />
    </div>
  );
}
