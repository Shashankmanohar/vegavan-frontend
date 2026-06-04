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
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 font-sans text-black">
      <div className="w-full max-w-[480px] p-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center mb-10">
          <Logo size="lg" />
        </div>

        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-4">
            7-Day Unlimited Free Trial
          </h2>
          <p className="text-[15px] text-gray-500 font-light">
            Start building your automated support engine today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="w-full flex flex-col gap-8">
          
          {error && (
            <div className="p-4 rounded-2xl bg-red-50 text-red-600 border border-red-100 text-left flex gap-3 items-start text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-4 rounded-2xl bg-green-50 text-green-600 border border-green-100 text-left flex gap-3 items-start text-sm">
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 pl-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full bg-transparent border-none py-1 pl-1 text-[15px] text-gray-700 placeholder:text-gray-400 outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 pl-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full bg-transparent border-none py-1 pl-1 text-[20px] tracking-widest text-gray-700 placeholder:text-gray-400 outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-gray-50 text-black font-bold uppercase tracking-[0.15em] text-[12px] py-5 rounded-2xl transition flex items-center justify-center gap-3 mt-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50"
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
        <div className="mt-12">
          <Link href="/login" className="text-[14px] text-gray-400 font-light hover:text-gray-600 transition-colors">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
