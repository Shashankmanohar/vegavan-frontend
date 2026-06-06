'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingFeature {
  name: string;
  starter: boolean;
  pro: boolean;
  enterprise: boolean;
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Essential automated support widgets for startups and personal websites to manage customer FAQs.',
      price: {
        monthly: 19,
        annually: 15,
      },
      features: [
        '1 AI Chatbot receptionist',
        '1,000 message responses / mo',
        'Manual FAQ & Policy documentation training',
        'Preset theme selections (Classic, Modern, Warm)',
        'Copy-and-paste website embed widget',
        'Basic overview dashboard analytics',
        'Standard customer support',
      ],
      cta: 'Start 7-Day Free Trial',
      href: '/signup',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Complete customized AI receptionist package with visitor lead generation and tailored guidelines.',
      price: {
        monthly: 59,
        annually: 47,
      },
      features: [
        '3 AI Chatbot receptionists',
        '5,000 message responses / mo',
        'Custom system prompt rules configuration',
        'Full custom theme color picker (Hex picker)',
        'Pre-chat visitor Lead Capture (Name & Phone)',
        'Detailed lead management analytics dashboard',
        'Priority email & chat support',
      ],
      cta: 'Start 7-Day Free Trial',
      href: '/signup',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Dedicated resources, custom fine-tuning, SLAs, and security for large-scale operations.',
      price: {
        monthly: 'Custom',
        annually: 'Custom',
      },
      features: [
        'Unlimited AI Chatbots',
        'Custom message volume limits',
        'Custom fine-tuning on your company data',
        'Dedicated success manager',
        '99.9% SLA uptime guarantee',
        'Custom dashboard deployment options',
        'API access for integrations',
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
    },
  ];

  const featuresComparison: PricingFeature[] = [
    { name: 'Number of Chatbots', starter: true, pro: true, enterprise: true },
    { name: 'Manual Knowledge Base Training', starter: true, pro: true, enterprise: true },
    { name: 'Chatbot Welcome Message Configuration', starter: true, pro: true, enterprise: true },
    { name: 'Copy/Paste Embed Widget', starter: true, pro: true, enterprise: true },
    { name: 'Theme Preset Selection', starter: true, pro: true, enterprise: true },
    { name: 'Basic Overview Dashboard', starter: true, pro: true, enterprise: true },
    { name: 'Pre-chat Visitor Lead Capture Form', starter: false, pro: true, enterprise: true },
    { name: 'Custom Theme Hex Color Picker', starter: false, pro: true, enterprise: true },
    { name: 'Comprehensive Lead Management Table', starter: false, pro: true, enterprise: true },
    { name: 'Custom LLM fine-tuning options', starter: false, pro: false, enterprise: true },
  ];

  const faqs = [
    {
      question: 'How does the 7-day free trial work?',
      answer: 'You can sign up for any of our paid plans (Starter or Professional) and enjoy all features risk-free for 7 days. You will not be charged until the trial ends, and you can cancel anytime from your dashboard settings.',
    },
    {
      question: 'Can I change or cancel my plan at any time?',
      answer: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time directly through the Billing tab in your dashboard. Upgrades are applied immediately, and downgrades/cancellations take effect at the end of the current billing cycle.',
    },
    {
      question: 'What happens if I exceed my monthly message limit?',
      answer: 'We will send you an email alert when you reach 80% and 100% of your message quota. If you exceed the quota, your chatbot will temporarily pause response generation until the next month, or you can choose to upgrade your plan instantly to resume support.',
    },
    {
      question: 'Is my business data secure with Vegavan AI?',
      answer: 'Absolutely. We take security very seriously. All training data, document uploads, and client conversations are encrypted in transit and at rest. We never sell your data or use it to train public LLM baseline models.',
    },
    {
      question: 'Do you offer custom chatbot development?',
      answer: 'Yes, through our Enterprise plans, we offer custom development, tailormade model training, specialized prompt tuning, and backend systems integrations. Contact our sales team to discuss your custom project.',
    },
  ];

  return (
    <main className="flex-1 bg-gray-50/50 py-16 px-4 md:px-8 font-sans">
      {/* Header section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light">
          No hidden fees or complex contracts. Choose the plan that best fits your customer support scale and goals.
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
            className="w-14 h-8 bg-gray-900 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
            aria-label="Toggle billing period"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full transition-all duration-300 absolute ${
                billingPeriod === 'annually' ? 'left-7' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingPeriod === 'annually' ? 'text-gray-900' : 'text-gray-400'}`}>
            Billed Annually
            <span className="text-[10px] font-bold text-white bg-green-500 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
              Save 20%
            </span>
          </span>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">
        {plans.map((plan, index) => {
          const isCustom = plan.price[billingPeriod] === 'Custom';
          return (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border ${
                plan.popular ? 'border-primary shadow-xl md:-translate-y-2' : 'border-gray-200 shadow-md'
              } p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed h-12">
                  {plan.description}
                </p>
              </div>

              {/* Price display */}
              <div className="flex items-baseline gap-1.5 mb-8 border-b border-gray-100 pb-6">
                {isCustom ? (
                  <span className="text-3xl font-extrabold text-gray-900">Custom Pricing</span>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold text-gray-900">
                      ${plan.price[billingPeriod]}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">/ month</span>
                  </>
                )}
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action CTA */}
              <Link
                href={plan.href}
                className={`w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs text-center transition-all ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/95 text-white shadow-md hover:shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          );
        })}
      </section>

      {/* Feature Comparison Section */}
      <section className="max-w-4xl mx-auto mb-24 bg-white rounded-3xl border border-gray-200 shadow-md p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Compare plans & features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs uppercase tracking-wider font-bold text-gray-400">
                <th className="py-4 font-semibold">Features</th>
                <th className="py-4 text-center font-semibold">Starter</th>
                <th className="py-4 text-center font-semibold">Pro</th>
                <th className="py-4 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
              {featuresComparison.map((feat, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-medium text-gray-800">{feat.name}</td>
                  <td className="py-4 text-center">
                    {feat.starter ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {feat.pro ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {feat.enterprise ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-sm text-gray-500 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl mt-16">
        <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        
        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to boost your sales & support?</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 relative z-10 font-light">
          Get started in minutes. Deploy a smart AI receptionist built specifically on your company's data. No coding required.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-xl shadow-md transition-all hover:scale-102"
        >
          Get Started For Free
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
