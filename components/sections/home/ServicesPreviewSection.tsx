"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  BarChart2,
  FileText,
  ShoppingCart,
  Megaphone,
  LineChart,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Klientų aptarnavimo AI",
    desc: "Automatizuoti chatbot'ai ir el. pašto atsakymai. Išsprendžia iki 80% pakartotinių užklausų be žmogaus įsikišimo.",
    href: "/paslaugos#klientu-aptarnavimas",
    color: "#0071E3",
    bg: "#EBF4FF",
  },
  {
    icon: BarChart2,
    title: "Pardavimų automatizavimas",
    desc: "CRM integracijos, lead'ų kvalifikavimas ir pardavimų piltuvo automatizavimas. Pardavėjai dirba tik su karštaisiais potencialiais klientais.",
    href: "/paslaugos#pardavimai",
    color: "#34C759",
    bg: "#F0FFF4",
  },
  {
    icon: FileText,
    title: "Dokumentų apdorojimas",
    desc: "Automatinis duomenų ištraukimas iš sąskaitų, sutarčių ir formų. Eliminavimas rankinio duomenų vedimo.",
    href: "/paslaugos#dokumentai",
    color: "#FF9500",
    bg: "#FFF8EB",
  },
  {
    icon: ShoppingCart,
    title: "E. komercijos automatizavimas",
    desc: "Kainų valdymas, inventoriaus optimizavimas ir personalizuotos rekomendacijos realiu laiku.",
    href: "/paslaugos#ekomercija",
    color: "#AF52DE",
    bg: "#F5EEFF",
  },
  {
    icon: Megaphone,
    title: "Marketingo automatizavimas",
    desc: "AI valdomi el. pašto kampanijų segmentavimas, turinio generavimas ir kampanijų optimizavimas.",
    href: "/paslaugos#marketingas",
    color: "#FF3B30",
    bg: "#FFF0EF",
  },
  {
    icon: LineChart,
    title: "Duomenų analitika ir prognozavimas",
    desc: "Verslo intelekto sprendimai ir prognozuojamoji analizė. Priimkite sprendimus remiantis duomenimis, o ne intuicija.",
    href: "/paslaugos#analitika",
    color: "#5AC8FA",
    bg: "#EFF9FF",
  },
  {
    icon: Settings,
    title: "Vidinių procesų automatizavimas",
    desc: "HR, buhalterija, tiekimo grandinė — vidiniai procesai optimizuojami naudojant RPA ir AI.",
    href: "/paslaugos#procesai",
    color: "#6E6E73",
    bg: "#F5F5F7",
  },
  {
    icon: Sparkles,
    title: "Individualūs AI sprendimai",
    desc: "Pagal Jūsų verslo poreikius sukurti unikalūs AI modeliai ir integracijos su esamomis sistemomis.",
    href: "/paslaugos#individualus",
    color: "#0071E3",
    bg: "#EBF4FF",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Paslaugos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance">
            Visapusiški AI sprendimai Jūsų verslui
          </h2>
          <p className="text-[#6E6E73] text-lg leading-relaxed">
            Nuo klientų aptarnavimo iki vidinių procesų — automatizuojame visą
            verslo ekosistemą, kad Jūsų komanda galėtų susikoncentruoti į augimą.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-[#E5E5E7] bg-white hover:border-[#0071E3]/30 hover:shadow-md transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: s.bg }}
                  >
                    <Icon size={18} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-xs text-[#0071E3] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Sužinoti daugiau
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Link
            href="/paslaugos"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-sm font-semibold rounded-full border border-[#E5E5E7] transition-colors duration-200"
          >
            Visos paslaugos
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
