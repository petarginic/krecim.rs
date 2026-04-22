import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "spusteni-plafoni-beograd")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_palilula.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Koliko košta spušteni plafon od gips kartona u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Standardni ravni spušteni plafon od gips kartona u Beogradu košta od 15 do 25 evra po m², uključujući materijal i montažu. Plafoni sa LED uграdnjom i kompleksnijim oblicima koštaju od 25 do 45 evra po m²." } },
              { "@type": "Question", name: "Koliko traje montaža spuštenog plafona?", acceptedAnswer: { "@type": "Answer", text: "Montaža spuštenog plafona za prosečnu sobu (15–20 m²) traje 1 do 2 dana. Veći prostori ili kompleksni oblici sa LED osvjetljenjem mogu trajati 3 do 4 dana." } },
              { "@type": "Question", name: "Da li spušteni plafon smanjuje visinu prostorije?", acceptedAnswer: { "@type": "Answer", text: "Da, standardni spušteni plafon spušta se za 10 do 15 cm. U prostorijama sa visinom manjom od 2.7 m ovo može biti ograničavajuće. Za niske prostorije postoje alternativna rešenja sa minimalnim spuštanjem." } },
              { "@type": "Question", name: "Koji tip spuštenog plafona je najpopularniji u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Najpopularniji je standardni ravni spušteni plafon od gips kartona (rigips) koji se koristi za skrivanje instalacija i LED ugradnju. Kasetonski plafoni su popularni u poslovnim prostorima i restoranima." } },
            ],
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Spušteni plafoni Beograd</span>
          </nav>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Cene</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Spušteni Plafoni u Beogradu – Cena, Tipovi i Montaža
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>22. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_palilula.jpg" alt="Spušteni plafon od rigipsa u hodniku stana u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Spušteni plafon je jedno od najpraktičnijih rešenja u savremenom enterjeru — skriva instalacije, poboljšava akustiku, omogućava ugradnju LED rasvete i daje prostoru moderan, uređen izgled. U ovom tekstu prikazujemo koji tipovi postoje, koliko koštaju u Beogradu i kada se isplati ugraditi spušteni plafon.
          </p>

          <h2>Tipovi spuštenih plafona</h2>

          <h3>1. Ravni gips karton plafon (rigips)</h3>
          <p>
            Najpopularniji tip u stanovima. Postavlja se na metalnu konstrukiju ispod postojećeg plafona. Idealan za skrivanje instalacija, cevi i kablova. Može se koristiti za ugradnju LED traka i tačkastih svetiljki. Spušta prostor za 10 do 15 cm.
          </p>

          <h3>2. Kasetonski plafon</h3>
          <p>
            Plafon sa modularnim kasetama koje stvaraju geometrijski uzorak. Popularan u poslovnim prostorima, kancelarijama, restoranima i hotelima. Laka demontaža omogućava pristup instalacijama.
          </p>

          <h3>3. Spušteni plafon sa LED ugradnjom</h3>
          <p>
            Kombinacija gips karton plafona sa integrisanom LED rasvjetom. Može biti indirektno osvetljenje (LED traka sakrivena iza ivičnog elementa), tačkaste svetiljke ili kombinacija. Stvara ambijentalno osvetljenje i moderni izgled prostora.
          </p>

          <h3>4. Kružni ili oblični plafon</h3>
          <p>
            Dizajnerska varijanta sa organskim oblicima, višenivoskim plafonima ili karakterističnim geometrijskim elementima. Zahteva više rada i iskustva, a cena je proporcionalno viša.
          </p>

          <h2>Koliko košta spušteni plafon u Beogradu?</h2>
          <p>Sve cene uključuju materijal i montažu:</p>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Tip plafona</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena od</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena do</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tip: "Ravni gips karton plafon", od: "15 €", do: "22 €", napomena: "Standardna visina spuštanja" },
                { tip: "Plafon sa LED trakom", od: "20 €", do: "30 €", napomena: "Indirektno osvetljenje u ivici" },
                { tip: "Plafon sa tačkastim svetiljkama", od: "22 €", do: "35 €", napomena: "Uključuje ugradnju 6–8 svetiljki" },
                { tip: "Kasetonski plafon", od: "18 €", do: "28 €", napomena: "Za poslovne prostore" },
                { tip: "Dvonivoški / oblični plafon", od: "30 €", do: "50 €", napomena: "Individualni dizajn" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.tip}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.od}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.do}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.napomena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <p className="text-sm text-gray-400 -mt-2">
            * Cene su po kvadratnom metru. Za tačnu ponudu potrebna je procena na licu mesta.
          </p>

          <h2>Kada se isplati ugraditi spušteni plafon?</h2>
          <p>
            Spušteni plafon je odlično rešenje kada:
          </p>
          <ul>
            <li><strong>Imate vidljive instalacije</strong> — cevi za grejanje, klimatizaciju, elektro kablove koje ne možete ili ne želite da sakrijete u zid</li>
            <li><strong>Originalni plafon je oštećen</strong> — pukotine, vlažne mrlje ili neravnine koje bi zahtevale skupu sanaciju</li>
            <li><strong>Želite LED rasvetu</strong> — spušteni plafon je idealna osnova za indirektno osvetljenje i tačkaste svetiljke</li>
            <li><strong>Radite kompletnu adaptaciju</strong> — najjeftinije je ugraditi spušteni plafon pre krečenja zidova</li>
            <li><strong>Prostor ima visinu veću od 3 m</strong> — spušteni plafon može optički "zagrejati" i približiti previše visok prostor</li>
          </ul>

          <h2>Da li spušteni plafon smanjuje visinu prostorije?</h2>
          <p>
            Da, standardni spušteni plafon spušta se za 10 do 15 cm. U stanovima sa standardnom visinom od 2.6 m, to može biti ograničavajuće. Za takve situacije nudimo rešenja sa minimalnim spuštanjem od 5 cm — dovoljno za LED traku ili tanku konstrukiju bez značajnog gubitka visine.
          </p>

          <h2>Šta je uključeno u cenu montaže?</h2>
          <p>
            Kod Krecim.rs, u cenu spuštenog plafona uvek je uključeno:
          </p>
          <ul>
            <li>Dolazak na procenu i merenje</li>
            <li>Metalna konstrukija (profili i vešalice)</li>
            <li>Gips karton ploče (Knauf ili Rigips)</li>
            <li>Gletovanje i fino završavanje spojeva</li>
            <li>Grundiranje i krečenje plafona (1 ruka boje)</li>
            <li>Čišćenje nakon montaže</li>
          </ul>
          <p>
            LED trake i svetiljke mogu biti uključene po dogovoru — sa ili bez materijala, u zavisnosti od vaše preference.
          </p>

          <p>
            Za više informacija o gipsarskim radovima i cenama pogledajte i naš vodič o <Link href="/blog/krecenje-stanova-beograd" className="text-purple-600 hover:underline">krečenju stanova u Beogradu</Link> ili nas pozovite za besplatnu procenu.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zakažite procenu za spušteni plafon</p>
            <p className="text-gray-600 mt-1">Dolazimo na lice mesta, merimo prostor, predlažemo rešenje i dajemo pisanu ponudu isti dan.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-i-gletovanje-cena"), blogPosts.find(p => p.slug === "cena-krecenja-po-m2")].filter(Boolean).map((p) => (
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
