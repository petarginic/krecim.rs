import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "koliko-kosta-krecenje-stana")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_savski_venac.jpg", width: 1200, height: 630 }],
  },
};

const apartments = [
  { tip: "Garsonjera", povrsina: "20–30 m²", krecenje: "150–300 €", sa_gletovanjem: "350–600 €", trajanje: "1 dan" },
  { tip: "Jednosoban", povrsina: "35–45 m²", krecenje: "280–480 €", sa_gletovanjem: "550–900 €", trajanje: "1–2 dana" },
  { tip: "Dvosoban", povrsina: "50–65 m²", krecenje: "400–700 €", sa_gletovanjem: "800–1.300 €", trajanje: "2–3 dana" },
  { tip: "Trosoban", povrsina: "70–90 m²", krecenje: "550–950 €", sa_gletovanjem: "1.100–1.800 €", trajanje: "3–4 dana" },
  { tip: "Četvorosoban", povrsina: "95–120 m²", krecenje: "750–1.300 €", sa_gletovanjem: "1.500–2.400 €", trajanje: "4–6 dana" },
];

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
              { "@type": "Question", name: "Koliko košta krečenje garsonjere u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Krečenje garsonjere (20–30 m²) košta od 150 do 300 evra. Sa gletovanjem, cena je od 350 do 600 evra." } },
              { "@type": "Question", name: "Koliko košta krečenje dvosobnog stana u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Krečenje dvosobnog stana (50–65 m²) košta od 400 do 700 evra. Sa gletovanjem od 800 do 1.300 evra. Cene uključuju rad i materijal." } },
              { "@type": "Question", name: "Kada je neophodno gletovanje pre krečenja?", acceptedAnswer: { "@type": "Answer", text: "Gletovanje je neophodno kada zidovi imaju vidljive neravnine ili pukotine, kada se ljušti stara boja ili kada je stan starije gradnje (pre 2000. godine)." } },
              { "@type": "Question", name: "Šta je uključeno u cenu krečenja stana?", acceptedAnswer: { "@type": "Answer", text: "U cenu je uvek uključeno: dolazak na procenu, zaštita poda i nameštaja, grundiranje zidova, dve ruke boje, čišćenje i pisana garancija na radove." } },
            ],
          },
        ],
      })}} />
      <div className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Koliko košta krečenje stana</span>
          </nav>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Cene</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Koliko Košta Krečenje Stana u Beogradu? (2026)
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>16. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden top-0">
          <Image src="/images/blog/krecenje_savski_venac.jpg" alt="Gotovo krečenje spavaće sobe u Zemunu" fill className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">
          <p>
            Krečenje stana je jedna od najčešćih investicija u uređenje doma — i jedna od najtraženijih usluga u Beogradu. U ovom tekstu prikazujemo realne ukupne cene za sve veličine stanova, sa i bez gletovanja, kako biste imali jasnu sliku pre nego što pozovete majstora.
          </p>

          <h2>Ukupna cena krečenja stana po veličini</h2>
          <p>Cene su izražene u evrima i pokrivaju kompletan posao — rad i materijal:</p>
        </div>

        {/* Apartment price table */}
        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-4 py-3.5 font-semibold text-gray-700">Tip stana</th>
                <th className="px-4 py-3.5 font-semibold text-gray-700">Površina</th>
                <th className="px-4 py-3.5 font-semibold text-gray-700 whitespace-nowrap">Samo krečenje</th>
                <th className="px-4 py-3.5 font-semibold text-gray-700 whitespace-nowrap">+ gletovanje</th>
                <th className="px-4 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Trajanje</th>
              </tr>
            </thead>
            <tbody>
              {apartments.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-3.5 font-semibold text-gray-800">{row.tip}</td>
                  <td className="px-4 py-3.5 text-gray-500">{row.povrsina}</td>
                  <td className="px-4 py-3.5 text-emerald-700 font-semibold">{row.krecenje}</td>
                  <td className="px-4 py-3.5 text-purple-700 font-semibold">{row.sa_gletovanjem}</td>
                  <td className="px-4 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.trajanje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">
          <p className="text-sm text-gray-400 -mt-2">
            * Cene su procenjene i mogu varirati. Za tačnu cifru potrebna je procena na licu mesta.
          </p>

          <h2>Krečenje stana od 60 m² – koliko košta?</h2>
          <p>
            Stan od 60 m² (tipičan dvosoban) je najčešće tražena kvadratura. Konkretna procena:
          </p>
          <ul>
            <li><strong>Samo krečenje (zidovi ravni, 2 ruke boje):</strong> 430–580 €</li>
            <li><strong>Krečenje + grundiranje:</strong> 500–650 €</li>
            <li><strong>Gletovanje + krečenje (kompletan posao):</strong> 900–1.200 €</li>
            <li><strong>Trajanje:</strong> 2 dana (samo krečenje) ili 4–5 dana (sa gletovanjem)</li>
          </ul>
          <p>
            Napomena: 60 m² je površina stana, a ne zidova. Ukupna površina zidova u dvosobnom stanu od 60 m² je obično između 130 i 160 m² (uključujući plafon), u zavisnosti od visine i rasporeda.
          </p>

          <h2>Zašto se cene toliko razlikuju?</h2>
          <p>
            Raspon "samo krečenje" vs "sa gletovanjem" ne izgleda mali, i nije. Razlika dolazi od toga u kakvom su stanju zidovi. Ako se useljavate u stariji stan ili stan koji je dugo bez renovacije, gletovanje je gotovo uvek neophodno — i to je inače prva stavka koja ide pre boje.
          </p>

          <h3>Kada vam NE treba gletovanje?</h3>
          <p>
            Ako su zidovi ravni, nema pukotina i prethodna boja dobro drži — samo krečenje je sasvim dovoljno. Ovo je čest slučaj kod novogradnje posle 2015. godine i stanova koji su gletovani u poslednjih 5–7 godina.
          </p>

          <h3>Kada vam TREBA gletovanje?</h3>
          <p>
            Stariji stanovi, stanovi u kojima se ljušti boja, vidljive pukotine, neravni uglovi i zidovi — sve su to znaci da je gletovanje neophodan prvi korak. Preskakanje gletovanja kada je ono potrebno znači da nova boja neće lepo stati i neće dugo trajati.
          </p>

          <h2>Šta je uključeno u cenu?</h2>
          <p>
            Kada uzimamo posao, u cenu je uvek uključeno:
          </p>
          <ul>
            <li>Dolazak na procenu i pisana ponuda (besplatno)</li>
            <li>Zaštita poda i nameštaja folijama i trakama</li>
            <li>Grundiranje zidova pre boje</li>
            <li>Dve ruke kvalitetne disperzije ili krečne boje</li>
            <li>Čišćenje iza posla</li>
            <li>Pisana garancija na radove</li>
          </ul>

          <h2>Šta može povećati ukupnu cenu?</h2>
          <ul>
            <li>Sanacija većih pukotina ili oštećenja</li>
            <li>Skidanje starih tapeta ili ljuštuće boje</li>
            <li>Rad na visini (visoki plafoni, stepenice)</li>
            <li>Premium boje po vašem zahtevu</li>
            <li>Dekorativne tehnike (metalik, tekstura, ombre efekti)</li>
          </ul>

          <h2>Kako uštedjeti na krečenju stana?</h2>
          <p>
            Nekoliko saveta koji zaista funkcionišu:
          </p>
          <ol>
            <li><strong>Ispraznite stan pre dolaska majstora</strong> — manje posla sa zaštitom = niža cena</li>
            <li><strong>Radite ceo stan odjednom</strong> — po sobi je skuplje nego sve odjednom</li>
            <li><strong>Birajte standardne boje</strong> — što manje mešanja i specijalnih nijansi, to je posao brži</li>
            <li><strong>Ne žurite rok</strong> — hitni termini ponekad dolaze sa doplataom</li>
          </ol>

          <p>
            Zanima vas i cena po kvadratnom metru? Pogledajte naš detaljan <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">cenovnik krečenja po m² u Beogradu</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Dobijte tačnu cenu za vaš stan</p>
            <p className="text-gray-600 mt-1">Dolazimo na besplatnu procenu. Merimo, gledamo stanje zidova i dajemo pisanu ponudu isti dan.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-i-gletovanje-cena"), blogPosts.find(p => p.slug === "moler-beograd")].filter(Boolean).map((p) => (
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
