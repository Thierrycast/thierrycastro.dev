'use client';

import Image from 'next/image';
import { useTheme } from '../../../hooks/useTheme'; 

export default function HeroRocket() {
  const [theme, , mounted] = useTheme();

  if (!mounted) return null;

  const rocketSrc = theme === 'dark' ? '/rocket.svg' : '/rocket_light.svg';

  return (
    <div className="w-full md:w-1/2 justify-center hidden md:flex">
      <Image
        key={theme}
        src={rocketSrc}
        alt="Foguete"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
