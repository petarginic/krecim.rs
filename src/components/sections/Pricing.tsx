const rows = [
  { usluga: "Krečenje u belu boju (2 sloja)", eurM2: "2,5 – 3,5 €" },
  { usluga: "Krečenje u boji (2 sloja)", eurM2: "3 – 4 €" },
  { usluga: "Krečenje sa osnovnim gletovanjem", eurM2: "5 – 6 €" },
  { usluga: "Krečenje sa sanacijom malih pukotina", eurM2: "4 – 6 €" },
  { usluga: "Uklanjanje tapeta + krečenje", eurM2: "4,5 – 6,5 €" },
  { usluga: "Krečenje intenzivnim ili dekorativnim bojama", eurM2: "5 – 7 €" },
  { usluga: "Sahara tehnika (dekorativno krečenje)", eurM2: "8 – 15 €" },
  { usluga: "Kompletna sanacija (buđ, malter, 3 sloja)", eurM2: "6 – 8 €" },
];

const included = [
  "Besplatna procena na licu mesta",
  "Priprema i zaštita nameštaja i podova",
  "Kvalitetne boje i materijali (Knauf, Caparol, Jarolin)",
  "Čišćenje po završetku radova",
  "Pisana ponuda i fiksna cena bez skrivenih troškova",
];

export default function Pricing() {
  return (
    <section id="cenovnik" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="150" x2="600" y2="750" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.5" />
          <line x1="1200" y1="100" x2="600" y2="800" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.4" />
          <line x1="0" y1="500" x2="1200" y2="300" stroke="#e5e7eb" strokeWidth="0.8" opacity="0.25" />
        </svg>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-purple-50/50 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">Transparentne cene</span>
          <h2 className="section-heading mt-2">Cenovnik Usluga</h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto -mt-6">
            Okvirne cene za 2026. godinu. Tačna ponuda zavisi od stanja zidova i kvadrature — procena je uvek besplatna.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-600 text-white text-left">
                <th className="px-5 py-4 font-semibold rounded-tl-2xl">Usluga</th>
                <th className="px-5 py-4 font-semibold rounded-tr-2xl whitespace-nowrap">Okvirna cena po m²</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-100 transition-colors hover:bg-purple-50/40 ${i === rows.length - 1 ? "rounded-b-2xl" : ""}`}
                >
                  <td className="px-5 py-4 font-medium text-gray-800">{row.usluga}</td>
                  <td className="px-5 py-4 font-bold text-purple-700 whitespace-nowrap">{row.eurM2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          * Cene su prikazane po kvadratnom metru zidne površine i ne uključuju montažu skela za visoke prostorije.
        </p>

        {/* Included */}
        <div className="mt-12 grid sm:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-7">
            <h3 className="font-bold text-gray-900 text-base mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
              </span>
              Šta je uključeno u cenu
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-600 rounded-2xl p-7 text-white flex flex-col justify-between gap-6">
            <div>
              <p className="text-purple-200 text-xs font-semibold uppercase tracking-widest mb-2">Niste sigurni koliko će koštati?</p>
              <h3 className="text-xl font-bold leading-snug">Besplatna procena na licu mesta — bez obaveza</h3>
              <p className="text-purple-100 text-sm mt-3 leading-relaxed">
                Naš majstor dolazi, izmeri prostor, pregleda stanje zidova i daje pisanu ponudu isti dan. Fiksna cena, bez iznenađenja.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0617316982"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Pozovite: 061 731 69 82
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                Zakažite online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
