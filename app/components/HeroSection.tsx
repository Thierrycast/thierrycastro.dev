'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TbHandFinger } from 'react-icons/tb';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  labels: {
    greeting: string;
    name: string;
    role: string;
    button: string;
    scrollHint: string;
  };
};

export default function HeroSection({ labels }: Props) {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let lastActivity = Date.now();

    const handleActivity = () => {
      lastActivity = Date.now();
      setShowScrollHint(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (Date.now() - lastActivity >= 3000) {
          setShowScrollHint(true);
        }
      }, 3000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('keydown', handleActivity);

    timeout = setTimeout(() => setShowScrollHint(true), 3000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen max-w-2xl px-6 sm:px-8 xl:px-0 pt-52 md:pt-0 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 relative"
    >
      <div className="absolute top-24 right-4">
        <LanguageSwitcher />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <p className="text-base sm:text-lg font-medium">{labels.greeting}</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-light">
          {labels.name}
        </h1>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 font-medium">
          {labels.role}
        </p>

        <a href="https://www.linkedin.com/in/thierrycastrodev" target="_blank">
          <span className="bg-primary-dark px-6 sm:px-8 py-3 rounded text-sm font-semibold inline-block">
            {labels.button}
          </span>
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/rocket.svg"
          alt="rocket"
          width={300}
          height={300}
          className="hidden md:block"
        />
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center flex-col transition-opacity duration-500 ${
          showScrollHint ? 'opacity-100 animate-bounce' : 'opacity-0'
        }`}
      >
        <Image
          src="/mouse_icon.svg"
          alt="Scroll down"
          width={24}
          height={24}
          className="hidden md:block"
        />
        <TbHandFinger width={24} height={24} className="block md:hidden" color="#99a1af" />
        <span className="text-gray-400 text-xs mt-2">{labels.scrollHint}</span>
      </div>
    </section>
  );
}
