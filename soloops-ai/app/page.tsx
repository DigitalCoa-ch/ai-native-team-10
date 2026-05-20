'use client';
import { useState } from 'react';
import './globals.css';

const AUDIENCE = [
  { label: 'Solo Entrepreneurs' }, { label: 'Freelancers' },
  { label: 'Coaches' }, { label: 'Consultants' },
  { label: 'Creators' }, { label: 'One-Person Biz' },
];

const PAIN_POINTS = [
  { stat: '14 hrs/wk', title: 'Lost to Scheduling', desc: 'Endless back-and-forth emails just to find a meeting time.' },
  { stat: '40%', title: 'Revenue Left on Table', desc: 'Missed follow-ups mean cold leads and lost contracts.' },
  { stat: '5+ hrs/wk', title: 'Wasted on Invoicing', desc: 'Creating invoices, chasing payments, managing finances.' },
  { stat: '3+ tools', title: 'Fragmented Stack', desc: 'Notes in Notion, reminders in phone, Gmail -- nothing connects.' },
];

const FEATURES = [
  { icon: 'Smart Scheduling', desc: 'Clients book instantly. Auto time-zone. Reminders fire automatically.', badge: '3x more meetings' },
  { icon: 'Autonomous Follow-ups', desc: 'AI crafts personalized follow-ups at the perfect moment.', badge: '2x response rate' },
  { icon: 'Instant Invoicing', desc: 'Generate invoices in seconds. Auto-chase overdue payments.', badge: '60% faster payment' },
  { icon: 'Unified Client Comms', desc: 'Email, WhatsApp, SMS in one thread. AI drafts. You approve.', badge: 'Zero context switching' },
  { icon: 'Micro-Task Orchestration', desc: 'Break big goals into steps. AI tracks and nudges you.', badge: '95% task completion' },
  { icon: 'Smart Reminders', desc: 'Context-aware. Knows your schedule, clients, and priorities.', badge: 'Never miss anything' },
  { icon: 'Revenue Insights', desc: 'Track billable hours, profit margins, and growth trends.', badge: 'Know your numbers' },
  { icon: 'AI Summaries', desc: 'Instant AI summaries of client conversations and next steps.', badge: 'Save 2 hrs/day' },
];

const HOW_STEPS = [
  { num: '01', title: 'Connect Your Tools', desc: 'Link calendar, email, WhatsApp, and Stripe in one click. No coding.' },
  { num: '02', title: 'AI Learns Your Workflow', desc: 'SoloOps analyzes how you work -- clients, pricing, availability -- and builds your ops system.' },
  { num: '03', title: 'Run on Auto-Pilot', desc: 'Follow-ups send. Invoices go out. Reminders fire. You stay in control.' },
];

const BUSINESS_TYPES = ['Freelancer', 'Coach', 'Consultant', 'Creator', 'E-commerce Seller', 'Agency Owner', 'Other'];

