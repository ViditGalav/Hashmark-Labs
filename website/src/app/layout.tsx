import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { JsonLd, organizationJsonLd } from "@/lib/jsonld";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: senior engineers for AI, blockchain and fintech systems`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "blockchain engineering",
    "AI engineering consultancy",
    "DeFi development",
    "smart contract development",
    "tokenomics design",
    "Web3 growth marketing",
    "Web3 business development",
    "fintech engineering",
    "RWA tokenization",
    "prediction market development",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script
          // Mark JS availability before paint so reveal animations never hide content for no-JS users.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <CommandPalette />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
