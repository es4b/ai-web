"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const metrics = [
  { number: "3×", description: "greitesni verslo procesai" },
  { number: "60%", description: "mažiau rankinių darbų" },
  { number: "6 mėn.", description: "iki pilno ROI" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden mt-16 flex items-center">

      <Image
        src="/images/bg6.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="font-bold tracking-tighter leading-[1.08] text-white mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 50px)" }}
          >
            Automatizuokite procesus.{" "}
            <span className="text-white">Auginkite verslą.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[17px] leading-relaxed max-w-[540px] mx-auto mb-10"
            style={{ color: "#AAAAAA" }}
          >
            Diegiame dirbtinio intelekto sprendimus, kurie automatizuoja
            verslo sprocesus, mažina kaštus ir leidžia Jūsų komandai
            susikoncentruoti į strateginę veiklą.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <Link
              href="/kontaktai"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#1D1D1F] bg-white hover:bg-[#F5F5F7] transition-colors duration-200 w-full sm:w-auto"
            >
              Gauti nemokamą konsultaciją
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/paslaugos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white border border-white/50 hover:border-white hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto"
            >
              Peržiūrėti paslaugas
              <ChevronRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 }}
          >
            <div className="h-px mb-10" style={{ background: "#444444" }} />

            <div className="grid grid-cols-3 gap-0">
              {metrics.map((m, i) => (
                <div
                  key={m.description}
                  className={[
                    "flex flex-col items-center gap-2 py-2",
                    i !== metrics.length - 1 ? "border-r" : "",
                  ].join(" ")}
                  style={i !== metrics.length - 1 ? { borderColor: "#444444" } : {}}
                >
                  <span
                    className="font-bold tracking-tight text-white leading-none"
                    style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                  >
                    {m.number}
                  </span>
                  <span className="text-[13px] leading-snug" style={{ color: "#AAAAAA" }}>
                    {m.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