function generatePlan(form: any) {
  const schedule = {
    Monday: { theme: 'Client Meetings & Discovery', color: '#3b82f6', slots: [
      { time: '8:00 AM', type: 'deep', task: 'Deep work block -- proposal writing', dur: '3h', color: '#8b5cf6' },
      { time: '11:00 AM', type: 'call', task: 'Discovery call with new lead', dur: '1h', color: '#3b82f6' },
      { time: '2:00 PM', type: 'admin', task: 'Invoice follow-ups & payment tracking', dur: '1h', color: '#3bf5d4' },
      { time: '4:00 PM', type: 'call', task: 'Onboarding session -- new client', dur: '1h', color: '#3b82f6' },
    ] },
    Tuesday: { theme: 'Content & Marketing', color: '#8b5cf6', slots: [
      { time: '8:00 AM', type: 'deep', task: 'Create weekly content batch', dur: '2h', color: '#8b5cf6' },
      { time: '10:30 AM', type: 'admin', task: 'Process client emails & WhatsApp messages', dur: '1h', color: '#3bf5d4' },
      { time: '2:00 PM', type: 'deep', task: 'Launch email sequence or newsletter', dur: '2h', color: '#8b5cf6' },
      { time: '5:00 PM', type: 'review', task: 'Weekly analytics review', dur: '30m', color: '#f59e0b' },
    ] },
    Wednesday: { theme: 'Operations & Admin', color: '#3bf5d4', slots: [
      { time: '8:00 AM', type: 'deep', task: 'Financial review -- invoices & expenses', dur: '1.5h', color: '#3bf5d4' },
      { time: '10:00 AM', type: 'call', task: 'Strategy session with mentor', dur: '1h', color: '#3b82f6' },
      { time: '2:00 PM', type: 'admin', task: 'CRM updates & client notes', dur: '1h', color: '#3bf5d4' },
      { time: '4:00 PM', type: 'call', task: 'Sales follow-up calls', dur: '1h', color: '#3b82f6' },
    ] },
    Thursday: { theme: 'Client Delivery', color: '#f59e0b', slots: [
      { time: '8:00 AM', type: 'deep', task: 'Client work -- deliverable prep', dur: '3h', color: '#8b5cf6' },
      { time: '1:00 PM', type: 'call', task: 'Client feedback session', dur: '1h', color: '#3b82f6' },
      { time: '3:00 PM', type: 'admin', task: 'Send deliverables & follow-up emails', dur: '1h', color: '#3bf5d4' },
      { time: '5:00 PM', type: 'review', task: 'Productivity journal', dur: '30m', color: '#f59e0b' },
    ] },
    Friday: { theme: 'Review & Growth Planning', color: '#22c55e', slots: [
      { time: '8:00 AM', type: 'deep', task: 'Weekly review & next week planning', dur: '2h', color: '#22c55e' },
      { time: '10:30 AM', type: 'admin', task: 'Process all outstanding invoices', dur: '1h', color: '#3bf5d4' },
      { time: '2:00 PM', type: 'call', task: 'Networking call or partnership meeting', dur: '1h', color: '#3b82f6' },
      { time: '4:00 PM', type: 'review', task: 'Celebrate wins -- monthly metrics review', dur: '1h', color: '#22c55e' },
    ] },
    Saturday: { theme: 'Light Admin & Planning', color: '#6b6c80', slots: [
      { time: '9:00 AM', type: 'review', task: 'Week preview & priority setting', dur: '1h', color: '#f59e0b' },
      { time: '11:00 AM', type: 'deep', task: 'Work on passive income asset', dur: '2h', color: '#8b5cf6' },
      { time: '3:00 PM', type: 'admin', task: 'Clear inbox zero', dur: '1h', color: '#3bf5d4' },
    ] },
    Sunday: { theme: 'Rest & Strategic Thinking', color: '#6b6c80', slots: [
      { time: '10:00 AM', type: 'review', task: 'Monthly goal check-in', dur: '1h', color: '#f59e0b' },
      { time: '2:00 PM', type: 'deep', task: 'Learn -- course or book reading', dur: '2h', color: '#8b5cf6' },
    ] },
  };
  const insights = [
    { label: 'Focus Time', value: '18.5 hrs', color: '#3b82f6', bar: 75 },
    { label: 'Client Calls', value: '6 hrs', color: '#8b5cf6', bar: 55 },
    { label: 'Admin Time', value: '5.5 hrs', color: '#3bf5d4', bar: 40 },
    { label: 'Win Rate Target', value: '35%', color: '#f59e0b', bar: 35 },
  ];
  const taskGroups = [
    { cat: 'Follow-ups', items: ['Email Sarah -- proposal follow-up', 'WA message to Marcus -- contract renewal', 'Follow up with 3 warm leads'], color: '#3b82f6' },
    { cat: 'Invoicing', items: ['Invoice #0483 -- Sarah design work', 'Chase invoice #0479 -- overdue 7 days', 'Review monthly revenue report'], color: '#3bf5d4' },
    { cat: 'Client Work', items: ['Complete brand kit for Elena', 'Review brief from new client John', 'Final delivery -- Motion project'], color: '#8b5cf6' },
  ];
  const reminders = [
    { time: 'Today 9am', text: 'Discovery call with Marcus -- Zoom', type: 'call' },
    { time: 'Today 2pm', text: 'Invoice #0482 payment due -- follow up', type: 'invoice' },
    { time: 'Tomorrow 10am', text: 'Submit proposal for brand project', type: 'task' },
    { time: 'Thu 11am', text: 'Strategy session with Sarah', type: 'call' },
  ];
  return { schedule, insights, taskGroups, reminders };
}

