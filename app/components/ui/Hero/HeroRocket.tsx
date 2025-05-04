'use client';

import Image from 'next/image';
import { useTheme } from '../../../hooks/useTheme'; 

export default function HeroRocket() {
  const [theme, , mounted] = useTheme();

  if (!mounted) return null;

  const rocketSrc = theme === 'dark' ? '/rocket.svg' : '/rocket_light.svg';

  return (
    <div className="w-1/2 justify-end hidden md:flex">
      <Image
        key={theme}
        src={rocketSrc}
        alt="Foguete"
        width={350}
        height={350}
        priority
      />
    </div>
  );
}
