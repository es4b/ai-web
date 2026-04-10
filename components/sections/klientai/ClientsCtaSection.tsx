"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const sectors = [
  "Logistika ir transportas",
  "Gamyba ir pramonė",
  "Finansų paslaugos",
  "E. komercija",
  "Sveikatos priežiūra",
  "Profesionalios paslaugos",
  "Statyba ir NT",
  "Maisto pramonė",
];

export default function ClientsCtaSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Sectors cloud */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#FBFBFB] rounded-3xl border border-[#E5E5E7] p-8 md:p-10"
          >
            <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-5">
              Mūsų klientų sektoriai
            </p>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              Dirbame su įmonėmis iš visų B2B sektorių
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-2 bg-white border border-[#E5E5E7] rounded-full text-sm text-[#1D1D1F] font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#6E6E73] leading-relaxed">
              Kiekvienas sektorius turi unikalius procesus ir reikalavimus.
              Mūsų komanda turi patirtį su kiekvienu iš jų ir pritaiko
              sprendimus prie Jūsų specifikos.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-[#1D1D1F] rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 0% 100%, #0071E318 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-5">
                Tapkite klientu
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 text-balance">
                Jūsų verslas gali tapti kita sėkmės istorija
              </h3>
              <p className="text-[#86868B] text-sm leading-relaxed mb-8">
                Pradėkite nemokamu proceso auditu. Per 60 minučių
                identifikuosime didžiausias automatizavimo galimybes
                ir apskaičiuosime potencialią metinę taupymo sumą.
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Gauti nemokamą auditą
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/paslaugos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 transition-colors duration-200"
              >
                <FileText size={14} />
                Peržiūrėti paslaugas
              </Link>
              <p className="text-xs text-[#6E6E73] text-center mt-1">
                Jokių įsipareigojimų · Atsakome per 24 val.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
