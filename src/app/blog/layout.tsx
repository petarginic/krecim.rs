import BlogHeader from "@/components/blog/BlogHeader";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <footer className="border-t border-gray-100 bg-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Krecim.rs – Sva prava zadržana</p>
          <div className="flex gap-5">
            <a href="/" className="hover:text-gray-700 transition-colors">Početna</a>
            <a href="/blog" className="hover:text-gray-700 transition-colors">Blog</a>
            <a href="/#kontakt" className="hover:text-gray-700 transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </>
  );
}
