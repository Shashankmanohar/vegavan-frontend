import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vegavan AI | Data-driven AI Chatbot for Customer Support & Sales",
  description: "Help, convert, and sell with Vegavan AI. Instantly deploy a multichannel AI chatbot trained on your data to provide 24/7 support and boost sales.",
  openGraph: {
    title: "Vegavan AI | Data-driven AI Chatbot",
    description: "Help, convert, and sell with a data-driven AI chatbot.",
    url: "https://vegavan-ai.com",
    siteName: "Vegavan AI",
    images: [
      {
        url: "/vegavanlogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegavan AI | AI Customer Support",
    description: "Help, convert, and sell with a data-driven AI chatbot.",
    images: ["/vegavanlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
