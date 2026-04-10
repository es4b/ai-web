"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 25 }, (_, i) => ({
  src: `/images/kl${i + 1}.png`,
  alt: `Klientas ${i + 1}`,
}));

export default function LogosSection() {
  return (
    <section className="bg-[#FBFBFB] border-b border-[#E5E5E7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-[#86868B] font-semibold tracking-widest uppercase mb-10"
        >
          Pasitiki mūsų sprendimais
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
              className="group bg-white border border-[#E5E5E5] rounded-xl p-5 flex items-center justify-center cursor-default transition-all duration-200 hover:shadow-md hover:scale-[1.02] min-h-[80px]"
              style={{ borderRadius: "12px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "60px" }}
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
