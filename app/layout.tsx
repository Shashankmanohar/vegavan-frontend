import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vegavan AI Chatbot | SaaS Platform",
  description: "Create, train, and embed live AI customer support chatbots on your websites in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
