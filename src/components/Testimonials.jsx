const testimonials = [
  { name:'Sara K.', quote:'The gold vermeil necklace is stunning — feels luxurious yet minimal.', location:'North Nazimabad' },
  { name:'Ayesha R.', quote:'Perfecttt ring stack. I wear them daily and the shine holds.', location:'Phase V DHA' },
  { name:'Humama B.', quote:'Fast shipping, beautiful packaging, aur premium quality.', location:'Gulshan-e-Shamim' },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-[Playfair Display] text-3xl sm:text-4xl text-center text-slate-900">What our clients say</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map(t => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">— {t.name}, {t.location}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}