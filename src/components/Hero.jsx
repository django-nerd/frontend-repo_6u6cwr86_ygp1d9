import { CheckCircle2, Shield, Zap, CreditCard } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 -left-32 h-[420px] w-[420px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Shield className="h-3.5 w-3.5" /> Certificação PCI-DSS • Suporte em PT
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Aceite pagamentos online com mais confiança e conversões
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Checkout optimizado, links de pagamento, MB Way, referências Multibanco e cartões, tudo numa única plataforma simples e segura.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow-sm hover:bg-slate-800">
                Começar grátis
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
                Ver preços
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" />Ativação rápida</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-blue-600" />Checkout 1‑clique</div>
              <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-600" />Cartões e MB Way</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" />Fraude reduzida</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="h-3 w-12 rounded-full bg-slate-200" />
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                  <div className="h-3 w-3 rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 rounded-lg bg-slate-100" />
                  <div className="h-8 rounded-lg bg-slate-100" />
                  <div className="h-8 rounded-lg bg-slate-100" />
                </div>
                <div className="h-28 rounded-xl bg-slate-50 border border-slate-200" />
                <div className="flex gap-2">
                  <div className="h-9 flex-1 rounded-lg bg-blue-600" />
                  <div className="h-9 w-28 rounded-lg border border-slate-300" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg hidden sm:block">
              <div className="h-3 w-28 rounded bg-slate-200" />
              <div className="mt-3 h-12 w-56 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
