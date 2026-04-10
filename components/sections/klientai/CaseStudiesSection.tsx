"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    company: "BalticTrans UAB",
    sector: "Logistika ir transportas",
    tag: "Dokumentų automatizavimas",
    tagColor: "#FF9500",
    tagBg: "#FFF8EB",
    challenge:
      "BalticTrans kasdien apdorojo daugiau nei 400 vežėjų sąskaitų, muitinės deklaracijų ir važtaraščių. Buhalterijos komanda iš 6 žmonių praleisdavo 70% darbo laiko rankiniu duomenų vedimą iš PDF dokumentų į ERP sistemą. Klaidų lygis siekė 4–5%, o vėluojantys mokėjimai kenkė santykiams su tiekėjais.",
    solution:
      "Įdiegėme AI dokumentų apdorojimo sistemą, kuri automatiškai nuskaito gaunamus dokumentus el. paštu, ištraukia struktūruotus duomenis (suma, tiekėjas, data, PVM, sąskaitos numeris), tikrina prieš sutarčių sąlygas ir inicijuoja mokėjimą Rivile sistemoje. Anomalijų atveju sistema automatiškai eskaluoja buhalterio peržiūrai.",
    implementation: [
      "1–2 sav.: Proceso auditas ir dokumentų tipų klasifikacija",
      "3–4 sav.: AI modelio apmokymnas ant 3 mėn. istorinių dokumentų",
      "5–6 sav.: Integracija su Rivile ERP ir el. pašto serveriu",
      "7–8 sav.: Bandomasis laikotarpis, modelio tikslinimas",
    ],
    results: [
      { icon: Clock, value: "92%", label: "sąskaitų apdorojamos automatiškai" },
      { icon: TrendingUp, value: "10×", label: "greitesnis apdorojimas" },
      { icon: DollarSign, value: "€68K", label: "metinis sutaupymas" },
      { icon: Users, value: "4", label: "darbuotojai perkvalifikuoti naujoms užduotims" },
    ],
    quote:
      "Per 8 savaites sistema pradėjo dirbti. Buhalterija dabar orientuojasi į analizę ir tiekėjų santykius — ne į duomenų vedimą.",
    author: "Rimas Paulauskas",
    authorRole: "CFO, BalticTrans UAB",
  },
  {
    company: "SmartRetail Group",
    sector: "E. komercija ir mažmeninė prekyba",
    tag: "Klientų aptarnavimo AI",
    tagColor: "#0071E3",
    tagBg: "#EBF4FF",
    challenge:
      "SmartRetail valdė 3 e. komercijos parduotuves su 45 000 aktyvių klientų. Klientų aptarnavimo komanda (8 agentai) gaudavo iki 600 užklausų per dieną. Vidutinis atsakymo laikas siekė 6 valandas, o sezono pikinų metu — iki 18 valandų. NPS rodiklis nuolat smuko dėl lėtų atsakymų.",
    solution:
      "Sukūrėme daugiakanalį AI aptarnavimo asistentą, integruotą su svetaine (live chat), el. paštu ir Facebook Messenger. Sistema automatiškai atsako į 80% dažniausių užklausų: užsakymų statusas, grąžinimai, produktų informacija, pristatymo terminai. Sudėtingi atvejai perduodami agentams su pilnu kontekstu.",
    implementation: [
      "1 sav.: Istorinių pokalbių analizė ir dažniausių klausimų identifikacija",
      "2–3 sav.: Žinių bazės kūrimas ir AI modelio konfigūracija",
      "4 sav.: Integracijos su Shopify ir el. paštu",
      "5–6 sav.: Beta testavimas su 20% srauto, iteracinis tikslinimas",
    ],
    results: [
      { icon: TrendingUp, value: "81%", label: "užklausų sprendžiama automatiškai" },
      { icon: Clock, value: "<2 min.", label: "vidutinis atsakymo laikas" },
      { icon: Users, value: "+34 pt", label: "NPS augimas per 3 mėn." },
      { icon: DollarSign, value: "−55%", label: "aptarnavimo kaštu sumažėjimas" },
    ],
    quote:
      "Klientai dabar gauna atsakymus naktį ir savaitgaliais. Mūsų komanda susikoncentravo į sudėtingus atvejus ir pardavimų palaikymą.",
    author: "Agnė Stankevičiūtė",
    authorRole: "E-komercijos direktorė, SmartRetail Group",
  },
  {
    company: "NordFinance AS",
    sector: "Finansų paslaugos ir lizingas",
    tag: "Pardavimų automatizavimas",
    tagColor: "#34C759",
    tagBg: "#F0FFF4",
    challenge:
      "NordFinance pardavimų komanda (12 vadybininkų) susidūrė su augančiu potencialių klientų skaičiumi, kurių negebėjo laiku apdoroti. Vidutinis atsakymo laikas į verslo užklausą siekė 4 valandas. 40% potencialių klientų jau buvo nusprendę rinktis konkurentą iki pirmojo NordFinance kontakto. CRM pildymas užimdavo 2+ valandas per dieną.",
    solution:
      "Sukūrėme automatizuotą pardavimų piltuvo sistemą: momentinis automatinis atsakymas į kiekvieną užklausą su asmeninimo elementais, AI lead scoring pagal įmonės dydį, sektorių ir užklausos turinį, automatinis CRM pildymas po kiekvieno el. laiško ir skambučio, personalizuotos follow-up sekos pagal lead temperatūrą.",
    implementation: [
      "1–2 sav.: Pardavimų proceso žemėlapis ir lead scoring kriterijų apibrėžimas",
      "3 sav.: HubSpot CRM integracija ir automatizavimo sekų kūrimas",
      "4–5 sav.: AI modelio konfigūracija lead'ų vertinimui",
      "6 sav.: Komandos apmokymas ir pilotinis paleidimas",
    ],
    results: [
      { icon: Clock, value: "<5 min.", label: "atsakymo laikas į užklausą" },
      { icon: TrendingUp, value: "+47%", label: "konversijų iš lead'o į sandorį" },
      { icon: DollarSign, value: "+€220K", label: "papildomos metinės pajamos" },
      { icon: Users, value: "2 val.", label: "sutaupoma per dieną kiekvienam vadybininkui" },
    ],
    quote:
      "Sistema atpažįsta, kurie klientai yra pasiruošę pirkti, ir mūsų vadybininkai visą energiją skiria jiems. Konversija išaugo beveik perpus.",
    author: "Tadas Bernotas",
    authorRole: "Pardavimų direktorius, NordFinance AS",
  },
  {
    company: "LitMetal Group",
    sector: "Metalų apdirbimas ir gamyba",
    tag: "Duomenų analitika",
    tagColor: "#5AC8FA",
    tagBg: "#EFF9FF",
    challenge:
      "LitMetal valdė 3 gamyklas su 280 darbuotojų. Gamybos duomenys buvo renkami rankiniu būdu Excel lentelėse. Vadovai gaudavo savaitines ataskaitas, kurios buvo pasenusios iki jų perskaitymo momento. Defektų lygis siekė 3,2%, o gamybos planavimas dažnai neatitiko realios paklausos — sandėliai buvo arba perpildyti, arba tušti.",
    solution:
      "Sukūrėme realaus laiko gamybos stebėjimo ir analizės platformą: duomenų surinkimas iš gamybos įrenginių per IoT jutiklius, AI defektų prognozavimas pagal proceso parametrus, dinaminis gamybos planavimas pagal pardavimų prognozę ir žaliavų prieinamumą, automatinės valdymo ataskaitos kiekvieną rytą.",
    implementation: [
      "1–3 sav.: Duomenų šaltinių inventorizacija ir IoT jutiklių integravimas",
      "4–6 sav.: Duomenų srauto architektūros kūrimas ir sandėlio sistema",
      "7–9 sav.: ML modelių kūrimas defektų prognozavimui ir planui",
      "10–12 sav.: Dashboard kūrimas, testavimas ir komandos apmokymas",
    ],
    results: [
      { icon: TrendingUp, value: "−68%", label: "defektų lygio sumažėjimas" },
      { icon: Clock, value: "Real-time", label: "gamybos duomenų stebėjimas" },
      { icon: DollarSign, value: "€310K", label: "metinis sutaupymas iš mažesnio broko" },
      { icon: Users, value: "18%", label: "gamybos efektyvumo augimas" },
    ],
    quote:
      "Anksčiau žinodavome apie problemas po fakto. Dabar sistema perspėja apie galimas gedimus prieš 4–6 valandas — galime reaguoti iš anksto.",
    author: "Valdas Šimkus",
    authorRole: "Gamybos direktorius, LitMetal Group",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white border-b border-[#E5E5E7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs text-[#0071E3] font-semibold tracking-widest uppercase mb-4">
            Atvejo analizės
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-5 text-balance">
            Realūs rezultatai. Realios įmonės.
          </h2>
          <p className="text-[#6E6E73] text-lg leading-relaxed">
            Ne rinkodariniai pažadai, o dokumentuoti projektai su konkrečiais
            prieš ir po rodikliais.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => {
            return (
              <motion.div
                key={c.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                className="bg-[#FBFBFB] rounded-3xl border border-[#E5E5E7] overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-6 border-b border-[#E5E5E7] bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {c.company.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1D1D1F]">{c.company}</p>
                      <p className="text-xs text-[#86868B]">{c.sector}</p>
                    </div>
                  </div>
                  <span
                    className="self-start sm:self-auto px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ color: c.tagColor, backgroundColor: c.tagBg }}
                  >
                    {c.tag}
                  </span>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: problem + solution + implementation */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                      <div>
                        <p className="text-xs font-semibold text-[#FF3B30] uppercase tracking-wider mb-3">
                          Iššūkis
                        </p>
                        <p className="text-sm text-[#1D1D1F] leading-relaxed">{c.challenge}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-3">
                          Sprendimas
                        </p>
                        <p className="text-sm text-[#1D1D1F] leading-relaxed">{c.solution}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-3">
                          Diegimo eiga
                        </p>
                        <ul className="flex flex-col gap-2">
                          {c.implementation.map((step) => (
                            <li key={step} className="flex items-start gap-2.5 text-sm text-[#6E6E73]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E7] flex-shrink-0 mt-2" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quote */}
                      <blockquote className="border-l-2 border-[#0071E3] pl-5">
                        <p className="text-sm text-[#1D1D1F] italic leading-relaxed mb-3">
                          &ldquo;{c.quote}&rdquo;
                        </p>
                        <footer>
                          <p className="text-xs font-semibold text-[#1D1D1F]">{c.author}</p>
                          <p className="text-xs text-[#86868B]">{c.authorRole}</p>
                        </footer>
                      </blockquote>
                    </div>

                    {/* Right: results */}
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-[#34C759] uppercase tracking-wider mb-1">
                        Rezultatai
                      </p>
                      {c.results.map((r) => {
                        const Icon = r.icon;
                        return (
                          <div
                            key={r.label}
                            className="bg-white rounded-2xl border border-[#E5E5E7] p-5 flex items-center gap-4"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0">
                              <Icon size={16} className="text-[#0071E3]" />
                            </div>
                            <div>
                              <p className="text-xl font-bold text-[#1D1D1F] leading-tight">
                                {r.value}
                              </p>
                              <p className="text-xs text-[#86868B] leading-tight">{r.label}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-10 text-center"
        >
          <Link
            href="/kontaktai"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-semibold rounded-full transition-colors duration-200"
          >
            Pradėti savo sėkmės istoriją
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
