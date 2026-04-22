import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "krecenje-i-gletovanje-cena")!;

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
              { "@type": "Question", name: "Koja je razlika između gletovanja i krečenja?", acceptedAnswer: { "@type": "Answer", text: "Gletovanje je glatkanje zidova specijalnom masom i radi se PRE krečenja. Krečenje je nanošenje boje na već pripremljenu (gletovanu) podlogu." } },
              { "@type": "Question", name: "Koliko košta gletovanje i krečenje zajedno u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Kombinovana cena gletovanja i krečenja u Beogradu je od 7 do 12 evra po m². Samo krečenje (bez gletovanja) košta od 3 do 5 evra po m²." } },
              { "@type": "Question", name: "Kada mi treba samo krečenje, a kada i gletovanje?", acceptedAnswer: { "@type": "Answer", text: "Samo krečenje je dovoljno kada su zidovi već ravni i gletovani. Gletovanje je neophodno kada zidovi imaju neravnine, pukotine ili se ljušti stara boja." } },
              { "@type": "Question", name: "Može li se preskočiti gletovanje?", acceptedAnswer: { "@type": "Answer", text: "Može, ali sa posledicama. Boja nanesena na neravne zidove izgleda loše na kosoj svetlosti. Ako vam je cilj da stan lepo izgleda, gletovanje ne treba preskočiti." } },
            ],
          },
        ],
      })}} />
      <div className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Krečenje i gletovanje cena</span>
          </nav>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Saveti</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Krečenje i Gletovanje – Razlika, Cena i Kada Vam Treba Oboje
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>18. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_blokovi.jpg" alt="Gletovanje i krečenje dnevne sobe u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Kada vlasnici stanova u Beogradu zovu majstora i kažu "treba mi krečenje", često misle na nešto što zapravo zahteva i gletovanje. I obrnuto — neko plati za gletovanje, a onda shvati da mu još treba i boja. Ovaj tekst jednom za svagda razjašnjava razliku, redosled radova i cenu.
          </p>

          <h2>Šta je gletovanje, a šta krečenje?</h2>

          <h3>Gletovanje</h3>
          <p>
            Gletovanje je proces glatkanja zidova posebnom glet masom (špahtl masom). Nanosi se u jednom ili više slojeva, suši, a zatim se brusi da bi zid bio ravan kao staklo. Gletovanje se uvek radi PRE krečenja — to je priprema podloge.
          </p>
          <p>
            Bez gletovanja, boja samo presvuče neravni zid i sve neravnine ostaju vidljive — posebno na kosoj svetlosti. Upravo zato stanovi renovirani "na brzinu" uvek izgledaju amaterski.
          </p>

          <h3>Krečenje</h3>
          <p>
            Krečenje (ili farbanje) je nanošenje boje na pripremljenu podlogu. Može biti krečna boja (bela, klasična) ili disperziona (koja dolazi u svim bojama). Radi se posle gletovanja ili, ako su zidovi već ravni, direktno na postojeći sloj boje.
          </p>

          <h2>Koji se radi prvi?</h2>
          <p>
            Redosled je uvek isti i ne sme se menjati:
          </p>
          <ol>
            <li>Sanacija oštećenja (pukotine, rupe)</li>
            <li>Gletovanje (ako je potrebno)</li>
            <li>Brušenje gletovanog sloja</li>
            <li>Grundiranje (primer)</li>
            <li>Krečenje (1–2 ruke boje)</li>
          </ol>
          <p>
            Ko preskače korake ili menja redosled, preskače kvalitet.
          </p>

          <h2>Kada vam treba samo krečenje?</h2>
          <p>
            Samo krečenje je dovoljno kada:
          </p>
          <ul>
            <li>Zidovi su već ravni i gletovani (prethodna renovacija)</li>
            <li>Stara boja dobro drži i nema ljušćenja</li>
            <li>Nema vidljivih pukotina ili neravnina</li>
            <li>Renovirate stan koji je urađen u poslednjih 5–7 godina</li>
          </ul>

          <h2>Kada vam treba i gletovanje i krečenje?</h2>
          <p>
            Gletovanje je neophodno kada:
          </p>
          <ul>
            <li>Zidovi imaju vidljive neravnine ili pukotine</li>
            <li>Stara boja se ljušti ili je nanesena u debelim neravnim slojevima</li>
            <li>Stan je starije gradnje (pre 2000. godine)</li>
            <li>Radite kompletan remont stana</li>
            <li>Useljavate se u novoizgrađeni stan gde beton nije gladan</li>
          </ul>

          <h2>Koliko košta gletovanje i krečenje zajedno u Beogradu?</h2>
          <p>
            Kombinovana cena gletovanja i krečenja u Beogradu za 2026. godinu:
          </p>

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
                { usluga: "Samo krečenje (2 sloja)", cena: "3–5 €", napomena: "Zidovi već ravni" },
                { usluga: "Samo gletovanje (fino)", cena: "4–7 €", napomena: "Bez boje" },
                { usluga: "Gletovanje + krečenje", cena: "7–12 €", napomena: "Kompletan posao" },
                { usluga: "Grubo gletovanje (izravnavanje)", cena: "5–9 €", napomena: "Za jako neravne zidove" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.usluga}</td>
                  <td className="px-5 py-3.5 text-purple-700 font-semibold">{row.cena}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.napomena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <h2>Kako da znate šta vam treba?</h2>
          <p>
            Najjednostavniji test: priložite nešto ravno uz zid (lenjir, ravan štap). Ako vidite da svetlost prolazi neravnomerno između podloge i zida, gletovanje je neophodno. Ako je zid ravan, možete ići direktno na krečenje.
          </p>
          <p>
            Drugi signal: ako kada dodirnete zid prste ostavi bijeli prah — to je znak da stara boja nije dobra podloga i da treba ili grundiranje ili gletovanje.
          </p>
          <p>
            Ako niste sigurni, pozovite majstora na besplatnu procenu — to je upravo ono za šta procena služi.
          </p>

          <h2>Može li se preskočiti gletovanje?</h2>
          <p>
            Može — ali sa posledicama. Boja nanesena na neravne zidove izgleda loše na kosoj svetlosti, posebno u prostorijama sa velikim prozorima. Ako vam je cilj da stan stvarno lepo izgleda, gletovanje nije trošak koji treba preskočiti.
          </p>

          <p>
            Za detaljan uvid u ukupne troškove pogledajte naš tekst o <Link href="/blog/koliko-kosta-krecenje-stana" className="text-purple-600 hover:underline">ukupnoj ceni krečenja stana u Beogradu</Link> ili saznajte više o <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">ceni po m²</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Niste sigurni šta vam treba?</p>
            <p className="text-gray-600 mt-1">Dolazimo na besplatnu procenu, pogledamo stanje zidova i kažemo vam tačno šta je potrebno i koliko košta.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "cena-krecenja-po-m2"), blogPosts.find(p => p.slug === "krecenje-stanova-beograd")].filter(Boolean).map((p) => (
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
