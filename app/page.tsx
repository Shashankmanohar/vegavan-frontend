import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Shield, Zap, TrendingUp, Users, MessageCircle, BarChart, Palette } from 'lucide-react';
import Logo from './components/Logo';
import SectorsShowcase from './components/SectorsShowcase';

export default function Home() {
  // AEO: FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Vegavan AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vegavan AI is an AI-powered chatbot platform that helps businesses automate customer support, generate leads, answer questions, and increase sales."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I set it up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses can launch their chatbot within 5–15 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Can Vegavan AI learn from my business data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Simply input your FAQs, company refund/shipping policies, product specifications, or general support text, and Vegavan AI will train itself on your business information."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vegavan AI can be integrated with WhatsApp, websites, and other communication channels."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need coding knowledge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Vegavan AI is designed for non-technical users and can be configured without coding."
        }
      }
    ]
  };

  // SEO: SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vegavan AI",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-gray-900 font-sans">
      {/* Injecting JSON-LD for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Background Decorative Soft Monochrome Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      {/* Main Structural Layout Container */}
      <main className="w-full flex flex-col gap-0 bg-background">

        {/* Hero Segment */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 items-stretch min-h-[calc(100vh-140px)] z-10 bg-background bg-grid-pattern relative">

          {/* Left Hero Column: Narrative */}
          <article className="lg:col-span-7 flex flex-col justify-center items-start text-left gap-4 py-8 px-8 lg:px-16 border-b lg:border-b-0 lg:border-r border-gray-200 relative bg-background/80 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full mb-2">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              24/7 Intelligent Automation
            </div>

            <h1 className="font-serif-classic text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
              An AI Chatbot That Works Like Your{' '}
              <span className="text-primary italic">Best Employee.</span>
            </h1>

            <p className="text-base text-gray-600 leading-relaxed max-w-xl mt-4">
              Automate customer support, capture leads, answer questions instantly, and increase sales. Powered by advanced artificial intelligence, Vegavan AI trains on your manual FAQs, product specs, and company policy documentation to provide accurate responses 24/7.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-2.5 text-sm text-gray-700 font-medium mt-4">
              <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent" /> Reduce Customer Support Costs</div>
              <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent" /> Capture More Leads Automatically</div>
              <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent" /> No Coding Required</div>
            </div>

            <div className="flex flex-col gap-3 mt-8 w-full max-w-lg">
              <div className="flex flex-col sm:flex-row w-full gap-3">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                  required
                />
                <button type="button" className="bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wide px-8 py-3.5 rounded-md transition shadow-classic hover:shadow-classic-lg flex justify-center items-center gap-2 whitespace-nowrap">
                  Start free trial <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[11px] font-medium text-gray-500 uppercase tracking-widest ml-1">
                14-day free trial. No credit card required.
              </span>
            </div>
          </article>

          {/* Right Hero Column: Premium Embedded Widget Preview */}
          <aside className="lg:col-span-5 flex flex-col justify-center py-12 px-8 items-center bg-surface/50">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-classic-lg bg-white max-w-[360px] w-full flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Logo size="sm" className="text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif-classic font-bold text-lg text-gray-900 leading-none mb-1">Vegavan Assistant</span>
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-h-[220px] justify-end text-sm">
                <div className="bg-gray-100 text-gray-800 py-3 px-4 rounded-2xl rounded-tr-sm max-w-[85%] self-end leading-relaxed shadow-sm">
                  Do you offer enterprise plans?
                </div>
                <div className="bg-primary text-white py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] self-start leading-relaxed shadow-sm">
                  Yes, we do! Our enterprise plans include dedicated account managers and custom integrations. Would you like me to schedule a demo?
                </div>
                <div className="bg-gray-100 text-gray-800 py-3 px-4 rounded-2xl rounded-tr-sm max-w-[85%] self-end leading-relaxed shadow-sm">
                  Yes, please schedule it for tomorrow.
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl flex items-center justify-between mt-2">
                <span className="text-[12px] text-gray-400 font-medium">Type your message...</span>
                <button className="w-8 h-8 rounded-lg bg-primary hover:bg-primary/90 flex items-center justify-center text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Value Metrics Section */}
        <section className="py-20 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-5xl font-serif-classic font-bold text-primary">85%</span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Resolution Rate</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-5xl font-serif-classic font-bold text-primary">24/7</span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Continuous Support</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-5xl font-serif-classic font-bold text-primary">3x</span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Lead Generation</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-5xl font-serif-classic font-bold text-primary">&lt;1m</span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Response Time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Sectors / Industry Solutions Section */}
        <section className="py-24 border-b border-gray-200 bg-gray-50/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Versatile Applications</span>
              <h2 className="font-serif-classic text-4xl md:text-5xl text-gray-900 font-bold mb-6">Designed for Every Industry Sector</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Whether you run an online storefront, manage properties, or provide professional consultancy, Vegavan AI adapts to your industry vocabulary and operations.
              </p>
            </div>

            <SectorsShowcase />
          </div>
        </section>

        {/* Platform Capabilities Section */}
        <section className="py-24 bg-white border-b border-gray-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Platform Features</span>
              <h2 className="font-serif-classic text-4xl md:text-5xl text-gray-900 font-bold mb-6">Fully Custom AI Tailored to Your Business</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Configure your AI chatbot receptionist with exact business guidelines, custom tones, and target knowledge bases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Box 1: Knowledge Training Sources */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-2xl w-12 h-12 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Supported Knowledge Sources</h3>
                  <p className="text-sm text-gray-500 font-light mb-8">
                    Train your AI agent instantly by populating your database with specific business information:
                  </p>
                  
                  <ul className="flex flex-col gap-4 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>FAQ Entry</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Add common questions and answers for instant, automated user resolution.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Company Policy</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Define company refund guidelines, shipping rules, and standard operating procedures.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Product / Service Spec</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Provide detailed specifications, features list, and descriptions of what you offer.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                      <div>
                        <strong>General Documentation</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Feed general business text, background context, and instructions directly into the AI memory.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2: Tones and Branding Customization */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-2xl w-12 h-12 mb-6">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Tones & Styling</h3>
                  <p className="text-sm text-gray-500 font-light mb-8">
                    Shape the personality and look of your AI to match your exact brand guidelines:
                  </p>
                  
                  <ul className="flex flex-col gap-6 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 mt-1.5"></span>
                      <div>
                        <strong>Friendly & Warm Voice</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Warm, empathetic, and approachable conversational style perfect for retail and community support.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>
                      <div>
                        <strong>Professional & Polite Voice</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Clear, business-oriented, and structured responses suitable for corporate and technical solutions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0 mt-1.5"></span>
                      <div>
                        <strong>Sales & Action-Oriented Voice</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">High-energy, conversion-focused prompts that pitch products, capture visitor details, and close deals.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 shrink-0 mt-1.5"></span>
                      <div>
                        <strong>HSL Theme Presets & Color Customizer</strong>
                        <p className="text-xs text-gray-500 font-light mt-0.5">Instantly match your website brand colors with our custom visual customizer and ready-made themes.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-32 bg-surface border-b border-gray-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-serif-classic text-4xl md:text-5xl text-gray-900 font-bold mb-6">Elevate Every Interaction</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vegavan AI combines classic hospitality with modern efficiency, ensuring your customers always receive the premium support they deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Instant Knowledge Sync</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Add target FAQ entries, company refund/shipping policies, product/service specs, and general documentation directly. The AI instantly trains on your business data.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Proactive Sales Agent</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  More than just support. The AI identifies buying signals, recommends products, and proactively recovers abandoned carts.
                </p>
              </div>

              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Enterprise Grade Security</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Your data remains yours. Built with bank-grade encryption, strict access controls, and full compliance with global data privacy standards.
                </p>
              </div>

              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Omnichannel & WhatsApp</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Meet your customers where they are. Deploy seamlessly on your website, WhatsApp, and Messenger from one unified platform.
                </p>
              </div>

              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Track resolution rates, sentiment analysis, and top customer inquiries with deep, actionable insights right in your dashboard.
                </p>
              </div>

              <div className="glass-card p-10 rounded-2xl flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-serif-classic text-2xl font-bold text-gray-900 mb-4">Custom Brand Personas</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Ensure the AI matches your brand voice. Tune the tone presets (Friendly & Warm, Professional & Polite, Sales & Action-Oriented) and custom styling colors instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Steps */}
        <section className="py-32 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif-classic text-4xl md:text-5xl text-gray-900 font-bold leading-tight mb-8">
                  Seamlessly Integrates Into Your Workflow
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif-classic shrink-0 text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Train the AI</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Provide custom FAQ entries, company policies, or product specifications in seconds. The AI trains itself instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif-classic shrink-0 text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Customize the Look</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Adjust the widget to perfectly match your brand's aesthetic. Change colors, logos, and greeting messages.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif-classic shrink-0 text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Deploy Everywhere</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Embed the snippet on your site, or connect it to WhatsApp and Messenger with one click.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3"></div>
                <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-classic relative z-10">
                   <div className="border border-gray-100 rounded-xl bg-surface p-6 font-mono text-sm text-gray-600 overflow-x-auto">
                     <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <code>
                       <span className="text-gray-400">&lt;!-- Vegavan Integration --&gt;</span><br/>
                       <span className="text-primary">&lt;script</span><br/>
                       &nbsp;&nbsp;src=<span className="text-green-600">"https://vegavan.ai/embed.js"</span><br/>
                       &nbsp;&nbsp;data-id=<span className="text-green-600">"your-unique-id"</span><br/>
                       <span className="text-primary">&gt;&lt;/script&gt;</span>
                     </code>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif-classic text-4xl md:text-5xl text-white font-bold mb-6">Ready to Transform Your Support?</h2>
            <p className="text-primary-100 text-white/80 text-lg mb-10">Join thousands of leading businesses providing 24/7 exceptional experiences.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="bg-white text-primary hover:bg-gray-50 font-bold py-4 px-10 rounded-md transition-colors shadow-lg">
                Get Started for Free
              </Link>
              <Link href="/contact" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-md transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
