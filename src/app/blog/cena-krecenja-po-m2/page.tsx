import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const post = blogPosts.find((p) => p.slug === "cena-krecenja-po-m2")!;

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
  },
};

const priceTable = [
  { usluga: "Krečenje (samo boja, 2 sloja)", cenaOd: "2.5 €", cenaDo: "4 €", napomena: "Zidovi prethodno pripremljeni" },
  { usluga: "Krečenje sa grundiranjem", cenaOd: "3 €", cenaDo: "5 €", napomena: "Uključuje primer" },
  { usluga: "Gletovanje (fino)", cenaOd: "4 €", cenaDo: "7 €", napomena: "Po m² zida" },
  { usluga: "Gletovanje + krečenje", cenaOd: "7 €", cenaDo: "12 €", napomena: "Kompletna priprema i boja" },
  { usluga: "Tapete (lepljenje)", cenaOd: "5 €", cenaDo: "9 €", napomena: "Bez cene tapete" },
  { usluga: "Adaptacija (sve usluge)", cenaOd: "Po dogovoru", cenaDo: "", napomena: "Zavisi od obima" },
];

export default function Page() {
  return (
    <article className="bg-white">
      <div className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Cena krečenja po m²</span>
          </nav>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Cene</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Cena Krečenja po m² u Beogradu – Kompletan Cenovnik za 2025.
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>14. april 2025.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Jedna od prvih stvari koje vlasnici stanova u Beogradu pitaju je: "Koliko košta krečenje po kvadratnom metru?" Odgovor nije jednostavan jer zavisi od više faktora — ali u ovom tekstu dajemo realan raspon cena za 2025. godinu, bez ulepšavanja.
          </p>

          <h2>Cenovnik krečenja i molerskih radova u Beogradu</h2>
          <p>Sve cene su u evrima, po kvadratnom metru površine zida (ne poda):</p>

        </div>

        {/* Price table */}
        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-50 text-left">
                <th className="px-5 py-3.5 font-semibold text-gray-700">Usluga</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 whitespace-nowrap">Cena od</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 whitespace-nowrap">Cena do</th>
                <th className="px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Napomena</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3.5 text-gray-800 font-medium">{row.usluga}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.cenaOd}</td>
                  <td className="px-5 py-3.5 text-emerald-700 font-semibold">{row.cenaDo}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">{row.napomena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-gray prose-lg max-w-none">

          <p className="text-sm text-gray-400 -mt-2">
            * Cene su orijentacione i mogu varirati u zavisnosti od specifičnosti posla. Za tačnu cifru potrebna je procena na licu mesta.
          </p>

          <h2>Šta utiče na cenu krečenja po m²?</h2>
          <p>
            Isti posao može koštati drugačije kod dva različita majstora — i to ne mora da znači da je jedan bolji od drugog. Evo glavnih faktora:
          </p>

          <h3>Stanje zidova</h3>
          <p>
            Ako zidovi imaju pukotine, ljušti se stara boja ili su neravni, potrebna je dodatna priprema. Sanacija pukotina, skidanje stare boje i gletovanje su zasebne stavke koje povećavaju ukupnu cenu — ali bez njih rezultat neće biti dobar.
          </p>

          <h3>Vrsta boje</h3>
          <p>
            Standardna disperziona boja za unutrašnjost (Dekoral, Chromos, Baumit) košta od 8 do 20 evra po kantici od 15 litara. Premium linije (Dulux, Caparol) su skuplje ali pokrivaju bolje i traju duže. Majstor najčešće preporučuje boju prema stanju i nameni prostorije.
          </p>

          <h3>Pristupačnost zidova</h3>
          <p>
            Visoki plafoni, teško dostupni uglovi, rad oko cevi ili instalacija — sve to usporava posao i može povećati cenu rada.
          </p>

          <h3>Lokacija u Beogradu</h3>
          <p>
            Cene su generalno ujednačene po celom gradu, mada ponekad postoji blaga razlika između centra i perifernih opština.
          </p>

          <h2>Da li cena uključuje materijal?</h2>
          <p>
            To uvek treba da proverite! Neki majstori daju cenu samo za rad (i vi kupujete materijal), drugi nude sve uključeno. Preporučujemo da tražite ponudu sa materijalom — lakše je da uporedite i nema iznenađenja na kraju.
          </p>

          <h2>Kako da znate da li je cena realna?</h2>
          <p>
            Ako je cena drastično niža od proseka, pitajte šta je izostavano. Ako je drastično viša, tražite detaljan opis šta je uključeno. Realna cena krečenja u Beogradu za stan prosečnog stanja je između 3 i 5 evra po m² — sa grundiranjem i dve ruke boje.
          </p>

          <p>
            Za kompletnu sliku koliko košta ceo stan, pogledajte naš tekst o <Link href="/blog/koliko-kosta-krecenje-stana" className="text-purple-600 hover:underline">ukupnoj ceni krečenja stana u Beogradu</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Dobijte tačnu cenu za vaš stan</p>
            <p className="text-gray-600 mt-1">Dolazimo besplatno, merimo prostor i dajemo pisanu ponudu. Bez iznenađenja na kraju.</p>
            <a href="tel:0621457055" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 062 145 70 55
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "koliko-kosta-krecenje-stana"), blogPosts.find(p => p.slug === "krecenje-i-gletovanje-cena")].filter(Boolean).map((p) => (
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
