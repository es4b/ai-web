"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const SERVICES = [
  "Klientų aptarnavimo automatizavimas",
  "Pardavimų procesų automatizavimas",
  "Dokumentų apdorojimo automatizavimas",
  "E. komercijos automatizavimas",
  "Marketingo automatizavimas",
  "Duomenų analitika ir prognozavimas",
  "Vidinių procesų automatizavimas",
  "Individualus AI sprendimas",
  "Nemokamas proceso auditas",
  "Kita",
];

const BUDGETS = [
  "Iki €5 000",
  "€5 000 – €15 000",
  "€15 000 – €50 000",
  "Daugiau nei €50 000",
  "Aptarsime",
];

const INIT: FormData = {
  name: "", company: "", email: "",
  phone: "", service: "", budget: "",
  message: "", consent: false,
};

function validate(f: FormData): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim()) e.name = "Vardas ir pavardė privalomi";
  else if (f.name.trim().length < 3) e.name = "Per trumpas vardas";
  if (!f.company.trim()) e.company = "Įmonės pavadinimas privalomas";
  if (!f.email.trim()) e.email = "El. paštas privalomas";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Neteisingas el. pašto formatas";
  if (!f.message.trim()) e.message = "Žinutė privaloma";
  else if (f.message.trim().length < 20)
    e.message = "Žinutė per trumpa (min. 20 simbolių)";
  if (!f.consent) e.consent = "Sutikimas privalomas";
  return e;
}

