import React from "react";

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Početna", href: "#hero" },
  { label: "Usluge", href: "#usluge" },
  { label: "Radovi", href: "#radovi" },
  { label: "O nama", href: "#o-nama" },
  { label: "Galerija", href: "#galerija" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Krečenje",
    desc: "Profesionalno krečenje unutrašnjih i spoljašnjih zidova. Koristimo kvalitetne boje vodećih proizvođača.",
    features: ["Unutrašnje krečenje", "Spoljašnje krečenje", "Dekorativne tehnike"],
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
    ),
    title: "Gletovanje",
    desc: "Glatkanje zidova do savršene ravnine. Priprema površine za krečenje ili tapetiranje.",
    features: ["Fino gletovanje", "Grubo gletovanje", "Sanacija pukotina"],
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Gipsani Radovi",
    desc: "Izgradnja pregradnih zidova, spuštenih plafona i svih vrsta gipsanih konstrukcija.",
    features: ["Pregradni zidovi", "Spušteni plafoni", "Gips ploče"],
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Adaptacija",
    desc: "Kompletna adaptacija stanova i poslovnih prostora. Koordiniramo sve radove od početka do kraja.",
    features: ["Kompletan remont", "Koordinacija ekipa", "Ključ u ruke"],
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Lepljenje Tapeta",
    desc: "Profesionalno postavljanje svih vrsta tapeta, klasičnih, strukturnih i vinilnih.",
    features: ["Sve vrste tapeta", "Precizno rezanje", "Garantovan spoj"],
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18M3 4.5v1.5m18-1.5v1.5M7.5 10.5l-1.5 9M16.5 10.5l1.5 9M12 10.5v9m-3-4.5h6" />
      </svg>
    ),
    title: "Spuštanje Plafona",
    desc: "Ugradnja spuštenih plafona od gips ploča i rigipsa. Idealno za skrivanje instalacija i moderan izgled prostora.",
    features: ["Ravni spušteni plafoni", "Kasetonski plafoni", "LED ugradnja"],
  },
];

export const serviceNames = services.map((s) => s.title);

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    id: 1,
    question: "Koliko košta krečenje po kvadratu?",
    answer: "Cena zavisi od kvadrature, stanja zidova i toga šta sve treba uraditi. Kontaktirajte nas za besplatnu procenu, dolazimo na lice mesta i dajemo tačnu ponudu bez ikakvih obaveza.",
  },
  {
    id: 2,
    question: "Da li radite besplatne procene?",
    answer: "Da! Dolazimo na celoj teritoriji Beograda bez naknade. Naš majstor pregleda prostor i ostavlja vam pisanu ponudu sa svim detaljima.",
  },
  {
    id: 3,
    question: "Koliko brzo možete da započnete sa radovima?",
    answer: "Najčešće možemo početi za 3 do 7 dana od dogovora. Ako je hitno, slobodno nas pozovite direktno i videćemo šta možemo da sredimo.",
  },
  {
    id: 4,
    question: "Koji materijali se koriste?",
    answer: "Radimo isključivo sa premium materijalima poznatih proizvođača kao što su Baumit, Knauf, Dekoral i Chromos. Sve je ekološki ispravno i bezbedno za svakodnevni boravak.",
  },
  {
    id: 5,
    question: "Koliko vremena je potrebno za završetak radova?",
    answer: "Krečenje jedne sobe ide za 1 do 2 dana, kompletna adaptacija stana može trajati od jedne do tri nedelje. Tačan rok uvek dogovaramo unapred.",
  },
  {
    id: 6,
    question: "Da li dajete garanciju na radove?",
    answer: "Da, svaki posao pokriven je pisanom garancijom. Ako primetite bilo šta u garantnom roku, dolazimo i rešavamo bez dodatnih troškova.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: "Miljana Atanasković",
    location: "Novi Beograd",
    service: "Krečenje i Gletovanje",
    rating: 5,
    text: "Iskreno, nisam očekivala da će biti gotovo za dva dana. Uredni, tačni, cena onakva kako smo se dogovorile. Definitivno ih preporučujem svima!",
    initials: "MA",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 2,
    name: "Zoran Ćulibrk",
    location: "Zemun",
    service: "Kompletna Adaptacija",
    rating: 5,
    text: "Ceo stan od nule. Dolazili su tačno, radili uredno i nema nikakvih iznenađenja na kraju. Lep posao od početka do kraja, stvarno.",
    initials: "ZĆ",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Maja Vukčević",
    location: "Vračar",
    service: "Gipsani Radovi",
    rating: 5,
    text: "Plafon i zidovi su izgledali grozno, sad je sve savršeno. Ostavili su stan čist kad su završili, što je zaista retko. Prezadovoljna sam!",
    initials: "MV",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    name: "Dragan Stanković",
    location: "Čukarica",
    service: "Krečenje",
    rating: 5,
    text: "Savetovali su me oko boja, predložili šta bi stajalo i ispoštovali sve do detalja. Stan sad izgleda ko nov! ",
    initials: "DS",
    color: "bg-blue-100 text-amber-700",
  },
  {
    id: 5,
    name: "Ana Đorđević",
    location: "Palilula",
    service: "Lepljenje Tapeta",
    rating: 5,
    text: "Za jedan dan, bez nereda iza sebe. Ko god treba tapete, zna ko da pozove od sada.",
    initials: "AĐ",
    color: "bg-purple-100 text-rose-700",
  },
  {
    id: 6,
    name: "Bojan Tasić",
    location: "Savski venac",
    service: "Gletovanje",
    rating: 5,
    text: "Dolazili su svaki dan na vreme, završili pre roka i zidovi su savršeno ravni. Baš nema šta da se zamera, momci rade odlično.",
    initials: "BT",
    color: "bg-purple-100 text-violet-700",
  },
];

