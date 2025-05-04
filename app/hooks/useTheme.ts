'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void, boolean] {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const newTheme = localStorage.getItem('theme') as Theme;
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    window.addEventListener('theme-change', handler);
    return () => window.removeEventListener('theme-change', handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    window.dispatchEvent(new Event('theme-change'));
  };

  return [theme, toggleTheme, mounted];
}
