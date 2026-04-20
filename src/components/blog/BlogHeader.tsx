import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-gray-900">krecim</span>
            <span className="text-xl font-bold text-purple-600">.rs</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link
              href="/#kontakt"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-colors"
            >
              Besplatna Procena
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
