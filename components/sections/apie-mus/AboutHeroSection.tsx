"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-44 md:pb-28 border-b border-[#E5E5E7] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, #EBF4FF 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase">
              Apie mus
            </span>
            <span className="text-[#E5E5E7]">·</span>
            <span className="flex items-center gap-1 text-xs text-[#86868B]">
              <MapPin size={11} />
              Kaunas, Lietuva
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-6 text-balance leading-[1.07]">
            Mes kuriame AI, kuris dirba už Jūsų verslą
          </h1>
          <p className="text-lg md:text-xl text-[#6E6E73] leading-relaxed mb-10 max-w-2xl">
            UAB „ES4B" — B2B dirbtinio intelekto sprendimų įmonė iš Kauno.
            Automatizuojame verslo procesus, kad Jūsų komanda galėtų susikoncentruoti
            į tai, kas iš tikrųjų svarbu: augimą, klientus ir strategiją.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontaktai"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Susisiekti su mumis
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/paslaugos"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-sm font-semibold rounded-full border border-[#E5E5E7] transition-colors duration-200"
            >
              Mūsų paslaugos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
