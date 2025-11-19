import { MousePointerClick, Receipt, Clock4 } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    { icon: MousePointerClick, title: "Crie a sua conta", desc: "Registo online em minutos com verificação simples e acompanhamento dedicado." },
    { icon: Receipt, title: "Ative métodos de pagamento", desc: "Configure MB Way, referências Multibanco e cartões conforme o seu negócio." },
    { icon: Clock4, title: "Comece a receber", desc: "Envie links de pagamento ou integre o checkout e acompanhe tudo em tempo real." },
  ]

  return (
    <section id="how" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Como funciona</h2>
          <p className="mt-3 text-slate-600">Do registo à primeira venda, tudo foi pensado para ser rápido e sem complicações.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
