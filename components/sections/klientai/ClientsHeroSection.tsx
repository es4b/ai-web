"use client";

import { motion } from "framer-motion";

export default function ClientsHeroSection() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-44 md:pb-24 border-b border-[#E5E5E7] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, #EBF4FF 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Klientai
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-6 text-balance max-w-3xl mx-auto leading-[1.07]">
            Įmonės, kurios jau automatizuoja su MAXY.LT
          </h1>
          <p className="text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
            80+ B2B įmonių Lietuvoje ir Baltijos regione pasitiki mūsų AI
            sprendimais. Peržiūrėkite realias sėkmės istorijas su konkrečiais
            rezultatais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
        >
          {[
            { value: "80+", label: "aktyvių klientų" },
            { value: "150+", label: "įgyvendintų projektų" },
            { value: "94%", label: "klientų rekomenduoja" },
            { value: "4.9★", label: "vidutinis įvertinimas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#1D1D1F] tracking-tight">{s.value}</p>
              <p className="text-xs text-[#86868B] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
