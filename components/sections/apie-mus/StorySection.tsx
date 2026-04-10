"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Įkūrimas",
    desc: 'UAB \u201EES4B\u201C įkurta Kaune su aiškiu tikslu — padėti B2B įmonėms išnaudoti automatizavimo galimybes. Pirmieji projektai — procesų konsultacijos ir RPA sprendimai.',
  },
  {
    year: "2020",
    title: "AI integracija",
    desc: "Su sparčiai besivystančiais didžiaisiais kalbos modeliais pradėjome integruoti AI į automizavimo sprendimus. Pirmieji chatbot'ai ir dokumentų apdorojimo projektai.",
  },
  {
    year: "2022",
    title: "Tarptautinė plėtra",
    desc: "Pirmieji projektai Latvijoje, Estijoje ir Lenkijoje. Įmonė išaugo iki 20 specialistų komandos, apimančios AI inžinierius, verslo analitikus ir projekto vadovus.",
  },
  {
    year: "2024",
    title: "Platforma MAXY.LT",
    desc: "Sukūrėme MAXY.LT — visapusišką AI paslaugų platformą B2B klientams. Šiandien aptarnaujame 80+ aktyvių klientų ir vykdome 30+ aktyvių projektų vienu metu.",
  },
];

export default function StorySection() {
  return (
    <section className="bg-white border-b border-[#E5E5E7] py-20 md:py-28">
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
              Mūsų istorija
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-6 text-balance">
              Nuo procesų konsultacijų iki pilno AI ekosistemos diegimo
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              ES4B gimė iš paprastos pastebėjimo: Lietuvos B2B įmonės turi
              didžiulį potencialą efektyvumui didinti, tačiau neturi vidinio
              AI kompetencijų centro, o brangūs konsultantai siūlo sprendimus
              be aiškios grąžos garantijos.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Mes užpildome šią spragą — esame tiek technologijų partneris,
              tiek verslo konsultantas. Suprantame ir kodą, ir procesus,
              ir verslo logiką. Tai mūsų pagrindinis pranašumas.
            </p>
            <p className="text-[#6E6E73] leading-relaxed">
              Per šešerius veiklos metus pristatėme daugiau nei 150 sėkmingų
              automatizavimo projektų įvairiose B2B sektoriuose: gamyboje,
              logistikoje, finansų paslaugose, e. komercijoje ir profesionaliose
              paslaugose.
            </p>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-0"
          >
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#EBF4FF] border-2 border-[#0071E3]/30 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[10px] font-bold text-[#0071E3]">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[#E5E5E7] my-2" />
                  )}
                </div>
                {/* Content */}
                <div className={`pb-8 ${i === milestones.length - 1 ? "" : ""}`}>
                  <h3 className="text-base font-semibold text-[#1D1D1F] mb-2 mt-1.5">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
