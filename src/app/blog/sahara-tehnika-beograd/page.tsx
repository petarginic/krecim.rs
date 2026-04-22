import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "sahara-tehnika-beograd")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_vracar.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Šta je sahara tehnika za zidove?", acceptedAnswer: { "@type": "Answer", text: "Sahara tehnika je dekorativna tehnika krečenja koja daje zidovima teksturu peska i peskovitih površina. Nanosi se specijalnom dekorativnom bojom uz karakteristične pokrete sunđerom ili četkom, stvarajući trodimenzionalni efekat." } },
              { "@type": "Question", name: "Koliko košta sahara tehnika u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Sahara tehnika u Beogradu košta od 8 do 15 evra po kvadratnom metru, u zavisnosti od složenosti uzorka i broja slojeva. Cena je viša od standardnog krečenja jer zahteva više vremena i veštine." } },
              { "@type": "Question", name: "Za koje prostorije je sahara tehnika najpogodnija?", acceptedAnswer: { "@type": "Answer", text: "Sahara tehnika je najpogodnija za dnevne sobe, spavaće sobe i hodnike. Može se koristiti i u restoranima i hotelima. Nije preporučljiva za kupatila i prostorije sa visokom vlažnošću." } },
              { "@type": "Question", name: "Koliko dugo traje sahara tehnika na zidovima?", acceptedAnswer: { "@type": "Answer", text: "Pravilno izvedena sahara tehnika traje 8 do 12 godina bez potrebe za popravkom. Dekorativne boje koje koristimo su visoko otporne na habanje i bledo od UV svetlosti." } },
            ],
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Sahara tehnika Beograd</span>
          </nav>
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Saveti</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Sahara Tehnika – Dekorativno Krečenje Zidova u Beogradu
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>21. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_vracar.jpg" alt="Sahara tehnika dekorativnog krečenja — Vračar, Beograd" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Standardna bela ili krem boja može biti dosadna. Ako tražite nešto što će dati karakter zidovima vašeg doma ili poslovnog prostora bez skupog renoviranja, sahara tehnika je jedan od najpopularnijih izbora u Srbiji — i to s razlogom.
          </p>

          <h2>Šta je sahara tehnika?</h2>
          <p>
            Sahara tehnika (poznata i kao "sahara zid" ili "peskovita tehnika") je dekorativna tehnika krečenja koja imitira teksturu peska i peskovitih površina. Nanosi se specijalnom dekorativnom bojom koja sadrži sitne čestice kvarca ili granulata, a karakteristični efekat postiže se posebnom tehnikom nanošenja — sunđerom, četkom ili špahtlom u karakterističnim kruž nim ili prugastim pokretima.
          </p>
          <p>
            Rezultat su zidovi koji izgledaju trodimenzionalno, toplije i "puniji" od klasično okrečenih zidova. Sahara tehnika je posebno popularna u dnevnim sobama, spavaćim sobama i hodnicima, ali sve češće se viđa i u restoranima i hotelima.
          </p>

          <h2>Kako izgleda proces izvođenja sahara tehnike?</h2>
          <p>
            Za razliku od standardnog krečenja, sahara tehnika zahteva više koraka i više veštine:
          </p>
          <ol>
            <li><strong>Priprema zida</strong> — zid mora biti savršeno ravan i gletovan. Sahara tehnika pojačava sve neravnine, pa je priprema ključna</li>
            <li><strong>Grundiranje</strong> — primer se nanosi i suši (minimum 4 sata)</li>
            <li><strong>Prvi sloj dekorativne boje</strong> — nanosi se valjkom kao osnova, suši se</li>
            <li><strong>Drugi sloj — tehnika</strong> — majstor nanosi boju u karakterističnim pokretima sunđerom ili špahtlom, stvarajući teksturu. Ovo je deo koji zahteva iskustvo i brzinu u radu jer se boja mora formirati pre sušenja</li>
            <li><strong>Treći sloj (opciono)</strong> — za intenzivniji efekat ili drugi ton, nanosi se preklopni sloj druge nijanse</li>
            <li><strong>Lak za zaštitu (opciono)</strong> — za prostore sa povećanim habanjem</li>
          </ol>

          <h2>Koliko košta sahara tehnika u Beogradu?</h2>
          <p>
            Cena sahara tehnike je viša od standardnog krečenja jer zahteva više rada, poseban materijal i iskustvo izvođača:
          </p>

        </div>

        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Tip sahara tehnike</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700">Cena po m²</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tip: "Sahara jednobojna (jedan ton)", cena: "8–11 €", napomena: "Jedan sloj efekta, jednostavniji uzorak" },
                { tip: "Sahara dvobojna (dva tona)", cena: "11–15 €", napomena: "Dva sloja, dublji efekat" },
                { tip: "Sahara sa lakom za zaštitu", cena: "+1–2 €", napomena: "Preporučuje se za hodnike i kuhinje" },
                { tip: "Standardno krečenje (za poređenje)", cena: "3–5 €", napomena: "Bez dekorativnog efekta" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 font-medium text-gray-800">{row.tip}</td>
                  <td className="px-5 py-3.5 text-purple-700 font-semibold">{row.cena}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.napomena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <h2>Za koje prostorije je sahara tehnika najpogodnija?</h2>
          <ul>
            <li><strong>Dnevna soba</strong> — jedan zid ("akcentni zid") u sahara tehnici dramatično menja izgled prostora bez previsokih troškova</li>
            <li><strong>Spavaća soba</strong> — topli zemljani tonovi stvaraju opuštajuću atmosferu</li>
            <li><strong>Hodnik</strong> — daje karakter ulasku u stan</li>
            <li><strong>Restoran ili kafić</strong> — prirodni tonovi peska i terre stvaraju toplu, rustičnu atmosferu</li>
          </ul>

          <h2>Gde se ne preporučuje sahara tehnika?</h2>
          <p>
            Sahara tehnika nije pogodna za:
          </p>
          <ul>
            <li>Kupatila i mokre čvorove (vlaga oštećuje dekorativnu boju)</li>
            <li>Kuhinjske zidove iznad šporeta (masnoća i para)</li>
            <li>Zidove koji nisu savršeno gletovani (efekat će pojačati neravnine)</li>
          </ul>

          <h2>Koliko dugo traje sahara tehnika?</h2>
          <p>
            Pravilno izvedena sahara tehnika sa kvalitetnom dekorativnom bojom traje 8 do 12 godina. Za razliku od tapeta, ne ljušti se i ne bubri od vlage (ako se primenjuje u odgovarajućim prostorijama). Moguće je popraviti oštećena mesta bez obnavljanja celog zida.
          </p>

          <h2>Koje boje su najpopularnije za sahara tehniku u Beogradu?</h2>
          <p>
            Trenutno najpopularnije kombinacije kod naših klijenata:
          </p>
          <ul>
            <li>Topla bela + krem (klasično, svedeno)</li>
            <li>Peščana + terrakota (mediteranski stil)</li>
            <li>Siva + antracit (moderni minimalizam)</li>
            <li>Oker + braon (rustičan, naturalan izgled)</li>
          </ul>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zainteresovani za sahara tehniku?</p>
            <p className="text-gray-600 mt-1">Dolazimo na procenu, donosimo uzorke boja i pokazujemo vam kako efekat izgleda uživo. Besplatno, bez obaveza.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-stanova-beograd"), blogPosts.find(p => p.slug === "krecenje-sa-materijalom-beograd")].filter(Boolean).map((p) => (
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
