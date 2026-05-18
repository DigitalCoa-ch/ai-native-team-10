import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoloOps AI — Team 10",
  description: "Micro-Operations Agent for Solo Businesses",
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">

      {/* Background blur orbs */}
      <div className="blur-orb w-96 h-96 bg-sky-500 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="blur-orb w-72 h-72 bg-indigo-500 bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

      {/* Logo mark */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Team badge */}
      <div className="relative mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Team 10 — FROS
        </span>
      </div>

      {/* Main headline */}
      <h1 className="relative text-5xl sm:text-7xl font-bold text-center tracking-tight mb-6">
        <span className="gradient-text">Hello World,</span>
        <br />
        <span className="text-white">Team 10</span>
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg sm:text-xl text-slate-400 text-center max-w-xl mb-10 leading-relaxed">
        SoloOps AI — Micro-Operations Agent for Solo Businesses.
        <br />
        Automating the chaos, one task at a time.
      </p>

      {/* Feature cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
        {[
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18" />
              </svg>
            ),
            title: "Smart Tasks",
            desc: "AI-prioritized daily tasks",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            ),
            title: "Follow-ups",
            desc: "Never miss a client message",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            ),
            title: "AI Insights",
            desc: "Smart recommendations daily",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="glow-card bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-sky-500/30 transition-colors duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 mb-4">
              {card.icon}
            </div>
            <h3 className="text-white font-semibold mb-1">{card.title}</h3>
            <p className="text-sm text-slate-400">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech stack pill */}
      <p className="relative mt-10 text-sm text-slate-500">
        Built with Next.js · TypeScript · Tailwind CSS · Vercel
      </p>
    </main>
  );
}
