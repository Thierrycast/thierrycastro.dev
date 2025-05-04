import React from "react";
import rawIcons from "@/data/icons.json";

type IconData = {
  viewBox: string;
  content: string;
};


const icons: Record<string, IconData> = rawIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
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
  const computedSize = typeof size === "number" ? `${size}px` : size;

  if (!icon) {
    return (
      <div
        style={{
          width: computedSize,
          height: computedSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed currentColor",
          borderRadius: "0.5rem",
          fontSize: "0.7rem",
          color,
        }}
        className={`text-[10px] text-center ${className}`}
      >
        {name}
      </div>
    );
  }

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
