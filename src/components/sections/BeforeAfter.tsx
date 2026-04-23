"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Dnevna soba — Novi Beograd",
    tags: ["Krečenje", "Gletovanje"],
    before: "/images/krecenje-dnevna-soba-pre-beograd.jpg",
    after: "/images/krecenje-dnevna-soba-posle-beograd.png",
  },
  {
    id: 2,
    title: "Spavaća soba — Zemun",
    tags: ["Krečenje", "Gletovanje"],
    before: "/images/krecenje-spavaca-soba-pre-zemun.jpg",
    after: "/images/krecenje-spavaca-soba-posle-zemun.jpg",
  },
  {
    id: 3,
    title: "Spavaća soba - Zvezdara",
    tags: ["Gipsani Radovi", "Krečenje"],
    before: "/images/gipsani-radovi-spavaca-soba-pre-zvezdara.png",
    after: "/images/gipsani-radovi-spavaca-soba-posle-zvezdara.jpg",
  },
  {
    id: 4,
    title: "Kuhinja - Savski venac",
    tags: ["Gletovanje", "Krečenje"],
    before: "/images/gletovanje-kuhinja-pre-savski-venac.png",
    after: "/images/gletovanje-kuhinja-posle-savski-venac.jpg",
  },
];

function BeforeAfterCard({ project }: { project: (typeof projects)[0] }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div
        className="relative aspect-video select-none cursor-col-resize bg-gray-100 overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (isDragging) handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handleMove(touch.clientX, e.currentTarget.getBoundingClientRect());
        }}
      >
        {/* After image (base layer) */}
        <img src={project.after} alt={`Posle — ${project.title}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        {/* Before image (clipped layer) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={project.before} alt={`Pre — ${project.title}`} className="absolute inset-0 h-full object-cover" style={{ width: `${10000 / sliderPos}%` }} draggable={false} />
        </div>
        {/* Divider line + handle */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg">Pre</span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-purple-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Posle</span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-gray-900 text-base">{project.title}</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="radovi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-widest">Pre i Posle</span>
          <h2 className="section-heading mt-2">Naši Radovi</h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto -mt-6">
            Pomerite klizač i sami se uverite u transformaciju.
          </p>
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>
        <div className="md:hidden">
          <BeforeAfterCard project={projects[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="text-sm text-gray-500">{current + 1} / {projects.length}</span>
            <button onClick={() => setCurrent((c) => Math.min(projects.length - 1, c + 1))} disabled={current === projects.length - 1} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-purple-100 disabled:opacity-30 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#galerija" className="btn-primary">
            Pogledajte Sve Rezultate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}