"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "Dirbame išskirtinai su B2B įmonėmis — suprantame ilgus pardavimų ciklus, sudėtingus pirkimų procesus ir organizacinius reikalavimus",
  "Nekuriame šabloniškų SaaS sprendimų — kiekvienas projektas yra individualiai suprojektuotas pagal Jūsų procesus",
  "Integruojame su esamomis sistemomis: ERP, CRM, buhalterinė programa — jokio duomenų perkėlimo iš naujo",
  "Lietuviškai kalbantis palaikymas ir projekto komanda — komunikacija be kalbos barjerų ir laiko zonų skirtumų",
  "Skaidrūs kainų modeliai — žinote, už ką mokate, ir matote grąžą prieš plečiant sprendimą",
  "ISO 27001 lygmens duomenų saugos praktikos visuose projektuose",
];

const sectors = [
  { name: "Gamyba ir pramonė", count: "25+ projektų" },
  { name: "Logistika ir tiekimas", count: "20+ projektų" },
  { name: "Finansų paslaugos", count: "18+ projektų" },
  { name: "E. komercija ir mažmeninė", count: "30+ projektų" },
  { name: "Profesionalios paslaugos", count: "22+ projektų" },
  { name: "IT ir technologijos", count: "15+ projektų" },
];

export default function B2BPositionSection() {
  return (
    <section className="bg-[#FBFBFB] border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
              B2B pozicionavimas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-6 text-balance">
              Kodėl B2B įmonės renkasi mus, o ne bendrines agentūras?
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-8">
              Bendrinės skaitmeninės agentūros gali pasiūlyti AI kaip papildomą
              paslaugą. Mes — tik AI ir tik B2B. Tai leidžia pasiekti tokį
              specializacijos lygį, kurio neįmanoma pasiekti dirbant su viskuo.
            </p>

            <ul className="flex flex-col gap-4">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-[#34C759] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[#1D1D1F] leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — sectors */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-[#E5E5E7] p-8">
              <p className="text-xs font-semibold text-[#86868B] uppercase tracking-widest mb-6">
                Sektoriai, kuriuose turime patirtį
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {sectors.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between py-3 border-b border-[#F5F5F7] last:border-0"
                  >
                    <span className="text-sm font-medium text-[#1D1D1F]">{s.name}</span>
                    <span className="text-xs text-[#86868B] bg-[#F5F5F7] px-2.5 py-1 rounded-full font-medium">
                      {s.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5E5E7]">
                {[
                  { value: "150+", label: "projektų" },
                  { value: "80+", label: "klientų" },
                  { value: "6+", label: "metų patirties" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-[#1D1D1F] mb-0.5">{s.value}</p>
                    <p className="text-xs text-[#86868B]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
