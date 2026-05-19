import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoloOps AI | The Future of Intelligence",
  description: "SoloOps AI orchestrates your enterprise workflow with generative precision.",
};

const features = [
  { icon: "hub", title: "Universal Connectivity", desc: "Sync with 200+ apps including Slack, Salesforce, and AWS with zero-latency integration.", wide: true, color: "primary" },
  { icon: "security", title: "Fortress Encryption", desc: "SOC-2 Type II compliant. Data encrypted at rest and in transit.", wide: true, color: "tertiary" },
  { icon: "auto_fix_high", title: "Smart Labels", desc: "Auto-classify data using semantic analysis.", color: "primary" },
  { icon: "group_work", title: "Team Sync", desc: "Collaborative AI coaching for departments.", color: "tertiary" },
  { icon: "language", title: "Global Scale", desc: "Multi-region deployment for fast UX worldwide.", color: "primary" },
  { icon: "monitoring", title: "Live Alerts", desc: "Custom anomaly detection engines in real time.", color: "secondary" },
];

const testimonials = [
  { quote: "SoloOps AI didn't just automate our reports; it fundamentally changed how we understand our customers.", name: "Sarah Chen", role: "CTO @ NexaStream" },
  { quote: "The speed of implementation was unbelievable. Within a week, we saw a 40% increase in workflow efficiency.", name: "Marcus Thorne", role: "Head of Ops @ Quantum Scale" },
];

