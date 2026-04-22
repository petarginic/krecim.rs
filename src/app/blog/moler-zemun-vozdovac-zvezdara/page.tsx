import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "moler-zemun-vozdovac-zvezdara")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_zvezdara.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Da li radite krečenje u Zemunu?", acceptedAnswer: { "@type": "Answer", text: "Da, Krecim.rs redovno radi krečenje, gletovanje i gipsarske radove u Zemunu. Pokrivamo ceo Zemun — od centra do Gardoša i Altine. Besplatna procena na licu mesta." } },
              { "@type": "Question", name: "Da li radite u Voždovcu i Zvezdari?", acceptedAnswer: { "@type": "Answer", text: "Da, radimo u Voždovcu i Zvezdari. Bez obzira na lokaciju u Beogradu, dolazimo na procenu isti ili naredni dan. Pozovite 061 731 69 82 za dogovor." } },
              { "@type": "Question", name: "Koliko košta krečenje stana u Zemunu?", acceptedAnswer: { "@type": "Answer", text: "Cena krečenja u Zemunu je ista kao i u ostatku Beograda — od 4 do 6 evra po m² za standardno krečenje sa materijalom. Za tačnu cenu potrebna je procena na licu mesta." } },
            ],
          },
          {
            "@type": "Service",
            serviceType: "Krečenje i molerski radovi",
            provider: { "@id": "https://krecim.rs/#business" },
            areaServed: [
              { "@type": "Place", name: "Zemun, Beograd" },
              { "@type": "Place", name: "Voždovac, Beograd" },
              { "@type": "Place", name: "Zvezdara, Beograd" },
            ],
            name: "Molerske usluge Zemun, Voždovac, Zvezdara",
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Moler Zemun, Voždovac, Zvezdara</span>
          </nav>
          <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Lokalno</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Moler Zemun, Voždovac i Zvezdara – Krečenje na Vašoj Adresi
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>26. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_zvezdara.jpg" alt="Moler radi krečenje u Zvezdari, Beograd" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Krecim.rs radi u celom Beogradu — uključujući Zemun, Voždovac i Zvezdaru. Ako ste u jednom od ovih delova grada i tražite pouzdanog molera koji dolazi brzo i radi kvalitetno, pozovite nas za besplatnu procenu.
          </p>

          <h2>Krečenje u Zemunu</h2>
          <p>
            Zemun ima specifičnu mešavinu starije gradnje (kuće i stanovi iz 50ih–70ih) i modernih zgrada. Stariji stanovi u Zemunu često zahtevaju gletovanje pre krečenja jer su zidovi dosta neravni. Radimo u svim delovima Zemuna:
          </p>
          <ul>
            <li>Centar Zemuna, Gardoš, Cara Dušana</li>
            <li>Batajnički drum, Altina, Zemunska kotlina</li>
            <li>Ugrinovci, Dobanovci i okolna naselja</li>
          </ul>
          <p>
            Za stanove u starijim zemunskim kućama, posebno vodimo računa o pripremi zidova — stariji malter zna biti nestabilan i zahteva pažljivo grundiranje.
          </p>

          <h2>Krečenje u Voždovcu</h2>
          <p>
            Voždovac je jedan od većih beogradskih opština sa mešavinom zgrada iz različitih perioda. Radimo u:
          </p>
          <ul>
            <li>Voždovac centar, Šumice, Konjarnik</li>
            <li>Stepa Stepanović, Jajinci, Bele Vode</li>
            <li>Kumodraž, Ripanj, Pinosava</li>
          </ul>

          <h2>Krečenje u Zvezdari</h2>
          <p>
            Zvezdara je poznata po mešovitoj gradnji — ima i starijih kuća i modernih zgrada. Oblasti koje pokrivamo:
          </p>
          <ul>
            <li>Zvezdara centar, Mirijevo, Mali Mokri Lug</li>
            <li>Veliki Mokri Lug, Karaburma, Vojvođanska</li>
            <li>Borča (severni deo), Višnjica</li>
          </ul>

          <h2>Cene molerskih radova</h2>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Usluga</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena po m²</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {[
                { usluga: "Krečenje stana (sa materijalom)", cena: "4–6 €", napomena: "Grunder + 2 ruke boje" },
                { usluga: "Gletovanje + krečenje", cena: "9–15 €", napomena: "Kompletna priprema i bojenje" },
                { usluga: "Krečenje lokala", cena: "3.5–5.5 €", napomena: "Poslovni prostori" },
                { usluga: "Spušteni plafon (rigips)", cena: "od 15 €", napomena: "Materijal i montaža" },
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

          <h2>Kako zakazati?</h2>
          <p>
            Pozovite nas ili pošaljite poruku — dogovorimo termin za procenu isti ili naredni dan. Dolazimo na adresu, merimo prostor, procenjujemo stanje zidova i dajemo vam pisanu ponudu na licu mesta. Procena je besplatna.
          </p>

          <p>
            Za opšte informacije o cenama pogledajte <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">cenovnik krečenja po m²</Link> ili saznajte <Link href="/blog/koliko-kosta-krecenje-stana" className="text-purple-600 hover:underline">koliko košta krečenje celог stana</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zakažite procenu u Zemunu, Voždovcu ili Zvezdari</p>
            <p className="text-gray-600 mt-1">Dolazimo na vašu adresu, merimo i dajemo pisanu ponudu isti dan. Besplatno, bez obaveza.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "moler-novi-beograd"), blogPosts.find(p => p.slug === "koliko-kosta-krecenje-stana")].filter(Boolean).map((p) => (
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
