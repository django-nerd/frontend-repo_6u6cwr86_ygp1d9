import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <section id="cta" className="py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pronto para aceitar pagamentos?</h3>
              <p className="mt-3 text-slate-300">Crie a sua conta em minutos e comece a receber hoje mesmo.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:bg-slate-100">Criar conta</a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 font-medium text-white hover:bg-white/10">Ver preços</a>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Paga+ Payments</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Termos</a>
            <a href="#" className="hover:text-slate-900">Privacidade</a>
            <a href="/test" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
