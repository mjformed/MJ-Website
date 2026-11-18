import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { HashScroll } from "@/components/hash-scroll";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { brandName, contactEmail } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const description =
  "MJ Forms helps businesses and individuals build a strong online presence through custom website design, logo creation, branding, and digital design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MJ Forms — Design studio",
    template: "%s — MJ Forms",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MJ Forms — Design studio",
    description,
    url: "/",
    siteName: "MJ Forms",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: brandName,
              url: siteUrl,
              email: contactEmail,
              description,
              image: `${siteUrl}/brand/logo.jpg`,
            }),
          }}
        />
        <HashScroll />
        <Header />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
