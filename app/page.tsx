"use client";

import { useState } from "react";
import { Activity, Bot, CheckCircle2, Clock3, FolderKanban, LayoutDashboard, Play, Plus, Sparkles, Users, Zap } from "lucide-react";

const workflows = [
  { name: "Lead qualification", runs: 1284, success: 98.7, status: "Live" },
  { name: "Support triage", runs: 847, success: 96.2, status: "Live" },
  { name: "Weekly analytics", runs: 312, success: 99.4, status: "Live" },
  { name: "Invoice follow-up", runs: 164, success: 94.8, status: "Paused" }
];

export default function Home() {
  const [running, setRunning] = useState(false);
  const [activity, setActivity] = useState("Ready");

  const runWorkflow = async () => {
    setRunning(true); setActivity("AI agent is executing workflow...");
    try {
      await fetch("/api/workflows/run", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ workflow: "lead-qualification" }) });
      setActivity("Workflow completed successfully");
    } catch { setActivity("Demo run completed"); }
    setRunning(false);
  };

  return <main className="min-h-screen bg-[#08090d] text-white">
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/10 bg-[#0b0d12] p-5 lg:block">
      <div className="flex items-center gap-2 text-xl font-semibold"><div className="rounded-lg bg-violet-500/20 p-2"><Sparkles size={19}/></div> FlowPilot</div>
      <nav className="mt-10 space-y-1 text-sm">
        {[[LayoutDashboard,"Overview"],[Zap,"Automations"],[Bot,"AI Agents"],[FolderKanban,"Projects"],[Users,"Team"]].map(([Icon,label]) => <div key={String(label)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${label === "Overview" ? "bg-white/10" : "text-zinc-400 hover:bg-white/5"}`}><Icon size={17}/>{label}</div>)}
      </nav>
      <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-white/[.03] p-4"><p className="text-xs text-zinc-500">WORKSPACE</p><p className="mt-2 font-medium">Acme Operations</p><p className="mt-1 text-xs text-zinc-500">Pro plan · 8 seats</p></div>
    </aside>

    <section className="lg:ml-64">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10"><div><p className="text-sm text-zinc-500">Workspace / Overview</p><h1 className="mt-1 text-2xl font-semibold">Good evening, Riddhi</h1></div><button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black"><Plus size={16}/> New workflow</button></header>
      <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[['Automations','2,607','+18.4%',Zap],['Successful runs','2,534','+12.8%',CheckCircle2],['Time saved','184h','+24.1%',Clock3],['Team members','8','+2 this month',Users]].map(([a,b,c,I])=><div key={String(a)} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="flex justify-between"><span className="text-sm text-zinc-400">{a}</span><I size={17} className="text-zinc-500"/></div><div className="mt-4 text-3xl font-semibold">{b}</div><div className="mt-2 text-xs text-emerald-400">{c}</div></div>)}
        </div>
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="flex items-center justify-between"><div><h2 className="font-semibold">Workflow performance</h2><p className="mt-1 text-sm text-zinc-500">Execution volume across your automations</p></div><Activity className="text-violet-400" size={20}/></div><div className="mt-8 flex h-52 items-end gap-2">{[38,52,45,67,61,74,70,86,79,91,82,96,88,100,93,108,97,115].map((h,i)=><div key={i} className="flex-1 rounded-t-md bg-violet-500/60" style={{height:`${h/1.2}%`}} />)}</div><div className="mt-3 flex justify-between text-xs text-zinc-600"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div></div>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[.06] p-6"><div className="flex items-center gap-2"><Bot size={19} className="text-violet-300"/><h2 className="font-semibold">AI Agent</h2></div><p className="mt-4 text-sm leading-6 text-zinc-400">Turn plain-English instructions into reliable, observable workflows with human approval checkpoints.</p><div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-xs text-zinc-500">CURRENT RUN</p><p className="mt-2 text-sm">Qualify inbound enterprise leads</p><p className="mt-2 text-xs text-violet-300">{activity}</p></div><button onClick={runWorkflow} disabled={running} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 py-3 text-sm font-semibold hover:bg-violet-400 disabled:opacity-60"><Play size={15}/>{running ? "Running..." : "Run demo workflow"}</button></div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]"><div className="flex items-center justify-between border-b border-white/10 p-6"><div><h2 className="font-semibold">Active automations</h2><p className="mt-1 text-sm text-zinc-500">Monitor every workflow from one place</p></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">All systems operational</span></div><div className="divide-y divide-white/10">{workflows.map(w=><div key={w.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-6 p-5 text-sm"><div><p className="font-medium">{w.name}</p><p className="mt-1 text-xs text-zinc-500">{w.runs.toLocaleString()} runs</p></div><span className="text-zinc-400">{w.success}% success</span><span className={`rounded-full px-2.5 py-1 text-xs ${w.status === 'Live' ? 'bg-emerald-400/10 text-emerald-300' : 'bg-white/10 text-zinc-400'}`}>{w.status}</span><button className="text-zinc-500 hover:text-white">•••</button></div>)}</div></div>
      </div>
    </section>
  </main>;
}
