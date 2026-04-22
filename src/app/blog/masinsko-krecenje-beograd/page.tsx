import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "masinsko-krecenje-beograd")!;

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
              { "@type": "Question", name: "Šta je mašinsko krečenje?", acceptedAnswer: { "@type": "Answer", text: "Mašinsko krečenje (airless prskanje) je tehnika nanošenja boje pomoću mašine pod pritiskom, koja boju raspršuje u sitnim kapljicama. Daje ravnomerniji i glađi sloj nego valjak, a posao se završava brže — posebno na velikim površinama." } },
              { "@type": "Question", name: "Koliko košta mašinsko krečenje po m² u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Mašinsko krečenje u Beogradu košta od 3 do 5 evra po m², slično kao i klasično valjkanje. Razlika je u brzini — mašinsko je brže za velike prostore, pa ukupna cena posla može biti niža." } },
              { "@type": "Question", name: "Da li mašinsko krečenje daje bolji rezultat od valjka?", acceptedAnswer: { "@type": "Answer", text: "Za glatke ravne površine i velike prostorije, mašinsko krečenje daje finiji i ravnomerniji završetak. Za manje prostorije, uglove i detalje, kombinacija mašine i valjka/četke i dalje daje optimalne rezultate." } },
              { "@type": "Question", name: "Za koje prostore se preporučuje mašinsko krečenje?", acceptedAnswer: { "@type": "Answer", text: "Mašinsko krečenje je najpogodnije za velike otvorene prostore: poslovne hale, kancelarije, hodnici zgrada, restorani i prostori sa visokim plafonima. Za standardne stanove do 60 m², razlika u brzini nije dramatična." } },
            ],
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Mašinsko krečenje Beograd</span>
          </nav>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Saveti</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Mašinsko Krečenje Beograd – Cena, Prednosti i Kada Se Isplati
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>23. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_dedinje.jpg" alt="Mašinsko krečenje stana u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Kada čujete "mašinsko krečenje", možda pomislite da je to nešto egzotično ili skupo. Nije. Mašinsko krečenje (prskanje airless sistemom) je tehnika koja se u Srbiji sve više koristi za veće poslovne i stambene prostore — i za pravi tip posla daje odlične rezultate.
          </p>

          <h2>Šta je mašinsko krečenje?</h2>
          <p>
            Mašinsko krečenje je nanošenje boje pomoću airless mašine — pumpe koja boju pod visokim pritiskom raspršuje kroz pištolj u sitne kapljice. Rezultat je izuzetno ravnomerni sloj bez tragova valjka, manji utrošak boje i znatno kraće vreme nanošenja.
          </p>
          <p>
            Klasično valjkanje i dalje ima svoje mesto — posebno za manje prostore, uglove i detalje gde mašina nije praktična. U praksi, kod nas kombinujemo oba pristupa: mašina za velike ravne površine, valjak i četka za rubove, uglove i prozorske špaletnе.
          </p>

          <h2>Mašinsko vs. klasično krečenje – poređenje</h2>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Karakteristika</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Mašinsko</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Klasično (valjak)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "Brzina nanošenja", m: "Brže (3–4× za velike površine)", v: "Sporije" },
                { k: "Ravnomernost sloja", m: "Odlična, bez tragova", v: "Dobra, vidljivi tragovi valjka pri kosoj svetlosti" },
                { k: "Priprema prostora", m: "Intenzivnija (sve se mora zaštititi)", v: "Standardna" },
                { k: "Pogodan za male prostore", m: "Manje (previše prskanja)", v: "Da" },
                { k: "Pogodan za velike površine", m: "Da, idealno", v: "Sporije" },
                { k: "Cena po m²", m: "3–5 €", v: "3–5 €" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.k}</td>
                  <td className="px-5 py-3.5 text-purple-700 font-semibold">{row.m}</td>
                  <td className="px-5 py-3.5 text-gray-600">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <h2>Koliko košta mašinsko krečenje u Beogradu?</h2>
          <p>
            Cena mašinskog krečenja po m² zida je slična klasičnom valjkanju — razlika je u ukupnom vremenu rada:
          </p>
          <ul>
            <li><strong>Mašinsko krečenje (2 sloja, bez gletovanja):</strong> 3–5 €/m²</li>
            <li><strong>Mašinsko krečenje sa grundiranjem:</strong> 4–6 €/m²</li>
            <li><strong>Mašinsko krečenje poslovnog prostora &gt;200 m²:</strong> od 2.5 €/m² (količinska ušteda)</li>
          </ul>
          <p>
            Za veće poslovne prostore, ukupna cena posla može biti niža nego pri klasičnom valjkanju jer se isti posao završava za kraće vreme.
          </p>

          <h2>Za koje prostore je mašinsko krečenje idealno?</h2>
          <ul>
            <li><strong>Poslovne hale i magacini</strong> — velike površine bez previše detalja</li>
            <li><strong>Hodnici i stubišta zgrada</strong> — dugački rovni zidovi</li>
            <li><strong>Kancelarije i otvoreni poslovni prostori</strong></li>
            <li><strong>Restorani i ugostiteljski objekti</strong> pre otvaranja ili renoviranja</li>
            <li><strong>Novogradnja</strong> — svež gips prima boju dobro, mašina ubrzava ceo proces</li>
          </ul>

          <h2>Kada mašinsko krečenje nije pravi izbor?</h2>
          <p>
            Za standardne stanove do 60 m² sa nameštajem, mašinsko krečenje donosi više posla oko zaštite (sve mora biti potpuno pokriveno folijom) nego što štedi na vremenu nanošenja. U tom slučaju, klasično krečenje valjkom je praktičnije i brže — ukupno.
          </p>

          <p>
            Za detalje o cenama po tipu posla pogledajte naš <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">cenovnik krečenja po m² u Beogradu</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Pitate se koja tehnika odgovara vašem prostoru?</p>
            <p className="text-gray-600 mt-1">Dolazimo na procenu, pogledamo prostor i preporučujemo najbrže i najkvalitetnije rešenje. Besplatno, bez obaveza.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-lokala-beograd"), blogPosts.find(p => p.slug === "cena-krecenja-po-m2")].filter(Boolean).map((p) => (
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