export default function Home() {
  const [showPlan, setShowPlan] = useState(false);
  const [planData, setPlanData] = useState<any>(null);
  const [form, setForm] = useState({ businessType: '', weeklyGoal: '', tasks: '', priority: 'Medium' });
  const [activeDay, setActiveDay] = useState('Monday');
  const [submitting, setSubmitting] = useState(false);

  function handleGenerate(e: any) {
    e.preventDefault();
    if (!form.businessType || !form.weeklyGoal) return;
    setSubmitting(true);
    setTimeout(() => {
      setPlanData({ ...form, ...generatePlan(form) });
      setShowPlan(true);
      setSubmitting(false);
      setActiveDay('Monday');
    }, 1800);
  }

  return (
    <div className="min-h-screen bg-[#090910] text-[#e8e9f0] font-sans antialiased overflow-x-hidden">

      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-tight">Solo<span className="text-[#3bf5d4]">Ops</span> <span className="text-xs font-semibold text-[#3b82f6] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded">AI</span></span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#6b6c80]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How It Works</a>
            <a href="#planner" className="hover:text-white transition-colors">AI Planner</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <a href="#planner" className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Try Free
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full text-xs font-semibold text-[#3b82f6] mb-6">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" /> AI Operations Agent for Solo Entrepreneurs
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Run Your Business.<br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3bf5d4] bg-clip-text text-transparent">Not the Chaos.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8b8faa] max-w-2xl mx-auto mb-10">
            SoloOps AI is your AI-powered micro-operations agent. It handles scheduling, follow-ups, invoicing, and client comms -- so you can focus on the work that pays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#planner" className="px-8 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/30 text-base">
              Launch Your AI Planner
            </a>
            <a href="#how" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#e8e9f0] font-semibold rounded-xl transition-all text-base">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold text-[#6b6c80] uppercase tracking-widest mb-10">Built For</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {AUDIENCE.map((a) => (
              <div key={a.label} className="glass-dark rounded-xl p-4 text-center border border-white/5 hover:border-[#3b82f6]/30 transition-all group cursor-default">
                <div className="text-2xl mb-2">{a.label.charAt(0)}</div>
                <div className="text-xs font-semibold text-[#8b8faa] group-hover:text-white transition-colors">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Running Solo Means Doing Everything</h2>
            <p className="text-[#6b6c80] max-w-xl mx-auto">You did not start your business to become a part-time accountant, scheduling assistant, and chasing department.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="glass-dark rounded-xl p-5 border border-white/5">
                <div className="text-xl font-black text-[#f59e0b] mb-1">{p.stat}</div>
                <div className="text-sm font-bold text-white mb-1">{p.title}</div>
                <div className="text-xs text-[#6b6c80]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-dark rounded-2xl p-6 border border-white/5">
              <div className="text-sm font-bold text-[#f59e0b] uppercase tracking-widest mb-4">Before SoloOps AI</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#6b6c80]">
                  <span className="text-[#f59e0b] mt-1">X</span> Manually chasing clients for follow-ups
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6b6c80]">
                  <span className="text-[#f59e0b] mt-1">X</span> Wasting hours on invoicing and chasing payments
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6b6c80]">
                  <span className="text-[#f59e0b] mt-1">X</span> Losing leads because follow-ups slip through
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6b6c80]">
                  <span className="text-[#f59e0b] mt-1">X</span> Juggling 5+ tools that do not talk to each other
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6b6c80]">
                  <span className="text-[#f59e0b] mt-1">X</span> Endless context switching between apps
                </li>
              </ul>
            </div>
            <div className="glass-dark rounded-2xl p-6 border border-[#3bf5d4]/20">
              <div className="text-sm font-bold text-[#3bf5d4] uppercase tracking-widest mb-4">With SoloOps AI</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#8b8faa]">
                  <span className="text-[#3bf5d4] mt-1">check</span> AI sends personalized follow-ups automatically
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8b8faa]">
                  <span className="text-[#3bf5d4] mt-1">check</span> Invoices generated and chased with one click
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8b8faa]">
                  <span className="text-[#3bf5d4] mt-1">check</span> Every lead gets a perfectly-timed follow-up
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8b8faa]">
                  <span className="text-[#3bf5d4] mt-1">check</span> One dashboard for your entire business ops
                </li>
                <li className="flex items-start gap-3 text-sm text-[#8b8faa]">
                  <span className="text-[#3bf5d4] mt-1">check</span> AI handles the admin so you can do the work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#3b82f6] uppercase tracking-widest mb-3">Why AI</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">AI-Native Operations, Built for Solo</h2>
            <p className="text-[#6b6c80] max-w-xl mx-auto">Traditional tools help you manage chaos. SoloOps AI eliminates it by running your operations autonomously.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div key={f.icon} className="glass-dark rounded-xl p-5 border border-white/5 hover:border-[#3b82f6]/30 transition-all">
                <div className="text-lg font-bold text-white mb-2">{f.icon}</div>
                <div className="text-sm text-[#8b8faa] mb-3">{f.desc}</div>
                <span className="inline-block px-2 py-0.5 bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-semibold rounded">{f.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#8b5cf6] uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Up and Running in Minutes</h2>
          </div>
          <div className="space-y-6">
            {HOW_STEPS.map((step) => (
              <div key={step.num} className="flex items-start gap-6 glass-dark rounded-xl p-6 border border-white/5">
                <div className="text-3xl font-black text-[#8b5cf6] shrink-0">{step.num}</div>
                <div>
                  <div className="text-lg font-bold text-white mb-1">{step.title}</div>
                  <div className="text-sm text-[#6b6c80]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planner" className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#3bf5d4] uppercase tracking-widest mb-3">AI Operations Planner</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Build Your 7-Day Ops Plan in Seconds</h2>
            <p className="text-[#6b6c80] max-w-lg mx-auto">Tell us about your business and goals. Our AI will generate a personalized weekly operations plan tailored to your workflow.</p>
          </div>

          {!showPlan ? (
            <form onSubmit={handleGenerate} className="glass-dark rounded-2xl p-6 md:p-8 border border-white/5 space-y-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-[#e8e9f0] mb-2">Business Type</label>
                <select
                  className="w-full bg-[#0d0d1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#e8e9f0] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  value={form.businessType}
                  onChange={(e) => setForm({ ...form, businessType: e.target.value })}>
                  <option value="">Select your business type...</option>
                  {BUSINESS_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#e8e9f0] mb-2">Weekly Primary Goal</label>
                <input
                  type="text"
                  placeholder="e.g. Land 3 new clients, launch product, hit 10k revenue"
                  className="w-full bg-[#0d0d1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#e8e9f0] placeholder-[#6b6c80] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  value={form.weeklyGoal}
                  onChange={(e) => setForm({ ...form, weeklyGoal: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#e8e9f0] mb-2">Key Tasks This Week</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Send proposal to Sarah, follow up with Marcus, create invoice for Elena"
                  className="w-full bg-[#0d0d1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#e8e9f0] placeholder-[#6b6c80] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                  value={form.tasks}
                  onChange={(e) => setForm({ ...form, tasks: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#e8e9f0] mb-2">Priority Focus</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Revenue', 'Clients', 'Admin'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setForm({ ...form, priority: p })}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${form.priority === p ? 'bg-[#3b82f6] border-[#3b82f6] text-white' : 'bg-[#0d0d1a] border-white/10 text-[#6b6c80] hover:border-white/20'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/30 text-base">
                {submitting ? 'Generating Your Plan...' : 'Generate My AI Operations Plan'}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 md:p-8 border border-[#3b82f6]/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-black text-white">AI Operations Dashboard</h3>
                    <p className="text-sm text-[#6b6c80]">Your personalized 7-day plan for <span className="text-[#3bf5d4]">{planData?.businessType}</span></p>
                  </div>
                  <button
                    onClick={() => { setShowPlan(false); setPlanData(null); setForm({ businessType: '', weeklyGoal: '', tasks: '', priority: 'Medium' }); }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#6b6c80] hover:text-white text-sm font-semibold rounded-lg transition-all">
                    Start Over
                  </button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                  {Object.keys(planData.schedule).map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${activeDay === day ? 'bg-[#3b82f6] text-white' : 'bg-[#0d0d1a] text-[#6b6c80] hover:text-white border border-white/10'}`}>
                      {day}
                    </button>
                  ))}
                </div>

                {planData && planData.schedule[activeDay] && (
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: planData.schedule[activeDay].color }} />
                      <span className="text-sm font-bold text-white">{planData.schedule[activeDay].theme}</span>
                    </div>
                    <div className="space-y-3">
                      {planData.schedule[activeDay].slots.map((slot: any, i: number) => (
                        <div key={i} className="flex items-center gap-4 bg-[#0d0d1a] rounded-lg p-4 border border-white/5">
                          <div className="text-xs font-semibold text-[#6b6c80] w-16 shrink-0">{slot.time}</div>
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: slot.color }} />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-white">{slot.task}</div>
                            <div className="text-xs text-[#6b6c80]">{slot.dur}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white mb-3">Weekly Allocation</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {planData.insights.map((ins: any) => (
                      <div key={ins.label} className="bg-[#0d0d1a] rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-[#6b6c80] mb-1">{ins.label}</div>
                        <div className="text-lg font-black text-white mb-2">{ins.value}</div>
                        <div className="h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: ins.bar + '%', backgroundColor: ins.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white mb-3">Priority Task Groups</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {planData.taskGroups.map((g: any) => (
                      <div key={g.cat} className="bg-[#0d0d1a] rounded-lg p-4 border border-white/5">
                        <div className="text-sm font-bold mb-2" style={{ color: g.color }}>{g.cat}</div>
                        <ul className="space-y-1">
                          {g.items.map((item: string, i: number) => (
                            <li key={i} className="text-xs text-[#6b6c80]">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Upcoming Reminders</h4>
                  <div className="space-y-2">
                    {planData.reminders.map((r: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 bg-[#0d0d1a] rounded-lg px-4 py-3 border border-white/5">
                        <div className="text-xs font-semibold text-[#6b6c80] w-24 shrink-0">{r.time}</div>
                        <div className="text-sm text-[#8b8faa]">{r.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-widest mb-3">The Oxygen Test</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Your Business Should Breathe</h2>
            <p className="text-[#6b6c80] max-w-lg mx-auto">Every feature SoloOps AI builds must do at least one of three things: save you time, make you money, or reduce your stress. If it does not, we cut it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: 'time', title: 'Save 14+ hrs/week', desc: 'Automate scheduling, invoicing, and follow-ups.' },
              { icon: 'money', title: 'Recover 40% more revenue', desc: 'Never miss a follow-up or forget to chase an invoice.' },
              { icon: 'calm', title: 'Reduce cognitive load', desc: 'One dashboard instead of 5 scattered tools.' },
            ].map((o) => (
              <div key={o.title} className="glass-dark rounded-xl p-6 border border-white/5 text-center">
                <div className="text-3xl mb-3">{o.icon === 'time' ? 'TIME' : o.icon === 'money' ? 'MONEY' : 'CALM'}</div>
                <div className="text-lg font-black text-white mb-1">{o.title}</div>
                <div className="text-sm text-[#6b6c80]">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#8b5cf6] uppercase tracking-widest mb-3">Our Blueprint</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">The SoloOps AI PERCH Framework</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { letter: 'P', title: 'Problem', color: '#f59e0b', desc: 'Solo founders lose 14+ hrs/week to ops tasks that do not pay them.' },
              { letter: 'E', title: 'Evidence', color: '#3b82f6', desc: 'Calendly, Mixmax, and HoneyBooks prove automated ops is a $2B+ market.' },
              { letter: 'R', title: 'Risks', color: '#f59e0b', desc: 'Users may not trust AI recommendations. Integrations may fail.' },
            ].map((p) => (
              <div key={p.letter} className="glass-dark rounded-xl p-6 border border-white/5">
                <div className="text-2xl font-black mb-2" style={{ color: p.color }}>{p.letter}</div>
                <div className="text-sm font-bold text-white mb-2">{p.title}</div>
                <div className="text-xs text-[#6b6c80]">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { letter: 'C', title: 'Captain (Founder)', color: '#3bf5d4', desc: 'SoloOps is built for one person: you. Your time is the scarce resource.' },
              { letter: 'H', title: 'How We Win', color: '#8b5cf6', desc: 'First-mover in AI-native solo-ops. Aggregates all client comms into one AI-powered thread.' },
            ].map((p) => (
              <div key={p.letter} className="glass-dark rounded-xl p-6 border border-white/5">
                <div className="text-2xl font-black mb-2" style={{ color: p.color }}>{p.letter}</div>
                <div className="text-sm font-bold text-white mb-2">{p.title}</div>
                <div className="text-xs text-[#6b6c80]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#3b82f6] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[#6b6c80] max-w-lg mx-auto">No seat minimums. No per-feature add-ons. One plan that covers everything a solo founder needs.</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="glass-dark rounded-2xl p-8 border border-[#3b82f6]/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3b82f6] rounded-full text-xs font-bold text-white">Early Access</div>
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-1">$29<span className="text-lg text-[#6b6c80] font-normal">/mo</span></div>
                <div className="text-sm text-[#6b6c80] mb-6">Solo Plan -- everything you need</div>
                <ul className="space-y-3 text-sm text-[#8b8faa] text-left mb-8">
                  {['Unlimited AI-powered operations', 'Smart scheduling & calendar sync', 'Autonomous follow-ups & reminders', 'Instant invoicing & payment tracking', 'Unified client communications', '7-day AI operations planner', 'Priority support'].map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="text-[#3bf5d4]">check</span> {f}</li>
                  ))}
                </ul>
                <button className="w-full px-6 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/30">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-dark rounded-2xl p-8 border border-[#8b5cf6]/20">
            <div className="text-3xl mb-3">PROTOTYPE</div>
            <h3 className="text-xl font-black text-white mb-2">Interactive Prototype Coming Next</h3>
            <p className="text-sm text-[#6b6c80] mb-4">This is a demo of our AI operations planner concept. The full product -- with live calendar sync, real AI follow-ups, and Stripe-integrated invoicing -- is coming soon.</p>
            <a href="#planner" className="inline-block px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold rounded-xl transition-all text-sm">
              Try the Demo Planner
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-[#6b6c80]">SoloOps AI -- AI-powered operations for solo entrepreneurs.</span>
          <div className="flex items-center gap-6 text-sm text-[#6b6c80]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
