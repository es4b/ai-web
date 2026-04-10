import type { Metadata } from "next";
import ServicesHeroSection from "@/components/sections/paslaugos/ServicesHeroSection";
import ServiceBlock, { type ServiceBlockProps } from "@/components/sections/paslaugos/ServiceBlock";
import ServicesCtaSection from "@/components/sections/paslaugos/ServicesCtaSection";

export const metadata: Metadata = {
  title: "Paslaugos — AI automatizavimas verslui",
  description:
    "8 AI automatizavimo paslaugos B2B įmonėms: klientų aptarnavimas, pardavimai, dokumentų apdorojimas, e. komercija, marketingas, analitika, vidiniai procesai. Sumažinkite kaštus iki 70%.",
  keywords: [
    "AI paslaugos verslui",
    "klientų aptarnavimo automatizavimas",
    "pardavimų automatizavimas AI",
    "dokumentų apdorojimas automatiškai",
    "marketingo automatizavimas Lietuva",
    "duomenų analitika įmonėms",
    "RPA procesų automatizavimas",
  ],
  openGraph: {
    title: "Paslaugos — AI automatizavimas verslui | MAXY.LT",
    description:
      "Visos AI automatizavimo paslaugos B2B įmonėms. Sumažinkite kaštus, padidinkite efektyvumą.",
    url: "https://maxy.lt/paslaugos",
  },
  alternates: { canonical: "https://maxy.lt/paslaugos" },
};

type ServiceDef = Omit<ServiceBlockProps, "index" | "alt">;

