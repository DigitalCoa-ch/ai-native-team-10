import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoloOps AI — Run Your Business, Not the Chaos",
  description: "AI-powered micro-operations agent built for solo entrepreneurs, freelancers, coaches, and one-person businesses. Automate scheduling, follow-ups, reminders, and more.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── NAV ── */}
      <nav className="w-full border-b border-white/10 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <svg className="w-4 h-4 text-[#0a1628]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-semibold text-base text-white tracking-tight">SoloOps AI</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/55">
          <span className="hidden sm:block">Features</span>
          <span className="hidden sm:block">How it works</span>
          <button className="bg-white text-[#0a1628] text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
            Get early access
          </button>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            Built for the solo entrepreneur
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Run your business.<br />
            <span className="text-white/60">Not the chaos.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            SoloOps AI is your personal operations agent. It handles scheduling, follow-ups, reminders, and the repetitive tasks that eat your day — so you can focus on the work that actually grows your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-[#0a1628] font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors text-base">
              Join the waitlist — free
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white/70 font-medium px-8 py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-colors text-base">
              See how it works
            </button>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/5" />
        </div>

        {/* ── WHO IT'S FOR ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-6">Who it&apos;s for</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-12 leading-snug">
            If you&apos;re running a business alone,<br />SoloOps AI was built for you.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Freelancer",
              "Coach",
              "Consultant",
              "Creator",
              "Solopreneur",
              "Independent pro",
            ].map((role) => (
              <div key={role} className="card rounded-xl px-4 py-3 text-sm text-white/70 text-center">
                {role}
              </div>
            ))}
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="card rounded-2xl p-8 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-6">The problem</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-6">
              You didn&apos;t start a business to manage a dozen apps, chase clients, and drown in admin.
            </h2>
            <p className="text-white/55 leading-relaxed">
              Scheduling conflicts. Forgotten follow-ups. Lost client messages. Hours buried in invoicing and task lists. Most tools were designed for teams — not for one person doing everything. SoloOps AI is the operations layer that works for you, not against you.
            </p>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-6">What it does</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-10">
            Everything a solo business needs.<br />Nothing it doesn&apos;t.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Smart Scheduling",
                desc: "AI coordinates your calendar, blocks focus time, and handles booking conflicts automatically.",
              },
              {
                title: "Follow-up Engine",
                desc: "Never let a client conversation go cold. Auto-sends timely follow-ups so nothing slips through.",
              },
              {
                title: "Smart Reminders",
                desc: "Context-aware reminders that know what matters and when to nudge you — not just generic alerts.",
              },
              {
                title: "Invoicing Simplified",
                desc: "Generate, send, and track invoices without switching tools. Get paid faster with less effort.",
              },
              {
                title: "Task Intelligence",
                desc: "AI-prioritized task lists that adapt to your day and surface what actually needs your attention.",
              },
              {
                title: "One Inbox",
                desc: "All client communication in one place. SoloOps filters, flags, and drafts replies for you.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card rounded-2xl p-6">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Your business deserves a real assistant.
            </h2>
            <p className="text-white/45 mb-10 max-w-md mx-auto">
              Join the waitlist and be first to know when SoloOps AI launches. Early members get lifetime pricing locked in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="w-full sm:w-auto bg-white text-[#0a1628] font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors text-base">
                Reserve early access — free
              </button>
            </div>
            <p className="text-white/25 text-xs mt-4">No credit card. No spam. Just early access.</p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <svg className="w-3 h-3 text-[#0a1628]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white/40 text-sm">SoloOps AI</span>
          </div>
          <p className="text-white/25 text-xs">© 2026 SoloOps AI. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}