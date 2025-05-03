import React from "react";
import icons from "@/data/icons.json";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number | string;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  size = 40,
  color = "currentColor",
  className = "",
  ...rest
}: IconProps) {
  const icon = icons[name];

  if (!icon) return null;

  const computedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={computedSize}
      height={computedSize}
      className={className}
      color={color}
      {...rest}
      dangerouslySetInnerHTML={{ __html: icon.content }}
    />
  );
}
