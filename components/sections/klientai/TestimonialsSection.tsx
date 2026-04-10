"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Skeptiškai žiūrėjome į AI — atrodė kaip mados dalykas. Po 6 mėnesių su ES4B galiu pasakyti: tai yra reali, išmatuojama grąža. Mūsų dokumentų apdorojimo komanda sumažėjo nuo 6 iki 2 žmonių, o procesų greitis išaugo 10 kartų.",
    author: "Rimas Paulauskas",
    role: "CFO",
    company: "BalticTrans UAB",
    initials: "RP",
    stars: 5,
  },
  {
    quote:
      "ES4B komanda išsiskiria tuo, kad kalba verslo kalba, ne techniniais žargonas. Projekto metu visada buvome informuoti, o kiekvienas diegimo etapas buvo aiškiai suderintas. Rezultatai viršijo pradinius lūkesčius.",
    author: "Agnė Stankevičiūtė",
    role: "E-komercijos direktorė",
    company: "SmartRetail Group",
    initials: "AS",
    stars: 5,
  },
  {
    quote:
      "Pardavimų automatizavimas pakeitė tai, kaip mes dirbame su potencialiais klientais. Vadybininkai dabar susikoncentruoja tik į karštus kontaktus. Per pirmus 3 mėnesius pajamos iš naujų klientų išaugo 40%.",
    author: "Tadas Bernotas",
    role: "Pardavimų direktorius",
    company: "NordFinance AS",
    initials: "TB",
    stars: 5,
  },
  {
    quote:
      "Gamybos analitikos platforma suteikė tai, ko visada norėjome — realaus laiko vaizdą. Dabar žinome apie galimas problemas prieš jas, ne po to. Tai iš esmės pakeitė, kaip valdome gamyklą.",
    author: "Valdas Šimkus",
    role: "Gamybos direktorius",
    company: "LitMetal Group",
    initials: "VŠ",
    stars: 5,
  },
  {
    quote:
      "Ypač vertinu tai, kad ES4B nesustojo po diegimo. Nuolatinis palaikymas, modelių optimizavimas ir greitas reagavimas į problemas — tokio partnerio ieškojome.",
    author: "Kristina Mockevičienė",
    role: "Operacijų vadovė",
    company: "EuroPack UAB",
    initials: "KM",
    stars: 5,
  },
  {
    quote:
      "ROI pasiekėme per 5 mėnesius, nors planuojome 9. Chatbot'as per pirmus du mėnesius sumažino el. pašto srautą 62%. Klientų pasitenkinimo rodiklis išaugo nuo 3,8 iki 4,6 iš 5.",
    author: "Lukas Vaitkevičius",
    role: "IT ir inovacijų direktorius",
    company: "Medistra klinika",
    initials: "LV",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-[#FF9500] fill-[#FF9500]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FBFBFB] border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Atsiliepimai
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4 text-balance">
            Ką sako mūsų klientai
          </h2>
          <p className="text-[#6E6E73]">
            Nuoširdūs vadovų ir direktorių atsiliepimai apie bendradarbiavimą
            ir pasiektus rezultatus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-[#E5E5E7] p-7 flex flex-col"
            >
              <Stars count={t.stars} />

              <blockquote className="flex-1 mt-5 mb-6">
                <p className="text-sm text-[#1D1D1F] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-[#F5F5F7]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1D1D1F] to-[#6E6E73] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1D1D1F] leading-tight">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#86868B] leading-tight">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
