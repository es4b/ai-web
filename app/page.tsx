import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import TrustSection from "@/components/sections/home/TrustSection";
import ServicesPreviewSection from "@/components/sections/home/ServicesPreviewSection";
import ValueSection from "@/components/sections/home/ValueSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import CtaSection from "@/components/sections/home/CtaSection";

export const metadata: Metadata = {
  title: "AI sprendimai verslui — Procesų automatizavimas | MAXY.LT",
  description:
    "UAB ES4B teikia pažangius AI sprendimus B2B įmonėms: klientų aptarnavimo automatizavimas, pardavimų optimizavimas, dokumentų apdorojimas. Sumažinkite kaštus iki 70% ir padidinkite efektyvumą.",
  keywords: [
    "AI sprendimai verslui",
    "procesų automatizavimas Lietuva",
    "dirbtinis intelektas įmonėms",
    "B2B automatizavimas",
    "verslo procesų optimizavimas",
    "RPA Lietuva",
    "chatbot verslui",
    "pardavimų automatizavimas",
  ],
  openGraph: {
    title: "AI sprendimai verslui — Procesų automatizavimas | MAXY.LT",
    description:
      "Profesionalūs AI sprendimai B2B įmonėms. Automatizuokite procesus, sumažinkite kaštus ir auginkite pajamas su UAB ES4B.",
    url: "https://maxy.lt",
  },
  alternates: {
    canonical: "https://maxy.lt",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesPreviewSection />
      <ValueSection />
      <ProcessSection />
      <WhyUsSection />
      <CtaSection />
    </>
  );
}
