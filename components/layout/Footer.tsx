import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Klientų aptarnavimo AI", href: "/paslaugos#klientu-aptarnavimas" },
  { label: "Pardavimų automatizavimas", href: "/paslaugos#pardavimai" },
  { label: "Dokumentų apdorojimas", href: "/paslaugos#dokumentai" },
  { label: "E. komercijos automatizavimas", href: "/paslaugos#ekomercija" },
  { label: "Marketingo automatizavimas", href: "/paslaugos#marketingas" },
  { label: "Duomenų analitika", href: "/paslaugos#analitika" },
];

const company = [
  { label: "Apie mus", href: "/apie-mus" },
  { label: "Paslaugos", href: "/paslaugos" },
  { label: "Klientai", href: "/klientai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] border-t border-[#E5E5E7]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 w-fit">
              <Image src="/images/logo.png" alt="maxy.lt" width={160} height={40} style={{objectFit: "contain"}} />
            </Link>
            <p className="text-[#6E6E73] text-sm leading-relaxed mb-6 max-w-xs">
              AI sprendimai B2B verslui. Automatizuojame procesus, taupome laiką ir didinome pajamas.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+37065500052"
                className="flex items-center gap-2.5 text-sm text-[#6E6E73] hover:text-[#0071E3] transition-colors group"
              >
                <Phone size={14} className="text-[#86868B] group-hover:text-[#0071E3] transition-colors flex-shrink-0" />
                +370 655 00052
              </a>
              <a
                href="mailto:info@es4b.co.uk"
                className="flex items-center gap-2.5 text-sm text-[#6E6E73] hover:text-[#0071E3] transition-colors group"
              >
                <Mail size={14} className="text-[#86868B] group-hover:text-[#0071E3] transition-colors flex-shrink-0" />
                info@es4b.co.uk
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#6E6E73]">
                <MapPin size={14} className="text-[#86868B] flex-shrink-0 mt-0.5" />
                <span>K. Petrausko g. 26-221,<br />Kaunas, Lietuva</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#1D1D1F] text-sm font-semibold mb-5 tracking-wide uppercase">
              Paslaugos
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1D1D1F] text-sm font-semibold mb-5 tracking-wide uppercase">
              Įmonė
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rekvizitai + CTA */}
          <div>
            <h3 className="text-[#1D1D1F] text-sm font-semibold mb-5 tracking-wide uppercase">
              Rekvizitai
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#6E6E73] mb-8">
              <p><span className="text-[#86868B]">UAB</span> ES4B</p>
              <p><span className="text-[#86868B]">Kodas:</span> 300892538</p>
              <p><span className="text-[#86868B]">PVM:</span> LT100003837615</p>
              <p className="pt-2 border-t border-[#E5E5E7]">
                <span className="text-[#86868B]">Bankas:</span> Swedbank
              </p>
              <p><span className="text-[#86868B]">B.k.:</span> 73000</p>
              <p className="font-mono text-xs tracking-tight">LT287300010101810170</p>
            </div>

            <Link
              href="/kontaktai"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Pradėti projektą
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E5E5E7]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#86868B]">
            © {new Date().getFullYear()} UAB „ES4B" · maxy.lt · Visos teisės saugomos
          </p>
          <p className="text-xs text-[#86868B]">
            AI sprendimai verslui · Kaunas, Lietuva
          </p>
        </div>
      </div>
    </footer>
  );
}
