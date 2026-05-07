'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Loader2, CheckCircle, Mail, MapPin, Send } from 'lucide-react';
import Logo from '../components/Logo';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSuccess('Your message has been delivered to the Webflora Tech Desk. Our customer relations team will respond within 12 business hours.');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-background text-white overflow-x-hidden font-sans">
      
      {/* Background Decorative Soft Monochrome Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-zinc-800/10 blur-[150px] pointer-events-none" />

      {/* Main Structural Layout Container (Grid System) */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-0 border-x border-white/5">
        
        {/* Navigation Bar Header (Classic Minimalist) */}
        <header className="flex items-center justify-between w-full py-6 px-8 border-b border-white/5 z-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-black shadow-md shadow-white/5 transition group-hover:scale-105">
              <Logo size="md" className="text-black" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-classic font-bold text-2xl tracking-wider bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-none">
                Vegavan AI
              </span>
              <span className="text-[8px] text-zinc-500 font-semibold tracking-wider uppercase mt-1">A Product of Webflora Technologies</span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white transition">
              Contact
            </Link>
            <Link href="/login" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition">
              Log In
            </Link>
            <Link href="/signup" className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white hover:bg-zinc-200 text-black py-3 px-7 rounded-none transition shadow-lg shadow-white/5">
              Get Started
            </Link>
          </nav>
        </header>

        {/* Form and Details Layout split into two asymmetric columns */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 items-stretch min-h-[550px] z-10">
          
          {/* Left Column: Direct Inquiries (45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left gap-10 py-16 px-8 lg:pr-12 border-b lg:border-b-0 lg:border-r border-white/5 relative">
            <div className="absolute top-8 right-8 font-serif-classic text-[180px] font-light text-white/[0.01] pointer-events-none select-none">
              C
            </div>

            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2.5 bg-white/5 text-white border border-white/10 text-[9px] font-bold uppercase tracking-[0.25em] py-2 px-4 self-start">
                Get In Touch
              </div>
              <h1 className="font-serif-classic text-4xl md:text-5xl font-light tracking-tight text-white leading-tight mt-2">
                Initiate a <br />
                <span className="font-normal italic bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  conversation.
                </span>
              </h1>
              <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-sm mt-2">
                Whether you are exploring high-volume enterprise integrations, custom branding guidelines, or technical deployment support, our lab desk is here to assist.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Digital Correspondences</span>
                  <span className="text-xs text-white font-medium mt-1">support@webflora.tech</span>
                  <span className="text-xs text-zinc-400 font-light mt-0.5">enterprise@vegavan.ai</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Innovation Labs</span>
                  <span className="text-xs text-white font-medium mt-1">Webflora Technologies HQ</span>
                  <span className="text-xs text-zinc-400 font-light mt-0.5">Suite 408, Silicon Towers, Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form (55%) */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 px-8 md:px-12 bg-white/[0.005]">
            <div className="w-full max-w-xl flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.25em]">Direct Message Desk</span>
                <h2 className="font-serif-classic text-2xl text-white font-light">Send an Inbound Inquiry</h2>
              </div>

              {success && (
                <div className="p-4 rounded-none bg-white/5 border border-white/10 text-left flex gap-3.5 items-start animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Inquiry Dispatched</span>
                    <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{success}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Your Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Julian Vane"
                      required
                      disabled={loading}
                      className="w-full bg-black border border-white/10 rounded-none py-3.5 px-4 text-white text-xs outline-none focus:border-white/40 transition font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Corporate Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. vane@enterprise.com"
                      required
                      disabled={loading}
                      className="w-full bg-black border border-white/10 rounded-none py-3.5 px-4 text-white text-xs outline-none focus:border-white/40 transition font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Your Message</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your enterprise requirements or technical inquiries..."
                    required
                    disabled={loading}
                    className="w-full bg-black border border-white/10 rounded-none py-3.5 px-4 text-white text-xs outline-none focus:border-white/40 transition font-light resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="glow-btn bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-[0.2em] text-[10px] py-4 rounded-none transition flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto md:self-start md:px-10"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                  ) : (
                    <>
                      Transmit Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </section>

        {/* Footer Attribution Section */}
        <footer className="py-12 px-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-white border border-white/10">
              <Logo size="sm" className="text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white">Vegavan AI Chatbot</span>
              <span className="text-[8px] text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">by Webflora Technologies</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-[10px] font-semibold uppercase tracking-wider text-white transition">
              Contact
            </Link>
            <Link href="/login" className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition">
              Dashboard
            </Link>
          </div>
          <p className="text-[10px] text-zinc-600 font-semibold tracking-wider uppercase select-none">
            © {new Date().getFullYear()} Vegavan AI. Designed and engineered as a sub-brand of Webflora Technologies.
          </p>
        </footer>

      </div>
    </div>
  );
}
