import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090910] text-[#e8e9f0] font-sans antialiased overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-[#3b82f6] material-symbols-outlined">blur_on</span>
            <span className="text-xl font-extrabold tracking-tight text-white">SoloOps <span className="text-[#8b5cf6]">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-[#9899b0] hover:text-white transition-colors text-sm font-medium" href="#problem">Problem</a>
            <a className="text-[#9899b0] hover:text-white transition-colors text-sm font-medium" href="#solution">Solution</a>
            <a className="text-[#9899b0] hover:text-white transition-colors text-sm font-medium" href="#how">How It Works</a>
            <a className="text-[#9899b0] hover:text-white transition-colors text-sm font-medium" href="#pricing">Pricing</a>
          </div>
          <button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#3b82f6]/20">Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-[#3b82f6]/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-[-100px] w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay:"3s"}} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 px-4 py-1.5 rounded-full mb-8 animate-fade-in-up" style={{animationDelay:"0.05s",opacity:0}}>
              <span className="text-[#3b82f6] material-symbols-outlined text-base">auto_awesome</span>
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">AI-Powered Micro-Operations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black max-w-4xl mx-auto mb-6 leading-[1.05] tracking-tight animate-fade-in-up" style={{animationDelay:"0.1s",opacity:0}}>
              Run a Six-Figure Solo Business. <span className="gradient-text">Let AI Handle the Rest.</span>
            </h1>
            <p className="text-[#9899b0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay:"0.2s",opacity:0}}>
              SoloOps AI acts as your autonomous virtual COO -- handling scheduling, follow-ups, reminders, invoicing, and client comms so you can focus on revenue-generating work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-in-up" style={{animationDelay:"0.3s",opacity:0}}>
              <button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#3b82f6]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-base">Deploy Your Agent</button>
              <button className="glass border border-white/10 text-[#e8e9f0] px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all text-base flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">play_circle</span> Watch 1-Min Demo
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#6b6c80] animate-fade-in-up" style={{animationDelay:"0.4s",opacity:0}}>
              {["No credit card required","14-day free trial","Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5"><span className="text-[#3bf5d4] material-symbols-outlined text-base">check_circle</span>{t}</span>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 animate-terminal">
            <div className="terminal-window rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#12122a]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <span className="text-[#6b6c80] text-xs ml-3 font-mono">soloops -- micro-operations-agent</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-3"><span className="text-[#8b5cf6]">$</span><p className="text-[#9899b0]">Follow up with John about the proposal and send the invoice</p></div>
                <div className="flex gap-3 animate-slide-in" style={{animationDelay:"0.6s"}}>
                  <span className="text-[#3bf5d4]">[ok]</span>
                  <div><p className="text-[#e8e9f0]">Done -- 3 tasks completed:</p>
                    <ul className="mt-2 space-y-1 text-[#9899b0] ml-4">
                      <li>  -&gt; Email sent to John (follow-up + proposal)</li>
                      <li>  -&gt; Invoice #0482 generated and emailed</li>
                      <li>  -&gt; Reminder set for 3 days if unpaid</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3 animate-slide-in" style={{animationDelay:"1s"}}><span className="text-[#3b82f6]">$</span><p className="text-[#3b82f6]">Plan my week around client calls and deep work blocks</p></div>
                <div className="flex gap-3 animate-slide-in" style={{animationDelay:"1.6s"}}><span className="text-[#3b82f6]">$</span><p className="text-[#3b82f6] animate-blink">_</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TARGET AUDIENCE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-3">Built For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">One person. Infinite scale.</h2>
            <p className="text-[#6b6c80] max-w-lg mx-auto">SoloOps AI was designed for solo operators who want enterprise-grade operations without the team.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{icon:"person",label:"Solo Entrepreneurs"},{icon:"brush",label:"Freelancers"},{icon:"psychology",label:"Coaches"},{icon:"workspace_premium",label:"Consultants"},{icon:"videocam",label:"Creators"},{icon:"storefront",label:"One-Person Biz"}].map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 text-center hover:bg-white/[0.06] transition-all cursor-default">
                <span className="text-3xl mb-3 block material-symbols-outlined text-[#3b82f6]">{item.icon}</span>
                <p className="text-sm font-medium text-[#c8c9e0]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#ef4444] text-xs font-bold uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">You are losing 20+ hours a week to work that doesnt scale</h2>
            <p className="text-[#6b6c80] max-w-xl mx-auto">The average solo founder spends nearly half their week on admin tasks instead of growing the business.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[ {stat:"14 hrs/wk",title:"Lost to Scheduling",desc:"Endless back-and-forth emails just to find a meeting time.",icon:"schedule"},
              {stat:"40%",title:"Revenue Left on Table",desc:"Missed follow-ups mean cold leads and lost contracts.",icon:"trending_down"},
              {stat:"5+ hrs/wk",title:"Wasted on Invoicing",desc:"Creating invoices, chasing payments, managing finances.",icon:"receipt_long"},
              {stat:"3+ tools",title:"Fragmented Stack",desc:"Notes in Notion, reminders in phone, emails in Gmail -- nothing connects.",icon:"hub"},
            ].map((p) => (
              <div key={p.title} className="bg-[#1a0a0a] border border-[#ef4444]/20 rounded-2xl p-6 hover:border-[#ef4444]/40 transition-all">
                <span className="text-3xl mb-3 block material-symbols-outlined text-[#ef4444]">{p.icon}</span>
                <div className="text-3xl font-black text-[#ef4444] mb-1">{p.stat}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-[#6b6c80] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3bf5d4] text-xs font-bold uppercase tracking-widest mb-3">The Transformation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Before SoloOps AI vs. After</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="before-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center"><span className="text-[#ef4444] text-sm material-symbols-outlined">close</span></div>
                <h3 className="text-xl font-bold text-[#fca5a5]">Before SoloOps AI</h3>
              </div>
              <ul className="space-y-3">
                {["20+ tabs open across 5+ apps","Follow-up emails sent manually (and forgotten)","Invoices chased with awkward reminders","Schedule managed with endless back-and-forth","Client notes scattered across 4+ apps","Reminders set manually, easily missed"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#6b6c80] text-sm"><span className="text-[#ef4444] mt-0.5 material-symbols-outlined text-base">remove</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="after-card rounded-2xl p-8 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#3bf5d4]/20 flex items-center justify-center"><span className="text-[#3bf5d4] text-sm material-symbols-outlined">check</span></div>
                <h3 className="text-xl font-bold text-[#3bf5d4]">After SoloOps AI</h3>
              </div>
              <ul className="space-y-3">
                {["One unified AI dashboard","AI sends personalized follow-ups automatically","Invoices generated and reminders triggered autonomously","Smart scheduling -- clients book, AI handles conflicts","All client context in one place, AI-summarized","Context-aware reminders that know your priorities"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#c8c9e0] text-sm"><span className="text-[#3bf5d4] mt-0.5 material-symbols-outlined text-base">add_circle</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section id="solution" className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your AI Virtual COO -- Always On</h2>
            <p className="text-[#6b6c80] max-w-xl mx-auto">SoloOps AI orchestrates your micro-operations autonomously, 24/7, without you lifting a finger.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[ {icon:"calendar_month",title:"Smart Scheduling",desc:"Clients book instantly. Auto time-zone detection. Reminders fire automatically.",badge:"3x more meetings"},
              {icon:"forward_to_inbox",title:"Autonomous Follow-ups",desc:"AI crafts and sends personalized follow-ups at the perfect moment.",badge:"2x response rate"},
              {icon:"description",title:"Instant Invoicing",desc:"Generate invoices in seconds. Auto-chase overdue payments.",badge:"60% faster payment"},
              {icon:"forum",title:"Unified Client Comms",desc:"Email, WhatsApp, SMS in one thread. AI drafts replies. You approve.",badge:"Zero context switching"},
              {icon:"task_alt",title:"Micro-Task Orchestration",desc:"Break big goals into actionable steps. AI tracks and nudges you.",badge:"95% task completion"},
              {icon:"notifications_active",title:"Smart Reminders",desc:"Context-aware reminders that know your schedule, clients, and priorities.",badge:"Never miss anything"},
              {icon:"analytics",title:"Revenue Insights",desc:"Track billable hours, project profit, and growth trends in one view.",badge:"Know your numbers"},
              {icon:"cloud",title:"AI Summaries",desc:"Get instant AI summaries of client conversations and next-step recommendations.",badge:"Save 2 hrs/day"},
            ].map((f) => (
              <div key={f.title} className="glass rounded-xl p-6 feature-card hover:bg-white/[0.06]">
                <span className="text-3xl mb-3 block material-symbols-outlined text-[#3b82f6]">{f.icon}</span>
                <h4 className="text-lg font-bold mb-2 text-white">{f.title}</h4>
                <p className="text-[#6b6c80] text-sm mb-4 leading-relaxed">{f.desc}</p>
                <div className="inline-flex items-center gap-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {f.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Up and running in 5 minutes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[ {num:"01",title:"Connect Your Tools",desc:"Link your calendar, email, WhatsApp, and Stripe in one click. No coding required.",icon:"link"},
              {num:"02",title:"AI Learns Your Workflow",desc:"SoloOps analyzes how you work -- your clients, pricing, and availability -- and builds your ops system.",icon:"psychology"},
              {num:"03",title:"Run on Auto-Pilot",desc:"Follow-ups send. Invoices go out. Reminders fire. You stay in control but stop doing the busywork.",icon:"rocket_launch"},
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-2xl mx-auto flex items-center justify-center mb-5 shadow-lg shadow-[#3b82f6]/20">
                  <span className="text-2xl text-white material-symbols-outlined">{step.icon}</span>
                </div>
                <div className="text-4xl font-black text-[#3b82f6]/20 mb-2">{step.num}</div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-[#6b6c80] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OXYGEN TEST */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest mb-3">The Oxygen Test</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What collapses without AI?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0f1a0f] border border-[#22c55e]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center"><span className="text-[#22c55e] text-sm material-symbols-outlined">check</span></div>
                <h3 className="text-lg font-bold text-[#22c55e]">Without AI -- Still Works</h3>
              </div>
              <ul className="space-y-2">
                {["Send emails manually","Manage appointments","Organize tasks","Track clients in a spreadsheet","Set reminders yourself"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[#6b6c80] text-sm"><span className="text-[#22c55e]">-</span> {t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a0a0a] border border-[#ef4444]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center"><span className="text-[#ef4444] text-sm material-symbols-outlined">close</span></div>
                <h3 className="text-lg font-bold text-[#ef4444]">Without AI -- What Collapses</h3>
              </div>
              <ul className="space-y-2">
                {["Automated prioritization disappears","Workflow intelligence vanishes","Follow-ups slow to a crawl","Reminders become manual and inconsistent","Operational coordination fragments"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[#6b6c80] text-sm"><span className="text-[#ef4444]">-</span> {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-[#6b6c80] text-sm"><span className="text-[#f59e0b] font-bold">Verdict:</span> SoloOps AI is AI-first. Without AI, the experience becomes too slow and inefficient to scale.</p>
          </div>
        </div>
      </section>
      {/* PERCH NOTES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-3">PERCH Notes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Evidence, Risks and Assumptions</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0d0d1a] border border-[#3b82f6]/20 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="text-[#3b82f6] text-lg">E</span> Evidence</h4>
                <ul className="space-y-2">
                  {["Solo businesses lose 20+ hrs/week on admin","Freelancer burnout rate is high","Rising demand for low-cost automation","AI adoption is accelerating rapidly"].map((t) => (
                    <li key={t} className="text-[#6b6c80] text-sm flex items-start gap-2"><span className="text-[#3b82f6] mt-0.5">-</span> {t}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0d0d1a] border border-[#f59e0b]/20 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="text-[#f59e0b] text-lg">R</span> Risks</h4>
                <ul className="space-y-2">
                  {["Users may not trust AI recommendations","Integrations may fail or be unreliable","Existing tools already solve part of the problem","AI-generated messages may feel impersonal"].map((t) => (
                    <li key={t} className="text-[#6b6c80] text-sm flex items-start gap-2"><span className="text-[#f59e0b] mt-0.5">-</span> {t}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0d0d1a] border border-[#22c55e]/20 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="text-[#22c55e] text-lg">A</span> Assumptions</h4>
                <ul className="space-y-2">
                  {["Users will trust AI for routine ops","Simplicity beats feature count","Solo founders will pay for time savings","Automation is the key differentiator"].map((t) => (
                    <li key={t} className="text-[#6b6c80] text-sm flex items-start gap-2"><span className="text-[#22c55e] mt-0.5">-</span> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">One plan. Everything you need.</h2>
            <p className="text-[#6b6c80] max-w-lg mx-auto">Transparent pricing designed for solo operators. No hidden fees. No enterprise negotiation.</p>
          </div>
          <div className="max-w-md mx-auto glass rounded-3xl p-10 border border-white/10 glow-border">
            <div className="text-center">
              <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-2">The Solo Plan</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-black text-white">29</span>
                <span className="text-[#6b6c80]">/month</span>
              </div>
              <p className="text-[#6b6c80] text-sm mb-8">Billed monthly. Cancel anytime.</p>
              <ul className="space-y-3 mb-8 text-left">
                {["Unlimited clients and projects","AI-powered follow-up engine","Smart scheduling and reminders","Unified client inbox (email + WhatsApp)","Instant invoicing and payment tracking","Micro-task orchestration","Revenue insights dashboard","Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#c8c9e0] text-sm"><span className="text-[#3bf5d4] material-symbols-outlined text-base">check_circle</span>{f}</li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white py-4 rounded-full font-bold shadow-xl shadow-[#3b82f6]/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">Start 14-Day Free Trial</button>
              <p className="text-[#6b6c80] text-xs mt-4">No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-[#1a1040] via-[#0d0d2a] to-[#0a1520] rounded-[2.5rem] p-10 md:p-14 text-center glass border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"/>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to reclaim your time?</h2>
              <p className="text-[#6b6c80] text-lg max-w-2xl mx-auto mb-10">The interactive prototype is coming next -- a live demo where you can see SoloOps AI handling real tasks in real time.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">Deploy Your Agent</button>
                <button className="glass border border-white/10 text-[#e8e9f0] px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all">View Prototype Roadmap</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl text-[#3b82f6] material-symbols-outlined">blur_on</span>
              <span className="text-lg font-extrabold text-white">SoloOps <span className="text-[#8b5cf6]">AI</span></span>
            </div>
            <div className="flex items-center gap-8 text-sm text-[#6b6c80]">
              <a className="hover:text-white transition-colors" href="#problem">Problem</a>
              <a className="hover:text-white transition-colors" href="#solution">Solution</a>
              <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
            </div>
            <p className="text-[#6b6c80] text-xs">(c) 2024 SoloOps AI. Built for the solo operator.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}