export default function CodelyUI(){
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <header className="border-b border-[#232938] bg-[#0B0D12]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Codely</h1>
          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#">Templates</a><a href="#">Explore</a><a href="#">Pricing</a><a href="#">Docs</a>
          </nav>
          <button className="px-5 py-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600">Start Building</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 mb-4">AI App Builder</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">Build Anything.<br/>Describe it once.</h2>
          <p className="mt-6 text-gray-400 text-lg">Generate full-stack apps, websites, dashboards, and APIs in minutes.</p>
          <div className="mt-8 p-4 rounded-3xl border border-[#232938] bg-[#151922] shadow-2xl">
            <input className="w-full bg-transparent outline-none text-lg" placeholder="What do you want to build today?" />
            <button className="mt-4 w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 font-semibold">Generate with AI</button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#232938] bg-[#151922] p-6 shadow-2xl">
          <div className="grid grid-cols-[70px_1fr_320px] min-h-[520px] gap-4">
            <aside className="rounded-2xl bg-[#0F131B] p-3 flex flex-col gap-4 text-gray-400">
              <span>🏠</span><span>📁</span><span>🤖</span><span>🗄️</span><span>⚙️</span>
            </aside>
            <section className="rounded-2xl bg-[#0F131B] p-5">
              <div className="text-sm text-gray-400 mb-4">Builder</div>
              <div className="rounded-2xl bg-[#151922] p-4 border border-[#232938] text-gray-300">Create a fintech dashboard with login, analytics, charts and billing.</div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Improve','Fix','Add Auth','Add DB','Deploy'].map(x => <button key={x} className="px-3 py-2 rounded-xl bg-[#1D2432] text-sm">{x}</button>)}
              </div>
            </section>
            <section className="rounded-2xl bg-[#0F131B] p-4">
              <div className="h-full rounded-2xl bg-white text-black flex items-center justify-center font-bold">Live Preview</div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
