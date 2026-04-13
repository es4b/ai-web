"use client";

import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Building2,
  CreditCard, Landmark,
} from "lucide-react";

export default function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-5">

      {/* Kontaktai */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#FBFBFB] rounded-3xl border border-[#E5E5E7] p-7"
      >
        <p className="text-xs font-semibold text-[#86868B] uppercase tracking-widest mb-5">
          Kontaktai
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="tel:+37065500052"
            className="flex items-center gap-3.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0">
              <Phone size={15} className="text-[#0071E3]" />
            </div>
            <div>
              <p className="text-xs text-[#86868B] mb-0.5">Telefonas</p>
              <p className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                +370 655 00052
              </p>
            </div>
          </a>

          <a
            href="mailto:info@es4b.lt"
            className="flex items-center gap-3.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0">
              <Mail size={15} className="text-[#0071E3]" />
            </div>
            <div>
              <p className="text-xs text-[#86868B] mb-0.5">El. paštas</p>
              <p className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                info@es4b.lt
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin size={15} className="text-[#0071E3]" />
            </div>
            <div>
              <p className="text-xs text-[#86868B] mb-0.5">Adresas</p>
              <p className="text-sm font-semibold text-[#1D1D1F] leading-snug">
                K. Petrausko g. 26-221<br />
                LT-44156 Kaunas, Lietuva
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0">
              <Clock size={15} className="text-[#0071E3]" />
            </div>
            <div>
              <p className="text-xs text-[#86868B] mb-0.5">Darbo laikas</p>
              <p className="text-sm font-semibold text-[#1D1D1F]">
                Pr–Pt, 8:00–17:00
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rekvizitai */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        className="bg-[#FBFBFB] rounded-3xl border border-[#E5E5E7] p-7"
      >
        <p className="text-xs font-semibold text-[#86868B] uppercase tracking-widest mb-5">
          Rekvizitai
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
              <Building2 size={15} className="text-[#6E6E73]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div>
                <p className="text-xs text-[#86868B]">Pavadinimas</p>
                <p className="text-sm font-semibold text-[#1D1D1F]">UAB &bdquo;ES4B&ldquo;</p>
              </div>
              <div>
                <p className="text-xs text-[#86868B]">Įmonės kodas</p>
                <p className="text-sm font-mono font-semibold text-[#1D1D1F]">300892538</p>
              </div>
              <div>
                <p className="text-xs text-[#86868B]">PVM mokėtojo kodas</p>
                <p className="text-sm font-mono font-semibold text-[#1D1D1F]">LT100003837615</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#E5E5E7]" />

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
              <Landmark size={15} className="text-[#6E6E73]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div>
                <p className="text-xs text-[#86868B]">Bankas</p>
                <p className="text-sm font-semibold text-[#1D1D1F]">AB bankas SWEDBANK</p>
              </div>
              <div>
                <p className="text-xs text-[#86868B]">Banko kodas</p>
                <p className="text-sm font-mono font-semibold text-[#1D1D1F]">73000</p>
              </div>
              <div>
                <p className="text-xs text-[#86868B]">Sąskaitos numeris</p>
                <p className="text-sm font-mono font-semibold text-[#1D1D1F] tracking-tight">
                  LT28 7300 0101 0181 0170
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
              <CreditCard size={15} className="text-[#6E6E73]" />
            </div>
            <div>
              <p className="text-xs text-[#86868B]">SWIFT/BIC</p>
              <p className="text-sm font-mono font-semibold text-[#1D1D1F]">HABALT22</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
        className="bg-[#FBFBFB] rounded-3xl border border-[#E5E5E7] overflow-hidden"
      >
        {/* Map visual placeholder */}
        <div
          className="h-44 relative"
          style={{
            background:
              "linear-gradient(135deg, #EBF4FF 0%, #F5F5F7 50%, #E8F5E9 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#1D1D1F 1px, transparent 1px), linear-gradient(90deg, #1D1D1F 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0071E3] flex items-center justify-center shadow-lg shadow-[#0071E3]/30">
              <MapPin size={16} className="text-white" />
            </div>
            <p className="text-xs font-semibold text-[#1D1D1F] bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
              K. Petrausko g. 26-221, Kaunas
            </p>
          </div>
        </div>
        <div className="p-4">
          <a
            href="https://maps.google.com/?q=K.+Petrausko+g.+26,+Kaunas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0071E3] font-semibold hover:underline"
          >
            Atidaryti Google Maps →
          </a>
        </div>
      </motion.div>

    </div>
  );
}
