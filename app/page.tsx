export default function Page() {
  return (
    <div className="h-screen w-full bg-[#0B0F1A] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,.18),transparent_40%)]" />

      {/* TOP BAR */}
      <header className="relative z-20 flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-xl" />
          <span className="text-xl font-bold tracking-wide">Codely</span>
        </div>

        <nav className="hidden md:flex gap-8 text-white/70 text-sm">
          <a className="hover:text-white">Dashboard</a>
          <a className="hover:text-white">Build</a>
          <a className="hover:text-white">Templates</a>
          <a className="hover:text-white">Deploy</a>
        </nav>

        <button className="px-5 py-2 rounded-xl bg-white text-black font-semibold">
          New Project
        </button>
      </header>

      {/* MAIN GRID */}
      <main className="relative z-10 h-[calc(100%-70px)] grid grid-cols-[260px_1fr_340px]">

        {/* LEFT SIDEBAR */}
        <aside className="border-r border-white/10 p-6 space-y-6 bg-white/5 backdrop-blur-xl">

          <div className="text-white/50 text-xs">WORKSPACE</div>

          <div className="space-y-3">
            {["Dashboard","AI Builder","Projects","Agents","Deploy"].map(item => (
              <div key={item} className="px-3 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-white/10 border border-white/10">
            <p className="text-sm font-semibold">Pro Plan</p>
            <p className="text-xs text-white/60 mt-1">5 builds remaining</p>
          </div>

        </aside>

        {/* CENTER WORKSPACE */}
        <section className="p-8 space-y-6">

          {/* HERO CARD */}
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">

            <h1 className="text-4xl font-black leading-tight">
              Build apps with
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent"> AI speed</span>
            </h1>

            <p className="text-white/60 mt-3 max-w-xl">
              Describe your idea. Codely generates full-stack apps with UI, backend, and deployment ready in seconds.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                className="flex-1 px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none"
                placeholder="Build me a SaaS dashboard with payments..."
              />
              <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 font-semibold">
                Generate
              </button>
            </div>

          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-3 gap-4">

            {[
              {t:"AI Builder",d:"Generate full apps"},
              {t:"Instant Deploy",d:"1-click hosting"},
              {t:"Templates",d:"Prebuilt systems"}
            ].map(f => (
              <div key={f.t} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <p className="font-semibold">{f.t}</p>
                <p className="text-white/60 text-sm mt-1">{f.d}</p>
              </div>
            ))}

          </div>

        </section>

        {/* RIGHT PANEL */}
        <aside className="border-l border-white/10 p-6 space-y-5 bg-white/5 backdrop-blur-xl">

          <div className="text-sm text-white/50">LIVE PREVIEW</div>

          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/40">
            App Rendering Area
          </div>

          <div className="p-4 rounded-2xl bg-green-500/10 border border-green-400/20 text-green-300 text-sm">
            ● AI Status: Ready
          </div>

        </aside>

      </main>
    </div>
  );
}
