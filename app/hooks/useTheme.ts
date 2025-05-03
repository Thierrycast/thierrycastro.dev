'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void, boolean] {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', initial === 'dark');
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme, mounted];
}