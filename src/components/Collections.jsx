const items = [
  {
    title: 'Rings',
    image: 'https://images.unsplash.com/photo-1617038260897-3a281a4dc24f?q=80&w=1200&auto=format&fit=crop',
    blurb: 'Delicate bands and statement solitaires.',
  },
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
    blurb: 'Minimal chains and signature pendants.',
  },
  {
    title: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1603566234499-76d5f1b5f0b0?q=80&w=1200&auto=format&fit=crop',
    blurb: 'Everyday cuffs and curated stacks.',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-[Playfair Display] text-3xl sm:text-4xl text-slate-900">Collections</h2>
          <a href="#" className="hidden sm:inline-block text-sm font-medium hover:opacity-80" style={{color:'var(--ushdani-gold)'}}>View all →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-white/80">{item.blurb}</p>
                <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur hover:bg-white/20">
                  Shop {item.title}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
