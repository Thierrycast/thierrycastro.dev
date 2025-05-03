import React from "react";
import icons from "@/data/icons.json";

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`w-10 h-10 ${className}`}
      dangerouslySetInnerHTML={{ __html: icon.content }}
    />
  );
}
