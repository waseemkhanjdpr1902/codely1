export default function CodelyUI(){
  const chips=['AI Builder','Deploy in 1 Click','Templates','Team Workspace','GitHub Sync'];
  const cards=[
    {title:'Landing Page',sub:'Launch-ready marketing site'},
    {title:'SaaS Dashboard',sub:'Auth, billing, analytics'},
    {title:'Mobile App',sub:'Cross-platform starter'}
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,.2),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,.15),transparent_30%)]" />
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-2xl" />
            <span className="text-2xl font-bold">Codely</span>
          </div>
          <nav className="hidden md:flex gap-8 text-white/80">
            <a href="#">Product</a><a href="#">Templates</a><a href="#">Community</a><a href="#">Pricing</a>
          </nav>
          <button className="px-5 py-2.5 rounded-2xl bg-white text-slate-900 font-semibold shadow-xl">Start Free</button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">
        <section className="text-center max-w-5xl mx-auto">
          <div className="inline-flex px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl text-sm mb-8">✨ Build apps people love</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">Create software at the <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">speed of thought</span></h1>
          <p className="mt-7 text-xl text-white/70 max-w-3xl mx-auto">Prompt, generate, edit, deploy, and monetize—inside one beautiful AI-native workspace.</p>

          <div className="mt-10 max-w-4xl mx-auto rounded-[28px] border border-white/15 bg-white/10 backdrop-blur-2xl p-3 shadow-2xl flex flex-col md:flex-row gap-3">
            <input className="flex-1 bg-transparent px-5 py-4 outline-none text-lg placeholder:text-white/40" placeholder="Build me a fintech SaaS dashboard with login, analytics & billing..." />
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 font-semibold">Generate App</button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map(c=><span key={c} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80">{c}</span>)}
          </div>
        </section>

        <section className="mt-20 grid lg:grid-cols-[1.3fr_.7fr] gap-8 items-start">
          <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex gap-2"><div className="h-3 w-3 rounded-full bg-red-400"/><div className="h-3 w-3 rounded-full bg-yellow-400"/><div className="h-3 w-3 rounded-full bg-green-400"/></div>
            <div className="grid md:grid-cols-[88px_1fr_320px] min-h-[560px]">
              <aside className="bg-black/20 p-5 flex flex-col gap-5 text-2xl"><span>🏠</span><span>🧠</span><span>📁</span><span>🚀</span><span>⚙️</span></aside>
              <div className="p-6 border-x border-white/10">
                <div className="rounded-3xl bg-black/20 border border-white/10 p-5">
                  <p className="text-white/60 text-sm mb-3">AI Builder</p>
                  <div className="rounded-2xl bg-white/10 p-4 text-white/90">Create a premium subscription platform with beautiful onboarding, dashboard analytics, and payment integration.</div>
                  <div className="mt-4 flex flex-wrap gap-2">{['Improve UI','Add Auth','Connect DB','Deploy'].map(b=><button key={b} className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium">{b}</button>)}</div>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-b from-white/10 to-transparent">
                <div className="h-full rounded-3xl bg-white text-slate-900 flex items-center justify-center text-3xl font-black shadow-2xl">Live Preview</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {cards.map(card => <div key={card.title} className="rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-2xl p-6"><h3 className="text-xl font-bold">{card.title}</h3><p className="mt-2 text-white/60">{card.sub}</p></div>)}
            <div className="rounded-[28px] p-6 bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950"><p className="font-black text-2xl">Deploy globally in seconds</p><p className="mt-2 font-medium">From prompt → product → profit.</p></div>
          </div>
        </section>
      </main>
    </div>
  )
}
