"use client";

import { motion, useMotionValue, animate, type Transition, type TargetAndTransition } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const ease = [0.215, 0.61, 0.355, 1] as const;

const fade = (delay = 0): { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition } => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [...ease], delay },
});

function SvgNodes() {
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <motion.circle cx="160" cy="80" r="22" stroke="#1D1D1F" strokeWidth="1"
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [...ease], delay: 0.6 }} />
      <motion.circle cx="160" cy="80" r="8" fill="#1D1D1F" fillOpacity="0.12"
        animate={{ r: [8, 11, 8] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }} />
      {[{ cx: 56, cy: 36 }, { cx: 264, cy: 36 }, { cx: 56, cy: 124 }, { cx: 264, cy: 124 }].map((n, i) => (
        <g key={i}>
          <motion.line x1={n.cx} y1={n.cy} x2="160" y2="80" stroke="#1D1D1F" strokeWidth="1"
            strokeOpacity="0.15" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: [...ease] }} />
          <motion.circle cx={n.cx} cy={n.cy} r="7" stroke="#E5E5E5" strokeWidth="1.5" fill="#F5F5F7"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: [...ease] }} />
          <motion.circle cx={n.cx} cy={n.cy} r="2.5" fill="#1D1D1F" fillOpacity="0.5"
            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 + i * 0.3 }} />
        </g>
      ))}
      <motion.text x="160" y="84" textAnchor="middle" fontSize="9" fill="#1D1D1F" fontWeight="600" fillOpacity="0.6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }}>
        ES4B
      </motion.text>
    </svg>
  );
}

function SvgLoop() {
  const bars = [{ h: 44, x: 80 }, { h: 60, x: 140 }, { h: 76, x: 200 }];
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {bars.map((b, i) => (
        <g key={i}>
          <motion.rect x={b.x} y={120 - b.h} width="40" height={b.h} rx="4"
            fill="#1D1D1F" fillOpacity={0.06 + i * 0.04} stroke="#E5E5E5" strokeWidth="1"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            style={{ transformOrigin: `${b.x + 20}px 120px` }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: [...ease] }} />
          <motion.circle cx={b.x + 20} cy={120 - b.h - 8} r="4" fill="#1D1D1F" fillOpacity="0.4"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.15, ease: [...ease] }} />
        </g>
      ))}
      <motion.path d="M 100 76 C 100 140 220 140 220 76" stroke="#1D1D1F" strokeWidth="1"
        strokeOpacity="0.12" strokeDasharray="4 4" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [...ease] }} />
      <motion.circle cx="160" cy="140" r="3.5" fill="#1D1D1F" fillOpacity="0.3"
        animate={{ x: [-60, 60, -60] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }} />
    </svg>
  );
}

function SvgBar() {
  const bars = [{ h: 32, x: 54 }, { h: 52, x: 98 }, { h: 70, x: 142 }, { h: 86, x: 186 }, { h: 104, x: 230 }];
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="44" y1="128" x2="276" y2="128" stroke="#E5E5E5" strokeWidth="1" />
      {bars.map((b, i) => (
        <g key={i}>
          <motion.rect x={b.x} y={128 - b.h} width="34" height={b.h} rx="3"
            fill="#1D1D1F" fillOpacity={0.06 + i * 0.06} stroke="#E5E5E5" strokeWidth="1"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            style={{ transformOrigin: `${b.x + 17}px 128px` }}
            transition={{ duration: 0.55, delay: 0.6 + i * 0.12, ease: [...ease] }} />
          <motion.text x={b.x + 17} y={122 - b.h} textAnchor="middle" fontSize="8"
            fill="#86868B"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.85 + i * 0.12, duration: 0.3 }}>
            {["Q1", "Q2", "Q3", "Q4", "Q5"][i]}
          </motion.text>
        </g>
      ))}
      <motion.path
        d={`M ${bars[0].x + 17} ${128 - bars[0].h} ${bars.slice(1).map(b => `L ${b.x + 17} ${128 - b.h}`).join(" ")}`}
        stroke="#1D1D1F" strokeWidth="1.5" strokeOpacity="0.2" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 1, ease: [...ease] }} />
    </svg>
  );
}

