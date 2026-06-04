'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;

  return (
    <>
      {/* Top Announcement Banner */}
      <aside className="w-full bg-primary text-white py-2.5 sm:py-3 px-4 flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-3 text-[13px] sm:text-[15px] font-sans z-30 relative shadow-sm text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-[3px] shadow-sm overflow-hidden p-0.5 shrink-0">
            <Logo size="sm" />
          </div>
          <span>
            <strong>Vegavan AI is now part of Webflora.</strong> <span className="hidden md:inline">Try our full AI-powered support platform.</span>
          </span>
        </div>
        <Link href="/signup" className="font-bold hover:underline flex items-center justify-center gap-1 sm:ml-1 whitespace-nowrap bg-white/10 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full sm:rounded-none mt-0.5 sm:mt-0 transition-colors hover:bg-white/20 sm:hover:bg-transparent">
          Start your free trial <span className="text-base sm:text-lg leading-none relative -top-[1px]">&rarr;</span>
        </Link>
      </aside>
      
      <header className="flex items-center justify-between w-full py-4 px-6 lg:px-10 border-b border-gray-200 z-50 sticky top-0 bg-white/90 backdrop-blur-md shadow-sm">
      <Link href="/" className="flex items-center gap-3">
        <Logo size="xl" className="text-primary" />
        <div className="flex flex-col text-left mt-1">
          <span className="font-serif-classic font-bold text-2xl tracking-tight text-gray-900 leading-none">
            Vegavan AI
          </span>
          <span className="text-[11px] text-gray-500 font-medium tracking-wide mt-0.5">powered by Webflora</span>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800 text-sm">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/pricing" className="hover:text-primary transition-colors">
          Pricing
        </Link>
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
        <Link href="/integrations" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          Integrations <span className="text-[9px] opacity-60">▼</span>
        </Link>
      </nav>

      <div className="hidden lg:flex items-center gap-3">
        <a href="tel:+918540814729" className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded py-2 px-4 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
          <Phone className="w-4 h-4" /> Call Us
        </a>
        <Link href="/login" className="text-sm font-semibold text-gray-700 py-2 px-5 hover:text-primary transition-colors">
          Log in
        </Link>
        <Link href="/signup" className="text-sm font-bold bg-primary hover:bg-primary/90 shadow-classic hover:shadow-classic-lg text-white py-2 px-6 rounded transition-all">
          Sign up free
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden p-2 text-gray-600 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Nav */}
      <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0 border-transparent shadow-none'}`}>
        <div className="flex flex-col px-8 gap-4">
          <Link href="/" className="text-gray-900 font-semibold py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/pricing" className="text-gray-900 font-semibold py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="text-gray-900 font-semibold py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="text-gray-900 font-semibold py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/integrations" className="text-gray-900 font-semibold py-2 border-b border-gray-50 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            Integrations <span className="text-[10px] opacity-60">▼</span>
          </Link>
          
          <div className="flex flex-col gap-3 pt-4 pb-2">
            <a href="tel:+918540814729" className="text-center text-sm font-semibold text-gray-700 border border-gray-300 py-2.5 flex items-center justify-center gap-2 rounded transition-colors shadow-sm">
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <Link href="/login" className="text-center text-sm font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Log in
            </Link>
            <Link href="/signup" className="text-center text-sm font-bold bg-primary hover:bg-primary/90 text-white py-3 rounded transition-colors shadow-classic" onClick={() => setIsMobileMenuOpen(false)}>
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
