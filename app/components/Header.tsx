"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre mim", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiências", href: "#experiences" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" }
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = menuItems.map(({ href }) => {
        const el = document.querySelector(href);
        if (!el) return { href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href, top: Math.abs(rect.top) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      if (closest.href !== activeItem) setActiveItem(closest.href);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeItem, menuItems]);

  return (
    <header className="fixed z-50 w-full flex justify-between lg:justify-center items-center px-6 py-4 backdrop-blur border-b border-white/10">
      <div className="text-sm font-bold text-white lg:hidden">Thierry</div>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-4 relative">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="relative text-xs lg:text-sm font-medium rounded-full cursor-pointer p-0.5"
              onClick={() => setActiveItem(item.href)}
            >
              {activeItem === item.href && (
                <motion.div
                  layoutId="activeMenuItem"
                  className="absolute inset-0 border-2 bg-black border-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 35 }}
                />
              )}
              <a
                href={item.href}
                className={`relative w-full block rounded-full py-2 px-6 transition-all duration-800 ${
                  activeItem === item.href ? "text-white " : "text-gray-300"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menu"
      >
        <HiMenuAlt3 />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-full bg-cover bg-black text-white py-4 px-6 flex flex-col gap-16 lg:hidden z-40"
            style={{ backgroundImage: "url('/background_galaxy.svg')" }}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-white">Thierry</div>
              <button
                className="text-white text-2xl"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Fechar menu"
              >
                <HiX />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium ${
                    activeItem === item.href ? "text-primary-light" : "text-white"
                  }`}
                  onClick={() => {
                    setActiveItem(item.href);
                    setMobileOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}