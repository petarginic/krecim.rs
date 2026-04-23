import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krečenje Beograd | Moler Beograd – Krecim.rs | Besplatna Procena",
  description:
    "Profesionalno krečenje, gletovanje i gipsani radovi u Beogradu. Iskusni majstori, povoljna cena, besplatna procena na licu mesta. Pozovite odmah: 061 731 69 82",
  keywords: [
    "krečenje Beograd",
    "moler Beograd",
    "gletovanje Beograd",
    "gipsani radovi Beograd",
    "lepljenje tapeta Beograd",
    "adaptacija stana Beograd",
    "majstor za krečenje Beograd",
    "molerski radovi Beograd cena",
    "besplatna procena krečenje",
    "krečenje stana Beograd",
    "krečenje lokala Beograd",
    "krečenje sa materijalom Beograd",
    "krečenje povoljno Beograd",
    "povoljno krečenje stanova Beograd",
    "sahara tehnika Beograd",
    "spuštanje plafona Beograd",
    "mašinsko krečenje Beograd",
    "profesionalni moleri Beograd",
    "molerski radovi Beograd cene",
    "krečenje nakon vlage Beograd",
    "moler Novi Beograd",
    "molerske usluge Zemun",
    "krečenje Zemun",
    "kreč Novi Beograd",
    "moler Zemun",
    "moler Vračar",
    "moler Voždovac",
    "krečenje Zvezdara",
  ],
  authors: [{ name: "Krecim.rs" }],
  creator: "Krecim.rs",
  publisher: "Krecim.rs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://krecim.rs",
  },
  openGraph: {
    title: "Krečenje Beograd | Moler Beograd – Krecim.rs",
    description:
      "Iskusni majstori za krečenje, gletovanje i gipsane radove u Beogradu. Besplatna procena na licu mesta. Pozovite: 061 731 69 82",
    url: "https://krecim.rs",
    siteName: "Krecim.rs",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://krecim.rs/images/krecenje-dnevna-soba-beograd.jpg",
        width: 1200,
        height: 630,
        alt: "Krecim.rs – Profesionalno krečenje i molerski radovi Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krečenje Beograd | Moler Beograd – Krecim.rs",
    description: "Profesionalno krečenje i gletovanje u Beogradu. Besplatna procena. 061 731 69 82",
    images: ["https://krecim.rs/images/krecenje-dnevna-soba-beograd.jpg"],
  },
  verification: {
    google: "8X2ZHUdTnJn35hnfWy88arSq96s5BQjGvb2BJD2KUS8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                  "@id": "https://krecim.rs/#business",
                  name: "Krecim.rs – Krečenje i Molerski Radovi Beograd",
                  description:
                    "Profesionalno krečenje, gletovanje, lepljenje tapeta i gipsani radovi u Beogradu. Besplatna procena na licu mesta.",
                  url: "https://krecim.rs",
                  telephone: "+381617316982",
                  email: "info@krecim.rs",
                  priceRange: "$$",
                  image: "https://krecim.rs/images/krecenje-dnevna-soba-beograd.jpg",
                  logo: "https://krecim.rs/images/krecenje-dnevna-soba-beograd.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Beograd",
                    addressLocality: "Beograd",
                    addressRegion: "Beograd",
                    postalCode: "11000",
                    addressCountry: "RS",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 44.8176,
                    longitude: 20.4569,
                  },
                  areaServed: [
                    { "@type": "City", name: "Beograd" },
                    { "@type": "AdministrativeArea", name: "Novi Beograd" },
                    { "@type": "AdministrativeArea", name: "Zemun" },
                    { "@type": "AdministrativeArea", name: "Vračar" },
                    { "@type": "AdministrativeArea", name: "Čukarica" },
                    { "@type": "AdministrativeArea", name: "Palilula" },
                    { "@type": "AdministrativeArea", name: "Savski venac" },
                    { "@type": "AdministrativeArea", name: "Voždovac" },
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "08:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "08:00",
                      closes: "16:00",
                    },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Molerske i Građevinske Usluge",
                    itemListElement: [
                      { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: "2.5", maxPrice: "3.5", priceCurrency: "EUR", unitText: "m²" }, itemOffered: { "@type": "Service", name: "Krečenje Beograd", description: "Profesionalno unutrašnje i spoljašnje krečenje zidova u Beogradu" } },
                      { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: "4", maxPrice: "5", priceCurrency: "EUR", unitText: "m²" }, itemOffered: { "@type": "Service", name: "Gletovanje Beograd", description: "Fino i grubo gletovanje zidova, sanacija pukotina" } },
                      { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: "15", maxPrice: "25", priceCurrency: "EUR", unitText: "m²" }, itemOffered: { "@type": "Service", name: "Gipsani Radovi Beograd", description: "Pregradni zidovi, spušteni plafoni, gips ploče" } },
                      { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: "4.5", maxPrice: "6.5", priceCurrency: "EUR", unitText: "m²" }, itemOffered: { "@type": "Service", name: "Lepljenje Tapeta Beograd", description: "Profesionalno postavljanje svih vrsta tapeta" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Adaptacija Stana Beograd", description: "Kompletna adaptacija stanova i poslovnih prostora ključ u ruke" } },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "150",
                    bestRating: "5",
                  },
                  sameAs: [
                    "https://www.instagram.com/krecim.rs?utm_source=qr&igsh=cW83YmNvaWk2dXdv",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://krecim.rs/#website",
                  url: "https://krecim.rs",
                  name: "Krecim.rs",
                  description: "Profesionalno krečenje i molerski radovi Beograd",
                  publisher: { "@id": "https://krecim.rs/#business" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Koliko košta krečenje po kvadratu u Beogradu?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cena krečenja u Beogradu za 2026. godinu: krečenje u belu boju (2 sloja) 2,5–3,5 €/m², krečenje sa gletovanjem 4–5 €/m², uklanjanje tapeta i krečenje 4,5–6,5 €/m², kompletna sanacija (buđ, malter, 3 sloja) 6–8 €/m². Za tačnu ponudu nudimo besplatnu procenu na licu mesta. Pozovite 061 731 69 82.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Da li radite besplatne procene u Beogradu?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Da, nudimo potpuno besplatnu procenu na celoj teritoriji Beograda. Naš majstor dolazi na lice mesta i daje pisanu ponudu bez obaveza.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Koliko brzo možete da počnete sa radovima?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Najčešće možemo da počnemo za 3 do 7 dana od dogovora. Za hitne slučajeve pozovite nas direktno.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10897736557" strategy="afterInteractive" />
      <Script id="google-ads" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10897736557');`}
      </Script>
    </html>
  );
}
