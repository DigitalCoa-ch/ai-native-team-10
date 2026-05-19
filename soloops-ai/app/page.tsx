import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "SoloFlow AI | Automate the Chaos. Reclaim Your Time.", description: "The all-in-one AI assistant built for solo entrepreneurs, freelancers, coaches, and consultants." };

const painPoints = [
  { icon: "schedule", title: "Hours Lost to Scheduling", desc: "Back-and-forth emails eating up your day just to find a meeting time that works.", stat: "14 hrs/week" },
  { icon: "mark_email_unread", title: "Forgotten Follow-ups", desc: "Leads go cold because you cannot track every conversation and reminder.", stat: "40% revenue leak" },
  { icon: "receipt_long", title: "Invoicing Drag", desc: "Creating invoices, chasing payments, and managing finances eats into actual billable work.", stat: "5+ hrs/week" },
  { icon: "task_alt", title: "Scattered Tasks", desc: "Notes in Notion, reminders in phone, ideas in Slack - nothing talks to each other.", stat: "3+ tools avg" },
];

const features = [
  { icon: "calendar_month", title: "Smart Scheduling", desc: "Share your link. Clients book instantly. Auto time-zone detection. Reminders sent automatically.", highlight: "Book 3x more calls" },
  { icon: "auto_awesome", title: "AI Follow-up Engine", desc: "Never miss a lead. Auto-generate personalized follow-up emails and WhatsApp messages at the right moment.", highlight: "2x response rate" },
  { icon: "description", title: "Instant Invoicing", desc: "Generate professional invoices in seconds. Accept online payments. Get paid faster with automated reminders.", highlight: "Get paid 60% faster" },
  { icon: "inbox", title: "Unified Inbox", desc: "Every email, WhatsApp, and message in one place. AI drafts replies. You approve. Done.", highlight: "Zero context switching" },
  { icon: "notifications_active", title: "Smart Reminders", desc: "Context-aware reminders that know your schedule, your clients, and your priorities - without you configuring anything.", highlight: "95% task completion" },
  { icon: "analytics", title: "Revenue Insights", desc: "See where your time is actually going. Track billable hours, project profit, and growth trends in one view.", highlight: "Know your numbers" },
];

const testimonials = [
  { quote: "I went from 20 hours a week on admin work to maybe 3. SoloFlow basically runs my operations now.", name: "Priya Sharma", role: "Brand Strategist and Coach" },
  { quote: "The AI follow-up feature alone has brought me 12k in renewed contracts this quarter. Its ridiculous.", name: "Marcus Webb", role: "Freelance UX Designer" },
  { quote: "I used to miss half my follow-ups. Now my conversion rate is through the roof because nothing falls through.", name: "Elena Torres", role: "Executive Coach" },
];

