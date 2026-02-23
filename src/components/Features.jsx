const features = [
  { title: 'Ethically Sourced', desc: 'Conflict‑free stones and recycled metals.', icon: '🌿' },
  { title: 'Hypoallergenic', desc: 'Nickel‑safe finishes for daily wear.', icon: '🫧' },
  { title: 'Warranty', desc: '365‑day craftsmanship guarantee.', icon: '🛡️' },
]

export default function Features() {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-medium text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}