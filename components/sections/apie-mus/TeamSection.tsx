"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "MK",
    name: "Mantas Kazlauskas",
    role: "Įkūrėjas ir CEO",
    bio: "15 metų verslo procesų optimizavimo patirtis. Anksčiau — operacijų direktorius didelėje logistikos įmonėje. MBA iš ISM universitetui.",
    tags: ["Strategija", "Verslo plėtra", "B2B pardavimai"],
  },
  {
    initials: "LJ",
    name: "Laura Jankauskienė",
    role: "Technologijų direktorė (CTO)",
    bio: "Kompiuterių mokslų daktarė, specializacija — mašininis mokymasis. Anksčiau — ML inžinierė Google ir Nord Security. 10 metų AI kūrimo patirtis.",
    tags: ["ML inžinerija", "LLM", "Architektūra"],
  },
  {
    initials: "AT",
    name: "Andrius Tamošiūnas",
    role: "Vyriausiasis verslo analitikas",
    bio: "Inžinerinis išsilavinimas ir 8 metų patirtis procesų optimizavime gamybos ir logistikos sektoriuje. Lean Six Sigma Black Belt sertifikatas.",
    tags: ["Procesų analizė", "RPA", "Gamyba"],
  },
  {
    initials: "EV",
    name: "Eglė Valentinavičiūtė",
    role: "Projektų vadovė",
    bio: "PMP sertifikuota projektų vadovė su 7 metų patirtimi IT projektuose. Specializuojasi sudėtingų, daugiafunkcinių komandų valdyme ir klientų komunikacijoje.",
    tags: ["Projektų valdymas", "Agile", "Klientų santykiai"],
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-xl mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Komanda
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4 text-balance">
            Technologijų ekspertai su verslo supratimo DNR
          </h2>
          <p className="text-[#6E6E73] leading-relaxed">
            20+ specialistų komanda, kurioje dirba AI inžinieriai, verslo
            analitikai, projekto vadovai ir integravimo specialistai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="bg-[#FBFBFB] rounded-2xl border border-[#E5E5E7] p-6"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0071E3] to-[#5AC8FA] flex items-center justify-center mb-5">
                <span className="text-white font-bold text-lg">{t.initials}</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1D1F] mb-0.5">{t.name}</h3>
              <p className="text-xs text-[#0071E3] font-medium mb-4">{t.role}</p>
              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">{t.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white border border-[#E5E5E7] rounded-full text-[10px] font-medium text-[#6E6E73]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
