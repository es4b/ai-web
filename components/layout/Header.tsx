"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Pradžia" },
  { href: "/paslaugos", label: "Paslaugos" },
  { href: "/apie-mus", label: "Apie mus" },
  { href: "/klientai", label: "Klientai" },
  { href: "/kontaktai", label: "Kontaktai" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E5E5E7]/60 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="MAXY.LT — Pradžia"
        >
          <Image src="/images/logo.png" alt="maxy.lt" width={160} height={40} style={{objectFit: "contain"}} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Pagrindinė navigacija">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-[#1D1D1F] bg-[#F5F5F7]"
                    : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/kontaktai"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-medium rounded-full transition-colors duration-200"
          >
            Gauti konsultaciją
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F5F5F7] transition-colors"
          aria-label={menuOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={20} className="text-[#1D1D1F]" />
          ) : (
            <Menu size={20} className="text-[#1D1D1F]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5E5E7]"
          >
            <nav
              className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1"
              aria-label="Mobilė navigacija"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#1D1D1F] bg-[#F5F5F7]"
                        : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#E5E5E7]">
                <Link
                  href="/kontaktai"
                  className="flex items-center justify-center px-5 py-3 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-medium rounded-full transition-colors duration-200"
                >
                  Gauti konsultaciją
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