const slides = [
  {
    number: "3×",
    title: "Greitesni procesai",
    description: "Dirbtinio intelekto automatizacija pašalina rankinius butelio kaklelius ir pagreitina kiekvienos komandos darbų eigą.",
    svg: <SvgNodes />,
  },
  {
    number: "60%",
    title: "Mažiau rankinių darbų",
    description: "Intelektualūs darbo eigos agentai perima pasikartojančias užduotis, kad Jūsų komanda galėtų sutelkti dėmesį į svarbius dalykus.",
    svg: <SvgLoop />,
  },
  {
    number: "6 mėn.",
    title: "Iki pilno ROI",
    description: "Klientai pasiekia išmatuojamą investicijų grąžą per pirmuosius šešis mėnesius nuo AI sprendimų diegimo.",
    svg: <SvgBar />,
  },
];

const SLIDE_WIDTH = 1100;
const GAP = 20;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const dragRef = useRef(false);

  function goTo(index: number) {
    setActive(index);
    animate(x, -(index * (SLIDE_WIDTH + GAP)), { duration: 0.55, ease: [...ease] });
  }

  function handleDragEnd(_: never, info: { offset: { x: number } }) {
    dragRef.current = false;
    if (info.offset.x < -50 && active < slides.length - 1) goTo(active + 1);
    else if (info.offset.x > 50 && active > 0) goTo(active - 1);
    else goTo(active);
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] mt-16 overflow-hidden bg-white">
      <div className="relative w-full flex flex-col items-center px-5 md:px-8 py-6 gap-5">

        {/* Hero text */}
        <div className="flex flex-col items-center text-center gap-3 max-w-[800px]">
          <motion.h1
            {...fade(0.1)}
            className="font-bold tracking-tighter leading-[1.1] text-[#1D1D1F]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Automatizuokite procesus.{" "}
            <span className="text-[#1D1D1F]">Auginkite verslą.</span>
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="font-normal leading-relaxed max-w-[500px]"
            style={{ fontSize: "16px", color: "#86868B" }}
          >
            UAB „ES4B" diegia dirbtinio intelekto sprendimus, kurie automatizuoja
            pasikartojančius procesus, mažina kaštus ir leidžia Jūsų komandai
            susikoncentruoti į strateginę veiklą.
          </motion.p>

          <motion.div
            {...fade(0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Link
              href="/kontaktai"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white bg-[#1D1D1F] hover:bg-[#000000] transition-colors duration-200 w-full sm:w-auto"
            >
              Gauti nemokamą konsultaciją
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/paslaugos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-[#1D1D1F] border border-[#1D1D1F] bg-white hover:bg-[#F5F5F7] transition-colors duration-200 w-full sm:w-auto"
            >
              Peržiūrėti paslaugas
              <ChevronRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Slider */}
        <motion.div {...fade(0.4)} className="w-full flex flex-col items-center gap-3">
          <div className="w-full overflow-hidden" style={{ maxWidth: `${SLIDE_WIDTH}px` }}>
            <motion.div
              drag="x"
              dragConstraints={{ left: -((slides.length - 1) * (SLIDE_WIDTH + GAP)), right: 0 }}
              dragElastic={0.1}
              onDragStart={() => { dragRef.current = true; }}
              onDragEnd={handleDragEnd}
              style={{ x, display: "flex", gap: `${GAP}px`, cursor: "grab" }}
              whileTap={{ cursor: "grabbing" }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-2xl select-none"
                  style={{
                    width: `${SLIDE_WIDTH}px`,
                    backgroundColor: "#F5F5F7",
                    border: "1px solid #E5E5E5",
                    padding: "clamp(16px, 2.5vw, 32px)",
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex flex-col gap-2 md:w-1/2">
                      <span
                        className="font-bold tracking-tighter leading-none text-[#1D1D1F]"
                        style={{ fontSize: "56px" }}
                      >
                        {slide.number}
                      </span>
                      <h3 className="font-semibold text-lg tracking-tight text-[#1D1D1F]">
                        {slide.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#86868B", lineHeight: "1.6" }}>
                        {slide.description}
                      </p>
                    </div>
                    <div className="md:w-1/2 w-full" style={{ height: "130px" }}>
                      {i === active && slide.svg}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "20px" : "6px",
                  height: "6px",
                  backgroundColor: i === active ? "#1D1D1F" : "#D1D1D6",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div {...fade(0.5)} className="grid grid-cols-3 gap-3 w-full max-w-[1100px]">
          {[
            { value: "3×", label: "greitesni procesai" },
            { value: "60%", label: "mažiau rankinių darbų" },
            { value: "6 mėn.", label: "iki pilno ROI" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl px-6 py-4 text-center"
              style={{ backgroundColor: "#F5F5F7", border: "1px solid #E5E5E5" }}
            >
              <p className="text-2xl font-bold text-[#1D1D1F] mb-0.5">{stat.value}</p>
              <p className="text-xs text-[#86868B]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
