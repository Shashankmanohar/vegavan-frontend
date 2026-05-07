import Link from 'next/link';
import Logo from './components/Logo';
import { API_BASE_URL } from './config';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-white overflow-x-hidden font-sans">
      
      {/* Background Decorative Soft Monochrome Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-zinc-800/10 blur-[150px] pointer-events-none" />

      {/* Main Structural Layout Container (Grid System) */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-0 border-x border-white/5">
        
        {/* Navigation Bar Header (Classic Minimalist) */}
        <header className="flex items-center justify-between w-full py-6 px-8 border-b border-white/5 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-black shadow-md shadow-white/5">
              <Logo size="md" className="text-black" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-classic font-bold text-2xl tracking-wider bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-none">
                Vegavan AI
              </span>
              <span className="text-[8px] text-zinc-500 font-semibold tracking-wider uppercase mt-1">A Product of Webflora Technologies</span>
            </div>
          </div>
          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition">
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

        {/* Hero Segment: Split-Screen Separated by vertical 1px divider */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 items-stretch min-h-[580px] z-10">
          
          {/* Left Hero Column: Narrative (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left gap-8 py-16 px-8 lg:pr-12 border-b lg:border-b-0 lg:border-r border-white/5 relative">
            {/* Watermark letter */}
            <div className="absolute top-8 right-8 text-white/[0.01] pointer-events-none select-none">
              <Logo className="w-44 h-44 text-white opacity-[0.01]" />
            </div>

            <div className="inline-flex items-center gap-2.5 bg-white/5 text-white border border-white/10 text-[9px] font-bold uppercase tracking-[0.25em] py-2 px-4">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded bg-white opacity-75"></span>
                <span className="relative inline-flex rounded h-1.5 w-1.5 bg-white"></span>
              </span>
              The Architecture of Conversation
            </div>

            <h1 className="font-serif-classic text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white">
              Intelligent support,{' '}
              <span className="font-normal italic bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                crafted for the modern era.
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-lg">
              Train sophisticated conversational receptionists on your corporate data. Instantly deploy a lightweight, multi-tenant AI engine that acts as the dedicated voice of your enterprise.
            </p>

            <div className="flex flex-col gap-3.5 mt-4">
              <div className="flex items-center gap-5">
                <Link href="/signup" className="glow-btn bg-white hover:bg-zinc-200 text-black font-bold text-[10px] uppercase tracking-[0.2em] py-4 px-9 rounded-none transition">
                  Create Free Chatbot
                </Link>
                <Link href="/login" className="bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4 px-9 rounded-none border border-white/10 transition">
                  Access Dashboard
                </Link>
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em] leading-none">
                Start your 7-day unlimited trial. No credit card required.
              </span>
            </div>
          </div>

          {/* Right Hero Column: Premium Embedded Widget Preview (40%) */}
          <div className="lg:col-span-5 flex flex-col justify-center py-16 px-8 items-center bg-white/[0.01]">
            <div className="rounded-none border border-white/10 p-6 shadow-2xl bg-black max-w-[360px] w-full flex flex-col gap-5 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              
              {/* Header */}
              <div className="flex items-center gap-3.5 border-b border-white/5 pb-3.5">
                <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-black">
                  <Logo size="sm" className="text-black" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white tracking-wide leading-none">Vegavan AI Assistant</span>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Online Support Desk</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex flex-col gap-4 min-h-[220px] justify-end">
                {/* Assistant Welcome */}
                <div className="bg-white/5 border border-white/5 text-zinc-300 py-3 px-4 text-xs text-left max-w-[90%] self-start font-light leading-relaxed">
                  Hello! Welcome to our store. How can I help you today?
                </div>

                {/* Customer Query */}
                <div className="bg-white text-black py-3 px-4 text-xs text-left max-w-[90%] self-end font-semibold leading-relaxed shadow-md">
                  Do you sell the Apex Laptop Pro?
                </div>

                {/* Grounded Response */}
                <div className="bg-white/5 border border-white/5 text-zinc-300 py-3 px-4 text-xs text-left max-w-[90%] self-start font-light leading-relaxed relative">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-white block mb-1.5 border-b border-white/5 pb-1">Knowledge Match ✓</span>
                  Yes, we do! The Apex Laptop Pro is available for $999 with 16GB RAM and 1TB SSD storage.
                </div>
              </div>

              {/* Chat Input */}
              <div className="bg-black border border-white/10 py-2 px-4 flex items-center justify-between mt-2">
                <span className="text-[10px] text-zinc-500 font-light uppercase tracking-wider">Type your question...</span>
                <span className="w-5 h-5 bg-white flex items-center justify-center text-black text-[9px] font-bold">➔</span>
              </div>
            </div>
          </div>

        </section>

        {/* Feature Grid Segment: Structured Alternating Blueprints */}
        <section className="flex flex-col gap-0 z-10">
          
          {/* Section Head */}
          <div className="flex flex-col gap-2 text-left py-12 px-8 border-b border-white/5">
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.25em]">Core Capabilities</span>
            <h2 className="font-serif-classic text-3xl md:text-4xl text-white font-light tracking-wide">Engineered for Seamless Integration</h2>
          </div>

          <div className="flex flex-col gap-0">
            
            {/* Capability Row 1: Text Left, Spec Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5">
              <div className="flex flex-col items-start gap-4 text-left py-16 px-8 md:pr-12 border-b md:border-b-0 md:border-r border-white/5">
                <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">01 / TAILORED PERSONA</span>
                <h3 className="font-serif-classic text-2xl md:text-3xl font-light text-white leading-snug">Sculpt the Voice of Your Brand</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Define custom guidelines, set welcoming copy, and establish tone parameters. Your receptionist acts as a natural extension of your identity, conversing with warm authority.
                </p>
              </div>
              <div className="flex flex-col justify-center py-16 px-8 items-start bg-white/[0.005]">
                <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Tone Calibration Presets</span>
                <div className="flex flex-wrap gap-2.5">
                  <span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider py-1.5 px-4">Friendly & Warm</span>
                  <span className="bg-white/5 text-zinc-400 text-[10px] font-semibold uppercase tracking-wider py-1.5 px-4 border border-white/10">Professional</span>
                  <span className="bg-white/5 text-zinc-400 text-[10px] font-semibold uppercase tracking-wider py-1.5 px-4 border border-white/10">Sales</span>
                </div>
              </div>
            </div>

            {/* Capability Row 2: Spec Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5">
              <div className="flex flex-col justify-center py-16 px-8 items-start bg-white/[0.005] border-b md:border-b-0 md:border-r border-white/5 order-2 md:order-1">
                <div className="flex flex-col gap-2 text-left font-mono text-[9px] text-zinc-400 leading-relaxed bg-black border border-white/10 p-5 w-full">
                  <div className="text-white font-bold uppercase tracking-wider text-[8px] border-b border-white/10 pb-1.5 mb-2">Processed Knowledge Segment</div>
                  <div className="border-l border-white/30 pl-3">
                    Q: What is the delivery time?<br />
                    A: Delivery takes 2-4 business days for major regions.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 text-left py-16 px-8 md:pl-12 order-1 md:order-2">
                <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">02 / COGNITIVE TRAINING</span>
                <h3 className="font-serif-classic text-2xl md:text-3xl font-light text-white leading-snug">Grounded in Corporate Intelligence</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Feed the engine raw FAQs, documents, and refund guidelines. Powered by Gemini, the system isolates and indexes content with zero hallucination, guaranteeing absolute factual accuracy.
                </p>
              </div>
            </div>

            {/* Capability Row 3: Text Left, Spec Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5">
              <div className="flex flex-col items-start gap-4 text-left py-16 px-8 md:pr-12 border-b md:border-b-0 md:border-r border-white/5">
                <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">03 / FLUID DEPLOYMENT</span>
                <h3 className="font-serif-classic text-2xl md:text-3xl font-light text-white leading-snug">Single-Line Injection</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Embed the widget in seconds using our encapsulated Shadow DOM script. Completely isolated, beautifully responsive, and designed to perform gracefully across any web environment.
                </p>
              </div>
              <div className="flex flex-col justify-center py-16 px-8 items-start bg-white/[0.005]">
                <div className="bg-black p-5 border border-white/10 font-mono text-[10px] text-zinc-300 text-left select-all leading-relaxed break-all w-full">
                  {`<script src="${API_BASE_URL}/chatbot.js" data-user-id="user_id"></script>`}
                </div>
              </div>
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
            <Link href="/about" className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition">
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
