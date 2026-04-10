"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const before = [
  "Darbuotojai atlieka pasikartojančias užduotis rankiniu būdu",
  "Klientai laukia atsakymo valandų ar dienų",
  "Sprendimai priimami remiantis nepilnais duomenimis",
  "Skalavimas reikalauja proporcingo darbuotojų skaičiaus augimo",
  "Klaidos dėl žmogiško faktoriaus generuoja papildomus kaštus",
];

const after = [
  "AI atlieka pasikartojančias užduotis 24/7 be pertraukų",
  "Klientai gauna atsakymą akimirksniu, bet kuriuo metu",
  "Sprendimai paremti realaus laiko duomenų analize",
  "Verslas skaluojasi be proporcingo kaštų augimo",
  "Automatizuoti procesai eliminuoja žmogiško faktoriaus klaidas",
];

export default function ValueSection() {
  return (
    <section className="bg-[#FBFBFB] border-y border-[#E5E5E7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Transformacija
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance">
            Kaip AI keičia Jūsų verslo realybę
          </h2>
          <p className="text-[#6E6E73] text-lg">
            Aiški ir išmatuojama transformacija — nuo dabartinės situacijos iki
            automatizuoto, efektyvaus verslo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-[#E5E5E7] p-8"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#86868B] mb-6">
              Dabar
            </p>
            <ul className="flex flex-col gap-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    size={18}
                    className="text-[#FF3B30] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[#6E6E73] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#0071E3]/20 p-8 shadow-sm"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-6">
              Su MAXY.LT
            </p>
            <ul className="flex flex-col gap-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#34C759] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[#1D1D1F] leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
