'use client';

import { useEffect, useState } from 'react';
import { Loader2, Save, Send, Sparkles } from 'lucide-react';
import { API_BASE_URL } from '../config';

interface ChatbotConfig {
  businessName: string;
  supportEmail: string;
  supportPhone?: string;
  tone: string;
  systemPrompt: string;
  primaryColor: string;
  welcomeMessage: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Settings() {
  const [config, setConfig] = useState<ChatbotConfig>({
    businessName: 'My SaaS Assistant',
    supportEmail: 'support@example.com',
    supportPhone: '',
    tone: 'friendly',
    systemPrompt: 'You are a helpful customer support agent.',
    primaryColor: '#6366f1',
    welcomeMessage: 'Hello! I am your AI Assistant. How can I help you today?',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Live Chat Preview States
  const [previewMessages, setPreviewMessages] = useState<Message[]>([]);
  const [userMsg, setUserMsg] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('userId') || '';
        setUserId(id);

        const res = await fetch(`${API_BASE_URL}/api/chatbot/config`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          setConfig(data);
          // Initialize first welcome message in preview
          setPreviewMessages([{ role: 'assistant', content: data.welcomeMessage }]);
        }
      } catch (err: any) {
        setError('Failed to load settings');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/chatbot/config`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(config),
      });

      if (!res.ok) throw new Error('Failed to update config');

      const updated = await res.json();
      setConfig(updated);
      setSuccess(true);
      
      // Reset preview to reflect new welcome message
      setPreviewMessages([{ role: 'assistant', content: updated.welcomeMessage }]);
    } catch (err: any) {
      setError(err.message || 'Error saving details');
    } finally {
      setSaving(false);
    }
  };

  // Live Preview Send Message
  const handleSendPreviewMsg = async () => {
    if (!userMsg.trim() || chatLoading) return;

    const text = userMsg;
    setUserMsg('');
    setPreviewMessages(prev => [...prev, { role: 'user', content: text }]);
    setChatLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          message: text,
          sessionId: 'dashboard_preview_session',
        }),
      });

      const data = await res.json();
      setPreviewMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (err) {
      setPreviewMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Connecting... Set up MONGODB & GEMINI_API_KEY to test actual responses.' },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        <p className="text-slate-400 text-sm">Loading Chatbot Settings...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Head */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">Chatbot Configuration</h1>
        <p className="text-slate-400 text-sm">Personalize your AI, tune its prompts, and test it in real time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Settings Control Form */}
        <form onSubmit={handleSave} className="lg:col-span-7 flex flex-col gap-6 glass-panel p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold text-white border-b border-white/5 pb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            AI Bot Settings
          </h2>

          {success && (
            <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              ✓ Settings saved successfully! Live previews updated.
            </div>
          )}

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
              ⚠️ {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400">Business Name</label>
              <input
                type="text"
                value={config.businessName}
                onChange={(e) => setConfig({ ...config, businessName: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400">Support Email</label>
              <input
                type="email"
                value={config.supportEmail}
                onChange={(e) => setConfig({ ...config, supportEmail: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400">Support Phone</label>
              <input
                type="text"
                value={config.supportPhone || ''}
                onChange={(e) => setConfig({ ...config, supportPhone: e.target.value })}
                placeholder="+1 234 567 890"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400">Communication Tone</label>
              <select
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
              >
                <option value="friendly">Friendly & Warm</option>
                <option value="professional">Professional & Polite</option>
                <option value="sales">Sales & Action-Oriented</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400">Theme Primary Color</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={config.primaryColor}
                  onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                  className="w-10 h-10 bg-transparent border-0 outline-none rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={config.primaryColor}
                  onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400">Welcome Message</label>
            <input
              type="text"
              value={config.welcomeMessage}
              onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-indigo-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400">Custom System Prompt (Instructions)</label>
            <textarea
              rows={4}
              value={config.systemPrompt}
              onChange={(e) => setConfig({ ...config, systemPrompt: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-indigo-500 transition resize-none"
              required
            />
            <span className="text-[10px] text-slate-500">
              Instruct your AI chatbot how to behave, what policies to follow, and when to refer customers to a support agent.
            </span>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="glow-btn bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 self-start px-6"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Changes
          </button>
        </form>

        {/* Live Interactive Chat Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4 self-stretch">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Live Preview</h2>
          
          <div className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl border border-white/10 min-h-[480px]">
            {/* Widget Header */}
            <div
              style={{ backgroundColor: config.primaryColor }}
              className="p-4 text-white flex flex-col transition-colors duration-300"
            >
              <h3 className="font-bold text-sm">{config.businessName}</h3>
              <p className="text-[11px] opacity-85">AI Customer Support</p>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 bg-slate-950 flex flex-col gap-3 overflow-y-auto max-h-[340px]">
              {previewMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={msg.role === 'user' ? { backgroundColor: config.primaryColor } : {}}
                  className={`
                    max-w-[85%] rounded-xl py-2 px-3 text-xs leading-relaxed transition-all duration-300
                    ${msg.role === 'user'
                      ? 'text-white align-self-end self-end rounded-br-none'
                      : 'bg-white/5 border border-white/5 text-slate-300 self-start rounded-bl-none'
                    }
                  `}
                >
                  {msg.content}
                </div>
              ))}

              {chatLoading && (
                <div className="bg-white/5 border border-white/5 rounded-xl py-2 px-3 self-start rounded-bl-none flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-slate-900 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendPreviewMsg()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/5 rounded-full py-2 px-4 text-white text-xs outline-none focus:border-indigo-500/50 transition"
              />
              <button
                onClick={handleSendPreviewMsg}
                style={{ backgroundColor: config.primaryColor }}
                className="w-8 h-8 rounded-full text-white flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
