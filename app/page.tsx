export default function Page() {
  return (
    <div className="h-screen flex bg-slate-50 text-slate-900">

      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-5">
        <h1 className="text-2xl font-black text-violet-600 mb-8">
          Codely
        </h1>

        <nav className="flex flex-col gap-4 text-slate-600 font-medium">
          <a className="hover:text-slate-900">🏠 Dashboard</a>
          <a className="hover:text-slate-900">⚡ Build</a>
          <a className="hover:text-slate-900">📁 Projects</a>
          <a className="hover:text-slate-900">🧠 AI Agents</a>
          <a className="hover:text-slate-900">🚀 Deploy</a>
        </nav>

        <div className="mt-auto bg-slate-100 p-4 rounded-2xl">
          <p className="font-semibold">Pro Plan</p>
          <p className="text-sm text-slate-500">5 builds remaining</p>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <input
            className="w-1/2 px-4 py-2 rounded-xl bg-slate-100 outline-none"
            placeholder="Search projects or AI prompts..."
          />

          <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">
            New Project
          </button>
        </header>

        {/* WORKSPACE */}
        <div className="flex-1 grid grid-cols-3 gap-6 p-6">

          {/* BUILDER */}
          <section className="col-span-2 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">AI Builder</h2>

            <textarea
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none"
              placeholder="Describe your app... e.g. SaaS dashboard with auth, payments, analytics"
            />

            <div className="mt-4 flex gap-3 flex-wrap">
              <button className="px-4 py-2 bg-violet-600 text-white rounded-xl">
                Generate
              </button>
              <button className="px-4 py-2 bg-slate-200 rounded-xl">
                Improve
              </button>
              <button className="px-4 py-2 bg-slate-200 rounded-xl">
                Deploy
              </button>
            </div>
          </section>

          {/* PREVIEW PANEL */}
          <aside className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Live Preview</h2>

            <div className="flex-1 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
              App Preview Area
            </div>

            <div className="mt-4 text-sm text-slate-500">
              Status: Ready 🚀
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
