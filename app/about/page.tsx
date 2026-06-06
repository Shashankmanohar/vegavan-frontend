import Link from 'next/link';
import Logo from '../components/Logo';
import { Shield, Zap, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-background text-gray-900 overflow-x-hidden font-sans">
      
      {/* Background Decorative Soft Monochrome Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      {/* Main Structural Layout Container (Grid System) */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-0 border-x border-gray-200 bg-background">

        {/* Hero Segment: Split-Screen Separated by vertical divider */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 items-stretch min-h-[480px] z-10">
          
          {/* Left Hero Column: Narrative (65%) */}
          <div className="lg:col-span-8 flex flex-col justify-center items-start text-left gap-8 py-16 px-8 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-200 relative bg-background/80 backdrop-blur-sm">
            
            <div className="inline-flex items-center gap-2.5 bg-primary/5 text-primary border border-primary/20 text-[9px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-full">
              Our Philosophy
            </div>

            <h1 className="font-serif-classic text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
              Elevating corporate engagement{' '}
              <span className="font-normal italic text-primary">
                to an art form.
              </span>
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
              We believe customer interaction shouldn&apos;t feel like an afterthought. Vegavan AI was founded on the conviction that a digital support assistant should serve as a dedicated, fully-articulate voice of your enterprise—fusing state-of-the-art context-grounding with customized design.
            </p>
          </div>

          {/* Right Hero Column: Premium Technical Blueprint (35%) */}
          <div className="lg:col-span-4 flex flex-col justify-center py-16 px-8 items-start bg-surface/50 relative overflow-hidden">
            <div className="flex flex-col gap-5 w-full">
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-200 pb-2">Technical Core</span>
              <div className="flex flex-col gap-5 font-mono text-[10px] text-gray-500 leading-relaxed">
                <div>
                  <span className="text-gray-900 block font-bold uppercase tracking-wider text-[9px] mb-1">Multi-Tenant Routing</span>
                  Isolated spaces for clean corporate segregation.
                </div>
                <div>
                  <span className="text-gray-900 block font-bold uppercase tracking-wider text-[9px] mb-1">Grounded Embeds</span>
                  RAG-guided query answering using Gemini 3 Flash.
                </div>
                <div>
                  <span className="text-gray-900 block font-bold uppercase tracking-wider text-[9px] mb-1">Style Autonomy</span>
                  Complete CSS sandboxing via encapsulated Shadow DOM.
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Brand Pillars Segment */}
        <section className="flex flex-col gap-0 z-10">
          
          <div className="flex flex-col gap-2 text-left py-12 px-8 border-b border-gray-200 bg-surface">
            <span className="text-[9px] text-primary font-bold uppercase tracking-[0.25em]">Our Pillars</span>
            <h2 className="font-serif-classic text-3xl md:text-4xl text-gray-900 font-bold tracking-wide">The Pillars of Vegavan AI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-start gap-4 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-gray-200 bg-white">
              <Sparkles className="w-6 h-6 text-primary mb-2" />
              <span className="font-serif-classic text-xs italic text-gray-400 uppercase tracking-widest">01 / BRANDED INTEGRITY</span>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 leading-snug">Sculpted Personas</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Generic templates degrade customer trust. We enable organizations to tune the welcome text, instructions, and tone boundaries, ensuring the AI embodies your brand philosophy seamlessly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start gap-4 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-gray-200 bg-white">
              <Shield className="w-6 h-6 text-primary mb-2" />
              <span className="font-serif-classic text-xs italic text-gray-400 uppercase tracking-widest">02 / FACTUAL ACCURACY</span>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 leading-snug">Zero Hallucination</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                By pairing your custom knowledge segments directly with Gemini, Vegavan isolates facts from speculation. If it isn&apos;t in your documents, the agent will gracefully state so, preserving credibility.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start gap-4 text-left py-16 px-8 bg-white">
              <Zap className="w-6 h-6 text-primary mb-2" />
              <span className="font-serif-classic text-xs italic text-gray-400 uppercase tracking-widest">03 / PERFORMANCE FIRST</span>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 leading-snug">Shadow DOM Injection</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our lightweight widget executes in complete style and behavioral isolation. It loads asynchronously, maintains zero layout shift, and won&apos;t conflict with your target website&apos;s styling rules.
              </p>
            </div>

          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-20 bg-surface/30 border-b border-gray-200 relative overflow-hidden z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[9px] text-primary font-bold uppercase tracking-[0.25em]">Core Features</span>
              <h2 className="font-serif-classic text-3xl md:text-4xl text-gray-900 font-bold tracking-wide mt-2">Elevate Every Interaction</h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                Vegavan AI combines classic hospitality with modern efficiency, ensuring your customers always receive the premium support they deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl flex flex-col items-start text-left border border-gray-200 shadow-sm hover:shadow-classic transition-shadow">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-3">Instant Knowledge Sync</h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Add target FAQ entries, company refund/shipping policies, product/service specs, and general documentation directly. The AI instantly trains on your business data.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl flex flex-col items-start text-left border border-gray-200 shadow-sm hover:shadow-classic transition-shadow">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-3">Proactive Sales Agent</h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  More than just support. The AI identifies buying signals, recommends products, and proactively recovers abandoned carts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl flex flex-col items-start text-left border border-gray-200 shadow-sm hover:shadow-classic transition-shadow">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-3">Enterprise Grade Security</h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Your data remains yours. Built with bank-grade encryption, strict access controls, and full compliance with global data privacy standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-200 items-center z-10 bg-white">
          <div className="md:col-span-7 flex flex-col items-start gap-4 text-left py-16 px-8 border-b md:border-b-0 md:border-r border-gray-200">
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.25em]">Our Heritage</span>
            <h2 className="font-serif-classic text-3xl text-gray-900 font-bold tracking-wide leading-snug">
              An Innovation of <br />
              <span className="italic font-normal text-primary">Webflora Technologies</span>
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
              Vegavan was engineered as a high-performance SaaS product under the Webflora Technologies umbrella. Our mission is to bridge the gap between creative visual design and enterprise-level artificial intelligence, creating software that is as beautiful to interact with as it is robust under the hood.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center py-16 px-8 items-center bg-surface">
            <div className="border border-gray-200 p-8 w-full max-w-[280px] bg-white text-center flex flex-col items-center gap-3 relative shadow-classic rounded-3xl">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center font-serif-classic text-lg font-bold text-gray-900 select-none shadow-sm bg-white">
                W
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">Webflora Tech Lab</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest leading-relaxed">High Performance Design & Engineering</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
