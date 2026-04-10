"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Rezultatai, ne pažadai",
    desc: "Kiekvienas projektas prasideda nuo aiškiai apibrėžtų sėkmės metrikų. Jei negalime pademonstruoti išmatuojamos grąžos, neimame projekto. Mūsų reputacija paremta klientų verslo rezultatais, ne prezentacijų skaidrėmis.",
  },
  {
    num: "02",
    title: "Partnerystė, o ne sandoris",
    desc: "Nesiekiame parduoti ir pamiršti. Ilgalaikė partnerystė su klientu reiškia, kad mes investuojame į jo augimą. Kai klientas auga — augame ir mes. Daugiau kaip 80% mūsų pajamų gaunama iš ilgalaikių klientų.",
  },
  {
    num: "03",
    title: "Paprastumas sudėtingoje technologijoje",
    desc: "AI gali būti neįtikėtinai sudėtingas po gaubtu, bet galutinis naudotojas turi matyti paprastą, intuityvų įrankį. Projektuojame sprendimus, kuriais naudojasi žmonės, o ne tik IT specialistai.",
  },
  {
    num: "04",
    title: "Nuolatinis mokymasis",
    desc: "AI srityje stovėti vietoje reiškia eiti atgal. Mūsų komanda nuolat gilina žinias, testuoja naujas technologijas ir dalijasi žiniomis su klientais. Tai, ką diegiam šiandien, yra geriausia, ką rinka siūlo šiuo momentu.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Vertybės
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4 text-balance">
            Principai, kuriais vadovaujamės kiekviename projekte
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="flex gap-6 p-7 rounded-2xl bg-[#FBFBFB] border border-[#E5E5E7]"
            >
              <span className="text-3xl font-bold text-[#E5E5E7] flex-shrink-0 leading-none mt-1">
                {v.num}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-3">{v.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
