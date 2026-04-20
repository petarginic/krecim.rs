import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section id="utisci" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative lines */}
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
        {/* Soft purple glow top-right */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl" />
        {/* Soft gray glow bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gray-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
            Šta kažu klijenti
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-2">
            Utisci Klijenata
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 mb-12 rounded-full" />

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-2xl px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-900">5.0</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-600 text-sm">150+ recenzija</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="service-card group relative bg-white rounded-2xl border border-purple-200 p-6 shadow-sm hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.location} · {t.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

