import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const post = blogPosts.find((p) => p.slug === "krecenje-stanova-beograd")!;

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

export default function Page() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Krečenje stanova Beograd</span>
          </nav>
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Vodič</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Krečenje Stanova u Beogradu – Kompletan Vodič za 2025.
          </h1>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
            <span>10. april 2025.</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Krečenje stana u Beogradu nije nešto što radite svake godine, ali kada dođe vreme za to, želite da bude urađeno kako treba. Bilo da se selite u nov stan, renovirate postojeći ili jednostavno osvežavate prostor, u ovom vodiču ćete naći sve što treba da znate pre nego što pozovete majstora.
          </p>

          <h2>Zašto je profesionalno krečenje važno?</h2>
          <p>
            Mnogi vlasnici stanova u Beogradu pokušavaju da sami okreče bar jednu sobu i brzo shvate zašto postoje profesionalci. Loše naneta boja, vidljivi tragovi valjka, neravni uglovi i mrlje koje proviruju kroz novu boju — sve su to znaci amaterskog posla. Profesionalni moler radi brže, čistije i sa garantovanim rezultatom.
          </p>
          <p>
            Osim estetike, kvalitetno krečenje zapravo štiti zidove. Dobra boja sa pravilno pripremljenom podlogom odoleva vlazi, lakše se čisti i traje i po 5–8 godina bez potrebe za popravkom.
          </p>

          <h2>Šta sve podrazumeva krečenje stana u Beogradu?</h2>
          <p>
            Kada kažete "krečenje stana", pod tim se zapravo podrazumeva nekoliko koraka koji se rade po određenom redosledu:
          </p>

          <h3>1. Priprema prostora</h3>
          <p>
            Pre nego što majstor izvadi kist, potrebno je zaštititi pod, nameštaj i sve elemente koji ne treba da budu ofarbani. Dobri majstori uvek donose zaštitne folije i trake. Ako to ne rade, to je loš znak.
          </p>

          <h3>2. Priprema podloge</h3>
          <p>
            Stari slojevi boje, pukotine i neravnine moraju se sanirati pre nanošenja nove boje. Ako zidovi nisu ravni, pre krečenja je potrebno gletovanje — glatkanje zidova specijalnom masom. U novogradnji ovo je skoro uvek neophodan korak.
          </p>

          <h3>3. Grundiranje</h3>
          <p>
            Grunder (primer) se nanosi pre boje i osigurava da nova boja dobro prijanja na zid. Preskakanje ovog koraka je jedna od najčešćih grešaka i direktan razlog zašto boja počne da se ljušti nakon godinu dana.
          </p>

          <h3>4. Nanošenje boje</h3>
          <p>
            Kvalitetna krečna ili disperziona boja nanosi se u dva do tri sloja. Između slojeva potrebno je sušenje od minimum 4 sata. Žurba ovde direktno utiče na kvalitet — ko ne čeka sušenje, dobija neravnomernu boju.
          </p>

          <h3>5. Završna obrada i čišćenje</h3>
          <p>
            Nakon završetka, profesionalni majstor skida zaštitne trake, uklanja folije i ostavlja prostor čistim. Ovo je detalj koji mnogi vlasnici stanova posebno cene — da ne moraju sami da čiste iza majstora.
          </p>

          <h2>Koliko traje krečenje stana u Beogradu?</h2>
          <p>
            Trajanje zavisi od veličine stana i stanja zidova:
          </p>
          <ul>
            <li><strong>Garsonjera (20–30 m²):</strong> 1 dan</li>
            <li><strong>Jednosoban stan (35–45 m²):</strong> 1–2 dana</li>
            <li><strong>Dvosoban stan (50–65 m²):</strong> 2–3 dana</li>
            <li><strong>Trosoban stan (70–90 m²):</strong> 3–4 dana</li>
            <li><strong>Stan sa gletovanjem:</strong> dodajte još 1–2 dana po veličini</li>
          </ul>
          <p>
            Ovo su okvirna trajanja za iskusnu ekipu. Samci koji rade sporije mogu lako udvostručiti ove rokove.
          </p>

          <h2>Koje delove Beograda pokrivamo?</h2>
          <p>
            Krecim.rs pruža usluge krečenja stanova na celoj teritoriji Beograda — Novi Beograd, Zemun, Vračar, Čukarica, Palilula, Savski venac, Voždovac, Rakovica, Zvezdara i ostale opštine. Dolazimo na besplatnu procenu bez obzira na to gde se nalazite u gradu.
          </p>

          <h2>Kako se pripremiti pre dolaska majstora?</h2>
          <p>
            Evo nekoliko praktičnih saveta koji će ubrzati posao i smanjiti cenu:
          </p>
          <ul>
            <li>Ispraznite sobu od nameštaja ili ga pomerite na sredinu</li>
            <li>Skinite slike i police sa zidova</li>
            <li>Obezbedite normalan pristup struje i vode</li>
            <li>Unapred odlučite boju — dovođenje uzoraka na lice mesta oduzima vreme</li>
          </ul>

          <h2>Zašto izabrati Krecim.rs za krečenje stana u Beogradu?</h2>
          <p>
            Radimo u Beogradu već više od 10 godina. Svaki posao počinjemo besplatnom procenom na licu mesta, dajemo pisanu ponudu bez skrivenih troškova i stojimo iza svakog posla pisanom garancijom. Naši klijenti nas preporučuju dalje — i to je najbolji pokazatelj kvaliteta.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Zakažite besplatnu procenu danas</p>
            <p className="text-gray-600 mt-1">Dolazimo na lice mesta, pregledamo prostor i dajemo vam tačnu cenu. Bez obaveza.</p>
            <a href="tel:0621457055" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 062 145 70 55
            </a>
          </div>

        </div>

        {/* Related posts */}
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