const services: ServiceDef[] = [
  {
    id: "klientu-aptarnavimas",
    iconKey: "MessageSquare",
    iconColor: "#0071E3",
    iconBg: "#EBF4FF",
    title: "AI klientų aptarnavimo automatizavimas",
    intro:
      "Transformuokite klientų aptarnavimą iš kaštų centro į konkurencinį pranašumą. AI chatbot'ai ir automatizuoti el. pašto atsakymai išsprendžia iki 80% užklausų be žmogaus įsikišimo — greičiau, pigiau ir 24/7.",
    problem:
      "Klientų aptarnavimo komanda praleidžia 70–80% darbo laiko atsakydama į tuos pačius pasikartojančius klausimus: užsakymų statusas, grąžinimo politika, techninės instrukcijos. Laukimo laikas auga, klientų pasitenkinimas krenta, o aptarnavimo kaštai nuolat didėja.",
    solution:
      "Diegiame daugiakanalį AI asistentą (svetainė, el. paštas, WhatsApp), kuris momentiškai atsako į dažniausias užklausas, automatiškai eskaluoja sudėtingus atvejus žmonėms ir mokosi iš kiekvieno pokalbio. Integracija su Jūsų CRM ir pagalbos sistema per 2–3 savaites.",
    benefits: [
      "Iki 80% užklausų išsprendžiamos automatiškai be žmogaus įsikišimo",
      "Atsakymo laikas sumažėja nuo valandų iki mažiau nei 30 sekundžių",
      "24/7 aptarnavimas be papildomų darbuotojų kaštų",
      "Automatinis pokalbių kategorisavimas ir prioritetų nustatymas",
      "Integracija su Zendesk, Freshdesk, HubSpot, Intercom",
      "Lietuvių, anglų ir kitų kalbų palaikymas viename sprendime",
    ],
    metrics: [
      { value: "80%", label: "užklausų automatizuota" },
      { value: "−65%", label: "aptarnavimo kaštai" },
      { value: "<30s", label: "atsakymo laikas" },
    ],
  },
  {
    id: "pardavimai",
    iconKey: "BarChart2",
    iconColor: "#34C759",
    iconBg: "#F0FFF4",
    title: "Pardavimų procesų automatizavimas",
    intro:
      "Pardavėjai turėtų parduoti — ne vesti duomenis į CRM ir rašyti el. laiškus. AI automatizuoja visą administracinę pardavimų dalį, o Jūsų komanda susikoncentruoja į ryšių kūrimą ir derybas.",
    problem:
      "Vidutinis B2B pardavėjas tik 35% darbo laiko praleidžia tiesiogiai pardavinėdamas. Likusį laiką užima CRM pildymas, el. laiškų rašymas, lead'ų kvalifikavimas ir ataskaitų rengimas. Rezultatas — prarandamos pardavimo galimybės ir komanda neefektyvi.",
    solution:
      "Automatizuojame visą pardavimų piltuvo administracinę dalį: automatinis CRM pildymas po skambučių, AI pagalbos lead'ų vertinimas ir prioritetizavimas, personalizuotos el. pašto sekos potencialiems klientams, automatiniai follow-up priminimai ir pasiūlymų generavimas. Integracija su Salesforce, HubSpot, Pipedrive.",
    benefits: [
      "Automatinis CRM atnaujinimas po kiekvieno pokalbio ar el. laiško",
      "AI lead scoring — pardavėjai dirba tik su karštaisiais kontaktais",
      "Personalizuotos el. pašto sekos kiekvienam pirkėjo profiliui",
      "Automatiniai follow-up priminimai su tinkamu laiku ir turiniu",
      "Pardavimų prognozavimas pagal realius duomenis, ne intuiciją",
      "Automatinis pasiūlymų ir sutarčių generavimas pagal šablonus",
    ],
    metrics: [
      { value: "+40%", label: "pardavimų produktyvumas" },
      { value: "3×", label: "daugiau lead'ų apdorojama" },
      { value: "−50%", label: "administracinis laikas" },
    ],
  },
  {
    id: "dokumentai",
    iconKey: "FileText",
    iconColor: "#FF9500",
    iconBg: "#FFF8EB",
    title: "Dokumentų apdorojimo automatizavimas",
    intro:
      "Sąskaitos, sutartys, užsakymai, ataskaitos — rankinis duomenų vedimas iš dokumentų yra lėtas, brangus ir pilnas klaidų. AI ištraukia, tikrina ir integruoja duomenis automatiškai su 95%+ tikslumu.",
    problem:
      "Buhalterijos ir administracijos komandos praleidžia dešimtis valandų per savaitę rankiniu būdu pervesdamos duomenis iš sąskaitų, sutarčių ir formų į sistemas. Klaidos neišvengiamos, apdorojimas lėtas, o darbuotojai atlieka mechaninį darbą.",
    solution:
      "Diegiame AI dokumentų apdorojimo sistemą, kuri naudojant OCR ir didelius kalbos modelius automatiškai ištraukia struktūruotus duomenis iš bet kokio formato: PDF, Word, nuskaitytos kopijos. Sistema integruoja duomenis tiesiai į ERP ar buhalterinę programą.",
    benefits: [
      "Automatinis duomenų ištraukimas iš sąskaitų, sutarčių, užsakymų",
      "Palaikymas 50+ dokumentų formatų: PDF, Word, Excel, nuskaitytos kopijos",
      "95%+ tikslumas su automatine anomalijų detekcija ir klaidos žymėjimu",
      "Tiesioginė integracija su Rivile, Navision, SAP, 1C",
      "Automatinis dokumentų archyvavimas ir greita paieška",
      "Atitikties (compliance) tikrinimas pagal išankstines taisykles",
    ],
    metrics: [
      { value: "95%+", label: "apdorojimo tikslumas" },
      { value: "10×", label: "greičiau nei rankiniu būdu" },
      { value: "−80%", label: "apdorojimo kaštai" },
    ],
  },
  {
    id: "ekomercija",
    iconKey: "ShoppingCart",
    iconColor: "#AF52DE",
    iconBg: "#F5EEFF",
    title: "E. komercijos automatizavimas",
    intro:
      "Šiuolaikinė e. komercija reikalauja tūkstančių smulkių sprendimų per dieną — kainų koregavimo, inventoriaus valdymo, personalizacijos. AI priima šiuos sprendimus greičiau ir tiksliau nei bet kuri žmogaus komanda.",
    problem:
      "E. komercijos komandos praleidžia per daug laiko rankiniu kainų koregavimu, inventoriaus stebėjimu ir kampanijų valdymu. Dėl neoptimalių kainų prarandamos pajamos, dėl prastų rekomendacijų — konversijos. Konkurentai, naudojantys AI, turi akivaizdų pranašumą.",
    solution:
      "Diegiame visapusišką e. komercijos AI sistemą: dinaminės kainos pagal paklausą ir konkurentus; personalizuotos produktų rekomendacijos kiekvienam pirkėjui; automatinis inventoriaus papildymo valdymas; AI generuojami produktų aprašymai ir meta duomenys; automatizuotos krepšelio atsisakymo grąžinimo sekos.",
    benefits: [
      "Dinaminės kainos realiu laiku pagal rinką, paklausą ir konkurentus",
      "Personalizuotos rekomendacijos didinančios vidutinio užsakymo vertę",
      "Automatinis inventoriaus valdymas ir papildymo užsakymų inicijavimas",
      "AI generuojami SEO-optimizuoti produktų aprašymai masiškai",
      "Automatizuotos krepšelio atsisakymo sekos su personalizuotais pasiūlymais",
      "Sukčiavimo detekcija ir automatinis rizikingų užsakymų žymėjimas",
    ],
    metrics: [
      { value: "+25%", label: "pajamų augimas" },
      { value: "+18%", label: "konversijų rodiklis" },
      { value: "−30%", label: "operaciniai kaštai" },
    ],
  },
  {
    id: "marketingas",
    iconKey: "Megaphone",
    iconColor: "#FF3B30",
    iconBg: "#FFF0EF",
    title: "Marketingo automatizavimas",
    intro:
      "Nuo el. pašto kampanijų iki turinio kūrimo ir auditorijų segmentavimo — AI pakelia marketingo efektyvumą į kitą lygį. Daugiau personalizacijos, mažiau rankinio darbo, geresni rezultatai.",
    problem:
      "Marketingo komandos praleidžia laiko rengdamos turinį, segmentuodamos auditorijas ir valdydamos kampanijas, o ne analizuodamos rezultatus ir strategiškai mąstydamos. Masiniai el. laiškai ir vienodas turinys lemia žemus atidarymų rodiklius ir prastą ROI.",
    solution:
      "Automatizuojame visą marketingo operacinį sluoksnį: AI segmentavimas pagal elgseną; personalizuotos el. pašto kampanijos kiekvienam segmentui; automatinis socialinių tinklų turinio planavimas ir publikavimas; AI pagalbos landing puslapių optimizavimas; lead nurturing sekos pagal pirkėjo kelionę.",
    benefits: [
      "Automatinis auditorijos segmentavimas pagal 50+ elgsenos signalų",
      "Personalizuotas turinio kūrimas kiekvienam segmentui naudojant AI",
      "A/B testavimo automatizavimas su AI-valdomu laimėtojo atrinkimu",
      "Integracija su HubSpot, Mailchimp, ActiveCampaign, Klaviyo",
      "Automatinis socialinių tinklų turinio planavimas ir publikavimas",
      "Realaus laiko kampanijų optimizavimas pagal atidarymų ir konversijų rodiklius",
    ],
    metrics: [
      { value: "3×", label: "el. pašto atidarymų rodiklis" },
      { value: "+55%", label: "lead konversija" },
      { value: "−60%", label: "turinio kūrimo laikas" },
    ],
  },
  {
    id: "analitika",
    iconKey: "LineChart",
    iconColor: "#5AC8FA",
    iconBg: "#EFF9FF",
    title: "Duomenų analitika ir prognozavimas",
    intro:
      "Duomenys, kurie sėdi neapdoroti skirtingose sistemose, neturi vertės. AI sujungia Jūsų duomenis, atskleidžia paslėptas tendencijas ir prognozuoja ateitį su 85%+ tikslumu.",
    problem:
      "Dauguma įmonių priima strateginius sprendimus remdamosi nuojauta arba pasenusiais duomenimis iš skirtingų sistemų, kurių neįmanoma greitai sujungti. Verslo intelekto ataskaitų rengimas užima dienas, o iki tada situacija jau pasikeičia.",
    solution:
      "Kuriame centralizuotą duomenų platformą, kuri realiu laiku sujungia duomenis iš visų Jūsų sistemų. Prognozuojamosios analizės modeliai numato pardavimų srautą, klientų churn tikimybę ir inventoriaus poreikius. Interaktyvios dashboards valdymo komandai — visa svarbiausia informacija viename ekrane.",
    benefits: [
      "Realaus laiko duomenų sujungimas iš ERP, CRM, el. komercijos, marketingo",
      "Klientų churn prognozavimas 30–60 dienų į priekį su veiksmų rekomendacijomis",
      "Pardavimų prognozavimas su 85%+ tikslumu pagal istorinius ir rinkos duomenis",
      "Automatinė anomalijų detekcija ir įspėjimai atsakingiems asmenims",
      "Interaktyvios valdymo ataskaitų lentos su filtravimo galimybėmis",
      "Klientų segmentų pelningumas ir LTV (lifetime value) analizė",
    ],
    metrics: [
      { value: "85%+", label: "prognozių tikslumas" },
      { value: "10×", label: "greitesnės ataskaitos" },
      { value: "−40%", label: "sprendimų priėmimo laikas" },
    ],
  },
  {
    id: "procesai",
    iconKey: "Settings",
    iconColor: "#6E6E73",
    iconBg: "#F5F5F7",
    title: "Vidinių procesų automatizavimas",
    intro:
      "HR, buhalterija, tiekimo grandinė, IT palaikymas — vidiniai procesai dažnai yra produktyvumo spąstai. RPA robotai ir AI automatizuoja pasikartojančias administracines užduotis, o žmonės dirba kūrybinį ir strateginį darbą.",
    problem:
      "Vidiniai departamentai nuolat sprendžia pasikartojančias užduotis: darbo laiko apskaita, atostogų valdymas, sąskaitų apmokėjimas, IT paraiškos, ataskaitos. Šie procesai yra lėti, linkę į klaidas ir atima laiką nuo vertingesnės veiklos.",
    solution:
      "Diegiame RPA (robotic process automation) robotus ir AI sprendimus, kurie imituoja žmogaus veiksmus kompiuteryje: automatinis darbo laiko apskaitos apdorojimas, tiekėjų sąskaitų tikrinimas ir apmokėjimas, HR procesų automatizavimas, IT paraiškų valdymas ir automatinis atsakymas.",
    benefits: [
      "Automatinis darbo laiko apskaitos ir atostogų prašymų valdymas",
      "Tiekėjų sąskaitų tikrinimas pagal sutartis ir mokėjimų inicijavimas",
      "Naujų darbuotojų onboarding proceso pilnas automatizavimas",
      "IT pagalbos paraiškų automatinis kategorisavimas ir pirminis atsakymas",
      "Automatinis reguliariųjų ataskaitų generavimas ir platinimas",
      "Integracija su bet kokia sistema per RPA — net be API",
    ],
    metrics: [
      { value: "−60%", label: "laiko vidinėms operacijoms" },
      { value: "~0", label: "žmogiškų klaidų automatizuotuose procesuose" },
      { value: "6 mėn.", label: "iki visiško ROI" },
    ],
  },
  {
    id: "individualus",
    iconKey: "Sparkles",
    iconColor: "#0071E3",
    iconBg: "#EBF4FF",
    title: "Individualūs AI sprendimai",
    intro:
      "Kai standartiniai sprendimai nebeužtenka — kuriame pagal Jūsų verslą individualiai pritaikytus AI modelius, algoritmus ir integracijas. Nuo specifinių pramonės procesų iki unikalių verslo taisyklių variklių.",
    problem:
      "Kiekvienas verslas turi unikalius procesus, duomenis ir poreikius, kurių nepadengia standartiniai SaaS produktai. Specifinės pramonės reikalavimai, unikalios verslo taisyklės, senų sistemų integracijos — tam reikia individualaus sprendimo, o ne adaptacijos prie šablono.",
    solution:
      "Nuo nulio kuriame AI sprendimus pagal Jūsų specifikacijas: individualūs ML modeliai, apmokyti ant Jūsų duomenų; specifiniai verslo taisyklių varikiai; unikalios integracijos su senomis (legacy) sistemomis; sektoriui specifiniai NLP modeliai lietuvių ir kitomis kalbomis; API ir mikropaslaugų architektūra.",
    benefits: [
      "100% pritaikytas Jūsų verslo procesams, duomenims ir logikai",
      "Pilna integracija su esamomis sistemomis, įskaitant legacy ir be API",
      "Sektoriaus specifiniai modeliai: gamyba, logistika, finansai, teisė, medicina",
      "Duomenų privatumas — modeliai veikia Jūsų infrastruktūroje, ne debesyje",
      "Nuolatinis modelių tobulinimas ir perkvalifikavimas pagal naujus duomenis",
      "Techninis palaikymas, dokumentacija ir komandos apmokymas po diegimo",
    ],
    metrics: [
      { value: "100%", label: "pritaikytas Jūsų verslui" },
      { value: "4–8", label: "sav. iki veikiančio MVP" },
      { value: "∞", label: "skalavimo galimybės" },
    ],
  },
];

export default function PaslaugosPage() {
  return (
    <>
      <ServicesHeroSection />
      {services.map((s, i) => (
        <ServiceBlock key={s.id} {...s} index={i + 1} alt={i % 2 !== 0} />
      ))}
      <ServicesCtaSection />
    </>
  );
}
