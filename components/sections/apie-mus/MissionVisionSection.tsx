"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-[#FBFBFB] border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Misija */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-[#E5E5E7] p-8 md:p-10"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#EBF4FF] flex items-center justify-center mb-7">
              <Target size={20} className="text-[#0071E3]" />
            </div>
            <p className="text-xs font-semibold text-[#0071E3] tracking-widest uppercase mb-4">
              Mūsų misija
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] tracking-tight mb-5 leading-snug">
              Prieinamas dirbtinis intelektas kiekvienai B2B įmonei
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Tikime, kad AI automatizavimas neturi būti privilegija tik didelėms
              korporacijoms. Mūsų misija — padaryti pažangias technologijas
              prieinamas ir praktiškai naudingas vidutinio ir didelio dydžio
              B2B įmonėms Lietuvoje ir Europoje.
            </p>
            <p className="text-[#6E6E73] leading-relaxed">
              Kiekvienas projektas matuojamas konkrečiais verslo rezultatais:
              sumažėjusiais kaštais, padidėjusiu efektyvumu ir augančiomis
              pajamomis — ne tik sėkmingo diegimo faktu.
            </p>
          </motion.div>

          {/* Vizija */}
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
                  "radial-gradient(ellipse 60% 60% at 100% 0%, #0071E320 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-7">
                <Eye size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold text-[#0071E3] tracking-widest uppercase mb-4">
                Mūsų vizija
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5 leading-snug">
                Tapti pirmaujančiu AI automatizavimo partneriu Baltijos regione
              </h2>
              <p className="text-[#86868B] leading-relaxed mb-5">
                Iki 2027 metų siekiame, kad daugiau nei 200 B2B įmonių
                Baltijos regione naudotų mūsų AI sprendimus kasdieniniame
                darbe — ne kaip eksperimentą, o kaip pagrindinį verslo
                konkurencingumo įrankį.
              </p>
              <p className="text-[#86868B] leading-relaxed">
                Matome ateitį, kurioje Lietuvos įmonės konkuruoja pasaulinėje
                rinkoje ne dėl pigesnės darbo jėgos, o dėl aukštesnio
                automatizavimo lygio ir duomenimis grįstų sprendimų.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
