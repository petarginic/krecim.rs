import Image from "next/image";
import { badges } from "@/data";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Mobile: faint background image behind title */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        <Image
          src="/images/krecenje-cena-po-kvadratu.png"
          alt=""
          fill
          className="object-contain object-right-top opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      {/* Decorative SVG lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 9" />
          <line x1="22%" y1="0" x2="22%" y2="100%" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 9" />
        </svg>
        {/* Flowing purple decorative curves */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-50 200 Q200 100 450 180 Q650 240 900 150" stroke="#e9d5ff" strokeWidth="60" strokeLinecap="round" fill="none" opacity="0.3"/>
          <path d="M-50 250 Q200 150 450 220 Q650 280 900 200" stroke="#ede9fe" strokeWidth="40" strokeLinecap="round" fill="none" opacity="0.4"/>
        </svg>
      </div>

      {/* Top section: text left + image right */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-120px)] items-center">

          {/* Left — text */}
          <div className="pt-28 pb-6 sm:pt-32 sm:pb-8 lg:py-32 z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Profesionalno Krečenje
              <br />
              <span className="font-normal">u Beogradu</span>
            </h1>

            <p className="mt-4 text-base text-gray-500">
              Besplatna Procena na Teritoriji Beograda
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-8">
              <a
                href="#kontakt"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/25 hover:-translate-y-0.5 text-sm"
              >
                Zakaži Besplatnu Procenu
              </a>
              <a
                href="#radovi"
                className="w-full sm:w-auto inline-flex justify-center items-center border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-white text-sm"
              >
                Saznaj Više
              </a>
            </div>
          </div>

          {/* Right — painter image */}
          <div className="relative hidden lg:flex items-end justify-center h-full min-h-[500px]">
            {/* Purple bg blob */}
            <div className="absolute top-0 right-0 w-[100%] h-full rounded-bl-[80px]  from-purple-100 via-purple-50 to-white/0 -z-0" />
            <div className="relative z-10 w-full h-[calc(100vh-80px)] max-h-[700px] w-[100%]">
              <Image
                src="/images/krecenje-cena-po-kvadratu.png"
                alt="Profesionalni moler Beograd"
                fill
                className="object-contain object-bottom"
                priority
              />
              <div className="absolute inset-0" />

            </div>
          </div>
        </div>
      </div>

      {/* Bottom badges bar — full width */}
      <div className="relative border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 divide-purple-100">
            {badges.map((badge, i) => (
              <div key={badge.title} className={`flex items-center gap-4 py-5 px-5 sm:py-7 sm:px-8 hover:bg-purple-50/40 transition-colors duration-200 ${i < 2 ? "sm:border-r-2 sm:border-purple-200" : ""}`}>
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <badge.icon />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">{badge.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}