"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Auditas ir analizė",
    desc: "Išanalizuojame Jūsų procesus, identifikuojame automatizavimo galimybes ir apskaičiuojame potencialų ROI. Nemokamas, be įsipareigojimų.",
  },
  {
    num: "02",
    title: "Sprendimo projektavimas",
    desc: "Kartu su Jūsų komanda suprojektuojame AI sprendimą, apibrėžiame integracijas ir sutariame dėl sėkmės metrikų.",
  },
  {
    num: "03",
    title: "Greitas diegimas",
    desc: "Iteratyvinis kūrimas — pirmieji veikiantys moduliai per 2–4 savaites. Testuojame, tobuliname, plečiame.",
  },
  {
    num: "04",
    title: "Palaikymas ir augimas",
    desc: "Po diegimo teikiame nuolatinę techninę priežiūrą, stebime rezultatus ir optimizuojame sistemas augant Jūsų verslui.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#FBFBFB] border-y border-[#E5E5E7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Kaip dirbame
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4 text-balance">
            Nuo idėjos iki veikiančio sprendimo
          </h2>
          <p className="text-[#6E6E73]">
            Struktūrizuotas procesas, aiški komunikacija ir matomi rezultatai kiekviename etape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#E5E5E7] to-transparent"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-[#E5E5E7] flex items-center justify-center mb-6 shadow-sm">
                <span className="text-lg font-bold text-[#0071E3]">{step.num}</span>
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F] mb-3">{step.title}</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
