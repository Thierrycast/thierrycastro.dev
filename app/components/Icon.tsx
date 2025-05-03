// Icon.tsx
import React from "react";

interface IconProps {
  name: "email" | "instagram" | "phone" | "smile";
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  const commonProps: React.SVGProps<SVGSVGElement> = {
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `w-10 h-10 ${className}`,
  };

  const icons: Record<string, React.ReactElement> = {
    email: (
      <svg viewBox="0 0 62 62" {...commonProps}>
        <circle cx="31" cy="31" r="30.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
        <path d="M20.3346 20.334H41.668C43.1346 20.334 44.3346 21.534 44.3346 23.0007V39.0006C44.3346 40.4673 43.1346 41.6673 41.668 41.6673H20.3346C18.868 41.6673 17.668 40.4673 17.668 39.0006V23.0007C17.668 21.534 18.868 20.334 20.3346 20.334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44.3346 23L31.0013 32.3333L17.668 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 62 62" {...commonProps}>
        <circle cx="31" cy="31" r="30.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
        <path d="M37.668 17.666H24.3346C20.6527 17.666 17.668 20.6508 17.668 24.3327V37.666C17.668 41.3479 20.6527 44.3327 24.3346 44.3327H37.668C41.3499 44.3327 44.3346 41.3479 44.3346 37.666V24.3327C44.3346 20.6508 41.3499 17.666 37.668 17.666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.3316 30.1604C36.4962 31.2701 36.3067 32.4034 35.79 33.3991C35.2733 34.3948 34.4558 35.2023 33.4538 35.7066C32.4518 36.211 31.3162 36.3865 30.2087 36.2083C29.1011 36.0301 28.078 35.5072 27.2848 34.714C26.4915 33.9207 25.9686 32.8976 25.7904 31.79C25.6122 30.6825 25.7877 29.5469 26.2921 28.5449C26.7964 27.5429 27.6039 26.7254 28.5996 26.2087C29.5954 25.6921 30.7286 25.5025 31.8383 25.6671C32.9702 25.8349 34.0181 26.3624 34.8272 27.1715C35.6364 27.9806 36.1638 29.0285 36.3316 30.1604Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38.332 23.666H38.3454" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 62 62" {...commonProps}>
        <circle cx="31" cy="31" r="30.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
        <path d="M44.3339 37.5595V41.5595C44.3354 41.9308 44.2593 42.2984 44.1106 42.6386C43.9618 42.9788 43.7436 43.2843 43.47 43.5353C43.1964 43.7863 42.8733 43.9775 42.5216 44.0964C42.1698 44.2154 41.7971 44.2596 41.4272 44.2261C37.3243 43.7803 33.3832 42.3783 29.9206 40.1328C26.699 38.0857 23.9677 35.3544 21.9206 32.1328C19.6672 28.6544 18.2649 24.6941 17.8272 20.5728C17.7939 20.2041 17.8377 19.8325 17.9559 19.4816C18.0741 19.1308 18.264 18.8084 18.5136 18.535C18.7632 18.2615 19.067 18.0431 19.4056 17.8935C19.7443 17.7439 20.1103 17.6665 20.4806 17.6661H24.4806C25.1276 17.6598 25.755 17.8889 26.2456 18.3109C26.7362 18.7328 27.0567 19.3187 27.1472 19.9595C27.3161 21.2396 27.6292 22.4964 28.0806 23.7061C28.26 24.1834 28.2988 24.702 28.1924 25.2007C28.0861 25.6993 27.839 26.157 27.4806 26.5195L25.7872 28.2128C27.6853 31.5509 30.4492 34.3147 33.7872 36.2128L35.4806 34.5195C35.8431 34.161 36.3008 33.9139 36.7994 33.8076C37.298 33.7013 37.8167 33.7401 38.2939 33.9195C39.5036 34.3709 40.7605 34.684 42.0406 34.8528C42.6883 34.9442 43.2798 35.2704 43.7026 35.7695C44.1254 36.2685 44.3501 36.9056 44.3339 37.5595Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    smile: (
      <svg viewBox="0 0 62 62" {...commonProps}>
        <circle cx="31" cy="31" r="30.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
        <path d="M31.0013 44.3327C38.3651 44.3327 44.3346 38.3631 44.3346 30.9993C44.3346 23.6356 38.3651 17.666 31.0013 17.666C23.6375 17.666 17.668 23.6356 17.668 30.9993C17.668 38.3631 23.6375 44.3327 31.0013 44.3327Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.668 33.666C25.668 33.666 27.668 36.3327 31.0013 36.3327C34.3346 36.3327 36.3346 33.666 36.3346 33.666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 27H27.0133" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 27H35.0133" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[name] || null;
}