import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-black shadow-lg shadow-blue-600/20">P</div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Paga+ Payments</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition">Funcionalidades</a>
            <a href="#how" className="hover:text-slate-900 transition">Como funciona</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Preços</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
            <button className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900">
              <Globe className="h-4 w-4" /> PT <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-700 hover:text-slate-900 text-sm">Entrar</a>
            <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 text-white text-sm px-4 py-2 shadow-sm hover:bg-slate-800 transition">Criar conta</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <a onClick={() => setOpen(false)} href="#features" className="block">Funcionalidades</a>
            <a onClick={() => setOpen(false)} href="#how" className="block">Como funciona</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block">Preços</a>
            <a onClick={() => setOpen(false)} href="#faq" className="block">FAQ</a>
            <div className="flex gap-3 pt-2">
              <a href="#" className="flex-1 text-center border border-slate-300 rounded-lg py-2">Entrar</a>
              <a href="#cta" className="flex-1 text-center bg-slate-900 text-white rounded-lg py-2">Criar conta</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
