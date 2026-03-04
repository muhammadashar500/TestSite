export default function Newsletter(){
  return (
    <section id="newsletter" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-[Playfair Display] text-3xl text-slate-900">Get early access & offers</h2>
        <p className="mt-2 text-slate-600">Join the USHDANI circle for new drops and private sales.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@example.com"
                 className="w-full sm:w-80 rounded-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ushdani-gold)]"/>
          <button type="submit" className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{background:'var(--ushdani-gold)'}}>
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By subscribing, you agree to receive emails from USHDANI.</p>
      </div>
    </section>
  )
}