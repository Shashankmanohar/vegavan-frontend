'use client';

import { useEffect, useState } from 'react';
import { Copy, Check, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function EmbedCode() {
  const [userId, setUserId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('userId') || 'your_unique_user_id';
    setUserId(id);
  }, []);

  const embedScript = `<!-- Vegavan AI Support Chatbot -->
<script
  src="${API_BASE_URL}/chatbot.js"
  data-user-id="${userId}">
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const guides = [
    {
      title: 'Standard HTML Website',
      steps: [
        'Open your website\'s main index.html file or global template.',
        'Scroll down to the bottom of the page to locate the closing </body> tag.',
        'Paste the copied Vegavan AI script snippet directly above the </body> tag.',
        'Save and upload your updated HTML file to your server. Refresh your site to see the live chat launcher!'
      ]
    },
    {
      title: 'WordPress Installation',
      steps: [
        'Log in to your WordPress Admin Dashboard.',
        'Go to Plugins > Add New, search for "Insert Headers and Footers" and install/activate it.',
        'Go to Settings > Insert Headers and Footers.',
        'Paste the script inside the "Scripts in Footer" text area and click Save. That\'s it!'
      ]
    },
    {
      title: 'Webflow Integration',
      steps: [
        'Open your Webflow Dashboard and enter your Project Settings.',
        'Navigate to the Custom Code tab.',
        'Paste the script block inside the Footer Code block.',
        'Save changes and Publish your Webflow site to make the AI chatbot active!'
      ]
    },
    {
      title: 'Shopify Integration',
      steps: [
        'Log in to your Shopify Admin Panel.',
        'Navigate to Online Store > Themes.',
        'Click the three dots (...) next to your current theme and select "Edit code".',
        'Open the "theme.liquid" file, paste the script just before the closing </body> tag, and click Save.'
      ]
    },
    {
      title: 'Wix Integration',
      steps: [
        'Log in to Wix and go to your site\'s dashboard.',
        'Navigate to Settings > Custom Code (under Advanced settings).',
        'Click "+ Add Custom Code" in the Body - End section.',
        'Paste the script, name it "Vegavan AI Bot", select "All pages", and click Apply.'
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Head */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">Embed Generator</h1>
        <p className="text-gray-500 text-sm">Copy and install this single line of JavaScript to deploy your custom AI chatbot live</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Copy Snippet Box */}
        <div className="lg:col-span-6 flex flex-col gap-5 glass-panel p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-3">
            <Terminal className="w-5 h-5 text-gray-900" />
            Your Integration Script
          </h2>

          <p className="text-xs text-gray-500 leading-relaxed">
            Copy and paste this lightweight snippet directly into the header or footer template of your host website. It will automatically load your customized welcome copy, brand primary color, and connect live responses to your isolated knowledge base.
          </p>

          {/* Copy Snippet Frame */}
          <div className="relative group bg-gray-100 rounded-xl border border-gray-200 p-5 mt-2 overflow-hidden">
            <pre className="font-mono text-xs text-gray-800 select-all leading-relaxed whitespace-pre overflow-x-auto pr-12">
              {embedScript}
            </pre>

            <button
              onClick={handleCopy}
              className={`
                absolute top-4 right-4 p-2.5 rounded-lg border transition-all duration-200 cursor-pointer
                ${copied
                  ? 'bg-gray-100 border-white/20 text-gray-900'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-600 mt-2">
            <ShieldCheck className="w-5 h-5 text-gray-900 shrink-0" />
            <span>
              <strong>Note:</strong> Shadow DOM encapsulation is active. Your widget is completely isolated, preventing host website CSS rules from breaking your chatbot layout.
            </span>
          </div>
        </div>

        {/* Right Side Installation Guides */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <ExternalLink className="w-4 h-4 text-gray-900" />
            CMS Deployment Guides
          </h2>

          <div className="flex flex-col gap-4 max-h-[550px] overflow-y-auto pr-1">
            {guides.map((guide, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl flex flex-col gap-3 border border-gray-200">
                <h3 className="font-bold text-sm text-gray-900">{guide.title}</h3>
                <ol className="flex flex-col gap-2.5">
                  {guide.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex gap-2.5 text-xs text-gray-500 leading-relaxed">
                      <span className="font-bold text-gray-900 shrink-0">{sIdx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
