import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import LanguageSwitcher from '../../../LanguageSwitcher';

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
  return (
    <motion.nav
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 h-screen w-full bg-cover bg-background text-white pt-4 pb-24 px-6 flex flex-col gap-16 lg:hidden z-40"
      style={{ backgroundImage: "url('/background_galaxy.svg')" }}
    >
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

      <div className="flex flex-col gap-4">
        {menuItems.map(({ key, href }) => (
          <a
            key={href}
            href={href}
            className={`text-sm font-medium ${
              activeItem === href ? 'text-primary-variant' : 'text-white'
            }`}
            onClick={() => {
              setActiveItem(href);
              setMobileOpen(false);
            }}
          >
            {labels[key]}
          </a>
        ))}
      </div>

      <LanguageSwitcher className="mt-auto self-end" />
    </motion.nav>
  );
}
