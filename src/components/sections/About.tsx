import { values } from "@/data";

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 aspect-square max-w-lg mx-auto flex items-center justify-center">
              <img src="/images/gletovanje-dnevna-soba.png" alt="Gletovanje dnevne sobe Beograd" className="w-full h-full object-cover" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-3xl bg-purple-50 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-3xl bg-purple-100 -z-10" />

            {/* Floating CTA card */}
            <div className="absolute bottom-8 -right-4 bg-purple-600 text-white rounded-2xl p-5 shadow-xl max-w-[220px]">
              <p className="text-xs opacity-75 font-medium">Besplatna Procena</p>
              <p className="font-bold text-lg mt-0.5">Na Teritoriji Beograda!</p>
              <a
                href="tel:0617316982"
                className="mt-3 flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 rounded-xl px-3 py-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                061 731 69 82
              </a>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
              O Nama
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
              Stručnost i Kvalitet{" "}
              <span className="text-gradient">iznad Svih Očekivanja</span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
              <p>
                <strong className="text-gray-700">Krecim.rs</strong> je firma sa
                višegodišnjim iskustvom u molerskim i gipsarskim radovima. Specijalizovani
                smo za profesionalno krečenje, gletovanje, gipsarske radove i adaptacije.
              </p>
              <p>
                Naša besplatna procena na teritoriji Beograda omogućava vam da dobijete
                tačnu sliku troškova bez ikakvih obaveza. Pristupamo svakom projektu sa
                istom pažnjom — bilo da je reč o jednoj sobi ili kompletnoj adaptaciji.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                    <v.icon />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{v.title}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#kontakt" className="btn-primary">
                Zakažite Procenu
              </a>
              <a href="tel:0617316982" className="btn-outline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Pozovite Nas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
