import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

const post = blogPosts.find((p) => p.slug === "krecenje-nakon-vlage-beograd")!;

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
    images: [{ url: "https://krecim.rs/images/blog/krecenje_jerkovic.jpg", width: 1200, height: 630 }],
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
              { "@type": "Question", name: "Mogu li da prekrečim zid sa buđi bez prethodnog tretmana?", acceptedAnswer: { "@type": "Answer", text: "Ne. Prekrečivanje zida sa buđi bez prethodnog tretmana je najčešća greška — boja sakrije problem ali ga ne rešava. Buđ probija kroz novu boju za 3–6 meseci. Neophodno je mehanički ukloniti buđ, naneti antifungalni premaz i zatim kreč." } },
              { "@type": "Question", name: "Koliko košta krečenje zida oštećenog od vlage?", acceptedAnswer: { "@type": "Answer", text: "Krečenje zida oštećenog od vlage u Beogradu košta od 6 do 12 evra po m², u zavisnosti od stepena oštećenja. Cena je viša od standardnog krečenja jer uključuje pripremu, antifungalni premaz i eventualno gletovanje oštećenih mesta." } },
              { "@type": "Question", name: "Koliko dugo treba da se zid suši pre krečenja nakon poplave?", acceptedAnswer: { "@type": "Answer", text: "Zid mora biti potpuno suv pre krečenja — minimalno 4 do 8 nedelja nakon poplave, u zavisnosti od debljine zida i ventilacije. Krečenje vlažnog zida dovodi do ljuštenja boje i povratka buđi." } },
              { "@type": "Question", name: "Koje boje se koriste za zidove sa problemom vlage?", acceptedAnswer: { "@type": "Answer", text: "Koriste se specijalizovane antifungalne disperzije i premazi (Knauf, Caparol Amphibolin, Remmers) koji sadrže biocidne sastojke koji sprečavaju rast plesni. Standardna krečna ili disperziona boja nije dovoljna." } },
            ],
          },
        ],
      })}} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-50 to-white border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-purple-600">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Krečenje nakon vlage</span>
          </nav>
          <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Saveti</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Krečenje Nakon Vlage i Poplave – Šta Uraditi i Koliko Košta
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
          <Image src="/images/blog/krecenje_jerkovic.jpg" alt="Sanacija vlage i gipsarski radovi pre krečenja u Beogradu" fill className="object-cover" priority />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Mrlje od vlage, tamni uglovi, boja koja se ljušti ili — u najgorem slučaju — poplava u stanu. Ovo su situacije u kojima je instinkt da se što pre prekreči i "sakrije" problem. To je greška koja vas može koštati dvostruko.
          </p>

          <h2>Zašto jednostavno prekrečivanje ne funkcioniše?</h2>
          <p>
            Vlaga i buđ nisu samo estetski problem — to su biološki i građevinski problemi koji zahtevaju tretman pre boje. Ako nanesete novu boju na vlažan zid ili na buđ bez prethodne pripreme:
          </p>
          <ul>
            <li>Boja se odlepljuje u roku od nekoliko meseci</li>
            <li>Buđ probija kroz novi sloj boje i vraća se</li>
            <li>Oštećenje se širi iza zida, u izolaciju i konstrukciju</li>
            <li>Na kraju platite i sanaciju i krečenje — dva puta</li>
          </ul>

          <h2>Pravi redosled: korak po korak</h2>

          <h3>1. Identifikacija uzroka vlage</h3>
          <p>
            Pre nego što išta radite, mora se znati odakle dolazi vlaga. Najčešći uzroci:
          </p>
          <ul>
            <li><strong>Kondenzacija</strong> — para iz kupatila ili kuhinje koja se skuplja na hladnim zidovima</li>
            <li><strong>Prodor vode izvana</strong> — puknuta fasada, loša izolacija, dotrajalа hydroizolacija</li>
            <li><strong>Kvar na instalacijama</strong> — curenje cevi unutar zida</li>
            <li><strong>Poplava</strong> — prodor vode odozdo ili od komšija</li>
          </ul>
          <p>
            Uzrok mora biti uklonjen pre krečenja — inače je sve uzalud.
          </p>

          <h3>2. Sušenje zida</h3>
          <p>
            Zid mora biti potpuno suv. Nakon poplave, to traje minimalno 4 do 8 nedelja uz dobru ventilaciju. Za kondenzacionu vlagu, rešenje je poboljšanje ventilacije u prostoru. Ubrzavanje sušenja moguće je industrijskim sušačima.
          </p>

          <h3>3. Mehaničko uklanjanje buđi i oštećene boje</h3>
          <p>
            Sva ljuštuća boja i buđ moraju se mehanički ukloniti — brusilicom, špahtlom ili brušenjem. Uklanjanje buđi biocidnim rastvorima (npr. rastvorom hlora ili gotovim antifungalnim sredstvima) sprečava povratak.
          </p>

          <h3>4. Sanacija oštećenja i gletovanje</h3>
          <p>
            Pukotine, rupe i oštećena mesta u malteru moraju se sanirati pre gletovanja. U nekim slučajevima potrebno je i delimično srušiti i ponovo naneti malter.
          </p>

          <h3>5. Antifungalni premaz (obavezan korak)</h3>
          <p>
            Pre boje, nanosi se specijalizovani antifungalni premaz (Caparol Amphibolin, Knauf, Remmers ili sličan). Ovaj premaz sadrži biocidne komponente koje trajno inhibiraju rast plesni i gljiva.
          </p>

          <h3>6. Krečenje specijalnom bojom</h3>
          <p>
            Za završni sloj koristi se antifungalna disperziona boja — ne standardna krečna boja. U prostorijama sa hroničnim problemom vlage (kupatilo bez prozora, podrum), preporučujemo i lakiranu završnu obrada za dodatnu zaštitu.
          </p>

          <h2>Koliko košta krečenje nakon vlage u Beogradu?</h2>

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
                { usluga: "Antifungalni premaz + krečenje", cena: "6–9 €", napomena: "Zid već suh i bez buđi" },
                { usluga: "Uklanjanje buđi + premaz + krečenje", cena: "8–12 €", napomena: "Mehanička priprema uključena" },
                { usluga: "Sanacija + gletovanje + krečenje", cena: "12–18 €", napomena: "Za jako oštećene zidove" },
                { usluga: "Standardno krečenje (za poređenje)", cena: "3–5 €", napomena: "Bez specijalnih tretmana" },
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

          <p className="text-sm text-gray-400 -mt-2">
            * Cene ne uključuju rešavanje uzroka vlage (vodoinstalaterski ili građevinski radovi). Za tačnu ponudu potrebna je procena.
          </p>

          <h2>Saveti za prevenciju vlage</h2>
          <ul>
            <li><strong>Ventilišite svakodnevno</strong> — 10 minuta otvorenog prozora posle tuširanja ili kuvanja drastično smanjuje kondenzaciju</li>
            <li><strong>Koristite antifungalne boje</strong> u kupatilu i kuhinji čak i ako trenutno nemate problem</li>
            <li><strong>Ne sušite veš u stanu</strong> bez otvorenog prozora ili odvlaživača</li>
            <li><strong>Proverite periodično fasadu i krov</strong> — prodor vode izvana je najteže rešiv problem</li>
          </ul>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 my-8">
            <p className="font-bold text-gray-900 text-lg">Imate problem sa vlagom ili buđi?</p>
            <p className="text-gray-600 mt-1">Dolazimo na procenu, dijagnostikujemo uzrok i nudimo trajno rešenje — ne samo kozmetiku. Besplatna procena na licu mesta.</p>
            <a href="tel:0617316982" className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Pozovite: 061 731 69 82
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pročitajte i ovo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[blogPosts.find(p => p.slug === "krecenje-i-gletovanje-cena"), blogPosts.find(p => p.slug === "krecenje-sa-materijalom-beograd")].filter(Boolean).map((p) => (
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
