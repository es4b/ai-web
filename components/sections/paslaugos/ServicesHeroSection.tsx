"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare, BarChart2, FileText, ShoppingCart,
  Megaphone, LineChart, Settings, Sparkles,
  type LucideIcon,
} from "lucide-react";

interface Anchor {
  icon: LucideIcon;
  label: string;
  href: string;
}

const anchors: Anchor[] = [
  { icon: MessageSquare, label: "Klientų aptarnavimas",    href: "#klientu-aptarnavimas" },
  { icon: BarChart2,     label: "Pardavimų automatizavimas", href: "#pardavimai" },
  { icon: FileText,      label: "Dokumentų apdorojimas",   href: "#dokumentai" },
  { icon: ShoppingCart,  label: "E. komercija",            href: "#ekomercija" },
  { icon: Megaphone,     label: "Marketingas",             href: "#marketingas" },
  { icon: LineChart,     label: "Duomenų analitika",       href: "#analitika" },
  { icon: Settings,      label: "Vidiniai procesai",       href: "#procesai" },
  { icon: Sparkles,      label: "Individualūs sprendimai", href: "#individualus" },
];

function ServiceCard({ anchor, active, onActivate }: {
  anchor: Anchor;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = anchor.icon;
  return (
    <Link
      href={anchor.href}
      onClick={onActivate}
      className={[
        "group relative flex flex-col items-center justify-center gap-3",
        "rounded-2xl border px-3 py-5 text-center",
        "transition-all duration-200 ease-out cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] focus-visible:ring-offset-2",
        active
          ? "bg-[#1D1D1F] border-[#1D1D1F]"
          : [
              "bg-white border-[#E5E5E5]",
              "hover:-translate-y-px",
              "hover:border-[#C7C7CC]",
              "hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
            ].join(" "),
      ].join(" ")}
    >
      <Icon
        size={22}
        strokeWidth={1.75}
        className={[
          "flex-shrink-0 transition-colors duration-200",
          active ? "text-white" : "text-[#1D1D1F]",
        ].join(" ")}
      />
      <span
        className={[
          "text-[13px] font-medium leading-snug line-clamp-2 transition-colors duration-200",
          active ? "text-white" : "text-[#3A3A3C]",
        ].join(" ")}
      >
        {anchor.label}
      </span>
    </Link>
  );
}

export default function ServicesHeroSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#FAFAFA] pt-32 pb-14 md:pt-44 md:pb-18 border-b border-[#E5E5E7]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-3">
            Paslaugos
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1D1D1F] tracking-tight leading-[1.08] mb-4 text-balance">
            AI sprendimai kiekvienam verslo procesui
          </h1>
          <p className="text-lg text-[#6E6E73] leading-relaxed">
            Automatizuojame pardavimus, klientų aptarnavimą, dokumentų valdymą ir
            vidinius procesus. Kiekvienas sprendimas — pritaikytas Jūsų verslo
            specifikai, integruotas su esamomis sistemomis.
          </p>
        </motion.div>

        {/* Service navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          aria-label="Paslaugų navigacija"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5"
        >
          {anchors.map((a) => (
            <ServiceCard
              key={a.href}
              anchor={a}
              active={active === a.href}
              onActivate={() => setActive(a.href)}
            />
          ))}
        </motion.nav>

      </div>
    </section>
  );
}
