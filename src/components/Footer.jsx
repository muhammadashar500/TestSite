export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[Playfair Display] text-lg">Ushdani</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ushdani. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Instagram" className="hover:text-slate-700">IG</a>
            <a href="#" aria-label="Facebook" className="hover:text-slate-700">FB</a>
            <a href="#" aria-label="TikTok" className="hover:text-slate-700">TT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}