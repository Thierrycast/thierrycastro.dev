'use client';

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Icon from './Icon';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  className?: string;
  direction?: 'up' | 'down';
};

export default function LanguageSwitcher({ className = '', direction = 'down' }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const availableLocales = ['pt', 'en'];

  const handleSelect = (newLocale: string) => {
    setOpen(false);
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors px-2 py-1 rounded-md border bg-black/30 border-white/10 hover:border-primary-variant"
      >
        <Icon name ="translate" size={18} />
        <span className="uppercase text-xs">{locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: direction === 'up' ? -4 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === 'up' ? -4 : 4 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 z-50 bg-black/30 border border-white/10 rounded shadow-lg ${
              direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
            }`}
          >
            {availableLocales.map((loc) => (
              <li key={loc}>
                <button
                  onClick={() => handleSelect(loc)}
                  className={`px-4 py-2 text-xs w-full text-left hover:bg-primary-variant/10 ${
                    loc === locale ? 'text-primary-variant font-semibold' : 'text-white/80'
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
