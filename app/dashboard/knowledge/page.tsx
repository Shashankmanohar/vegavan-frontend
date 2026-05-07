'use client';

import { useEffect, useState } from 'react';
import { Loader2, Plus, Trash2, HelpCircle, BookOpen, Sparkles } from 'lucide-react';

interface KnowledgeItem {
  _id: string;
  content: string;
  source: string;
  createdAt: string;
}

export default function KnowledgeBase() {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [content, setContent] = useState('');
  const [source, setSource] = useState('Manual FAQ');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchKnowledge = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/chatbot/knowledge', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (err) {
      setError('Failed to load knowledge base items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKnowledge();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/chatbot/knowledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ content, source }),
      });

      if (!res.ok) throw new Error('Failed to create knowledge entry');

      const newItem = await res.json();
      setItems(prev => [newItem, ...prev]);
      setContent('');
      setSuccess('Knowledge item added successfully! Your AI is now smarter.');
    } catch (err: any) {
      setError(err.message || 'Error adding knowledge');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this knowledge snippet? Your AI will lose access to this information.')) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/chatbot/knowledge/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (res.ok) {
        setItems(prev => prev.filter(item => item._id !== id));
        setSuccess('Knowledge block successfully deleted.');
      } else {
        throw new Error('Could not delete item');
      }
    } catch (err: any) {
      setError(err.message || 'Error deleting item');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
        <p className="text-zinc-400 text-sm">Loading Knowledge Base...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Head */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">Knowledge Base</h1>
        <p className="text-zinc-400 text-sm">Train your AI by providing custom FAQs, refund policies, and product details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Input Form */}
        <form onSubmit={handleAdd} className="lg:col-span-5 flex flex-col gap-6 glass-panel p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-3">
            <Plus className="w-4.5 h-4.5 text-white" />
            Add New Knowledge
          </h2>

          {success && (
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold">
              ✓ {success}
            </div>
          )}

          {error && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold">
              ⚠️ {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">Content Type / Source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm outline-none focus:border-white/40 transition"
            >
              <option value="Manual FAQ">FAQ Entry</option>
              <option value="Refund Policy">Company Policy</option>
              <option value="Product Details">Product / Service Spec</option>
              <option value="General Docs">General Documentation</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">Text Content</label>
            <textarea
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="e.g. Q: What is your refund policy? A: Customers can request a full refund within 14 days of purchase if they are unsatisfied."
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-white/40 transition resize-none leading-relaxed"
            />
            <span className="text-[10px] text-zinc-500">
              Tip: Standard Question-Answer format or descriptive paragraphs yield the highest AI accuracy.
            </span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="glow-btn bg-white hover:bg-zinc-200 text-black font-semibold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 self-start px-6"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin text-black" /> : <Sparkles className="w-4 h-4" />}
            Train AI Engine
          </button>
        </form>

        {/* Existing Listings */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-white" />
            Trained Knowledge ({items.length})
          </h2>

          {items.length === 0 ? (
            <div className="glass-panel p-12 rounded-2xl flex flex-col items-center text-center gap-3">
              <HelpCircle className="w-12 h-12 text-zinc-700 animate-bounce" />
              <h3 className="font-bold text-white text-base">Your AI is empty!</h3>
              <p className="text-zinc-500 text-xs max-w-sm">
                You haven't uploaded any business data yet. Add some FAQs or documents using the left form to help your chatbot answer queries.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[550px] pr-2">
              {items.map((item) => (
                <div key={item._id} className="glass-panel p-5 rounded-2xl flex items-start justify-between gap-4 border border-white/5 hover:border-white/10 transition-colors duration-200">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold bg-white/10 text-white border border-white/10 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        {item.source}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-semibold">
                        Added {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
                      {item.content}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-xl border border-transparent hover:border-white/10 transition-all duration-200 self-start"
                    title="Delete knowledge block"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
