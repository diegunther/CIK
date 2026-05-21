import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

// ── Font loading via next/font (no render blocking) ──────────────────────
const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// ── Global metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ciklab.vu.nl"
  ),
  title: {
    template: "%s | CIK Lab — VU Amsterdam",
    default: "Co-Creation for Inclusive Knowledges Lab — VU Amsterdam",
  },
  description:
    "A research lab at Vrije Universiteit Amsterdam bringing together communities, researchers, and lived experiences to build knowledge that includes everyone.",
  keywords: [
    "co-creation",
    "inclusive knowledge",
    "participatory research",
    "VU Amsterdam",
    "community-based research",
    "forced migration",
    "youth",
    "economic insecurities",
  ],
  authors: [{ name: "CIK Lab, Vrije Universiteit Amsterdam" }],
  creator: "CIK Lab",
  publisher: "Vrije Universiteit Amsterdam",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_NL",
    url: "/",
    siteName: "CIK Lab — VU Amsterdam",
    title: "Co-Creation for Inclusive Knowledges Lab",
    description:
      "Bringing together communities, researchers, and lived experiences to build knowledge that truly includes everyone.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CIK Lab — Co-Creating Knowledge for a More Just Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIK Lab — VU Amsterdam",
    description:
      "Co-creating knowledge for a more just society. Research lab at Vrije Universiteit Amsterdam.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F26522",
};

// ── Structured data ────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Co-Creation for Inclusive Knowledges Lab",
  alternateName: "CIK Lab",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ciklab.vu.nl",
  description:
    "A research lab at Vrije Universiteit Amsterdam committed to building knowledge that includes, centres, and serves all communities.",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Vrije Universiteit Amsterdam",
    url: "https://vu.nl",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "De Boelelaan 1105",
    postalCode: "1081 HV",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
