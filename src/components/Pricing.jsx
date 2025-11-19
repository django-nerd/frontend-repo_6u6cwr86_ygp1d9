export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Preços simples e transparentes</h2>
          <p className="mt-3 text-slate-600">Pague apenas pelo que usar. Sem mensalidades obrigatórias, sem surpresas.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Cartões</h3>
            <p className="mt-1 text-sm text-slate-600">Visa, Mastercard, Apple Pay</p>
            <div className="mt-6 text-3xl font-semibold">1.9% + €0.20</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Liquidação D+2</li>
              <li>Sem custos de setup</li>
              <li>PCI-DSS incluído</li>
            </ul>
          </div>
          <div className="relative rounded-2xl border-2 border-indigo-600 bg-gradient-to-b from-indigo-50 to-white p-6 shadow-sm">
            <div className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">Mais popular</div>
            <h3 className="text-lg font-semibold text-slate-900">MB Way</h3>
            <p className="mt-1 text-sm text-slate-600">Pagamentos imediatos</p>
            <div className="mt-6 text-3xl font-semibold">1.5% + €0.10</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Confirmação instantânea</li>
              <li>Checkout mobile</li>
              <li>Links de pagamento</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Multibanco</h3>
            <p className="mt-1 text-sm text-slate-600">Referências e QR</p>
            <div className="mt-6 text-3xl font-semibold">€0.25 / ref.</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Validade configurável</li>
              <li>Reconciliação fácil</li>
              <li>Notificações automáticas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
