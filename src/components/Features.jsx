import { ShieldCheck, QrCode, Banknote, Smartphone, BarChart3, Link as LinkIcon } from "lucide-react"

export default function Features() {
  const items = [
    { icon: ShieldCheck, title: "Segurança avançada", desc: "3D Secure 2.0, anti-fraude e compliance PCI-DSS para proteger a sua empresa e clientes." },
    { icon: QrCode, title: "MB Way & Referências", desc: "Suporte completo para pagamentos por MB Way, referências Multibanco e QR Code." },
    { icon: Banknote, title: "Liquidações rápidas", desc: "Receba o dinheiro diretamente na sua conta com reconciliação simples e automática." },
    { icon: Smartphone, title: "Checkout mobile-first", desc: "Experiências otimizadas para conversões em qualquer dispositivo, sem esforço técnico." },
    { icon: BarChart3, title: "Análises em tempo real", desc: "Painéis com métricas de conversões, taxas de aprovação e chargebacks em segundos." },
    { icon: LinkIcon, title: "Links de pagamento", desc: "Crie e partilhe links para receber pagamentos em segundos, sem loja online." },
  ]

  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Tudo o que precisa para cobrar online</h2>
          <p className="mt-3 text-slate-600">Uma plataforma moderna, rápida e simples para receber pagamentos em Portugal e além fronteiras.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center">
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
