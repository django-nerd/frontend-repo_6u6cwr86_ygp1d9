export default function FAQ() {
  const faqs = [
    { q: "Quanto tempo demora a ativação?", a: "Normalmente 24-48h após validação de documentação." },
    { q: "É possível integrar na minha loja?", a: "Sim, disponibilizamos SDKs, APIs REST e plugins para as principais plataformas." },
    { q: "Existe mensalidade?", a: "Não há mensalidade obrigatória. Apenas paga pelas transações processadas." },
    { q: "Que métodos de pagamento suportam?", a: "Cartões (Visa, Mastercard), MB Way, referências Multibanco e Apple Pay." },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Perguntas frequentes</h2>
          <p className="mt-3 text-slate-600">Tudo o que precisa de saber para começar com confiança.</p>
        </div>
        <div className="mt-10 grid gap-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="font-medium text-slate-900">{q}</div>
              <div className="mt-2 text-sm text-slate-600">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
