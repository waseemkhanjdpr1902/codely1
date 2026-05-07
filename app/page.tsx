export default function CodelyUI(){
  const features = ['AI Builder','Code Editor','One-click Deploy','Templates'];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg" />
            <h1 className="text-2xl font-bold">Codely</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#">Product</a><a href="#">Templates</a><a href="#">Pricing</a><a href="#">Docs</a>
          </nav>
          <button className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white shadow-lg">Start Free</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <section className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">✨ Build faster with AI</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              From idea to app,
              <span className="block bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">beautifully.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">Create full-stack apps, landing pages, tools, and dashboards with an elegant AI workspace built for makers.</p>

            <div className="mt-8 p-3 rounded-3xl bg-white shadow-2xl border border-slate-200 flex gap-3">
              <input className="flex-1 px-4 py-4 outline-none rounded-2xl bg-slate-50" placeholder="Describe what you want to build..." />
              <button className="px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold">Generate</button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map(f => <span key={f} className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700">{f}</span>)}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-violet-300/30 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative rounded-[32px] bg-white border border-slate-200 shadow-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-[90px_1fr] min-h-[500px]">
                <aside className="bg-slate-900 text-white p-5 flex flex-col gap-4">
                  <span>🏠</span><span>📁</span><span>⚡</span><span>🧠</span><span>⚙️</span>
                </aside>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <div className="grid md:grid-cols-2 gap-5 h-full">
                    <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
                      <p className="text-sm text-slate-500 mb-3">Builder</p>
                      <div className="rounded-2xl bg-slate-100 p-4 text-slate-700">Create a SaaS dashboard with auth, analytics, billing and a polished UI.</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Improve','Auth','Database','Deploy'].map(x => <button key={x} className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm">{x}</button>)}
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-900 text-white p-5 shadow-xl flex items-center justify-center text-2xl font-bold">Live Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
