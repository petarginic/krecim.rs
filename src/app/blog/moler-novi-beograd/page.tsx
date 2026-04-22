import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "moler-novi-beograd")!;

export const metadata: Metadata = {
  title: post.metaTitle,
  description: post.metaDescription,
  keywords: post.keywords,
  alternates: { canonical: `https://krecim.rs/blog/${post.slug}` },
  openGraph: {
    title: post.metaTitle,
    description: post.metaDescription,
    url: `https://krecim.rs/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    images: [{ url: "https://krecim.rs/images/blog/krecenje_blokovi.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            headline: post.metaTitle,
            description: post.metaDescription,
            url: `https://krecim.rs/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "sr-RS",
            author: { "@type": "Organization", name: "Krecim.rs", url: "https://krecim.rs" },
            publisher: { "@id": "https://krecim.rs/#business" },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://krecim.rs/blog/${post.slug}` },
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Da li radite krečenje u Novom Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Da, Krecim.rs pruža kompletne molerske i gipsarske usluge u svim delovima Novog Beograda — Blok 21, Blok 45, Belville, Sava City, Arena City i okolina. Dolazimo na besplatnu procenu isti dan." } },
              { "@type": "Question", name: "Koliko košta krečenje stana u Novom Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Cena krečenja stana u Novom Beogradu je ista kao i u ostatku Beograda — od 4 do 6 evra po m² za standardno krečenje sa materijalom, i od 9 do 15 evra po m² sa gletovanjem." } },
              { "@type": "Question", name: "Koliko brzo možete doći na procenu u Novi Beograd?", acceptedAnswer: { "@type": "Answer", text: "U većini slučajeva možemo organizovati procenu isti dan ili naredni radni dan. Pozovite nas na 061 731 69 82 i dogovorimo termin." } },
            ],
          },
          {
            "@type": "Service",
            serviceType: "Krečenje i molerski radovi",
            provider: { "@id": "https://krecim.rs/#business" },
            areaServed: { "@type": "Place", name: "Novi Beograd, Beograd, Srbija" },
            name: "Molerske usluge Novi Beograd",
            description: "Krečenje, gletovanje i gipsarski radovi u svim delovima Novog Beograda.",
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Moler Novi Beograd</span>
          </nav>
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Lokalno</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Moler Novi Beograd – Krečenje i Gipsarski Radovi
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>25. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_blokovi.jpg" alt="Krečenje stana u Novom Beogradu — blokovi" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Novi Beograd je jedan od naših najaktivnijih terena — radimo svakodnevno u stanovima, lokalima i poslovnim prostorima u svim blokovima. Ako tražite pouzdanog molera u Novom Beogradu koji dolazi brzo, radi uredno i poštuje dogovorenu cenu — na pravom ste mestu.
          </p>

          <h2>Gde u Novom Beogradu radimo?</h2>
          <p>
            Pokrivamo sve delove Novog Beograda, uključujući:
          </p>
          <ul>
            <li>Blok 21, Blok 23, Blok 28, Blok 30</li>
            <li>Blok 44, Blok 45, Blok 63, Blok 64, Blok 67, Blok 70</li>
            <li>Belville, Sava City, Arena City</li>
            <li>Bežanijska kosa, Bežanija</li>
            <li>Ledine, Zemunski put, Surčinska cesta</li>
          </ul>

          <h2>Koje usluge pružamo u Novom Beogradu?</h2>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Usluga</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena od</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {[
                { usluga: "Krečenje stana (sa materijalom)", cena: "4 €/m²", napomena: "Grunder + 2 ruke boje" },
                { usluga: "Gletovanje + krečenje", cena: "9 €/m²", napomena: "Kompletna priprema" },
                { usluga: "Krečenje lokala / poslovnog prostora", cena: "3.5 €/m²", napomena: "Standardna disperzija" },
                { usluga: "Gipsarski radovi (pregradni zidovi)", cena: "Po dogovoru", napomena: "Merenje i ponuda na licu mesta" },
                { usluga: "Spušteni plafoni (rigips)", cena: "15 €/m²", napomena: "Materijal i montaža" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.usluga}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.cena}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.napomena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <h2>Zašto klijenti iz Novog Beograda biraju Krecim.rs?</h2>
          <ul>
            <li><strong>Brz odziv</strong> — u većini slučajeva dolazimo na procenu isti ili naredni dan</li>
            <li><strong>Poznajemo objekte</strong> — radimo u stambenim zgradama iz različitih perioda gradnje, znamo specifičnosti starijih blokova i novogradnje</li>
            <li><strong>Pisana ponuda</strong> — cena se ne menja posle potpisa ponude</li>
            <li><strong>Dolazimo sa materijalom</strong> — ne morate ništa da kupujete</li>
            <li><strong>Čišćenje po završetku</strong> — stan ostavljamo urednim</li>
          </ul>

          <h2>Kako zakazati procenu u Novom Beogradu?</h2>
          <p>
            Najbrže je pozivom. Dogovorimo termin za isti ili naredni dan, dolazimo, merimo prostor, gledamo stanje zidova i dajemo vam pisanu ponudu — sve u roku od jednog sata. Procena je besplatna i bez obaveza.
          </p>

          <p>
            Za opšte informacije o cenama pogledajte naš <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">cenovnik krečenja po m²</Link> ili <Link href="/blog/koliko-kosta-krecenje-stana" className="text-purple-600 hover:underline">ukupnu cenu krečenja stana</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zakažite procenu u Novom Beogradu</p>
            <p className="text-gray-600 mt-1">Dolazimo isti dan, merimo i dajemo pisanu ponudu. Besplatno, bez obaveza.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "koliko-kosta-krecenje-stana"), blogPosts.find(p => p.slug === "krecenje-sa-materijalom-beograd")].filter(Boolean).map((p) => (
              <Link key={p!.slug} href={`/blog/${p!.slug}`} className="group block bg-gray-50 hover:bg-purple-50 rounded-xl p-5 border border-gray-100 hover:border-purple-200 transition-all">
                <p className="font-semibold text-gray-800 group-hover:text-purple-700 text-sm leading-snug">{p!.title}</p>
                <p className="text-xs text-gray-400 mt-1">{p!.readTime} čitanja</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
