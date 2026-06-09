'use client';

import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Sparkles,
  User,
  Heart
} from 'lucide-react';

export default function ContactIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
      {/* Soft background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[60px] animate-pulse-slow pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-accent/5 blur-[50px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* SVG Ripple/Waves in background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="140" stroke="#5e17eb" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
        <circle cx="200" cy="200" r="100" stroke="#ff3c00" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60" stroke="#5e17eb" strokeOpacity="0.15" strokeWidth="2" className="animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
      </svg>

      {/* Center Avatar / Speech Node */}
      <div className="relative z-10 w-28 h-28 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-classic-lg group hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-5 group-hover:opacity-10 transition-opacity" />
        <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center relative overflow-hidden">
          <User className="w-10 h-10 text-primary" />
          <div className="absolute bottom-2 bg-green-500 text-[8px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shadow-sm">
            Live
          </div>
        </div>
      </div>

      {/* Floating Card 1: Email received */}
      <div className="absolute top-[40px] left-[30px] bg-white border border-gray-100 rounded-2xl p-4 shadow-classic-lg flex items-center gap-3 animate-[bounce_5.5s_ease-in-out_infinite] cursor-pointer hover:shadow-xl transition-shadow">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Mail className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-gray-900 leading-tight">Inquiry Received</span>
          <span className="text-[10px] text-gray-500 mt-0.5">Response pending...</span>
        </div>
      </div>

      {/* Floating Card 2: Interactive chat state */}
      <div className="absolute bottom-[60px] right-[20px] bg-white border border-gray-100 rounded-2xl p-4 shadow-classic-lg flex flex-col gap-2.5 max-w-[180px] text-left animate-[bounce_6s_ease-in-out_infinite] cursor-pointer hover:shadow-xl transition-shadow" style={{ animationDelay: '1.2s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Chat</span>
        </div>
        <p className="text-xs text-gray-700 leading-snug">
          "How can we help your business scale?"
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-[9px] font-semibold text-primary">
          <span>Vegavan Agent</span>
          <Sparkles className="w-3 h-3 text-accent animate-pulse" />
        </div>
      </div>

      {/* Phone badge */}
      <div className="absolute top-[80px] right-[40px] w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_4.8s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '0.6s' }}>
        <Phone className="w-5 h-5 text-accent" />
      </div>

      {/* Heart / Satisfaction badge */}
      <div className="absolute bottom-[80px] left-[50px] w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-classic hover:shadow-classic-lg hover:scale-110 transition-all duration-300 animate-[bounce_5.2s_ease-in-out_infinite] cursor-pointer" style={{ animationDelay: '1.8s' }}>
        <Heart className="w-5 h-5 text-primary fill-primary/10" />
      </div>
    </div>
  );
}
