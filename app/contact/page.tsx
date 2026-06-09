'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Loader2, ArrowRight, Mail, MapPin, Building2, CheckCircle2, Phone } from 'lucide-react';
import ContactIllustration from '../components/ContactIllustration';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess("Thank you! Your message has been securely transmitted. A Vegavan specialist will contact you shortly.");
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-background text-gray-900 font-sans overflow-x-hidden">
      
      {/* Refined Ambient Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-background pointer-events-none" />
      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] rounded-full bg-primary/[0.03] blur-[80px] lg:blur-[120px] pointer-events-none" />

      {/* Main Structural Container */}
      <main className="relative w-full flex flex-col items-center">

        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8 shadow-sm">
                Support & Sales
              </div>
              <h1 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-[1.05] max-w-4xl">
                How can we help your <br className="hidden sm:block" />
                <span className="text-primary italic">business grow?</span>
              </h1>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                Whether you are looking for enterprise pricing, technical support, or strategic partnerships, our global team is ready to assist you.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <ContactIllustration />
            </div>
          </div>
        </section>

        {/* Contact Infrastructure */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20 sm:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start relative z-10">
          
          {/* Left Column: Contact Methods & Offices (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 w-full order-2 lg:order-1">
            
            {/* Direct Contact Cards */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-2">Chat with Sales</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                Interested in Vegavan AI for your enterprise? Speak with our sales team to find the best plan for your needs.
              </p>
              <a href="mailto:sales@vegavan.ai" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                sales@vegavan.ai <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                Need help integrating our AI with your existing CRM? Our engineering support team is here 24/7.
              </p>
              <a href="mailto:support@webflora.tech" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                support@webflora.tech <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-2">Call Us Directly</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                Need immediate assistance? Call our support desk directly to speak with an expert right now.
              </p>
              <a href="tel:+918540814729" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                +91 85408 14729 <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Address Block */}
            <div className="mt-4 px-4 py-6 border-l-2 border-primary/20">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Global Headquarters</h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">Webflora Technologies</span>
                  <span className="text-sm text-gray-600 mt-1 leading-relaxed">Suite 408, Silicon Towers<br />Bangalore, India 560001</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Form (7 cols) */}
          <div className="lg:col-span-7 w-full order-1 lg:order-2">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-classic-lg relative overflow-hidden">
              
              <h2 className="font-serif-classic text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 text-sm mb-8 sm:mb-10">We usually respond within a few hours.</p>

              {success ? (
                <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 px-2 sm:px-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-classic text-xl font-bold text-gray-900 mb-2">Message Transmitted</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                    {success}
                  </p>
                  <button onClick={() => setSuccess('')} className="mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in duration-500">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-semibold text-gray-700">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        disabled={loading}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 px-4 text-gray-900 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all focus:bg-white shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-semibold text-gray-700">Work Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        required
                        disabled={loading}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 px-4 text-gray-900 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all focus:bg-white shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-gray-700">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Corp"
                      disabled={loading}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 px-4 text-gray-900 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all focus:bg-white shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-gray-700">How can we help?</label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your needs..."
                      required
                      disabled={loading}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3.5 px-4 text-gray-900 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all focus:bg-white resize-none shadow-sm"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-[15px] py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-classic hover:shadow-classic-lg"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    <p className="text-[12px] text-gray-500 text-center mt-5 px-2">
                      By submitting, you agree to our <a href="#" className="text-primary hover:underline transition-colors">Privacy Policy</a> and <a href="#" className="text-primary hover:underline transition-colors">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
