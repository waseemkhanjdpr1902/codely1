export default function Home() {
  const features = [
    "AI Builder",
    "Instant Deploy",
    "GitHub Sync",
    "Templates",
    "Team Workspace",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Codely
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#">Product</a>
            <a href="#">Templates</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
          </nav>

          <button className="px-5 py-2 rounded-2xl bg-slate-900 text-white">
            Start Free
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <section className="text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold mb-8">
            Build production apps with AI
          </div>

          <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
            Build apps
            <span className="block bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              beautifully fast
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Prompt → Build → Deploy → Monetize.
            One elegant platform for creators.
          </p>

          <div className="mt-10 max-w-4xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-[30px] p-3 flex flex-col md:flex-row gap-3">
            <input
              className="flex-1 px-5 py-4 rounded-2xl bg-slate-50 outline-none"
              placeholder="Describe your app idea..."
            />
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold">
              Generate
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {features.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[36px] bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-[28px] bg-white p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">AI Workspace</h3>
              <p className="text-slate-600 mb-6">
                Build SaaS apps, tools, dashboards and websites from one prompt.
              </p>

              <div className="rounded-3xl bg-slate-100 p-5">
                Create a fintech dashboard with billing, auth and analytics.
              </div>

              <div className="mt-5 flex gap-3 flex-wrap">
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">
                  Improve
                </button>
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">
                  Add Auth
                </button>
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">
                  Deploy
                </button>
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 p-10 text-white shadow-2xl flex items-center justify-center text-4xl font-black">
              Live Preview
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
