'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) return null;
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 pt-20 pb-8 px-6 lg:px-12 font-sans z-20 relative text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <Logo size="lg" className="transition-transform group-hover:scale-105 text-white" />
              <div className="flex flex-col text-left mt-1">
                <span className="font-serif-classic font-bold text-2xl tracking-tight text-white leading-none">
                  Vegavan AI
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wide mt-0.5">powered by Webflora</span>
              </div>
            </Link>
            <p className="text-gray-400 text-[13px] sm:text-sm leading-relaxed mb-8 max-w-xs">
              Help, convert, and sell with a data-driven AI chatbot trained exclusively on your company's knowledge. Elevate your customer experience.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 lg:pl-8">
            <h4 className="font-serif-classic font-semibold text-white text-base tracking-wide">Product</h4>
            <Link href="/features" className="text-sm hover:text-white transition-colors">Features</Link>
            <Link href="/integrations" className="text-sm hover:text-white transition-colors">Integrations</Link>
            <Link href="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link>
            <Link href="/changelog" className="text-sm hover:text-white transition-colors">Changelog</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif-classic font-semibold text-white text-base tracking-wide">Resources</h4>
            <Link href="/docs" className="text-sm hover:text-white transition-colors">Documentation</Link>
            <Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
            <Link href="/guides" className="text-sm hover:text-white transition-colors">Guides</Link>
            <Link href="/help" className="text-sm hover:text-white transition-colors">Help Center</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif-classic font-semibold text-white text-base tracking-wide">Company</h4>
            <Link href="/about" className="text-sm hover:text-white transition-colors">About</Link>
            <Link href="/customers" className="text-sm hover:text-white transition-colors">Customers</Link>
            <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
            <Link href="/careers" className="text-sm hover:text-white transition-colors">Careers</Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} Webflora Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[13px] text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security" className="text-[13px] text-gray-500 hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