function FieldLabel({ htmlFor, children, required }: {
  htmlFor: string; children: React.ReactNode; required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-semibold text-[#1D1D1F] mb-2 tracking-wide">
      {children}
      {required && <span className="text-[#FF3B30] ml-0.5">*</span>}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="mt-1.5 text-xs text-[#FF3B30] flex items-center gap-1"
        >
          <AlertCircle size={11} className="flex-shrink-0" />
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1D1D1F] placeholder-[#86868B] outline-none transition-colors duration-150 focus:ring-2 focus:ring-[#0071E3]/20";
const inputNormal = `${inputBase} border-[#E5E5E7] focus:border-[#0071E3]`;
const inputErr = `${inputBase} border-[#FF3B30]/50 focus:border-[#FF3B30] focus:ring-[#FF3B30]/10`;

export default function ContactFormSection() {
  const uid = useId();
  const [form, setForm] = useState<FormData>(INIT);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm((p) => ({ ...p, [key]: val }));
    if (touched[key]) {
      const next = { ...form, [key]: val };
      setErrors(validate(next));
    }
  };

  const blur = (key: keyof FormData) => () => {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    ) as Partial<Record<keyof FormData, boolean>>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    // Mock submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1800));
    // Simulate 95% success rate
    if (Math.random() > 0.05) {
      setStatus("success");
      setForm(INIT);
      setTouched({});
      setErrors({});
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-3xl border border-[#E5E5E7] p-10 md:p-14 text-center flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#F0FFF4] flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-[#34C759]" />
        </div>
        <h2 className="text-2xl font-bold text-[#1D1D1F] mb-3">
          Žinutė išsiųsta sėkmingai
        </h2>
        <p className="text-[#6E6E73] max-w-sm leading-relaxed mb-8">
          Ačiū, {form.name || ""}! Jūsų užklausa gauta. Susisieksime per
          24 darbo valandas el. paštu arba telefonu.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-[#F5F5F7] hover:bg-[#E5E5E7] text-[#1D1D1F] text-sm font-medium rounded-full transition-colors"
        >
          Siųsti dar vieną žinutę
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E5E5E7] p-7 md:p-10">
      <h2 className="text-xl font-bold text-[#1D1D1F] mb-1">Susisiekti su mumis</h2>
      <p className="text-sm text-[#6E6E73] mb-8">
        Atsakome per 24 darbo valandas. Laukai su <span className="text-[#FF3B30]">*</span> privalomi.
      </p>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 p-4 bg-[#FFF0EF] border border-[#FF3B30]/20 rounded-xl mb-6"
        >
          <AlertCircle size={16} className="text-[#FF3B30] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#1D1D1F]">Nepavyko išsiųsti žinutės</p>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              Bandykite dar kartą arba rašykite tiesiai:{" "}
              <a href="mailto:info@es4b.co.uk" className="text-[#0071E3]">info@es4b.co.uk</a>
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Row: name + company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FieldLabel htmlFor={`${uid}-name`} required>Vardas ir pavardė</FieldLabel>
            <input
              id={`${uid}-name`}
              type="text"
              autoComplete="name"
              placeholder="Jonas Jonaitis"
              value={form.name}
              onChange={set("name")}
              onBlur={blur("name")}
              className={touched.name && errors.name ? inputErr : inputNormal}
            />
            <FieldError msg={touched.name ? errors.name : undefined} />
          </div>
          <div>
            <FieldLabel htmlFor={`${uid}-company`} required>Įmonės pavadinimas</FieldLabel>
            <input
              id={`${uid}-company`}
              type="text"
              autoComplete="organization"
              placeholder="UAB Jūsų Įmonė"
              value={form.company}
              onChange={set("company")}
              onBlur={blur("company")}
              className={touched.company && errors.company ? inputErr : inputNormal}
            />
            <FieldError msg={touched.company ? errors.company : undefined} />
          </div>
        </div>

        {/* Row: email + phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FieldLabel htmlFor={`${uid}-email`} required>El. paštas</FieldLabel>
            <input
              id={`${uid}-email`}
              type="email"
              autoComplete="email"
              placeholder="jonas@imone.lt"
              value={form.email}
              onChange={set("email")}
              onBlur={blur("email")}
              className={touched.email && errors.email ? inputErr : inputNormal}
            />
            <FieldError msg={touched.email ? errors.email : undefined} />
          </div>
          <div>
            <FieldLabel htmlFor={`${uid}-phone`}>Telefono numeris</FieldLabel>
            <input
              id={`${uid}-phone`}
              type="tel"
              autoComplete="tel"
              placeholder="+370 600 00000"
              value={form.phone}
              onChange={set("phone")}
              className={inputNormal}
            />
          </div>
        </div>

        {/* Row: service + budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FieldLabel htmlFor={`${uid}-service`}>Domina paslauga</FieldLabel>
            <select
              id={`${uid}-service`}
              value={form.service}
              onChange={set("service")}
              className={`${inputNormal} appearance-none cursor-pointer`}
            >
              <option value="">Pasirinkite paslaugą...</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor={`${uid}-budget`}>Preliminarus biudžetas</FieldLabel>
            <select
              id={`${uid}-budget`}
              value={form.budget}
              onChange={set("budget")}
              className={`${inputNormal} appearance-none cursor-pointer`}
            >
              <option value="">Pasirinkite...</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <FieldLabel htmlFor={`${uid}-message`} required>Žinutė</FieldLabel>
          <textarea
            id={`${uid}-message`}
            rows={5}
            placeholder="Trumpai aprašykite savo verslą, procesus, kuriuos norėtumėte automatizuoti, ir kilus klausimų ar poreikių..."
            value={form.message}
            onChange={set("message")}
            onBlur={blur("message")}
            className={`${touched.message && errors.message ? inputErr : inputNormal} resize-none`}
          />
          <div className="flex items-center justify-between mt-1">
            <FieldError msg={touched.message ? errors.message : undefined} />
            <span className={`text-xs ml-auto ${form.message.length < 20 ? "text-[#86868B]" : "text-[#34C759]"}`}>
              {form.message.length} / 20 min.
            </span>
          </div>
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set("consent")}
                onBlur={blur("consent")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                  form.consent
                    ? "bg-[#0071E3] border-[#0071E3]"
                    : touched.consent && errors.consent
                    ? "border-[#FF3B30]"
                    : "border-[#D1D1D6] group-hover:border-[#0071E3]"
                }`}
              >
                {form.consent && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs text-[#6E6E73] leading-relaxed">
              Sutinku, kad UAB „ES4B" apdorotų mano pateiktus asmens duomenis
              kontaktui ir pasiūlymų teikimui. Savo sutikimą galiu atšaukti
              bet kuriuo metu rašydamas(-a) el. paštu{" "}
              <a href="mailto:info@es4b.co.uk" className="text-[#0071E3]">info@es4b.co.uk</a>.
            </span>
          </label>
          <FieldError msg={touched.consent ? errors.consent : undefined} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1D1D1F] hover:bg-[#0071E3] disabled:bg-[#86868B] text-white text-sm font-semibold rounded-full transition-colors duration-200 mt-1"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Siunčiama...
            </>
          ) : (
            <>
              <Send size={15} />
              Siųsti užklausą
            </>
          )}
        </button>
      </form>
    </div>
  );
}
