"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesCtaSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-[#1D1D1F] rounded-3xl px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 100% 50%, #0071E315 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-5">
                Pradėkite šiandien
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 text-balance">
                Nežinote, nuo ko pradėti? Padėsime išsirinkti.
              </h2>
              <p className="text-[#86868B] text-lg leading-relaxed mb-10">
                Užsisakykite nemokamą proceso auditą — per 60 minučių nustatysime,
                kurie procesai automatizuojami greičiausiai ir koks potencialus
                taupymas per metus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontaktai"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-colors duration-200"
                >
                  Gauti nemokamą auditą
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+37065500052"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 transition-colors duration-200"
                >
                  <Phone size={14} />
                  +370 655 00052
                </a>
              </div>
              <p className="mt-6 text-xs text-[#6E6E73]">
                Jokių įsipareigojimų · Nemokama · Atsakome per 24 val.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
