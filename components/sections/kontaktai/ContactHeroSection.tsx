"use client";

import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-44 md:pb-20 border-b border-[#E5E5E7] relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -5%, #EBF4FF 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Kontaktai
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance max-w-2xl mx-auto leading-[1.07]">
            Pradėkime pokalbį apie Jūsų verslą
          </h1>
          <p className="text-lg text-[#6E6E73] max-w-xl mx-auto leading-relaxed">
            Užpildykite formą arba susisiekite tiesiogiai. Atsakome per 24 darbo valandas
            ir pasiūlome nemokamą proceso auditą.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
