'use client';

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MdTranslate } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
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
        <MdTranslate size={18} />
        <span className="uppercase text-xs">{locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-1 bg-black/30 border border-white/10 rounded shadow-lg z-50"
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
