import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "krecenje-sa-materijalom-beograd")!;

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
              { "@type": "Question", name: "Šta uključuje krečenje sa materijalom?", acceptedAnswer: { "@type": "Answer", text: "Krečenje sa materijalom uključuje: grunder (primer), kvalitetnu disperzionou ili krečnu boju, zaštitne folije i trake, rad majstora i čišćenje nakon završetka. Vi ne kupujete ništa posebno — sve dolazi u jednoj ceni." } },
              { "@type": "Question", name: "Koliko košta krečenje sa materijalom u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Krečenje sa materijalom u Beogradu košta od 4 do 6 evra po m² (standardna boja, 2 sloja, sa grundiranjem). Sa gletovanjem, cena je od 9 do 15 evra po m²." } },
              { "@type": "Question", name: "Da li je bolje krečenje sa ili bez materijala?", acceptedAnswer: { "@type": "Answer", text: "Krečenje sa materijalom je gotovo uvek bolje za klijenta — nema rizika od kupovine pogrešne boje, majstor garantuje za materijal koji sam donosi i lakše je da poredite ponude različitih majstora." } },
            ],
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Krečenje sa materijalom Beograd</span>
          </nav>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Cene</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Krečenje sa Materijalom u Beogradu – Šta Je Uključeno i Koliko Košta
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>20. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_dedinje.jpg" alt="Svežo okrečena dnevna soba u Beogradu sa materijalom" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Kada pretražujete molere u Beogradu, nailazite na dve vrste ponuda: "cena rada" i "cena sa materijalom". Razlika nije samo u cifri — to su dve potpuno različite kategorije usluge. U ovom tekstu objašnjavamo šta tačno dobijate kada platite krečenje sa materijalom i zašto je to u većini slučajeva pametniji izbor.
          </p>

          <h2>Šta znači krečenje sa materijalom?</h2>
          <p>
            Krečenje sa materijalom znači da majstor dolazi sa svim što mu je potrebno za posao — vi ne morate ništa posebno da kupujete ili obezbeđujete. U cenu je obično uključeno:
          </p>
          <ul>
            <li><strong>Grunder (primer)</strong> — priprema zida za boju, osigurava prijanjanje</li>
            <li><strong>Disperziona ili krečna boja</strong> — po vašem izboru tona i brenda</li>
            <li><strong>Zaštitne folije i trake</strong> — za pod, nameštaj i elemente koji ne treba da se ofarbaju</li>
            <li><strong>Potrošni materijal</strong> — valjci, četkice, lopate, posude</li>
            <li><strong>Čišćenje</strong> — uklanjanje folija i otpada nakon završetka</li>
          </ul>
          <p>
            Neke ponude uključuju i gletovinu (špahtl masu) ako je potrebno gletovanje — to uvek proverite unapred.
          </p>

          <h2>Krečenje sa ili bez materijala — šta je isplativije?</h2>
          <p>
            Evo konkretne razlike:
          </p>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Stavka</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Bez materijala</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Sa materijalom</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stavka: "Cena rada", bez: "1.5–3 €/m²", sa: "Uključeno" },
                { stavka: "Grunder", bez: "Vi kupujete", sa: "Uključeno" },
                { stavka: "Boja (2 sloja)", bez: "Vi kupujete", sa: "Uključeno" },
                { stavka: "Folije i trake", bez: "Vi kupujete", sa: "Uključeno" },
                { stavka: "Ukupno po m²", bez: "4–7 € (ukupno)", sa: "4–6 € (ukupno)" },
                { stavka: "Odgovornost za materijal", bez: "Vi snosite rizik", sa: "Majstor garantuje" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.stavka}</td>
                  <td className="px-5 py-3.5 text-gray-600">{row.bez}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.sa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <h2>Koliko košta krečenje sa materijalom u Beogradu za 2026?</h2>
          <p>
            Okvirne cene za krečenje sa materijalom u Beogradu po kvadratnom metru zida:
          </p>
          <ul>
            <li><strong>Standardno krečenje (grunder + 2 ruke boje):</strong> 4–6 €/m²</li>
            <li><strong>Krečenje sa gletovanjem:</strong> 9–15 €/m²</li>
            <li><strong>Premium boje (Dulux, Caparol):</strong> +1–2 €/m² više</li>
            <li><strong>Dekorativne tehnike (sahara, velvet):</strong> 8–18 €/m²</li>
          </ul>

          <h2>Prednosti krečenja sa materijalom</h2>

          <h3>Nema grešaka pri kupovini</h3>
          <p>
            Neiskusni kupci često kupe premalo ili previše boje, pogrešan grunder ili boju koja nije kompatibilna sa podlogom. Kada majstor donosi materijal, taj rizik pada na njega.
          </p>

          <h3>Majstor garantuje za materijal</h3>
          <p>
            Ako dođe do problema sa prijanjanjem boje ili neravnomerne pokrivenosti, majstor ne može da kaže "problem je u materijalu koji ste vi kupili." On je odgovoran za ceo posao od početka do kraja.
          </p>

          <h3>Lakše poređenje ponuda</h3>
          <p>
            Ponude "sa materijalom" su direktno uporedive jer svaka pokriva isti obim posla. Ponude "samo rad" su teže za poređenje jer morate da uračunate i troškove materijala koji varira od brenda do brenda.
          </p>

          <h3>Ušteda vremena</h3>
          <p>
            Ne morate da idete u prodavnicu, da nosite teške kantice i da brinete da li ste sve nabavili. Majstor dolazi spreman — vi otvarate vrata i odlazite.
          </p>

          <h2>Šta ako imam omiljenu boju ili brend?</h2>
          <p>
            Nema problema. Kažete nam koji ton ili brend preferirate, mi nabavljamo. Jedina razlika je što premium boje (Dulux, Caparol, Farrow & Ball) dolaze sa višom cenom materijala, što se odražava na ukupnu ponudu. Sve je transparentno unapred.
          </p>

          <p>
            Za detaljan pregled cena po tipu posla pogledajte naš <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">cenovnik krečenja po m² u Beogradu</Link> ili saznajte <Link href="/blog/koliko-kosta-krecenje-stana" className="text-purple-600 hover:underline">koliko košta krečenje celog stana</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Tražite molera koji dolazi sa svim materijalom?</p>
            <p className="text-gray-600 mt-1">Dolazimo na besplatnu procenu, donosimo sve što nam treba i dajemo pisanu ponudu. Bez iznenađenja na kraju.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "cena-krecenja-po-m2"), blogPosts.find(p => p.slug === "koliko-kosta-krecenje-stana")].filter(Boolean).map((p) => (
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
