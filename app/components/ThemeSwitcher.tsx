'use client';

import Icon from './Icon';
import { useTheme } from '../hooks/useTheme';

export default function ThemeSwitcher({ className = '' }: { className?: string }) {
  const [theme, toggleTheme, mounted] = useTheme();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-black/30 border border-white/10 hover:border-primary-variant transition-colors ${className}`}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <Icon name="sun" size={18} /> : <Icon name="moon" size={18} />}
    </button>
  );
}