"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function AboutCtaSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Karjera */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-[#E5E5E7] p-8 md:p-10"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6">
              <Users size={20} className="text-[#6E6E73]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              Prisijunkite prie mūsų komandos
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-6 text-sm">
              Nuolat ieškome talentingų AI inžinierių, verslo analitikų ir
              projekto vadovų. Siūlome kūrybinę aplinką, realius iššūkius
              ir galimybę dirbti su naujausių technologijų projektais.
            </p>
            <a
              href="mailto:info@es4b.lt?subject=Karjera ES4B"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] transition-colors"
            >
              Siųsti CV
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Susisiekti */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-[#1D1D1F] rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 70% at 100% 100%, #0071E318 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-5">
                Pradėkite projektą
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4">
                Aptarkime, kaip AI gali transformuoti Jūsų verslą
              </h2>
              <p className="text-[#86868B] leading-relaxed mb-8 text-sm">
                Nemokamas 60 minučių proceso auditas. Identifikuosime
                automatizavimo galimybes ir apskaičiuosime potencialią metinę
                taupymo sumą.
              </p>
              <Link
                href="/kontaktai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Gauti nemokamą auditą
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
