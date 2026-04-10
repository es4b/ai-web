import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/apie-mus/AboutHeroSection";
import MissionVisionSection from "@/components/sections/apie-mus/MissionVisionSection";
import StorySection from "@/components/sections/apie-mus/StorySection";
import ExpertiseSection from "@/components/sections/apie-mus/ExpertiseSection";
import ValuesSection from "@/components/sections/apie-mus/ValuesSection";
import B2BPositionSection from "@/components/sections/apie-mus/B2BPositionSection";
import TeamSection from "@/components/sections/apie-mus/TeamSection";
import AboutCtaSection from "@/components/sections/apie-mus/AboutCtaSection";

export const metadata: Metadata = {
  title: "Apie mus — UAB ES4B, AI sprendimai B2B verslui",
  description:
    "UAB ES4B — B2B AI automatizavimo įmonė iš Kauno. Misija, vizija, komanda ir 6+ metų patirtis. 150+ projektų, 80+ klientų Lietuvoje ir Baltijos regione.",
  keywords: [
    "UAB ES4B",
    "AI įmonė Lietuva",
    "AI automatizavimas Kaunas",
    "B2B technologijų partneris",
    "dirbtinis intelektas Lietuva",
    "procesų automatizavimas įmonė",
  ],
  openGraph: {
    title: "Apie mus — UAB ES4B | MAXY.LT",
    description:
      "B2B AI automatizavimo lyderiai Baltijos regione. 150+ sėkmingų projektų, 80+ klientų, 6+ metų patirtis.",
    url: "https://maxy.lt/apie-mus",
  },
  alternates: { canonical: "https://maxy.lt/apie-mus" },
};

export default function ApieMusPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <StorySection />
      <ExpertiseSection />
      <ValuesSection />
      <B2BPositionSection />
      <TeamSection />
      <AboutCtaSection />
    </>
  );
}
