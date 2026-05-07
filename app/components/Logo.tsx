import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${dimensions[size]} ${className} transition-transform duration-300 group-hover:scale-105`}
    >
      {/* Aerodynamic speed trails on the left representing Sanskrit velocity (Vegavan) */}
      <path d="M2 8h4" className="stroke-[1.8] opacity-35" />
      <path d="M1 12h7" className="stroke-[1.8] opacity-60" />
      <path d="M2 16h4" className="stroke-[1.8] opacity-35" />
      {/* Bold slanted V wing representing high-speed acceleration */}
      <path d="M11 5l4 14 7-14" />
    </svg>
  );
}
