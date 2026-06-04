import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto',
  };

  return (
    <img
      src="/vegavanlogo.png"
      alt="Vegavan AI Logo"
      className={`${dimensions[size]} ${className} transition-transform duration-300 group-hover:scale-105 object-contain`}
    />
  );
}
