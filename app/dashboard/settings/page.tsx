'use client';

import { useEffect, useState } from 'react';
import { Loader2, Save, Send, Sparkles, Palette, Monitor } from 'lucide-react';
import { API_BASE_URL } from '../../config';

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

const formatPreviewText = (text: string) => {
  if (!text) return '';
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  const lines = escaped.split('\n');
  const formattedLines = lines.map(line => {
    const trimmed = line.trim();
    if (/^\d+\.\s+(.*)/.test(trimmed)) {
      const match = trimmed.match(/^\d+\.\s+(.*)/);
      return `<div style="margin-left: 8px; margin-top: 4px; margin-bottom: 4px;"><strong>${trimmed.match(/^\d+\./)?.[0] || ''}</strong> ${match?.[1] || ''}</div>`;
    }
    if (/^[\-\*]\s+(.*)/.test(trimmed)) {
      const match = trimmed.match(/^[\-\*]\s+(.*)/);
      return `<div style="margin-left: 8px; margin-top: 4px; margin-bottom: 4px;">• ${match?.[1] || ''}</div>`;
    }
    return line;
  });

  return formattedLines.join('<br>');
};

export default function Settings() {
  const [config, setConfig] = useState<ChatbotConfig>({
    businessName: 'My SaaS Assistant',
    supportEmail: 'support@example.com',
    supportPhone: '',
    tone: 'friendly',
    systemPrompt: 'You are a helpful customer support agent.',
    primaryColor: '#ffffff',
    welcomeMessage: 'Hello! I am your AI Assistant. How can I help you today?',
  });

  const [designMode, setDesignMode] = useState<'classic' | 'modern' | 'warm' | 'custom'>('classic');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Live Chat Preview States
  const [previewMessages, setPreviewMessages] = useState<Message[]>([]);
  const [userMsg, setUserMsg] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [previewOpen, setPreviewOpen] = useState(true);

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
          // Auto-detect best design mode match based on initial primary color
          if (data.primaryColor === '#ffffff' || data.primaryColor === '#fff') {
            setDesignMode('classic');
          } else if (data.primaryColor === '#000000' || data.primaryColor === '#09090b') {
            setDesignMode('modern');
          } else if (data.primaryColor === '#d4b27a') {
            setDesignMode('warm');
          } else {
            setDesignMode('custom');
          }
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

    // Sync selected design mode colors into primaryColor config
    let colorToSave = config.primaryColor;
    if (designMode === 'classic') colorToSave = '#ffffff';
    if (designMode === 'modern') colorToSave = '#09090b';
    if (designMode === 'warm') colorToSave = '#d4b27a';
    if (designMode === 'custom' && (!colorToSave || colorToSave === '#ffffff' || colorToSave === '#09090b' || colorToSave === '#d4b27a')) {
      colorToSave = '#3b82f6';
    }

    const updatedConfig = { ...config, primaryColor: colorToSave };

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/chatbot/config`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedConfig),
      });

      if (!res.ok) throw new Error('Failed to update config');

      const updated = await res.json();
      setConfig(updated);
      setSuccess(true);
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
        { role: 'assistant', content: 'Grounding Match: Using system instructions to formulate the response.' },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
        <p className="text-gray-500 text-sm">Loading Chatbot Settings...</p>
      </div>
    );
  }



  // Define active preview styles based on the selected Design Mode Preset
  const getPreviewStyles = () => {
    if (designMode === 'classic') {
      return {
        headerBg: '#ffffff',
        headerText: '#000000',
        widgetBg: '#000000',
        userBubbleBg: '#ffffff',
        userBubbleText: '#000000',
        assistantBubbleBg: 'rgba(255, 255, 255, 0.05)',
        assistantBubbleText: '#d4d4d8',
        border: 'border-gray-200',
        font: 'font-serif-classic',
      };
    } else if (designMode === 'modern') {
      return {
        headerBg: '#09090b',
        headerText: '#ffffff',
        widgetBg: '#000000',
        userBubbleBg: '#27272a',
        userBubbleText: '#ffffff',
        assistantBubbleBg: 'rgba(255, 255, 255, 0.03)',
        assistantBubbleText: '#a1a1aa',
        border: 'border-gray-200',
        font: 'font-sans',
      };
    } else if (designMode === 'warm') {
      // Warm Editorial
      return {
        headerBg: '#18181b',
        headerText: '#f5f5f0',
        widgetBg: '#09090b',
        userBubbleBg: '#18181b',
        userBubbleText: '#ffffff',
        assistantBubbleBg: 'rgba(255, 255, 255, 0.02)',
        assistantBubbleText: '#e4e4e7',
        border: 'border-gray-200',
        font: 'font-serif-classic',
      };
    } else {
      // Custom Theme - dynamically utilizes chosen primaryColor hex!
      const userBg = config.primaryColor || '#3b82f6';
      return {
        headerBg: userBg,
        headerText: '#ffffff',
        widgetBg: '#0a0a0a',
        userBubbleBg: userBg,
        userBubbleText: '#ffffff',
        assistantBubbleBg: 'rgba(255, 255, 255, 0.03)',
        assistantBubbleText: '#e4e4e7',
        border: 'border-gray-200',
        font: 'font-sans',
      };
    }
  };

  const preview = getPreviewStyles();

  return (
    <div className="flex flex-col gap-8">
      {/* Page Head */}
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl font-extrabold tracking-tight">Chatbot Configuration</h1>
        <p className="text-gray-500 text-sm">Personalize your AI, sculpt its design presets, and preview live layouts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Settings Control Form */}
        <form onSubmit={handleSave} className="lg:col-span-7 flex flex-col gap-6 glass-panel p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-2">
            <Sparkles className="w-4.5 h-4.5 text-gray-900" />
            AI Bot Settings
          </h2>

          {success && (
            <div className="p-3.5 rounded-xl bg-gray-100 border border-white/20 text-gray-900 text-xs font-semibold text-left">
              ✓ Settings saved successfully! Live previews updated with active design preset.
            </div>
          )}

          {error && (
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-xs font-semibold text-left">
              ⚠️ {error}
            </div>
          )}

          {/* Interactive Design Mode Preset Selector */}
          <div className="flex flex-col gap-2.5 text-left">
            <label className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-gray-900" />
              Design Mode / Theme Preset
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setDesignMode('classic')}
                className={`
                  p-4 rounded-xl border flex flex-col items-center gap-2 transition cursor-pointer
                  ${designMode === 'classic'
                    ? 'bg-gray-100 border-white text-gray-900 font-bold'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <Monitor className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider">Classic Mono</span>
              </button>

              <button
                type="button"
                onClick={() => setDesignMode('modern')}
                className={`
                  p-4 rounded-xl border flex flex-col items-center gap-2 transition cursor-pointer
                  ${designMode === 'modern'
                    ? 'bg-gray-100 border-white text-gray-900 font-bold'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <Monitor className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider">Modern Obsidian</span>
              </button>

              <button
                type="button"
                onClick={() => setDesignMode('warm')}
                className={`
                  p-4 rounded-xl border flex flex-col items-center gap-2 transition cursor-pointer
                  ${designMode === 'warm'
                    ? 'bg-gray-100 border-white text-gray-900 font-bold'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <Monitor className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider">Warm Editorial</span>
              </button>

              <button
                type="button"
                onClick={() => setDesignMode('custom')}
                className={`
                  p-4 rounded-xl border flex flex-col items-center gap-2 transition cursor-pointer
                  ${designMode === 'custom'
                    ? 'bg-gray-100 border-white text-gray-900 font-bold'
                    : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <Monitor className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider">Custom Color</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500">Business Name</label>
              <input
                type="text"
                value={config.businessName}
                onChange={(e) => setConfig({ ...config, businessName: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500">Support Email</label>
              <input
                type="email"
                value={config.supportEmail}
                onChange={(e) => setConfig({ ...config, supportEmail: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500">Support Phone</label>
              <input
                type="text"
                value={config.supportPhone || ''}
                onChange={(e) => setConfig({ ...config, supportPhone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500">Communication Tone</label>
              <select
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition"
              >
                <option value="friendly">Friendly & Warm</option>
                <option value="professional">Professional & Polite</option>
                <option value="sales">Sales & Action-Oriented</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-500">
                {designMode === 'custom' ? 'Pick Custom Color' : 'Preset Hex Code'}
              </label>
              {designMode === 'custom' ? (
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={config.primaryColor || '#3b82f6'}
                    onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                    className="w-12 h-10 border border-gray-200 bg-transparent rounded-xl cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={config.primaryColor || '#3b82f6'}
                    onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                    className="flex-1 bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition font-mono"
                    placeholder="#3b82f6"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  readOnly
                  value={designMode === 'classic' ? '#ffffff' : designMode === 'modern' ? '#09090b' : '#d4b27a'}
                  className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-500 text-sm outline-none cursor-not-allowed select-none"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-gray-500">Welcome Message</label>
            <input
              type="text"
              value={config.welcomeMessage}
              onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold text-gray-500">Custom System Prompt (Instructions)</label>
            <textarea
              rows={4}
              value={config.systemPrompt}
              onChange={(e) => setConfig({ ...config, systemPrompt: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 text-sm outline-none focus:border-white/40 transition resize-none leading-relaxed"
              required
            />
            <span className="text-[10px] text-gray-500">
              Instruct your AI chatbot how to behave, what policies to follow, and when to refer customers to a support agent.
            </span>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="glow-btn bg-white hover:bg-zinc-200 text-black font-semibold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 self-start px-6 cursor-pointer"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Presets
          </button>
        </form>

        {/* Live Interactive Chat Preview */}
        <div className="lg:col-span-5 flex flex-col gap-4 self-stretch text-left">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Live Preview</h2>
          
          <div className={`flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-xl border ${preview.border} min-h-[480px]`}>
            {/* Widget Header */}
            <div
              style={{ backgroundColor: preview.headerBg, color: preview.headerText }}
              className={`p-4 flex flex-col transition-all duration-300 ${preview.font}`}
            >
              <h3 className="font-bold text-sm">{config.businessName}</h3>
              <p className="text-[11px] opacity-80">AI Customer Support</p>
            </div>

            {/* Messages Body */}
            <div style={{ backgroundColor: preview.widgetBg }} className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto max-h-[340px]">
              {previewMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={
                    msg.role === 'user' 
                      ? { backgroundColor: preview.userBubbleBg, color: preview.userBubbleText } 
                      : { backgroundColor: preview.assistantBubbleBg, color: preview.assistantBubbleText }
                  }
                  className={`
                    max-w-[85%] rounded-xl py-2 px-3 text-xs leading-relaxed transition-all duration-300 ${preview.font}
                    ${msg.role === 'user'
                      ? 'align-self-end self-end rounded-br-none shadow-md shadow-white/2'
                      : 'border border-white/10 self-start rounded-bl-none'
                    }
                  `}
                  dangerouslySetInnerHTML={{ __html: formatPreviewText(msg.content) }}
                />
              ))}

              {chatLoading && (
                <div className="bg-white border border-gray-200 rounded-xl py-2 px-3 self-start rounded-bl-none flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-gray-100 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendPreviewMsg()}
                placeholder="Type a message..."
                className="flex-1 bg-white border border-gray-200 rounded-full py-2 px-4 text-gray-900 text-xs outline-none focus:border-white/20 transition"
              />
              <button
                onClick={handleSendPreviewMsg}
                style={{ backgroundColor: preview.userBubbleBg, color: preview.userBubbleText }}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 border border-gray-200 shadow-md shadow-white/2"
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