const plans = [
  { name: "Starter", price: "$29", period: "/mo", desc: "For individuals and small startups.", features: ["5 AI Workflows", "2 Data Connectors", "Standard Support"], cta: "Start Free Trial", featured: false },
  { name: "Pro", price: "$89", period: "/mo", desc: "For professional teams.", features: ["Unlimited Workflows", "50+ Connectors", "Priority Support", "Advanced Analytics"], cta: "Go Pro Now", featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For large organizations.", features: ["Dedicated Instance", "White-label Support", "Custom SLA"], cta: "Contact Sales", featured: false },
];

const IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCBjj2d6ASYnimTH-Wtebdxij3V-3GGQiFp1uu1RZpjEDZtmJHNUfK0nR8nKvT5_UD36A1BoVEMzCU80Bbv5GoDQkWDy9E0vqQmV6KCuEj5b2CmTW_SBck8X4B6SCyyuuVXBWvKfWcjT_jvYW1wPr2l64f4CLd3hHTjnOfHcLNjt3TtExuZ9Xs5yMDttZPN6a6nAmG1Yq_-AP98k3RGQR51Nuz2jFrzGaI55zsY7yaV6XnC-1pbtbrJY4GQtr5FLxiqKRQLcCNb_hk";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] font-sans antialiased overflow-x-hidden">

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-[30px] border-b border-black/5 shadow-sm h-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-[#004ac6] material-symbols-outlined">blur_on</span>
            <span className="text-2xl font-extrabold tracking-tight text-[#004ac6]">Soloops AI</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#131b2e] font-semibold border-b-2 border-[#004ac6] pb-0.5" href="#">Home</a>
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#">Features</a>
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#">Pricing</a>
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[#434655] font-semibold hover:text-[#004ac6] transition-colors">Sign In</button>
            <button className="bg-[#004ac6] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Get Started</button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#004ac6]/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#00569c]/10 rounded-full blur-[100px] animate-pulse-glow-slow" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#004ac6]/10 border border-[#004ac6]/20 px-4 py-1.5 rounded-full mb-6 animate-bounce-slow">
            <span className="text-[#004ac6] material-symbols-outlined text-lg">auto_awesome</span>
            <span className="text-[#004ac6] text-xs font-bold uppercase tracking-widest">New v2.0 Release</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold max-w-4xl mx-auto mb-6 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-[#004ac6] to-[#00569c] bg-clip-text text-transparent">Intelligence</span> that works as fast as you think.
          </h1>
          <p className="text-[#434655] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Soloops AI orchestrates your enterprise workflow with generative precision. Automate complex data streams and unlock insights in real-time.
          </p>
          <div className="relative mt-4">
            <div className="mx-auto max-w-5xl skew-dashboard animate-float shadow-2xl rounded-xl overflow-hidden glass-border">
              <img alt="Soloops AI Dashboard" className="w-full h-auto object-cover" src={IMG} />
            </div>
            <div className="absolute -top-6 left-4 md:left-20 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3 glass-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 bg-[#004ac6]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#004ac6] material-symbols-outlined">insights</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-[#434655] font-bold uppercase tracking-tighter">Growth</div>
                <div className="text-lg font-bold text-[#004ac6]">+124%</div>
              </div>
            </div>
            <div className="absolute bottom-8 -right-4 md:right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3 glass-border animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-10 h-10 bg-[#00569c]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00569c] material-symbols-outlined">psychology</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-[#434655] font-bold uppercase tracking-tighter">AI Pulse</div>
                <div className="text-lg font-bold text-[#00569c]">Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-[#c3c6d7]/20 bg-[#f2f3ff]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-[#434655] text-sm mb-10 uppercase tracking-[0.2em] font-semibold">Trusted by World-Class Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
            {["VELOCITY","NOVACORE","SYNTHEX","AETHER","LUMEN"].map((n) => (
              <span key={n} className="text-2xl font-black tracking-tight text-[#131b2e]">{n}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "block", title: "Fragmented Data", desc: "Stop wasting hours switching between siloed platforms. Soloops unifies every stream into a single luminous view.", color: "#004ac6" },
              { icon: "speed", title: "Cognitive Fatigue", desc: "Your team is overwhelmed by repetitive tasks. Our AI agents handle the heavy lifting so you can focus on strategy.", color: "#00569c" },
              { icon: "crisis_alert", title: "Delayed Insights", desc: "The market moves faster than your reports. Get instant, predictive alerts before trends become history.", color: "#2563eb" },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white/75 backdrop-blur-md border border-white/40 rounded-2xl shadow-md border-l-4" style={{ borderLeftColor: item.color }}>
                <span className="text-4xl mb-4 block material-symbols-outlined" style={{ color: item.color }}>{item.icon}</span>
                <h3 className="text-2xl font-bold mb-2 text-[#131b2e]">{item.title}</h3>
                <p className="text-[#434655]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f3ff]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#131b2e]">Supercharge Productivity</h2>
            <p className="text-[#434655] max-w-xl mx-auto">The enterprise tools of tomorrow, built for the workflows of today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className={["group p-6 bg-white/75 backdrop-blur-md border border-white/40 rounded-3xl shadow-md transition-all hover:-translate-y-1 hover:border-[#004ac6]/30", f.wide ? " md:col-span-2" : ""].join(" ")}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={f.color === "tertiary" ? { backgroundColor: "rgba(0,86,156,0.1)" } : { backgroundColor: "rgba(0,74,198,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: f.color === "tertiary" ? "#00569c" : "#004ac6" }}>{f.icon}</span>
                </div>
                <h4 className="text-lg font-bold mb-1 text-[#131b2e]">{f.title}</h4>
                <p className="text-sm text-[#434655]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#131b2e]">Simple Setup, Infinite Scale</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#004ac6]/10 via-[#004ac6]/40 to-[#004ac6]/10 -translate-y-1/2 -z-10" />
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Connect Stack", desc: "One-click auth for your favorite enterprise software and databases." },
                { num: "02", title: "Train Model", desc: "Soloops analyzes your unique business logic and historical data." },
                { num: "03", title: "Deploy Insights", desc: "Auto-generated workflows and dashboards go live across your org." },
              ].map((step) => (
                <div key={step.num} className="text-center group">
                  <div className="w-16 h-16 bg-white shadow-xl rounded-full mx-auto flex items-center justify-center mb-4 border-4 border-[#f2f3ff] transition-all group-hover:border-[#004ac6]">
                    <span className="text-xl font-bold text-[#004ac6]">{step.num}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-[#131b2e]">{step.title}</h4>
                  <p className="text-[#434655]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#131b2e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Deep Visual Analytics</h2>
              <p className="text-[#a4c9ff] text-lg mb-6">Experience the next generation of data visualization. Our interface adapts to your mental model.</p>
              <ul className="space-y-4">
                {["Dynamic responsive layouts for all devices", "Real-time collaborative workspace", "Natural language query support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="text-[#60a5fa] material-symbols-outlined text-xl">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img alt="Dashboard Detail View" className="w-full transform group-hover:scale-105 transition-transform duration-700" src={IMG} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#131b2e]">Loved by Innovators</h2>
            <p className="text-[#434655]">Hear from the teams leading the AI revolution.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 bg-white/75 backdrop-blur-md border border-white/40 rounded-3xl shadow-md">
                <div className="flex gap-1 text-[#004ac6] mb-4">
                  {[1,2,3,4,5].map((i) => <span key={i} className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                </div>
                <p className="text-[#131b2e] italic mb-6 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#004ac6]/20 flex items-center justify-center text-[#004ac6] font-bold text-lg">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-[#131b2e]">{t.name}</div>
                    <div className="text-sm text-[#434655]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f2f3ff]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#131b2e]">Flexible Plans for Growing Teams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={"p-8 bg-white/75 backdrop-blur-md border border-white/40 rounded-3xl shadow-md flex flex-col " + (plan.featured ? "border-2 border-[#004ac6] scale-[1.02] relative z-10 shadow-xl" : "")}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#004ac6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</div>
                )}
                <h3 className={"font-bold text-xl mb-2 " + (plan.featured ? "text-[#004ac6]" : "text-[#131b2e]")}>{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#131b2e]">{plan.price}</span>
                  {plan.period && <span className="text-[#434655]">{plan.period}</span>}
                </div>
                <p className="text-[#434655] text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#434655]">
                      <span className="text-[#004ac6] material-symbols-outlined text-sm">done</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={"w-full py-3 rounded-xl font-bold transition-all " + (plan.featured ? "bg-[#004ac6] text-white shadow-lg shadow-[#004ac6]/20 hover:scale-[1.02]" : "border border-[#004ac6] text-[#004ac6] hover:bg-[#004ac6]/5")}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#004ac6] via-[#2563eb] to-[#00569c] rounded-[2.5rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to illuminate your business?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">Join over 10,000 teams using Soloops AI to redefine what&apos;s possible in their industry.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[#004ac6] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#dbe1ff] transition-all">Start 14-Day Free Trial</button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">Request Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-[#c3c6d7]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl text-[#004ac6] material-symbols-outlined">blur_on</span>
                <span className="text-2xl font-extrabold text-[#004ac6]">Soloops AI</span>
              </div>
              <p className="text-[#434655] text-sm leading-relaxed">Building the future of artificial intelligence through luminous interface design and powerful predictive engines.</p>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {[
                { title: "Product", links: ["Features", "Integrations", "Security"] },
                { title: "Resources", links: ["Documentation", "API Reference", "Community"] },
                { title: "Company", links: ["Privacy", "Terms", "Contact"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="font-bold mb-4 text-[#131b2e]">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}><a className="text-[#434655] text-sm hover:text-[#004ac6] transition-colors" href="#">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#c3c6d7]/10 gap-4">
            <p className="text-[#434655] text-sm">© 2024 Soloops AI. Built for the future of intelligence.</p>
            <div className="flex gap-4">
              {["language", "hub", "public"].map((icon) => (
                <a key={icon} className="text-[#434655] hover:text-[#004ac6] transition-all material-symbols-outlined" href="#">{icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
