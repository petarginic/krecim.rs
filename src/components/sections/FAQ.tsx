"use client";

import { useState } from "react";

import { faqs } from "@/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
            Pitanja i Odgovori
          </span>
          <h2 className="section-heading mt-2">Često Postavljena Pitanja</h2>
          <div className="section-divider" />
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === idx
                  ? "border-purple-200 bg-purple-50/30"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span
                  className={`font-semibold text-base leading-snug ${
                    open === idx ? "text-purple-700" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    open === idx
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {open === idx ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === idx ? "max-h-64" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 text-white">
          <h3 className="text-2xl font-bold">Imate još pitanja?</h3>
          <p className="text-purple-200 mt-2">
            Pozovite nas ili pošaljite poruku — odgovaramo u roku od sat vremena.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a
              href="tel:0621457055"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              062 145 70 55
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Pošaljite Poruku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
