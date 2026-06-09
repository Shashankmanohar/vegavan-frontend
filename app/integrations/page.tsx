import Link from 'next/link';
import { 
  MessageSquare, 
  ShoppingCart, 
  Hash, 
  MessageCircle, 
  Zap, 
  Mail, 
  Database, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Search,
  BookOpen,
  Users,
  Code,
  LineChart,
  Shield,
  FileText,
  Copy
} from 'lucide-react';
import IntegrationIllustration from '../components/IntegrationIllustration';

// Define the integration items
const integrations = [
  {
    name: 'WhatsApp',
    category: 'Messaging',
    description: 'Automate WhatsApp conversations and respond to customers 24/7 with AI.',
    icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />,
    popular: true,
  },
  {
    name: 'Shopify',
    category: 'E-commerce',
    description: 'Recommend products, track orders, and recover abandoned carts directly in chat.',
    icon: <ShoppingCart className="w-8 h-8 text-[#95BF47]" />,
    popular: true,
  },
  {
    name: 'Messenger',
    category: 'Social Media',
    description: 'Engage with your Facebook audience automatically with AI-powered responses.',
    icon: <MessageSquare className="w-8 h-8 text-[#0084FF]" />,
    popular: true,
  },
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Get notified about important leads or take over conversations directly from Slack.',
    icon: <Hash className="w-8 h-8 text-[#E01E5A]" />,
    popular: false,
  },
  {
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect Vegavan AI with 5000+ apps to automate your entire workflow.',
    icon: <Zap className="w-8 h-8 text-[#FF4F00]" />,
    popular: true,
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    description: 'Sync leads and conversation history directly to your Salesforce CRM.',
    icon: <Database className="w-8 h-8 text-[#00A1E0]" />,
    popular: false,
  },
  {
    name: 'WordPress',
    category: 'Website',
    description: 'Add our AI widget to your WordPress site in 1 click with our native plugin.',
    icon: <Globe className="w-8 h-8 text-[#21759B]" />,
    popular: false,
  },
  {
    name: 'Mailchimp',
    category: 'Email',
    description: 'Automatically subscribe new leads captured by the bot to your newsletters.',
    icon: <Mail className="w-8 h-8 text-[#FFE01B]" />,
    popular: false,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 lg:py-20 px-6 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Integrations</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Connect Vegavan AI with your <span className="text-primary">Favorite Tools</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
              Seamlessly integrate our AI chatbot with the platforms you already use. Sync data, automate workflows, and provide support wherever your customers are.
            </p>
            <div className="flex gap-4">
              <Link href="/signup" className="bg-[#E60000] hover:bg-[#cc0000] text-white font-bold px-8 py-3.5 rounded transition shadow-lg shadow-red-500/20">
                Start Free Trial
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold px-8 py-3.5 rounded transition">
                Request Integration
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <IntegrationIllustration />
          </div>
        </div>
      </section>

      {/* Featured Native Integration */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Don't let inquiries fade into the night.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Static forms kill conversion momentum. Vegavan turns cold, static website presence into a proactive closing engine by answering customer concerns the exact moment they occur.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Identifies visitor buying signals automatically</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Escalates complex quotes to specialized email alerts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Reduces general customer support queries by up to 85%</span>
              </li>
            </ul>
          </div>
          {/* Visual Representation */}
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl text-gray-300 font-mono text-sm">
             <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                <span className="text-gray-400">Pipeline Monitoring</span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
             </div>
             <div className="space-y-3">
               <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                  <span>Input Data</span> <span className="text-green-400">OK</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                  <span>Processing</span> <span className="text-blue-400 animate-pulse">Running...</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                  <span>Live Agent</span> <span className="text-gray-500">Idle</span>
               </div>
               <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-yellow-400 mb-2">
                    <Search className="w-4 h-4" /> <span>Locating training materials... Found 14 documents.</span>
                  </div>
                  <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg mt-4">
                    <div className="text-white font-bold mb-1">Lead Acquired</div>
                    <div className="text-primary mb-1">sarah.j@client.com</div>
                    <div className="text-xs text-gray-400">Intent Scored: <span className="text-green-400 font-bold">High (0.94)</span></div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Master Your Conversations.</h2>
            <p className="text-lg text-gray-600">Deep technical utility, distilled for operational dominance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Train Easily On Your Data</h3>
              <p className="text-gray-600 leading-relaxed">Provide custom FAQ entries, company policies, or product specifications directly inside your dashboard. The AI trains itself instantly.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Lead Capture</h3>
              <p className="text-gray-600 leading-relaxed">Intelligently requests emails, names, and phone numbers at peak conversational engagement points and pushes them directly to CRM.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">80+ Global Languages</h3>
              <p className="text-gray-600 leading-relaxed">Native translation layer. A French visitor will get answers in French, while an English one gets English. Break all geographical barriers.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Single-Script Install</h3>
              <p className="text-gray-600 leading-relaxed">Deploy in 60 seconds. Works natively on WordPress, Next.js, React, Shopify, Webflow, or hardcoded HTML dashboards.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insight Visualization</h3>
              <p className="text-gray-600 leading-relaxed">Dashboard displaying customer pain points, popular queries, and real-time interaction heatmaps to adapt your products.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Military Tier Security</h3>
              <p className="text-gray-600 leading-relaxed">Full transit layer encryption with strict privacy safeguards. Data resides in air-gapped containers with full admin overrides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Core & Code Snippet */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-300 font-mono">index.html</span>
                </div>
                <button className="text-gray-400 hover:text-white flex items-center gap-1.5 text-xs font-semibold bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded transition">
                  <Copy className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>
              <div className="p-6 overflow-x-auto text-sm font-mono text-gray-300">
                <pre><code><span className="text-gray-500">&lt;!-- Load Vegavan Engine --&gt;</span>{'\n'}<span className="text-blue-400">&lt;script</span>{'\n'}  <span className="text-yellow-300">src</span><span className="text-white">=</span><span className="text-green-400">"https://vegavan-backend.vercel.app/chatbot.js"</span>{'\n'}  <span className="text-yellow-300">data-user-id</span><span className="text-white">=</span><span className="text-green-400">"69fc5bbe69d61b8cd4efd91a"</span>{'\n'}<span className="text-blue-400">&gt;&lt;/script&gt;</span></code></pre>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Developer Core
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Deploy Instant Intelligence.
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700 font-medium">100% Zero-Config Setup</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700 font-medium">Autonomous 24/7 Lead Capturing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700 font-medium">Fully Responsive Mobile Ready</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Embed in your main templates and instantly receive notifications when the agent secures a qualified sales lead.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps to Integrate */}
      <section className="py-24 border-b border-gray-200 bg-white">
        <header className="flex flex-col gap-3 text-center mb-16 px-6">
          <span className="text-xs text-primary font-bold uppercase tracking-[0.2em]">Integration Steps</span>
          <h2 className="font-display-modern text-4xl md:text-5xl text-gray-900 font-normal tracking-wide">3 Simple Steps to Integrate</h2>
          <p className="text-base text-gray-700">Deploy your custom AI chatbot to your website in less than 5 minutes.</p>
        </header>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4 p-8 bg-gray-50 rounded-xl border border-gray-200 relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-2 shadow-lg shadow-primary/20">1</div>
            <h3 className="font-bold text-xl text-gray-900">Create & Customize</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Sign up and configure your AI bot's personality, colors, and welcome message. Provide custom FAQ entries or policies to train its knowledge base.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-8 bg-gray-50 rounded-xl border border-gray-200 relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-2 shadow-lg shadow-primary/20">2</div>
            <h3 className="font-bold text-xl text-gray-900">Copy Embed Script</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Once your bot is trained, navigate to the Dashboard and copy the automatically generated, lightweight JavaScript embed snippet.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-8 bg-gray-50 rounded-xl border border-gray-200 relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-2 shadow-lg shadow-primary/20">3</div>
            <h3 className="font-bold text-xl text-gray-900">Paste on Website</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Paste the snippet into your website's footer (HTML, WordPress, Shopify, Wix, etc.). Save changes, and your chatbot is instantly live!</p>
          </div>
        </div>
      </section>

      {/* Main Integrations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Integrations</h2>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Messaging', 'E-commerce', 'CRM', 'Automation'].map((filter, i) => (
                <button key={i} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${i === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                {integration.popular && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.name}</h3>
                <span className="text-xs text-gray-500 font-semibold mb-4 uppercase tracking-wide">{integration.category}</span>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                  {integration.description}
                </p>
                
                <div className="flex items-center text-primary font-bold text-sm mt-auto group-hover:underline">
                  View Integration <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff3c00] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Our API allows you to build custom integrations with virtually any software. We also offer Zapier integration which connects to 5000+ apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded transition">
              Contact Sales
            </Link>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold px-8 py-4 rounded transition flex items-center justify-center gap-2">
              <Database className="w-5 h-5" /> View API Docs
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
