"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight,
  MessageSquare, BarChart2, FileText, ShoppingCart,
  Megaphone, LineChart, Settings, Sparkles,
} from "lucide-react";

const ICONS = {
  MessageSquare, BarChart2, FileText, ShoppingCart,
  Megaphone, LineChart, Settings, Sparkles,
} as const;

export type IconKey = keyof typeof ICONS;

export interface ServiceBlockProps {
  id: string;
  index: number;
  iconKey: IconKey;
  iconColor: string;
  iconBg: string;
  title: string;
  intro: string;
  problem: string;
  solution: string;
  benefits: string[];
  metrics: { value: string; label: string }[];
  alt?: boolean;
}

export default function ServiceBlock({
  id, index, iconKey, iconColor, iconBg,
  title, intro, problem, solution, benefits, metrics, alt,
}: ServiceBlockProps) {
  const Icon = ICONS[iconKey];

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? "bg-[#FBFBFB]" : "bg-white"} border-b border-[#E5E5E7]`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-[#86868B] tracking-widest">
                {String(index).padStart(2, "0")}
              </span>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: iconBg }}
              >
                <Icon size={17} style={{ color: iconColor }} />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4 text-balance">
              {title}
            </h2>
            <p className="text-[#6E6E73] text-lg leading-relaxed mb-8">{intro}</p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-[#FFF0EF] border border-[#FF3B30]/10">
                <p className="text-xs font-semibold text-[#FF3B30] uppercase tracking-wider mb-2">
                  Problema
                </p>
                <p className="text-sm text-[#1D1D1F] leading-relaxed">{problem}</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F0FFF4] border border-[#34C759]/15">
                <p className="text-xs font-semibold text-[#34C759] uppercase tracking-wider mb-2">
                  Sprendimas
                </p>
                <p className="text-sm text-[#1D1D1F] leading-relaxed">{solution}</p>
              </div>
            </div>

            <Link
              href="/kontaktai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Gauti konsultaciją
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl border border-[#E5E5E7] p-7">
              <p className="text-xs font-semibold text-[#86868B] uppercase tracking-widest mb-5">
                Verslo nauda
              </p>
              <ul className="flex flex-col gap-3.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#34C759] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1D1D1F] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-2xl border border-[#E5E5E7] p-5 text-center"
                >
                  <p className="text-2xl font-bold tracking-tight mb-1" style={{ color: iconColor }}>
                    {m.value}
                  </p>
                  <p className="text-[10px] text-[#86868B] font-medium leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
