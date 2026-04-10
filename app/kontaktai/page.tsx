import type { Metadata } from "next";
import { motion } from "framer-motion";
import ContactHeroSection from "@/components/sections/kontaktai/ContactHeroSection";
import ContactFormSection from "@/components/sections/kontaktai/ContactFormSection";
import ContactInfoSection from "@/components/sections/kontaktai/ContactInfoSection";

export const metadata: Metadata = {
  title: "Kontaktai — Susisiekite su UAB ES4B",
  description:
    "Susisiekite su UAB ES4B dėl AI automatizavimo sprendimų. K. Petrausko g. 26-221, Kaunas. Tel. +370 655 00052. El. paštas info@es4b.co.uk. Atsakome per 24 val.",
  keywords: [
    "UAB ES4B kontaktai",
    "AI automatizavimas Kaunas",
    "susisiekti dėl AI sprendimų",
    "nemokamas proceso auditas",
  ],
  openGraph: {
    title: "Kontaktai — UAB ES4B | MAXY.LT",
    description:
      "Susisiekite dėl AI automatizavimo sprendimų. Nemokamas proceso auditas.",
    url: "https://maxy.lt/kontaktai",
  },
  alternates: { canonical: "https://maxy.lt/kontaktai" },
};

export default function KontaktaiPage() {
  return (
    <>
      <ContactHeroSection />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <ContactFormSection />
            </div>
            {/* Info — 1/3 */}
            <div>
              <ContactInfoSection />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-[#FBFBFB] border-t border-[#E5E5E7] py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-[#1D1D1F] mb-1">
                Greičiau per telefoną?
              </p>
              <p className="text-sm text-[#6E6E73]">
                Skambinkite darbo dienomis 8:00–17:00 ir atsakysime iš karto.
              </p>
            </div>
            <a
              href="tel:+37065500052"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-semibold rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              +370 655 00052
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
