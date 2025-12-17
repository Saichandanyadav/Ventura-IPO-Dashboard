"use client";
import { Sora } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const dark = theme === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  if (!mounted) {
    return (
      <html lang="en">
        <body className={`${sora.className} min-h-screen`} />
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${sora.className} flex flex-col min-h-screen`}>
        <nav className="border-b sticky top-0 bg-[var(--background)] z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tighter text-[var(--foreground)]">
              VENTURA
            </Link>

            <div className="hidden sm:flex gap-8 text-sm font-semibold text-[var(--secondary-foreground)]">
              <Link href="/coming-soon">Invest</Link>
              <Link href="/coming-soon">Trade</Link>
              <Link href="/coming-soon">Market</Link>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={toggleTheme} className="p-2 hover:bg-[var(--secondary)] rounded-lg">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2 rounded-lg text-sm font-bold">
                Login
              </button>

              <button className="sm:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="sm:hidden bg-[var(--background)] border-b px-4 py-4 flex flex-col gap-4 font-bold">
              <Link href="/coming-soon" onClick={() => setIsOpen(false)}>Invest</Link>
              <Link href="/coming-soon" onClick={() => setIsOpen(false)}>Trade</Link>
              <Link href="/coming-soon" onClick={() => setIsOpen(false)}>Market</Link>
            </div>
          )}
        </nav>

        <main className="flex-grow print:m-0">{children}</main>

        <footer className="border-t py-8 bg-[var(--secondary)] print:hidden">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--muted-foreground)] text-xs font-medium">
            <p>© 2025 Ventura Securities Ltd. All rights reserved.</p>
            <div className="flex gap-6 uppercase tracking-widest">
              <Link href="/">Privacy</Link>
              <Link href="/">Terms</Link>
              <Link href="/">Support</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
