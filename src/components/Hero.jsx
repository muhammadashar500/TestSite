export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      {/* Background gradient */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-white via-[var(--ushdani-cream)] to-white" />
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-10 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle, var(--ushdani-gold), transparent 60%)'}} />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-slate-500">U S H D A N I</p>
          <h1 className="mt-4 font-[Playfair Display] text-4xl sm:text-5xl text-slate-900 leading-tight">
            Timeless <span style={{color:'var(--ushdani-gold)'}}>elegance</span>, modern craftsmanship.
          </h1>
          <p className="mt-5 text-slate-600 max-w-xl">
            Hand‑finished jewelry designed for everyday luxury. Ethically sourced, made to last, and crafted with precision.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#collections" className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{background:'var(--ushdani-gold)'}}>Explore Collections</a>
            <a href="#about" className="rounded-full px-6 py-3 text-sm font-medium border border-slate-300 hover:border-slate-400">Our Story</a>
          </div>

          <dl id="about" className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div><dt className="text-2xl font-semibold">925</dt><dd className="text-xs text-slate-500 mt-1">Sterling Silver</dd></div>
            <div><dt className="text-2xl font-semibold">18K</dt><dd className="text-xs text-slate-500 mt-1">Gold Vermeil</dd></div>
            <div><dt className="text-2xl font-semibold">365d</dt><dd className="text-xs text-slate-500 mt-1">Warranty</dd></div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img
              alt="Ushdani fine jewelry"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce383?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block">
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-md p-5">
              <p className="text-sm font-medium text-slate-700">Free worldwide shipping</p>
              <p className="text-xs text-slate-500 mt-1">On orders over $150</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
