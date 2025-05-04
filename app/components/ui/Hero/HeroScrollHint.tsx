'use client';

import { useEffect, useState } from 'react';
import Icon from '../../Icon';

export default function HeroScrollHint({ hint }: { hint: string }) {
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
    <div
      className={`absolute text-header-item bottom-8 left-1/2 -translate-x-1/2 flex items-center flex-col transition-opacity duration-500 ${
        showScrollHint ? 'opacity-100 animate-bounce' : 'opacity-0'
      }`}
    >
      <Icon name="mouse" size={24} className="text-header-item hidden md:block" />
      <Icon name="finger" size={24} className="text-header-item block md:hidden" />
      <span className="text-xs mt-2">{hint}</span>
    </div>
  );
}
