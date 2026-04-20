import { stats } from "@/data";

export default function StatsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white mx-auto mb-3">
                <stat.icon />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
              <p className="text-purple-200 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
          <div>
            <p className="text-white font-bold text-xl">Spremi za novi projekat?</p>
            <p className="text-purple-200 text-sm mt-0.5">
              Zakažite besplatnu procenu danas — bez obaveza.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:0621457055"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              062 145 70 55
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap border border-white/20"
            >
              Pošalji Upit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
