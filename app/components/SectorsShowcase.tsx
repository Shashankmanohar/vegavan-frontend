'use client';

import { useState } from 'react';
import { ShoppingBag, LifeBuoy, HeartPulse, Home as HomeIcon, Hotel, Briefcase, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  question: string;
  answer: string;
  benefits: string[];
}

const SECTORS: Sector[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: ShoppingBag,
    description: 'Provide instant updates on order status, return policies, and product details. Convert visitors by answering queries during critical checkout moments.',
    question: 'Where is my order #4829?',
    answer: 'Hi! I checked order #4829. It was shipped yesterday via DHL and is scheduled for delivery tomorrow, June 8th. Here is your tracking link: dhl.com/track/4829',
    benefits: ['Reduce cart abandonment', 'Automate order tracking queries', 'Provide product recommendations']
  },
  {
    id: 'support',
    name: 'Customer Support',
    icon: LifeBuoy,
    description: 'Resolve up to 85% of standard help desk inquiries automatically. Set custom fallback triggers to hand over complex technical tickets to human agents smoothly.',
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied, you can cancel your subscription from your dashboard, or email billing@vegavan.ai to initiate a full refund.',
    benefits: ['Slash resolution times to <1 min', '24/7 coverage without hiring shifts', 'Seamless human agent handover']
  },
  {
    id: 'education',
    name: 'Education & E-Learning',
    icon: GraduationCap,
    description: 'Automate student onboarding, course registration FAQs, fee payment details, and campus calendar inquiries. Boost completion rates with instant academic platform support.',
    question: 'When is the deadline for Fall admissions?',
    answer: 'The application deadline for Fall admissions is July 15th. You can submit your documents online. Would you like me to send you the link to the admission requirements page?',
    benefits: ['Automate admissions inquiries', 'Instant course FAQ lookup', 'Reduce student support ticket backlogs']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    icon: HeartPulse,
    description: 'Help patients navigate clinic schedules, check doctor availability, answer non-diagnostic medical FAQs, and coordinate appointment bookings safely.',
    question: 'Can I book a consultation for Monday?',
    answer: 'Yes! Dr. Sarah Jenkins has slots available on Monday at 10:00 AM and 2:30 PM. Would you like me to reserve the 10:00 AM consultation for you?',
    benefits: ['Secure scheduling assistance', 'Automate patient FAQs', 'Relieve administrative workload']
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property',
    icon: HomeIcon,
    description: 'Qualify prospective buyers and tenants automatically. Answer questions about property listings, pricing models, utility policies, and tour schedules.',
    question: 'Are utilities included in the 2BHK listing?',
    answer: 'For the 2BHK listing on Oak Street, water and garbage collection are included. Electricity, heating, and internet are billed separately.',
    benefits: ['Pre-qualify leads 24/7', 'Instant property spec lookups', 'Schedule physical property tours']
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    icon: Hotel,
    description: 'Answer booking questions, check-in instructions, pet policies, and resort amenities. Recommend local tours, dining, and transit options on the fly.',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is from 3:00 PM onwards, and check-out is by 11:00 AM. Early check-in can be requested, subject to room availability.',
    benefits: ['Streamline booking inquiries', 'Answer localized concierge questions', 'Promote room upgrades and offers']
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: Briefcase,
    description: 'Help agencies, consulting groups, and law firms capture high-quality consultation requests, answer service scope questions, and sync calendar invites.',
    question: 'How do you charge for custom development?',
    answer: 'We offer both fixed-price project milestones and monthly Retainer models. I can schedule a quick 15-minute call with our solution architect to discuss your scope. Shall I?',
    benefits: ['Capture and score high-value leads', 'Answer baseline services FAQs', 'Instant calendar scheduling sync']
  }
];

export default function SectorsShowcase() {
  const [activeTab, setActiveTab] = useState(SECTORS[0].id);

  const activeSector = SECTORS.find((s) => s.id === activeTab) || SECTORS[0];
  const IconComponent = activeSector.icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      
      {/* Left Column: Sector Selection Tabs */}
      <div className="lg:col-span-5 flex flex-col gap-2.5">
        {SECTORS.map((sector) => {
          const SectorIcon = sector.icon;
          const isActive = sector.id === activeTab;
          
          return (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                isActive
                  ? 'bg-white border-primary/20 shadow-md text-primary font-bold'
                  : 'bg-transparent border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                <SectorIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium tracking-wide">{sector.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Column: Dynamic Preview Panel */}
      <div className="lg:col-span-7 bg-white border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between gap-8 min-h-[420px] transition-all duration-500">
        
        {/* Top Details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 text-primary p-2.5 rounded-xl">
              <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="font-serif-classic text-2xl font-bold text-gray-900">{activeSector.name}</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            {activeSector.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
            {activeSector.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Chat Simulation Widget */}
        <div className="border border-gray-100 rounded-2xl bg-gray-50/50 p-5 flex flex-col gap-4 font-sans shadow-inner">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200/50">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Agent Simulation</span>
          </div>

          <div className="flex flex-col gap-3.5 text-xs">
            {/* User message */}
            <div className="bg-gray-100 text-gray-800 py-2.5 px-4 rounded-xl rounded-tr-sm max-w-[80%] self-end shadow-sm">
              {activeSector.question}
            </div>
            {/* AI Response */}
            <div className="bg-primary text-white py-2.5 px-4 rounded-xl rounded-tl-sm max-w-[90%] self-start leading-relaxed shadow-sm">
              {activeSector.answer}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
