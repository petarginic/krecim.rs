"use client";

import { useState, useEffect } from "react";

const galleryItems = [
  { id: 1,  room: "Dnevna soba",  service: "Krečenje i gletovanje",         src: "/images/krecenje-dnevna-soba-beograd.jpg",         span: "col-span-2 lg:col-span-2 lg:row-span-2" },
  { id: 2,  room: "Spavaća soba", service: "Krečenje - sahara",       src: "/images/gletovanje-spavaca-soba-beograd.jpg",      span: "" },
  { id: 3,  room: "Hodnik",       service: "Gipsani Radovi",   src: "/images/gipsani-radovi-hodnik-beograd.jpg",        span: ""  },
  // Red 2: 2 male levo + velika desno (obrnuto od prvog reda)
  {  id: 4,  room: "Dnevna soba",      service: "Krečenje plafona",       src: "/images/adaptacija-kuhinja-beograd.png",           span: "" },
  { id: 5,  room: "Spavaća soba",     service: "Krečenje",         src: "/images/krecenje-kupatilo-beograd.jpg",            span: "lg:col-start-1 lg:row-start-4" },
  { id: 6,  room: "Spavaća soba",  service: "Gipsani Radovi", src: "/images/lepljenje-tapeta-kancelarija-beograd.jpg", span: "col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-2" },
  // Redovi 3–4: ostaje kao pre
  { id: 7,  room: "Hodnik zgrade",   service: "Krečenje i gipsani Radovi",         src: "/images/gipsani-radovi-terasa-beograd.jpg",          span: "lg:row-span-2" },
  { id: 8,  room: "Dnevna soba",  service: "Gipsani Radovi",       src: "/images/gletovanje-decija-soba-beograd.jpg",       span: "sm:col-span-2" },
  { id: 9,  room: "Spavaća soba",   service: "Krečenje",         src: "/images/krecenje-predsoblije-beograd.png",         span: "" },
  { id: 10, room: "Hodnik zgrade",       service: "Krečenje",   src: "/images/gipsani-radovi-terasa-beograd.png",        span: "" }
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const currentIdx = galleryItems.findIndex((i) => i.id === lightbox);
  const current = galleryItems[currentIdx] ?? null;

  const prev = () => setLightbox(galleryItems[(currentIdx - 1 + galleryItems.length) % galleryItems.length].id);
  const next = () => setLightbox(galleryItems[(currentIdx + 1) % galleryItems.length].id);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, currentIdx]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section id="galerija" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
            Naši Projekti
          </span>
          <h2 className="section-heading mt-2">Galerija</h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto -mt-6">
            Svaki završeni projekat je dokaz našeg zanata. Pogledajte neke od radova koje smo ponosno završili.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 [grid-auto-rows:180px] md:[grid-auto-rows:200px] lg:[grid-auto-rows:210px]">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item.id)}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/15 hover:-translate-y-1 hover:z-10 ${item.span}`}
            >
              <img
                src={item.src}
                alt={`${item.room} – ${item.service}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-bold text-white text-sm leading-tight">{item.room}</p>
                <p className="text-xs text-white/75 mt-0.5">{item.service}</p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15, 10, 25, 0.82)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tabular-nums">
            {currentIdx + 1} / {galleryItems.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image card */}
          <div
            className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={`${current.room} – ${current.service}`}
              className="w-full object-contain bg-black"
              style={{ maxHeight: "68vh" }}
            />
            <div className="bg-white/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900">{current.room}</h3>
                <span className="inline-block mt-1 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {current.service}
                </span>
              </div>
              <a
                href="/#kontakt"
                onClick={() => setLightbox(null)}
                className="shrink-0 text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1.5 transition-colors"
              >
                Zakaži ovakav posao
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
