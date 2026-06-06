'use client';

import { useEffect, useState } from 'react';
import { MessageSquare, Users, MessageCircleCode, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../config';

interface TimelineItem {
  date: string;
  chats: number;
  messages: number;
}

interface Lead {
  _id: string;
  name: string;
  phone: string;
  createdAt: string;
  lastMessage: string;
}

interface AnalyticsData {
  totalConversations: number;
  totalMessages: number;
  totalActiveUsers: number;
  timeline: TimelineItem[];
}

export default function Dashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [user, setUser] = useState<{ plan: string; messageCount: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE_URL}/api/chatbot/analytics`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to load analytics');
        }

        const analytics = await res.json();
        setData(analytics);

        // Fetch Captured Visitor Leads
        const leadsRes = await fetch(`${API_BASE_URL}/api/chatbot/leads`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (leadsRes.ok) {
          const leadsData = await leadsRes.json();
          setLeads(leadsData);
        }

        // Fetch User details for plan
        const userRes = await fetch(`${API_BASE_URL}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);
        }
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
        <p className="text-gray-500 text-sm">Loading SaaS Analytics...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 rounded-2xl bg-white border border-gray-200 text-gray-900 flex flex-col gap-2">
        <h3 className="font-bold">Analytics Loading Error</h3>
        <p className="text-sm">{error || 'Could not fetch platform data.'}</p>
      </div>
    );
  }

  // Calculate highest chat value to scale our visual bar chart
  const maxChats = Math.max(...data.timeline.map(t => t.chats), 1);

  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
          <p className="text-gray-500 text-sm">Monitor your customer engagement and AI responses</p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2.5 rounded-xl self-start">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
            Plan: {user?.plan || 'Starter'} ({user?.messageCount || 0} / {user?.plan === 'Starter' ? '1,000' : user?.plan === 'Professional' ? '5,000' : 'Unlimited'} msgs)
          </span>
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Conversations */}
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Conversations</span>
            <span className="text-3xl font-bold text-gray-900">{data.totalConversations}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-900">
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>

        {/* Total Messages Exchanged */}
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Messages Exchanged</span>
            <span className="text-3xl font-bold text-gray-900">{data.totalMessages}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-900">
            <MessageCircleCode className="w-5 h-5" />
          </div>
        </div>

        {/* Active Sessions */}
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Visitors</span>
            <span className="text-3xl font-bold text-gray-900">{data.totalActiveUsers}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-900">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Analytics Timeline Chart (Custom HTML/SVG Zero-Dependency) */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-bold text-gray-900">Inbound Conversation Activity</h3>
            <p className="text-xs text-gray-500">Chats initialized over the past 7 days</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white py-1.5 px-3 rounded-lg border border-gray-200">
            <Calendar className="w-3.5 h-3.5 text-gray-900" />
            Last 7 Days
          </div>
        </div>

        {/* Dynamic Bar Charts */}
        <div className="flex items-end justify-between h-48 pt-6 gap-2 md:gap-4">
          {data.timeline.map((item, index) => {
            const heightPercent = (item.chats / maxChats) * 100;
            return (
              <div key={index} className="flex flex-col items-center gap-3 flex-1 group">
                {/* Visual Bar Container */}
                <div className="w-full relative h-36 flex items-end justify-center">
                  {/* Tooltip */}
                  <div className="absolute top-[-30px] opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-extrabold py-1 px-2.5 rounded transition pointer-events-none whitespace-nowrap z-10">
                    {item.chats} chats / {item.messages} msgs
                  </div>
                  
                  {/* The Bar */}
                  <div
                    style={{ height: `${Math.max(heightPercent, 8)}%` }}
                    className="w-8 md:w-12 rounded-t bg-gradient-to-t from-primary/20 to-primary group-hover:from-primary/30 group-hover:to-primary/80 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Pulsing glow inside the bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 animate-pulse-slow" />
                  </div>
                </div>

                {/* X Axis Label */}
                <span className="text-[10px] md:text-xs font-semibold text-gray-500 group-hover:text-gray-900 transition">
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Captured Visitor Leads Section */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col gap-6 text-left">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-bold text-gray-900">Captured Visitor Leads</h3>
          <p className="text-xs text-gray-500">Pre-chat contact details submitted by live website visitors</p>
        </div>

        {leads.length === 0 ? (
          <div className="py-10 text-center border border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center gap-2">
            <Users className="w-8 h-8 text-gray-500 animate-pulse" />
            <p className="text-sm font-semibold text-gray-500">No visitor leads captured yet</p>
            <p className="text-xs text-gray-500 max-w-sm">When visitors open your chatbot, they will be prompted to enter their name and phone number before chatting.</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-gray-200 rounded-xl bg-gray-50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  <th className="p-4">Visitor Name</th>
                  <th className="p-4">Phone Number</th>
                  <th className="p-4">Last Message</th>
                  <th className="p-4">Captured At</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="border-b border-gray-200 hover:bg-gray-50 transition text-sm">
                    <td className="p-4 font-bold text-gray-900">{lead.name}</td>
                    <td className="p-4 text-gray-600 font-mono">{lead.phone}</td>
                    <td className="p-4 text-gray-500 truncate max-w-[200px]">{lead.lastMessage || 'Started conversation'}</td>
                    <td className="p-4 text-gray-500 text-xs">
                      {new Date(lead.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Platform Recommendations / Onboarding Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-base text-gray-900">Setup Checklist</h3>
          <p className="text-xs text-gray-500">Complete these steps to fully activate your AI receptionist</p>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
              <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center text-xs font-extrabold">✓</span>
              <span className="text-xs font-semibold text-gray-600">Create account & system access</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
              <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center text-xs font-extrabold">2</span>
              <span className="text-xs font-semibold text-gray-600">Configure chatbot tone & welcome copy</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
              <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center text-xs font-extrabold">3</span>
              <span className="text-xs font-semibold text-gray-600">Populate the Knowledge Base</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base text-gray-900">Embed Code Snippet</h3>
            <p className="text-xs text-gray-500">Copy the script to integrate your chatbot with any HTML website in seconds.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl font-mono text-[11px] text-gray-600 border border-gray-200 select-all break-all leading-relaxed">
            {`<!-- OmniAI Widget -->
<script
  src="${API_BASE_URL}/chatbot.js"
  data-user-id="${data.timeline.length ? 'YOUR_USER_ID' : '...'}">
</script>`}
          </div>
          <a href="/dashboard/embed" className="text-xs font-bold text-gray-900 hover:text-gray-600 flex items-center gap-1">
            Go to Embed Generator <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
