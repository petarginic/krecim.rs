import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "krecenje-lokala-beograd")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_dedinje.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Koliko košta krečenje lokala u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Krečenje lokala u Beogradu košta od 3 do 6 evra po m² za standardno krečenje, a sa gletovanjem od 8 do 14 evra po m². Cena zavisi od stanja zidova, kvadrature i zahteva posla." } },
              { "@type": "Question", name: "Koliko brzo možete da završite krečenje lokala?", acceptedAnswer: { "@type": "Answer", text: "Krečenje manjeg lokala (do 50 m²) završavamo za 1 do 2 dana. Veći prostori se dogovaraju individualno. Trudimo se da prilagodimo rokove radnom vremenu i potrebama klijenta." } },
              { "@type": "Question", name: "Da li radite krečenje poslovnih prostora van radnog vremena?", acceptedAnswer: { "@type": "Answer", text: "Da, za poslovne klijente možemo da organizujemo rad vikendom ili u večernjim satima kako ne bi ometali normalno poslovanje." } },
            ],
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
            <span className="text-gray-600">Krečenje lokala Beograd</span>
          </nav>
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Vodič</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Krečenje Lokala i Poslovnih Prostora u Beogradu
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>19. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_dedinje.jpg" alt="Krečenje i uređenje poslovnog prostora u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Vlasnici lokala, butika, kancelarija i restorana u Beogradu imaju drugačije potrebe od stanara koji žele da osveže dnevnu sobu. Poslovni prostor mora biti gotov brzo, izgleda professionalno i u skladu sa vizuelnim identitetom brenda. U ovom tekstu objašnjavamo šta je specifično za krečenje poslovnih prostora i kako se formira cena.
          </p>

          <h2>Šta je drugačije kod krečenja lokala?</h2>
          <p>
            Krečenje lokala u Beogradu razlikuje se od krečenja stana u nekoliko ključnih aspektima:
          </p>
          <ul>
            <li><strong>Rokovi su stroži</strong> — lokal ne može da bude zatvoren nedeljama. Vlasnici najčešće žele da radovi budu završeni za vikend ili u što kraćem roku</li>
            <li><strong>Visoki plafoni su česti</strong> — prodajni prostori, restorani i kancelarije često imaju plafone više od standardnih 2.6 m, što zahteva posebnu opremu i menja cenu</li>
            <li><strong>Specifični zahtevi boje i završne obrade</strong> — mnogi poslovni prostori zahtevaju specifičan ton boje koji odgovara korporativnom identitetu</li>
            <li><strong>Veće površine</strong> — poslovni prostori su često veći od stanova, što utiče na organizaciju ekipe i rokove</li>
            <li><strong>Rad u aktivnom prostoru</strong> — ponekad je potrebno raditi u etapama, dok jedan deo lokala nastavlja sa poslovanjem</li>
          </ul>

          <h2>Koje vrste poslovnih prostora krečimo u Beogradu?</h2>
          <p>
            Krecim.rs pruža usluge krečenja i adaptacije za sve vrste poslovnih prostora:
          </p>
          <ul>
            <li>Prodajni lokali i butici</li>
            <li>Kancelarije i poslovni centri</li>
            <li>Restorani, kafići i ugostiteljski objekti</li>
            <li>Medicinskie ordinacije i apoteke</li>
            <li>Frizerski saloni i kozmetički studiji</li>
            <li>Skladišta i magacinski prostori</li>
            <li>Hodnici i zajednički prostori zgrada</li>
          </ul>

          <h2>Koliko košta krečenje lokala u Beogradu?</h2>
          <p>
            Cena krečenja poslovnog prostora zavisi od više faktora nego kod stana:
          </p>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Usluga</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena od</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena do</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {[
                { usluga: "Krečenje lokala (2 sloja)", od: "3 €", do: "5 €", napomena: "Standardna disperziona boja" },
                { usluga: "Krečenje sa grundiranjem", od: "4 €", do: "6 €", napomena: "Priprema + boja" },
                { usluga: "Gletovanje + krečenje", od: "8 €", do: "14 €", napomena: "Kompletna priprema" },
                { usluga: "Krečenje visokih prostora (>3m)", od: "+20%", do: "+35%", napomena: "Skele i dodatna oprema" },
                { usluga: "Krečenje hodnika zgrada", od: "Po dogovoru", do: "", napomena: "Zavisi od obima" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 text-gray-800 font-medium">{row.usluga}</td>
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
            * Cene su po kvadratnom metru površine zida. Za tačnu cifru potrebna je procena na licu mesta.
          </p>

          <h2>Šta sve utiče na cenu krečenja poslovnog prostora?</h2>

          <h3>Visina prostora</h3>
          <p>
            Standardna visina zida u stanu je oko 2.6 m. Mnogi poslovni prostori imaju plafone od 3 do 5 m, a ponekad i više. Rad na visini zahteva skele ili teleskopske valjke, što usporava posao i povećava cenu za 20 do 35%.
          </p>

          <h3>Stanje zidova</h3>
          <p>
            Stari lokali koji su godinama u upotrebi često imaju masne mrlje (posebno u ugostiteljskim objektima), zabetoniran farb ili oštećenja. Priprema takve podloge je zahtevnija od standardnog stana.
          </p>

          <h3>Rok izvođenja</h3>
          <p>
            Ako je potrebno završiti radove za vikend ili u noćnoj smeni, to se može organizovati — ali uz dogovor i eventualno višu cenu zbog angažovanja veće ekipe.
          </p>

          <h3>Specifičnost boje i završne obrade</h3>
          <p>
            Premium brendovi boja, posebni tonovi koji zahtevaju mešanje, ili dekorativne tehnike (sahara, velvet) dolaze sa višim cenovnikom od standardnog krečenja.
          </p>

          <h2>Kako organizovati krečenje lokala bez zatvaranja poslovanja?</h2>
          <p>
            Za aktivan poslovni prostor, preporučujemo:
          </p>
          <ol>
            <li><strong>Rad u etapama</strong> — krečimo jedan deo lokala dok drugi deo nastavlja da radi</li>
            <li><strong>Rad vikendom</strong> — lokal je zatvoren, pa su radovi bez ometanja klijenata</li>
            <li><strong>Noćna smena</strong> — za ugostiteljske objekte koji rade do kasno, možemo organizovati rad od 23h do 7h</li>
            <li><strong>Brzo sušeće boje</strong> — koristimo boje sa kraćim vremenom sušenja kada je vreme ključno</li>
          </ol>

          <h2>Zašto izabrati Krecim.rs za krečenje vašeg lokala?</h2>
          <p>
            Radimo sa poslovnim klijentima u Beogradu koji znaju šta hoće i nemaju vremena za komplikacije. Svaki posao počinje besplatnom procenom na licu mesta — dolazimo, merimo, gledamo stanje i dajemo pisanu ponudu isti dan. Rok i cena se poštuju bez iznenađenja.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zakažite besplatnu procenu za vaš lokal</p>
            <p className="text-gray-600 mt-1">Dolazimo na lice mesta, merimo prostor i dajemo vam pisanu ponudu isti dan. Prilagođavamo se vašem rasporedu.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        {/* Related posts */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-sa-materijalom-beograd"), blogPosts.find(p => p.slug === "cena-krecenja-po-m2")].filter(Boolean).map((p) => (
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
