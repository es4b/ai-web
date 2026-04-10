"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#1D1D1F] py-24 md:py-32 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, #0071E320 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-6">
            Pradėkite šiandien
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl mx-auto text-balance">
            Pasiruošę automatizuoti savo verslą?
          </h2>
          <p className="text-[#86868B] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Užsisakykite nemokamą proceso auditą. Per 60 minučių nustatysime
            didžiausias automatizavimo galimybes ir apskaičiuosime potencialų
            taupymą.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontaktai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-lg shadow-[#0071E3]/20"
            >
              <Calendar size={15} />
              Gauti nemokamą auditą
            </Link>
            <Link
              href="/klientai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 transition-colors duration-200"
            >
              Peržiūrėti sėkmės istorijas
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-xs text-[#6E6E73]">
            Jokių įsipareigojimų · Nemokama konsultacija · Atsakome per 24 val.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
