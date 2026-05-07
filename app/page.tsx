export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#050713] text-white relative">

      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-violet-600/30 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full bottom-[-250px] right-[-250px]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full top-[40%] left-[30%]" />
      </div>

      {/* ================= TOP BAR ================= */}
      <header className="relative z-20 flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400" />
          <div>
            <p className="font-bold text-lg">Codely</p>
            <p className="text-xs text-white/50">AI Builder Studio</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-white/70 text-sm">
          {[
            "Dashboard","Build","Projects","Templates","Deploy","Analytics","Settings"
          ].map(i => (
            <a key={i} className="hover:text-white transition">{i}</a>
          ))}
        </nav>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold">New</button>
          <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/20">Profile</button>
        </div>
      </header>

      {/* ================= MAIN GRID ================= */}
      <main className="relative z-10 grid grid-cols-[280px_1fr_360px] h-[calc(100%-72px)]">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between">

          <div>
            <p className="text-xs text-white/40 mb-4">WORKSPACE</p>

            <div className="space-y-2">
              {[
                "Overview","AI Builder","Code Editor","Database","API","Logs","Deployments","Billing","Team","Security"
              ].map(item => (
                <div key={item} className="px-3 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition text-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10">
              <p className="text-sm font-semibold">Pro Plan</p>
              <p className="text-xs text-white/50">Usage 40%</p>
              <div className="w-full h-2 bg-white/10 rounded-full mt-3">
                <div className="w-[40%] h-2 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
              </div>
            </div>

          </div>

          <div className="text-xs text-white/30">
            Codely v2.0 • Enterprise Build System
          </div>

        </aside>

        {/* ================= CENTER WORKSPACE ================= */}
        <section className="p-6 overflow-auto space-y-6">

          {/* HERO ENGINE */}
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
            <h1 className="text-5xl font-black">
              Build SaaS apps with
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
                AI-powered engine
              </span>
            </h1>
            <p className="text-white/60 mt-4 max-w-2xl">
              Generate full-stack applications with frontend, backend, database, authentication, and deployment.
            </p>

            <div className="mt-6 flex gap-3">
              <input className="flex-1 px-5 py-4 rounded-2xl bg-black/30 border border-white/10" placeholder="Describe your SaaS idea..." />
              <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 font-semibold">
                Generate
              </button>
            </div>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length:9}).map((_,i)=> (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <p className="font-semibold">Module {i+1}</p>
                <p className="text-white/50 text-sm">AI powered system block</p>
              </div>
            ))}
          </div>

          {/* WORKSPACE PANELS */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-sm text-white/50 mb-3">AI Builder Console</p>
              <div className="h-40 bg-black/30 rounded-xl border border-white/10 p-3 text-sm">
                Generate SaaS dashboard with auth, payments, analytics...
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-sm text-white/50 mb-3">Live Preview Engine</p>
              <div className="h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center text-white/40">
                Rendering Preview
              </div>
            </div>

          </div>

          {/* ACTIVITY FEED */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-sm text-white/50 mb-4">System Activity</p>
            <div className="space-y-2">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="flex justify-between text-sm text-white/70">
                  <span>Build process #{i+1}</span>
                  <span className="text-green-400">Success</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= RIGHT PANEL ================= */}
        <aside className="border-l border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">

          <p className="text-sm text-white/50">LIVE SYSTEM</p>

          <div className="h-[300px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/40">
            App Preview Engine
          </div>

          <div className="p-4 rounded-2xl bg-green-500/10 border border-green-400/20 text-green-300 text-sm">
            ● AI Engine Running
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/60">
            Tip: Try building multi-tenant SaaS apps
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/60">
            System latency: 120ms
          </div>

        </aside>

      </main>

    </div>
  );
}
