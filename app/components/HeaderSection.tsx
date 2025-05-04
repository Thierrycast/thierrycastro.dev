'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import LazyMotionWrapper from '../components/animations/LazyMotionWrapper';
import Icon from './Icon';
import MenuItem from './ui/Header/MenuItem';
import MobileNav from './ui/Header/MobileNav';

const menuItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'experiences', href: '#experiences' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' }
];

type Props = {
  labels: Record<string, string>;
};

export default function Header({ labels }: Props) {
  const [activeItem, setActiveItem] = useState(menuItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);
  const manualScrollRef = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        const offsets = menuItems.map(({ href }) => {
          const el = document.querySelector(href);
          if (!el) return { href, top: Infinity };
          const rect = el.getBoundingClientRect();
          return { href, top: Math.abs(rect.top) };
        });

        const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
        if (!manualScrollRef.current && closest.href !== activeItem) {
          setActiveItem(closest.href);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  return (
    <header className="fixed z-50 w-full flex justify-between lg:justify-center items-center px-6 py-4 backdrop-blur border-b border-white/10">
      <div className="text-sm font-bold text-white lg:hidden">Thierry</div>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4 relative">
          {menuItems.map(({ key, href }) => (
            <MenuItem
              key={href}
              href={href}
              label={labels[key]}
              isActive={activeItem === href}
              onClick={() => {
                manualScrollRef.current = true;
                setActiveItem(href);
                setTimeout(() => {
                  manualScrollRef.current = false;
                }, 1000);
              }}
            />
          ))}
        </ul>
      </nav>

      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menu"
      >
        <Icon name="menu" />
      </button>

      <LazyMotionWrapper>
        <AnimatePresence>
          {mobileOpen && (
            <MobileNav
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setMobileOpen={setMobileOpen}
              labels={labels}
              menuItems={menuItems}
            />
          )}
        </AnimatePresence>
      </LazyMotionWrapper>
    </header>
  );
}
