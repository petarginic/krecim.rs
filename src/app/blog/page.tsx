import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog o Krečenju i Adaptaciji | Saveti i Cene – Krecim.rs",
  description: "Korisni saveti o krečenju, gletovanju i adaptaciji stanova u Beogradu. Cene, vodiči i odgovori na najčešća pitanja od iskusnih majstora.",
  alternates: { canonical: "https://krecim.rs/blog" },
  openGraph: {
    title: "Blog o Krečenju i Adaptaciji – Krecim.rs",
    description: "Saveti, cene i vodiči o krečenju i adaptaciji stanova u Beogradu.",
    url: "https://krecim.rs/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Vodič": "bg-purple-100 text-purple-700",
  "Saveti": "bg-blue-100 text-blue-700",
  "Cene": "bg-emerald-100 text-emerald-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("sr-RS", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-gray-50/50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Saveti o Krečenju i Adaptaciji</h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Korisni vodiči, realne cene i odgovori na pitanja koja svaki vlasnik stana u Beogradu ima pre nego što pozove majstora.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <div className="bg-white rounded-3xl border border-purple-200 p-8 sm:p-10 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-600 rounded-l-3xl" />
            <div className="pl-4">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{formatDate(featured.date)}</span>
                <span className="text-xs text-gray-400">· {featured.readTime} čitanja</span>
                <span className="ml-auto text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Izdvojeno</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-500 mt-3 leading-relaxed max-w-2xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-5 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Pročitaj više
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/8 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime} čitanja</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                  <span className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Čitaj
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold">Imate pitanje? Pozovite nas.</h2>
          <p className="text-purple-200 mt-2 max-w-md mx-auto">Besplatna procena na teritoriji Beograda. Odgovaramo u roku od sat vremena.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="tel:0621457055" className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
              062 145 70 55
            </a>
            <a href="/#kontakt" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20">
              Pošalji Upit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
