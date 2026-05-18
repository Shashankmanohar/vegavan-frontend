'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../components/Logo';
import { ArrowLeft, Loader2, AlertTriangle, CheckCircle, Send, KeyRound } from 'lucide-react';
import { API_BASE_URL } from '../config';

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send reset link');
      }

      setSuccess('If an account exists, an OTP has been sent to your email.');
      setStep(2);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }

      setSuccess('Password has been successfully reset. Redirecting to login...');
      
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
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
          <h2 className="font-serif-classic text-3xl font-light text-white tracking-tight">
            {step === 1 ? 'Reset Password' : 'Enter OTP'}
          </h2>
          <p className="text-zinc-400 text-xs font-light">
            {step === 1 
              ? 'Enter your email to receive an OTP' 
              : `We sent a 6-digit code to ${email}`}
          </p>
        </div>

        {/* Form */}
        {step === 1 ? (
          <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
            {error && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left flex gap-3 items-start animate-pulse">
                <AlertTriangle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Error</span>
                  <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{error}</span>
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

            <button
              type="submit"
              disabled={loading}
              className="glow-btn bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin text-black" />
              ) : (
                <>
                  Send OTP Code
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            {error && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left flex gap-3 items-start animate-pulse">
                <AlertTriangle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Error</span>
                  <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{error}</span>
                </div>
              </div>
            )}

            {success && (
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-left flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Success</span>
                  <span className="text-[11px] leading-relaxed text-zinc-300 font-light">{success}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">6-Digit OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                required
                maxLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-white/40 transition font-light text-center tracking-[0.5em]"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                  Update Password
                  <KeyRound className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-zinc-400 border-t border-white/5 pt-4 font-light flex items-center justify-center gap-2">
          {step === 2 && (
            <button 
              onClick={() => {setStep(1); setError(''); setSuccess('');}} 
              className="text-white hover:text-zinc-300 font-semibold underline underline-offset-4 mr-2"
            >
              Back
            </button>
          )}
          <ArrowLeft className="w-3 h-3" />
          <Link href="/login" className="text-white hover:text-zinc-300 font-semibold underline underline-offset-4">
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
