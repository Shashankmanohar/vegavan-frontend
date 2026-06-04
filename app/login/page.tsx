'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../components/Logo';
import { API_BASE_URL } from '../config';
import { ArrowRight, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonErr) {
        throw new Error('Received invalid server response. Please verify the backend is running properly.');
      }

      if (!res.ok) {
        throw new Error(data.message || 'The email or password entered is incorrect.');
      }

      // Success
      setSuccess('Access granted! Preparing your classic-modern dashboard...');
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('userEmail', data.user.email);
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (err: any) {
      if (err.message && err.message.includes('Failed to fetch')) {
        const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';
        setError(isLocal
          ? 'Connection Failed: Cannot establish contact with the backend. Please ensure your Node server is running on http://localhost:5000 (check your backend VS Code terminal).'
          : 'Connection Failed: Cannot establish contact with the backend service at https://vegavan-backend.vercel.app. Please verify that the server is online.');
      } else {
        setError(err.message || 'An unexpected connection issue occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans">
      {/* Monochrome Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-md p-8 md:p-10 rounded-3xl bg-white border border-gray-200 flex flex-col gap-6 shadow-xl">
        {/* Logo and Head */}
        <div className="flex flex-col gap-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black shadow-sm self-center mb-2 p-1">
            <Logo size="lg" className="text-black" />
          </div>
          <h2 className="font-display-modern text-3xl font-semibold text-gray-900 tracking-tight">Access Platform</h2>
          <p className="text-gray-500 text-sm">Sign in to manage your AI customer receptionists</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          {/* Detailed Error Message Banner */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-left flex gap-3 items-start animate-pulse">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Login Issue</span>
                <span className="text-xs leading-relaxed text-red-600">{error}</span>
              </div>
            </div>
          )}

          {/* Detailed Success Message Banner */}
          {success && (
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-left flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Authenticated</span>
                <span className="text-xs leading-relaxed text-green-600">{success}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-gray-900 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Password</label>
              <Link href="/forgot-password" className="text-[11px] text-primary hover:text-primary/80 font-semibold underline underline-offset-2">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-gray-900 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gray-900 hover:bg-black text-white font-bold uppercase tracking-widest text-[12px] py-4 rounded-xl transition flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <>
                Sign In to Dashboard
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-100 pt-5 mt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary hover:text-primary/80 font-bold underline underline-offset-4">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
