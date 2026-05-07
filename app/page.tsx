export default function Home() {
  return (
    <div className="h-screen flex bg-slate-50 text-slate-900">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-5 flex flex-col gap-6">
        <h1 className="text-2xl font-black text-violet-600">Codely</h1>

        <nav className="flex flex-col gap-3 text-slate-600 font-medium">
          <a className="hover:text-slate-900">🏠 Dashboard</a>
          <a className="hover:text-slate-900">⚡ Build</a>
          <a className="hover:text-slate-900">📁 Projects</a>
          <a className="hover:text-slate-900">🧠 AI Agents</a>
          <a className="hover:text-slate-900">🚀 Deploy</a>
        </nav>

        <div className="mt-auto p-4 bg-slate-100 rounded-2xl text-sm">
          <p className="font-semibold">Pro Plan</p>
          <p className="text-slate-500">5 builds remaining</p>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col">

        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <input
            className="w-1/2 px-4 py-2 bg-slate-100 rounded-xl outline-none"
            placeholder="Search projects, AI prompts..."
          />

          <button className="px-4 py-2 rounded-xl bg-slate-900 text-white">
            New Project
          </button>
        </header>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-3 gap-6 p-6">

          {/* Builder */}
          <section className="col-span-2 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">AI Builder</h2>

            <textarea
              className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none"
              placeholder="Describe your app... e.g. build SaaS dashboard with auth, billing, analytics"
            />

            <div className="mt-4 flex gap-3">
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

          {/* Right Panel */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Live Preview</h2>

            <div className="flex-1 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
              App Preview
            </div>

            <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600">
              AI Status: Ready
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
