'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Settings, BookOpen, Terminal, LogOut, Menu, X, Users } from 'lucide-react';
import Logo from '../components/Logo';

interface SidebarLink {
  name: string;
  href: string;
  icon: any;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');

    if (!token) {
      router.push('/login');
    } else if (email) {
      setUserEmail(email);
    }
  }, [router]);

  const links: SidebarLink[] = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Captured Leads', href: '/dashboard/leads', icon: Users },
    { name: 'Bot Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Knowledge Base', href: '/dashboard/knowledge', icon: BookOpen },
    { name: 'Embed Script', href: '/dashboard/embed', icon: Terminal },
  ];

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black shadow-sm">
            <Logo size="sm" className="text-black" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif-classic font-bold text-sm tracking-wide text-gray-900 leading-none">
              Vegavan AI
            </span>
            <span className="text-[7px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">by Webflora Technologies</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 text-gray-500 hover:text-gray-900 transition cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-6 z-30 transition-transform duration-300 lg:translate-x-0 lg:static lg:h-screen lg:w-68 shrink-0
          ${mobileOpen ? 'translate-x-0 pt-20 lg:pt-6' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col gap-8">
          {/* Brand Logo */}
          <div className="hidden lg:flex items-center gap-2.5 pb-2">
            <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-white shadow-md shadow-gray-200">
              <Logo size="md" className="text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-classic font-bold text-sm tracking-wider leading-none">Vegavan AI Chatbot</span>
              <span className="text-[9px] text-gray-500 font-extrabold uppercase tracking-widest mt-1">SaaS Dashboard</span>
              <span className="text-[8px] text-gray-400 font-semibold tracking-wide mt-1.5">by Webflora Technologies</span>
            </div>
          </div>

          {/* Links Grid */}
          <nav className="flex flex-col gap-1.5">
            {links.map((link) => {
              const active = pathname === link.href;
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex items-center gap-3.5 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border border-transparent
                    ${active
                      ? 'bg-primary/10 text-primary font-bold shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-all ${active ? 'text-primary' : 'text-gray-400'}`} />
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* User Card & Log Out */}
        <div className="flex flex-col gap-4 border-t border-borderColor/30 pt-4">
          <div className="flex flex-col gap-0.5 px-2">
            <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Logged In As</span>
            <span className="text-xs text-gray-800 font-semibold truncate max-w-[200px]" title={userEmail}>
              {userEmail || 'support@saas.com'}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 py-3 px-4 rounded-xl text-xs font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>

          <div className="text-center text-[9px] text-gray-400 font-extrabold tracking-widest uppercase mt-2 border-t border-gray-100 pt-3 select-none">
            A Product of Webflora Technologies
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-6 md:p-8 pt-24 lg:pt-8 h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
