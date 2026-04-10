"use client";

import { motion } from "framer-motion";
import {
  Target,
  Layers,
  HeadphonesIcon,
  Award,
  Code2,
  RefreshCcw,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "B2B specializacija",
    desc: "Dirbame išskirtinai su verslo įmonėmis. Suprantame B2B procesus, ilgus pardavimų ciklus ir sudėtingus organizacinių struktūrų reikalavimus.",
  },
  {
    icon: Layers,
    title: "Pilnas ekosistemos integravimas",
    desc: "Integruojame AI su Jūsų esamomis sistemomis: ERP, CRM, buhalterine programine įranga ir kitomis priemonėmis. Jokių duomenų silų.",
  },
  {
    icon: Code2,
    title: "Individualus programavimas",
    desc: "Nekuriame šabloniškų sprendimų. Kiekvienas projektas — pritaikytas Jūsų verslo procesams, logikai ir reikalavimams.",
  },
  {
    icon: RefreshCcw,
    title: "Greitas diegimas",
    desc: "Pirmieji rezultatai per 4–8 savaites. Naudojame iteratyvinę metodologiją: greitai pateikiame veikiantį produktą, tada tobuliname.",
  },
  {
    icon: HeadphonesIcon,
    title: "Nuolatinis palaikymas",
    desc: "Partnerystė, o ne vienkartinis projektas. Teikiame techninę priežiūrą, optimizavimą ir sistemų atnaujinimus po diegimo.",
  },
  {
    icon: Award,
    title: "Garantuoti rezultatai",
    desc: "Prieš pradedant projektą sutariame dėl konkrečių verslo metrikų. Mūsų sėkmė matuojama Jūsų verslo rezultatais.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Kodėl mes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance">
            Technologijų partneris, kuris supranta Jūsų verslą
          </h2>
          <p className="text-[#6E6E73] text-lg leading-relaxed">
            Mūsų tikslas — ne parduoti technologiją, o išspręsti realias verslo
            problemas ir sukurti išmatuojamą vertę.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="flex gap-5 p-6 rounded-2xl bg-[#FBFBFB] border border-[#E5E5E7] hover:border-[#0071E3]/20 hover:bg-white transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-[#0071E3]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
