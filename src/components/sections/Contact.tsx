import { contactInfo } from "@/data";

const visibleCards = contactInfo.filter((item) =>
  ["Telefon", "Email", "Lokacija"].includes(item.label)
);

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background — same as Testimonials */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="0"    y1="150" x2="600"  y2="750" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.6" />
          <line x1="60"   y1="80"  x2="660"  y2="780" stroke="#d1d5db" strokeWidth="1"   opacity="0.4" />
          <line x1="130"  y1="0"   x2="730"  y2="700" stroke="#e5e7eb" strokeWidth="2"   opacity="0.35" />
          <line x1="1200" y1="100" x2="600"  y2="800" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.5" />
          <line x1="1130" y1="0"   x2="530"  y2="750" stroke="#d1d5db" strokeWidth="1"   opacity="0.4" />
          <line x1="1050" y1="0"   x2="450"  y2="800" stroke="#e5e7eb" strokeWidth="1"   opacity="0.3" />
          <line x1="0"    y1="600" x2="1200" y2="200" stroke="#d1d5db" strokeWidth="0.8" opacity="0.25" />
          <line x1="0"    y1="400" x2="1200" y2="500" stroke="#e5e7eb" strokeWidth="0.8" opacity="0.2" />
        </svg>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gray-100/60 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">Stupite u Kontakt</span>
          <h2 className="section-heading mt-2">Kontaktirajte Nas</h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto -mt-6">
            Pozovite nas ili pišite — odgovaramo u roku od 12 sati.
          </p>
        </div>

        {/* Contact cards — 3 centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
          {visibleCards.map((item) => (
            <a
              key={item.label}
              href={item.href!}
              className="group flex-1 flex flex-col items-center text-center gap-3 bg-purple-50 border border-purple-200 rounded-2xl p-7 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:bg-purple-600 hover:border-purple-600"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                <item.icon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs font-medium text-purple-400 group-hover:text-purple-200 uppercase tracking-wide transition-colors duration-300">{item.label}</p>
                <p className="font-semibold text-gray-800 group-hover:text-white mt-0.5 text-sm transition-colors duration-300">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 max-w-2xl mx-auto">
          <a
            href="tel:0617316982"
            className="flex-1 flex items-center justify-center gap-3 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-4 rounded-2xl transition-colors duration-200 text-sm"
          >
            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite nas
          </a>
          <a
            href="viber://chat?number=0617316982"
            className="flex-1 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-4 rounded-2xl transition-colors duration-200 text-sm shadow-lg shadow-purple-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            Pišite na Viber
          </a>
          <a
            href="https://wa.me/381617316982"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-2xl transition-colors duration-200 text-sm shadow-lg shadow-green-500/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pišite na WhatsApp
          </a>
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <a
            href="https://www.instagram.com/krecim.rs?utm_source=qr&igsh=cW83YmNvaWk2dXdv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-100 hover:border-purple-200 rounded-2xl px-7 py-5 transition-all duration-300 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 text-sm">@krecim.rs</p>
              <p className="text-xs text-gray-500 mt-0.5">Pratite nas na Instagramu — radovi, saveti i pre/posle transformacije</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
