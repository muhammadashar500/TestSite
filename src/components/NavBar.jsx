export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/40 rounded-full shadow-sm">
          <nav className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full" style={{background:'var(--ushdani-gold)'}} />
              <span className="font-[Playfair Display] text-xl tracking-wide text-slate-900">USHDANI</span>
            </a>
            <ul className="hidden md:flex items-center gap-8 text-sm">
              <li><a className="hover:text-slate-900/70" href="#collections">Collections</a></li>
              <li><a className="hover:text-slate-900/70" href="#about">About</a></li>
              <li><a className="hover:text-slate-900/70" href="#testimonials">Stories</a></li>
            </ul>
            <div className="flex items-center gap-3">
              <a href="#newsletter" className="rounded-full px-4 py-2 text-sm border border-slate-300 hover:border-slate-400">Subscribe</a>
              <a href="#collections" className="hidden sm:inline-block rounded-full px-4 py-2 text-sm font-medium text-white" style={{background:'var(--ushdani-gold)'}}>Shop now</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
