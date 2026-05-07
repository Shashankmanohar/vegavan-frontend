import Link from 'next/link';
import Logo from '../components/Logo';

export default function About() {
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
            <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white transition">
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
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 items-stretch min-h-[480px] z-10">
          
          {/* Left Hero Column: Narrative (65%) */}
          <div className="lg:col-span-8 flex flex-col justify-center items-start text-left gap-8 py-16 px-8 lg:pr-12 border-b lg:border-b-0 lg:border-r border-white/5 relative">
            {/* Watermark letter */}
            <div className="absolute top-8 right-8 font-serif-classic text-[180px] font-light text-white/[0.01] pointer-events-none select-none">
              A
            </div>

            <div className="inline-flex items-center gap-2.5 bg-white/5 text-white border border-white/10 text-[9px] font-bold uppercase tracking-[0.25em] py-2 px-4">
              Our Philosophy
            </div>

            <h1 className="font-serif-classic text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
              Elevating corporate engagement{' '}
              <span className="font-normal italic bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                to an art form.
              </span>
            </h1>

            <p className="text-sm text-zinc-400 leading-relaxed font-light max-w-xl">
              We believe customer interaction shouldn&apos;t feel like an afterthought. Vegavan AI was founded on the conviction that a digital support assistant should serve as a dedicated, fully-articulate voice of your enterprise—fusing state-of-the-art context-grounding with customized design.
            </p>
          </div>

          {/* Right Hero Column: Premium Technical Blueprint (35%) */}
          <div className="lg:col-span-4 flex flex-col justify-center py-16 px-8 items-start bg-white/[0.01] relative overflow-hidden">
            <div className="flex flex-col gap-5 w-full">
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Technical Core</span>
              <div className="flex flex-col gap-4 font-mono text-[10px] text-zinc-400 leading-relaxed">
                <div>
                  <span className="text-white block font-bold uppercase tracking-wider text-[9px]">Multi-Tenant Routing</span>
                  Isolated spaces for clean corporate segregation.
                </div>
                <div>
                  <span className="text-white block font-bold uppercase tracking-wider text-[9px]">Grounded Embeds</span>
                  RAG-guided query answering using Gemini 3 Flash.
                </div>
                <div>
                  <span className="text-white block font-bold uppercase tracking-wider text-[9px]">Style Autonomy</span>
                  Complete CSS sandboxing via encapsulated Shadow DOM.
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Brand Pillars Segment */}
        <section className="flex flex-col gap-0 z-10">
          
          <div className="flex flex-col gap-2 text-left py-12 px-8 border-b border-white/5">
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.25em]">Our Pillars</span>
            <h2 className="font-serif-classic text-3xl md:text-4xl text-white font-light tracking-wide">The Pillars of Vegavan AI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-start gap-5 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-white/5">
              <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">01 / BRANDED INTEGRITY</span>
              <h3 className="font-serif-classic text-xl font-light text-white leading-snug">Sculpted Personas</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Generic templates degrade customer trust. We enable organizations to tune the welcome text, instructions, and tone boundaries, ensuring the AI embodies your brand philosophy seamlessly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start gap-5 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-white/5">
              <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">02 / FACTUAL ACCURACY</span>
              <h3 className="font-serif-classic text-xl font-light text-white leading-snug">Zero Hallucination</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                By pairing your custom knowledge segments directly with Gemini, Vegavan isolates facts from speculation. If it isn&apos;t in your documents, the agent will gracefully state so, preserving credibility.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start gap-5 text-left py-16 px-8">
              <span className="font-serif-classic text-sm italic text-zinc-500 uppercase tracking-widest">03 / PERFORMANCE FIRST</span>
              <h3 className="font-serif-classic text-xl font-light text-white leading-snug">Shadow DOM Injection</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Our lightweight widget executes in complete style and behavioral isolation. It loads asynchronously, maintains zero layout shift, and won&apos;t conflict with your target website&apos;s styling rules.
              </p>
            </div>

          </div>
        </section>

        {/* Heritage Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/5 items-center z-10">
          <div className="md:col-span-7 flex flex-col items-start gap-4 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-white/5">
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.25em]">Our Heritage</span>
            <h2 className="font-serif-classic text-3xl text-white font-light tracking-wide leading-snug">
              An Innovation of <br />
              <span className="italic font-normal bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">Webflora Technologies</span>
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-lg">
              Vegavan was engineered as a high-performance sub-brand under the Webflora Technologies umbrella. Our mission is to bridge the gap between creative visual design and enterprise-level artificial intelligence, creating software that is as beautiful to interact with as it is robust under the hood.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center py-16 px-8 items-center bg-white/[0.005]">
            <div className="border border-white/10 p-8 w-full max-w-[280px] bg-black text-center flex flex-col items-center gap-3 relative">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif-classic text-lg font-bold text-white select-none">
                W
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Webflora Tech Lab</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest leading-relaxed">High Performance Design & Engineering</span>
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
            <Link href="/about" className="text-[10px] font-semibold uppercase tracking-wider text-white transition">
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
