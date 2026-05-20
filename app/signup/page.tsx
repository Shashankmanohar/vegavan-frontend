'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../components/Logo';
import { API_BASE_URL } from '../config';
import { ArrowRight, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
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
        throw new Error(data.message || 'Registration failed. The email address may already be in use.');
      }

      // Success
      setSuccess('Registration successful! Initializing your custom AI instance...');
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
        setError(err.message || 'An unexpected connection issue occurred during registration.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-4 font-sans">
      {/* Monochrome Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-md p-8 md:p-10 rounded-3xl glass-panel flex flex-col gap-6 shadow-2xl">
        {/* Logo and Head */}
        <div className="flex flex-col gap-2 text-center">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shadow-md self-center mb-2">
            <Logo size="lg" className="text-black" />
          </div>
          <h2 className="font-serif-classic text-3xl font-light text-white tracking-tight">Create Account</h2>
          <div className="inline-flex items-center gap-1.5 bg-white/5 text-zinc-300 border border-white/10 text-[9px] font-bold uppercase tracking-wider py-1 px-3 mt-1 self-center rounded-full">
            7-Day Unlimited Free Trial
          </div>
          <p className="text-zinc-400 text-xs font-light mt-1">Start building your automated support engine today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* Detailed Error Message Banner */}
          {error && (
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left flex gap-3 items-start animate-pulse">
              <AlertTriangle className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Registration Issue</span>
                <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{error}</span>
              </div>
            </div>
          )}

          {/* Detailed Success Message Banner */}
          {success && (
            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-left flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Registered</span>
                <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{success}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-white/40 transition font-light"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-white/40 transition font-light"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="glow-btn bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition flex items-center justify-center gap-2 mt-2 cursor-pointer"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin text-black" />
            ) : (
              <>
                Register Account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-zinc-400 border-t border-white/5 pt-4 font-light">
          Already have an account?{' '}
          <Link href="/login" className="text-white hover:text-zinc-300 font-semibold underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
