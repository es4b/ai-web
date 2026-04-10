"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, TrendingUp } from "lucide-react";

const indicators = [
  {
    icon: TrendingUp,
    value: "40–70%",
    label: "kaštų sumažinimas",
    desc: "Automatizuotuose procesuose",
  },
  {
    icon: Zap,
    value: "< 8 sav.",
    label: "diegimo laikas",
    desc: "Nuo sprendimo iki veikiančio produkto",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "veikimo laikas",
    desc: "AI sistemų nepertraukiamas darbas",
  },
  {
    icon: ShieldCheck,
    value: "ISO 27001",
    label: "duomenų sauga",
    desc: "Sertifikuoti saugumo standartai",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#FBFBFB] border-y border-[#E5E5E7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-[#86868B] font-semibold tracking-widest uppercase mb-12"
        >
          Įrodyti rezultatai B2B projektuose
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#0071E3]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-1 tracking-tight">
                  {item.value}
                </p>
                <p className="text-sm font-semibold text-[#1D1D1F] mb-1">{item.label}</p>
                <p className="text-xs text-[#86868B] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