// ─── Projects (Before/After) ──────────────────────────────────────────────────

export const projects = [
  { id: 1, title: "Dnevna Soba — Novi Beograd", tags: ["Krečenje", "Gletovanje"], beforeLabel: "Pre", afterLabel: "Posle" },
  { id: 2, title: "Spavaća Soba — Zemun", tags: ["Gipsani Radovi", "Krečenje"], beforeLabel: "Pre", afterLabel: "Posle" },
  { id: 3, title: "Kuhinja — Vračar", tags: ["Adaptacija", "Krečenje"], beforeLabel: "Pre", afterLabel: "Posle" },
  { id: 4, title: "Hodnik — Bežanijska Kosa", tags: ["Gletovanje", "Krečenje"], beforeLabel: "Pre", afterLabel: "Posle" },
];

// ─── About values ─────────────────────────────────────────────────────────────

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);
const AboutClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ReceiptIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const values = [
  { id: 1, icon: TrophyIcon, title: "Iskustvo", desc: "Više od 20 godina u molerskom i gipsarskom zanatstvu." },
  { id: 2, icon: StarIcon, title: "Kvalitet", desc: "Koristimo isključivo premium materijale vodećih brendova." },
  { id: 3, icon: AboutClockIcon, title: "Preciznost", desc: "Završavamo radove u dogovorenom roku, uvek." },
  { id: 4, icon: ReceiptIcon, title: "Transparentnost", desc: "Bez skrivenih troškova. Cena dogovorena pre početka radova." },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);
const ThumbsUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
  </svg>
);
const BoltIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.718a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.945-.143z" clipRule="evenodd" />
  </svg>
);

export const stats = [
  { id: 1, value: "500+", label: "Završenih projekata", icon: HomeIcon },
  { id: 2, value: "20+", label: "Godina iskustva", icon: CalendarIcon },
  { id: 3, value: "100%", label: "Zadovoljnih klijenata", icon: ThumbsUpIcon },
  { id: 4, value: "1h", label: "Prosečno vreme odgovora", icon: BoltIcon },
];

// ─── Hero badges ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const TagIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.595.33a18.095 18.095 0 005.223-5.223c.542-.815.369-1.896-.33-2.595L9.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);
const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export const badges = [
  { id: 1, icon: CheckIcon, title: "Brzo i Kvalitetno", sub: "Iskusni i pouzdani majstori" },
  { id: 2, icon: TagIcon, title: "Povoljna Cena", sub: "Odlične cene i bez skrivenih troškova" },
  { id: 3, icon: ShieldIcon, title: "Garancija", sub: "Zagarantovan kvalitet radova" },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);
const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const contactInfo = [
  { icon: PhoneIcon, label: "Telefon", value: "061 731 69 82", href: "tel:0617316982" },
  { icon: EnvelopeIcon, label: "Email", value: "info@krecim.rs", href: "mailto:info@krecim.rs" },
  { icon: MapPinIcon, label: "Lokacija", value: "Beograd, Srbija", href: "https://maps.google.com" }
];
