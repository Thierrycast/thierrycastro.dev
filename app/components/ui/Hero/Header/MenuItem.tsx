import { motion } from 'framer-motion';

type MenuItemProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function MenuItem({ href, label, isActive, onClick }: MenuItemProps) {
  return (
    <li
      className="relative text-xs lg:text-sm font-medium rounded-full cursor-pointer p-0.5"
      onClick={onClick}
    >
      {isActive && (
        <motion.div
          layoutId="activeMenuItem"
          className="absolute inset-0 border-2 bg-header border-primary rounded-full"
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        />
      )}
      <a
        href={href}
        className={`relative w-full block rounded-full py-2 px-6 transition-all duration-800 ${
          isActive ? 'text-white' : 'text-header-item'
        }`}
      >
        {label}
      </a>
    </li>
  );
}
