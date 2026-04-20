import { services } from "@/data";

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
            Šta nudimo
          </span>
          <h2 className="section-heading mt-2">Naše Usluge</h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto -mt-6">
            Pružamo kompletnu uslugu uređenja vašeg prostora — od prvog sastanka do
            konačnog rezultata koji će vas oduševiti.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`service-card group relative bg-white rounded-2xl border border-purple-200 p-7 shadow-sm hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                idx === 0 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-purple-50 group-hover:bg-purple-100 text-purple-600 flex items-center justify-center transition-colors duration-200 mb-5">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-purple-600" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
