"use client";
import { useState } from "react";

export default function Header() {
  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre mim", href: "#about" },
    { name: "Experiências", href: "#experiences" },
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].href);

  return (
    <header className="fixed z-50 w-full flex justify-center p-10">
      <nav>
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`text-xs font-medium rounded-full cursor-pointer p-0.5 ${
                activeItem === item.href
                  ? "bg-gradient-to-r from-[#964CF0] to-[#170033]"
                  : ""
              }`}
              onClick={() => setActiveItem(item.href)}
            >
              <a
                href={item.href}
                className={`w-full block rounded-full py-2 px-8 ${
                  activeItem === item.href ? "bg-black text-white" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
