'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

export default function ThemeSwitcher({ className = '' }: { className?: string }) {
  const [theme, toggleTheme, mounted] = useTheme();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-white/10 hover:border-primary-variant transition-colors ${className}`}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}