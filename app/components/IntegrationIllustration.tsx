'use client';

import React from 'react';
import { 
  MessageCircle, 
  ShoppingCart, 
  MessageSquare, 
  Zap, 
  Database, 
  Globe, 
  Slack
} from 'lucide-react';
import Logo from './Logo';

export default function IntegrationIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
      {/* Ambient background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[60px] animate-pulse-slow pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-accent/5 blur-[50px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* SVG Connections Web */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5e17eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#5e17eb" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3c00" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#5e17eb" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Connection paths with animating dash offset */}
        {/* WhatsApp Connection */}
        <path d="M 90 90 L 200 200" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_10s_linear_infinite]" />
        
        {/* Shopify Connection */}
        <path d="M 310 90 L 200 200" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_12s_linear_infinite]" />

        {/* Zapier Connection */}
        <path d="M 70 200 L 200 200" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_8s_linear_infinite]" />

        {/* Messenger Connection */}
        <path d="M 330 200 L 200 200" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_14s_linear_infinite]" />

        {/* Salesforce Connection */}
        <path d="M 90 310 L 200 200" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_9s_linear_infinite]" />

        {/* Slack Connection */}
        <path d="M 310 310 L 200 200" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 4" className="animate-[dash_11s_linear_infinite]" />
      </svg>

      {/* Floating Badges */}
      {/* Center Badge - Vegavan AI */}
      <div className="relative z-10 w-24 h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-classic-lg group hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-75" />
        <div className="absolute inset-2 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
          <Logo size="lg" className="text-primary animate-pulse-slow" />
        </div>
      </div>

      {/* WhatsApp Badge */}
      <div className="absolute top-[50px] left-[50px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_5s_ease-in-out_infinite] cursor-pointer">
        <MessageCircle className="w-7 h-7 text-[#25D366]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
        </div>
      </div>

      {/* Shopify Badge */}
      <div className="absolute top-[50px] right-[50px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_6s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '1s' }}>
        <ShoppingCart className="w-7 h-7 text-[#95BF47]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#95BF47]/20 border border-[#95BF47] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
        </div>
      </div>

      {/* Zapier Badge */}
      <div className="absolute top-[172px] left-[20px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_4.5s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '0.5s' }}>
        <Zap className="w-7 h-7 text-[#FF4F00]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF4F00]/20 border border-[#FF4F00] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F00]" />
        </div>
      </div>

      {/* Messenger Badge */}
      <div className="absolute top-[172px] right-[20px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_5.5s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '1.5s' }}>
        <MessageSquare className="w-7 h-7 text-[#0084FF]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0084FF]/20 border border-[#0084FF] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
        </div>
      </div>

      {/* Salesforce Badge */}
      <div className="absolute bottom-[50px] left-[50px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_5.2s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '0.8s' }}>
        <Database className="w-7 h-7 text-[#00A1E0]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#00A1E0]/20 border border-[#00A1E0] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00A1E0]" />
        </div>
      </div>

      {/* Slack Badge */}
      <div className="absolute bottom-[50px] right-[50px] w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_6.2s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '1.8s' }}>
        <Slack className="w-7 h-7 text-[#E01E5A]" />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E01E5A]/20 border border-[#E01E5A] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E01E5A]" />
        </div>
      </div>
    </div>
  );
}
