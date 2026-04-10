"use client";

import { motion } from "framer-motion";
import {
  Brain, Code2, GitMerge, BarChart2,
  Users, ShieldCheck,
} from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Dirbtinis intelektas ir ML",
    desc: "Didelių kalbos modelių (LLM) integracija, mašininio mokymosi modelių kūrimas ir apmokymas naudojant Jūsų verslo duomenis. OpenAI, Anthropic, Google Gemini ekosistemos.",
    tags: ["LLM", "RAG", "Fine-tuning", "NLP"],
  },
  {
    icon: Code2,
    title: "Procesų automatizavimas (RPA)",
    desc: "Robotic process automation sprendimai, imituojantys žmogaus veiksmus kompiuterinėse sistemose. Veikia su bet kokia programine įranga — net be API.",
    tags: ["UiPath", "Power Automate", "Python RPA", "Custom bots"],
  },
  {
    icon: GitMerge,
    title: "Sistemų integracija",
    desc: "Skirtingų verslo sistemų sujungimas į vieną duomenų ekosistemą. ERP, CRM, e. komercija, marketingo įrankiai — viskas komunikuoja tarpusavyje.",
    tags: ["REST API", "Webhooks", "ETL", "Middleware"],
  },
  {
    icon: BarChart2,
    title: "Duomenų inžinerija ir analitika",
    desc: "Duomenų sandėlių kūrimas, transformavimas ir vizualizacija. Realaus laiko dashboards ir prognozuojamoji analizė valdymo sprendimams.",
    tags: ["PowerBI", "dbt", "BigQuery", "Python"],
  },
  {
    icon: Users,
    title: "Verslo proceso analizė",
    desc: "Prieš diegiant technologiją — išanalizuojame procesus, identifikuojame kliūtis ir projektuojame optimalų automatizuotą srautą. Vertė per verslą, ne per technologiją.",
    tags: ["Process mapping", "ROI analizė", "Change mgmt"],
  },
  {
    icon: ShieldCheck,
    title: "Saugumas ir atitiktis",
    desc: "AI sprendimai, atitinkantys BDAR (GDPR), ISO 27001 ir sektoriaus reikalavimus. Duomenų privatumas — ne priedas, o architektūros pagrindas.",
    tags: ["GDPR", "ISO 27001", "SOC 2", "Audit logs"],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#FBFBFB] border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Kompetencijos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance">
            Techninė giluma. Verslo supratimas.
          </h2>
          <p className="text-[#6E6E73] text-lg leading-relaxed">
            Mūsų komanda apjungia du pasaulius: technologijų ekspertizę ir
            gilų B2B verslo procesų supratimą. Tai leidžia kurti sprendimus,
            kurie veikia ne tik techniškai, bet ir generuoja realią verslo vertę.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#E5E5E7] p-7 hover:border-[#0071E3]/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#0071E3]" />
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-3">{a.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-5">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#F5F5F7] rounded-full text-[10px] font-semibold text-[#6E6E73] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
