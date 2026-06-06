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
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans">
      {/* Monochrome Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-md p-8 md:p-10 rounded-3xl bg-white border border-gray-200 flex flex-col gap-6 shadow-xl">
        {/* Logo and Head */}
        <div className="flex flex-col gap-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-black shadow-sm self-center mb-2 p-1">
            <Logo size="lg" className="text-black" />
          </div>
          <h2 className="font-display-modern text-3xl font-semibold text-gray-900 tracking-tight">
            {step === 1 ? 'Reset Password' : 'Enter OTP'}
          </h2>
          <p className="text-gray-500 text-sm">
            {step === 1 
              ? 'Enter your email to receive an OTP' 
              : `We sent a 6-digit code to ${email}`}
          </p>
        </div>

        {/* Form */}
        {step === 1 ? (
          <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-left flex gap-3 items-start animate-pulse">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Error</span>
                  <span className="text-xs leading-relaxed text-red-600">{error}</span>
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

            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 hover:bg-black text-white font-bold uppercase tracking-widest text-[12px] py-4 rounded-xl transition flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-md hover:shadow-lg"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
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
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-left flex gap-3 items-start animate-pulse">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Error</span>
                  <span className="text-xs leading-relaxed text-red-600">{error}</span>
                </div>
              </div>
            )}

            {success && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-left flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Success</span>
                  <span className="text-xs leading-relaxed text-green-600">{success}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600">6-Digit OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                required
                maxLength={6}
                className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-gray-900 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-center tracking-[0.5em]"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
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
                  Update Password
                  <KeyRound className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-100 pt-5 mt-2 flex items-center justify-center gap-2">
          {step === 2 && (
            <button 
              onClick={() => {setStep(1); setError(''); setSuccess('');}} 
              className="text-primary hover:text-primary/80 font-bold underline underline-offset-4 mr-2"
            >
              Back
            </button>
          )}
          <ArrowLeft className="w-4 h-4 text-gray-500" />
          <Link href="/login" className="text-primary hover:text-primary/80 font-bold underline underline-offset-4">
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
