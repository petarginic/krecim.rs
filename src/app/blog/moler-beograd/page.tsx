import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "moler-beograd")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_stari_grad.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Da li dobar moler dolazi na besplatnu procenu?", acceptedAnswer: { "@type": "Answer", text: "Da, svaki ozbiljan moler dolazi na procenu bez naplate. Ako neko traži novac samo za dolazak, to je loš znak." } },
              { "@type": "Question", name: "Šta je uključeno u cenu molerskih radova?", acceptedAnswer: { "@type": "Answer", text: "Tražite detaljan opis: materijal ili samo rad, koliko slojeva boje, da li je uključeno grundiranje i zaštita poda i nameštaja." } },
              { "@type": "Question", name: "Koliko košta moler u Beogradu?", acceptedAnswer: { "@type": "Answer", text: "Usluge molera u Beogradu kreću se od 3 do 8 evra po kvadratnom metru zida, u zavisnosti od toga šta je uključeno i stanja zidova." } },
              { "@type": "Question", name: "Da li moler daje garanciju na radove?", acceptedAnswer: { "@type": "Answer", text: "Profesionalan moler stoji iza svog rada. Pisana garancija na određen period znači da će se vratiti i ispraviti ako nešto pođe po zlu u garantnom roku." } },
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
            <span className="text-gray-600">Moler Beograd</span>
          </nav>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Saveti</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Moler Beograd - Kako Naći Pouzdanog Majstora
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>12. april 2026.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/images/blog/krecenje_stari_grad.jpg" alt="Moler radi u predsoblju stana u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Beograd ima na hiljade molera — ali koliko njih je zaista pouzdano? Svako ko je jednom imao loše iskustvo sa majstorom koji nestaje na pola posla, kasni ili uradi lošiji posao nego što je obećao, zna koliko je teško naći nekog na koga možeš da računaš. Ovaj tekst će vam pomoći da to izbegnete.
          </p>

          <h2>Šta razlikuje dobrog molera od lošeg?</h2>
          <p>
            Dobar moler u Beogradu se prepoznaje po nekoliko stvari koje ne vidite odmah, ali koje se osete u razgovoru i kroz ceo proces rada:
          </p>
          <ul>
            <li><strong>Dolazi na procenu pre nego što da cenu</strong> — ko daje cenu "na oko" bez da vidi prostor, taj cenu ili izmisli ili je napravi previše opštu da znači išta</li>
            <li><strong>Daje pisanu ponudu</strong> — usmeni dogovor je osnov za nesporazum. Pisana ponuda sa jasnim opisom radova štiti i vas i majstora</li>
            <li><strong>Ima reference ili recenzije</strong> — prethodni klijenti su najiskreniji pokazatelj kvaliteta</li>
            <li><strong>Ne traži sav novac unapred</strong> — plaćanje u fazama (avans, tokom radova, na kraju) je profesionalan pristup</li>
            <li><strong>Priprema prostor pre rada</strong> — folije na podu, zaštitne trake, pokrivanje nameštaja</li>
          </ul>

          <h2>Pitanja koja morate postaviti pre angažovanja</h2>
          <p>
            Kada kontaktirate molera u Beogradu, ova pitanja vam mogu uštedeti mnogo problema:
          </p>

          <h3>Da li dolazite na besplatnu procenu?</h3>
          <p>
            Svaki ozbiljan moler dolazi na procenu bez naplate. Ako neko traži novac samo za dolazak, to je loš znak — ili je prezauzan, ili pokušava da zarade na premerima umesto na poslu.
          </p>

          <h3>Šta je uključeno u cenu?</h3>
          <p>
            Tražite detaljan opis: materijal ili samo rad? Koliko slojeva boje? Da li je uključeno grundiranje? Zaštita poda i nameštaja? Svaki "nije uključeno" koji otkrijete tek na kraju posla je iznenađenje koje vas košta.
          </p>

          <h3>Koliko traje posao i kada možete da počnete?</h3>
          <p>
            Rok je bitan — ako imate preseljenje ili renovaciju u toku, kašnjenje molera može pokrenuti domino efekat. Dobar majstor vam da realan rok i drži ga.
          </p>

          <h3>Da li dajete garanciju?</h3>
          <p>
            Profesionalan moler stoji iza svog rada. Pisana garancija na određen period znači da će se vratiti i ispraviti ako nešto pođe po zlu u garantnom roku — bez dodatnih troškova za vas.
          </p>

          <h2>Crvene zastavice — kada da odustanete</h2>
          <p>
            Ima situacija gde je bolje potražiti drugog majstora:
          </p>
          <ul>
            <li>Traži 100% avansa pre početka radova</li>
            <li>Odbija da napiše ponudu ili ugovor</li>
            <li>Nema ni jednu recenziju ili referencu</li>
            <li>Ne može da kaže koje materijale koristi</li>
            <li>Cena je dramatično niža od svih ostalih — uvek se pita zašto</li>
          </ul>

          <h2>Kako pronaći dobrog molera u Beogradu?</h2>
          <p>
            Najsigurniji putevi su:
          </p>
          <ol>
            <li><strong>Preporuka prijatelja ili komšije</strong> — uvek najdouzdaniji izvor</li>
            <li><strong>Google recenzije</strong> — potražite molere sa 20+ recenzija i ocenom 4.5 i više</li>
            <li><strong>Sajt sa portfeljem radova</strong> — firma koja pokazuje šta je radila stoji iza svog posla</li>
          </ol>

          <h2>Koliko košta moler u Beogradu?</h2>
          <p>
            Okvirno, usluge molera u Beogradu kreću se od 3 do 8 evra po kvadratnom metru zida, u zavisnosti od toga šta je uključeno, stanja zidova i kompleksnosti posla. Detaljan cenovnik sa svim stavkama možete pročitati u našem tekstu o <Link href="/blog/cena-krecenja-po-m2" className="text-purple-600 hover:underline">ceni krečenja po m² u Beogradu</Link>.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Krecim.rs – Proverite sami</p>
            <p className="text-gray-600 mt-1">Dolazimo na besplatnu procenu u roku od 24 sata. Pisana ponuda, jasna cena, garancija na radove.</p>
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
