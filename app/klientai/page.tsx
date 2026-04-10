import type { Metadata } from "next";
import ClientsHeroSection from "@/components/sections/klientai/ClientsHeroSection";
import LogosSection from "@/components/sections/klientai/LogosSection";
import ClientsCtaSection from "@/components/sections/klientai/ClientsCtaSection";

export const metadata: Metadata = {
  title: "Klientai — Sėkmės istorijos ir atsiliepimai",
  description:
    "Realios B2B automatizavimo sėkmės istorijos: BalticTrans, SmartRetail, NordFinance, LitMetal. Dokumentuoti rezultatai — sumažinti kaštai, padidėjęs efektyvumas ir ROI per 6 mėnesius.",
  keywords: [
    "AI automatizavimo sėkmės istorijos",
    "B2B AI rezultatai Lietuva",
    "procesų automatizavimo atvejai",
    "verslo automatizavimo ROI",
    "klientų atsiliepimai AI sprendimai",
  ],
  openGraph: {
    title: "Klientai — Sėkmės istorijos | MAXY.LT",
    description:
      "80+ B2B įmonių pasitiki MAXY.LT. Realios atvejo analizės su konkrečiais rezultatais.",
    url: "https://maxy.lt/klientai",
  },
  alternates: { canonical: "https://maxy.lt/klientai" },
};

export default function KlientaiPage() {
  return (
    <>
      <ClientsHeroSection />
      <LogosSection />
      <ClientsCtaSection />
    </>
  );
}