const plans = [
  { name: "Starter", price: "/usr/bin/sh", period: "forever", desc: "For solopreneurs just getting started.", features: ["5 Clients", "20 Invoices/mo", "Basic Scheduling", "Email Support"], cta: "Start Free", featured: false },
  { name: "Pro", price: "9", period: "/month", desc: "For established coaches and consultants.", features: ["Unlimited Clients", "Unlimited Invoices", "AI Follow-up Engine", "Unified Inbox", "Smart Reminders", "Priority Support"], cta: "Start 14-Day Trial", featured: true },
  { name: "Scale", price: "9", period: "/month", desc: "For serious operators ready to systematize.", features: ["Everything in Pro", "Revenue Analytics", "Custom Workflows", "White-glove Onboarding", "Dedicated Account Manager"], cta: "Talk to Us", featured: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] font-sans antialiased overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-[30px] border-b border-black/5 shadow-sm h-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-[#004ac6] material-symbols-outlined">blur_on</span>
            <span className="text-2xl font-extrabold tracking-tight text-[#004ac6]">SoloFlow AI</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#features">Features</a>
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#pricing">Pricing</a>
            <a className="text-[#434655] font-semibold hover:text-[#004ac6] transition-colors pb-0.5" href="#testimonials">Testimonials</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[#434655] font-semibold hover:text-[#004ac6] transition-colors">Sign In</button>
            <button className="bg-[#004ac6] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Get Started Free</button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#004ac6]/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#00569c]/10 rounded-full blur-[100px] animate-pulse-glow-slow" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#004ac6]/10 border border-[#004ac6]/20 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#004ac6] material-symbols-outlined text-lg">auto_awesome</span>
            <span className="text-[#004ac6] text-xs font-bold uppercase tracking-widest">Built for One Person Operations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold max-w-4xl mx-auto mb-6 leading-[1.1] tracking-tight">
            Automate the chaos.<br />
            <span className="bg-gradient-to-r from-[#004ac6] to-[#00569c] bg-clip-text text-transparent">Reclaim your time.</span>
          </h1>
          <p className="text-[#434655] text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            You did not start a business to manage spreadsheets, send reminder emails, and chase invoice payments. SoloFlow AI handles all the repetitive operational work - so you can focus on the work only you can do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-[#004ac6] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#004ac6]/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">Start Free - No Credit Card</button>
            <button className="bg-white border-2 border-[#004ac6] text-[#004ac6] px-10 py-4 rounded-full font-bold hover:bg-[#004ac6]/5 transition-all">Watch 2-Min Demo</button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#434655]">
            {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-[#004ac6] material-symbols-outlined text-lg">check_circle</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-y border-[#c3c6d7]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#004ac6] text-sm font-bold uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131b2e]">You are losing 20+ hours a week to work that does not scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="p-6 bg-[#faf8ff] border border-[#c3c6d7]/20 rounded-2xl">
                <span className="text-3xl mb-4 block material-symbols-outlined text-[#004ac6]">{p.icon}</span>
                <div className="text-2xl font-extrabold text-[#004ac6] mb-1">{p.stat}</div>
                <h3 className="text-lg font-bold text-[#131b2e] mb-2">{p.title}</h3>
                <p className="text-sm text-[#434655]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-[#f2f3ff]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#004ac6] text-sm font-bold uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131b2e] mb-3">Everything you need to run your business - in one place</h2>
            <p className="text-[#434655] max-w-xl mx-auto">No more juggling 5 different apps. SoloFlow replaces scheduling tools, CRM, invoicing, and reminders with one AI-powered system built for solo operators.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#004ac6]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl material-symbols-outlined text-[#004ac6]">{f.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#131b2e]">{f.title}</h4>
                <p className="text-[#434655] mb-4 text-sm leading-relaxed">{f.desc}</p>
                <div className="inline-flex items-center gap-1.5 bg-[#004ac6]/10 text-[#004ac6] text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {f.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#131b2e]">Up and running in 5 minutes</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#004ac6]/10 via-[#004ac6]/40 to-[#004ac6]/10 -translate-y-1/2 -z-10" />
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Connect Your Tools", desc: "Link your calendar, email, WhatsApp, and Stripe in one click. No coding. No configuration headaches.", icon: "link" },
                { num: "02", title: "AI Learns Your Workflow", desc: "SoloFlow analyzes how you work - your clients, your pricing, your availability - and builds your personalized ops system.", icon: "psychology" },
                { num: "03", title: "Run Your Business on Auto", desc: "Reminders fire. Invoices go out. Follow-ups send. You stay in control but stop doing the busywork.", icon: "rocket_launch" },
              ].map((step) => (
                <div key={step.num} className="text-center group">
                  <div className="w-16 h-16 bg-white shadow-xl rounded-full mx-auto flex items-center justify-center mb-5 border-4 border-[#f2f3ff] transition-all group-hover:border-[#004ac6]">
                    <span className="text-2xl material-symbols-outlined text-[#004ac6]">{step.icon}</span>
                  </div>
                  <div className="text-4xl font-extrabold text-[#004ac6]/20 mb-2">{step.num}</div>
                  <h4 className="text-xl font-bold mb-2 text-[#131b2e]">{step.title}</h4>
                  <p className="text-[#434655]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#131b2e] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#60a5fa] text-sm font-bold uppercase tracking-widest mb-3">Who It is For</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Built for the solo operator</h2>
              <p className="text-white/70 text-lg mb-6">You do not have an operations team. You do not have a VA. You have yourself - and that is exactly who SoloFlow is designed for.</p>
              <ul className="space-y-3">
                {["Coaches and consultants managing their own clients", "Freelancers juggling multiple projects and deadlines", "Creators monetizing their audience without a team", "Agency owners of one running everything solo"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <span className="text-[#60a5fa] material-symbols-outlined text-xl mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#004ac6]/20 to-[#00569c]/20 rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-white">20+</span>
                <div className="text-white/60 text-sm font-bold uppercase tracking-widest mt-1">Hours saved per week</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Scheduling", value: "100%" },
                  { label: "Follow-up Rate", value: "3x" },
                  { label: "Invoice Collection", value: "+60%" },
                  { label: "Task Completion", value: "95%" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-white/50 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#004ac6] text-sm font-bold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131b2e]">Loved by solo operators</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-md">
                <p className="text-[#131b2e] italic mb-6 text-base leading-relaxed">"{t.quote}"</p>
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
      <section id="pricing" className="py-20 bg-[#f2f3ff]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-[#004ac6] text-sm font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#131b2e]">Simple plans. No surprises.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={"p-8 bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-md flex flex-col " + (plan.featured ? "border-2 border-[#004ac6] scale-[1.02] relative z-10 shadow-xl" : "")}>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to reclaim your time?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">Join thousands of solo operators who stopped drowning in operational work and started focusing on what only they can do.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[#004ac6] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#dbe1ff] transition-all">Start 14-Day Free Trial</button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">Talk to Sales</button>
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
                <span className="text-2xl font-extrabold text-[#004ac6]">SoloFlow AI</span>
              </div>
              <p className="text-[#434655] text-sm leading-relaxed">The all-in-one AI assistant for solo entrepreneurs. Automate the chaos. Reclaim your time.</p>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {[
                { title: "Product", links: ["Features", "Pricing", "Integrations"] },
                { title: "Resources", links: ["Documentation", "Blog", "FAQ"] },
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
            <p className="text-[#434655] text-sm">(c) 2024 SoloFlow AI. Built for the solo operator.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}