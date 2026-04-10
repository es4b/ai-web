import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxy.lt"),
  title: {
    default: "MAXY.LT — AI sprendimai verslui | UAB ES4B",
    template: "%s | MAXY.LT",
  },
  description:
    "Profesionalūs AI sprendimai B2B įmonėms. Procesų automatizavimas, dirbtinis intelektas, pardavimų ir klientų aptarnavimo optimizavimas. UAB ES4B — patikimas technologijų partneris.",
  keywords: [
    "AI sprendimai verslui",
    "procesų automatizavimas",
    "dirbtinis intelektas įmonėms",
    "B2B automatizavimas",
    "verslo procesų optimizavimas",
    "AI Lietuva",
    "automatizavimas Kaunas",
  ],
  authors: [{ name: "UAB ES4B", url: "https://maxy.lt" }],
  creator: "UAB ES4B",
  publisher: "UAB ES4B",
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://maxy.lt",
    siteName: "MAXY.LT",
    title: "MAXY.LT — AI sprendimai verslui",
    description:
      "Profesionalūs AI sprendimai B2B įmonėms. Procesų automatizavimas ir dirbtinis intelektas Jūsų verslui.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAXY.LT — AI sprendimai verslui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXY.LT — AI sprendimai verslui",
    description:
      "Profesionalūs AI sprendimai B2B įmonėms. Procesų automatizavimas ir dirbtinis intelektas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1D1D1F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
