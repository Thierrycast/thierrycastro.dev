'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import LanguageSwitcher from '../../LanguageSwitcher';
import ThemeSwitcher from '../../ThemeSwitcher';

type MobileNavProps = {
  activeItem: string;
  setActiveItem: (href: string) => void;
  setMobileOpen: (open: boolean) => void;
  labels: Record<string, string>;
  menuItems: { key: string; href: string }[];
};

export default function MobileNav({
  activeItem,
  setActiveItem,
  setMobileOpen,
  labels,
  menuItems
}: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleNavigation = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    setMobileOpen(false);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
    setActiveItem(href);
  };

  return (
    <motion.nav
      key="mobile-nav"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
      className="fixed top-0 left-0 h-screen w-full z-40 overflow-y-auto lg:hidden"
    >
      <div className="w-full h-full bg-galaxy bg-background bg-cover text-white px-6 pt-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-white">Thierry</div>
          <button
            className="text-white text-2xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <HiX />
          </button>
        </div>

        <div className="flex flex-col pt-6 gap-4">
          {menuItems.map(({ key, href }) => (
            <button
              key={href}
              onClick={() => handleNavigation(href)}
              className={`text-left text-sm font-medium ${
                activeItem === href ? 'text-primary-variant' : 'text-white'
              }`}
            >
              {labels[key]}
            </button>
          ))}
        </div>

        <div className="absolute bottom-32 right-4 flex items-center gap-4 justify-end">
          <ThemeSwitcher />
          <LanguageSwitcher direction="up" />
        </div>
      </div>
    </motion.nav>
  );
}
