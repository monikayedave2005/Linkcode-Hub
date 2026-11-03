import { useState } from "react";
import {
    Building2, FileText, Users, Star, Zap, ArrowUpRight,
    CheckCircle2, TrendingUp, Heart
} from "lucide-react";

export default function Insights() {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Company Trends", "Interview Insights", "Popular Topics", "Student Outcomes"];

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <Zap className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Data-Driven Placement Analytics</span>
                        </div>

                        {/* ✅ White + Yellow Heading */}
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Placement <span className="text-[#c9a227]">Insights</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Explore trends, popular topics, company statistics, and placement patterns based on experiences shared by Linkcode students and alumni.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab
                                        ? "bg-[#c9a227] text-[#0f2747] shadow-md"
                                        : "bg-[#17335c] text-slate-300 hover:bg-[#1e3a5f] border border-[#3a6199]"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-6">

                {/* 1. OVERVIEW TAB */}
                {activeTab === "Overview" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        {/* Stat Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#c9a227] shrink-0">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">120</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Companies Covered</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 15% vs last year</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">2,500+</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Placement Experiences</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 28% vs last year</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">580+</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Students & Alumni</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 32% vs last year</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">3.6 / 5</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Average Difficulty</p>
                                    <p className="text-[10px] font-bold text-[#c9a227]">Moderate Overall</p>
                                </div>
                            </div>
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Top Companies Chart */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0f2747]">Top Companies by Shared Experiences</h3>
                                        <p className="text-xs text-slate-500">Most active campus recruiters in recent drives</p>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">Batch 2025 - 2026</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: "TCS", posts: 428, color: "bg-blue-600", width: "w-full" },
                                        { name: "Infosys", posts: 356, color: "bg-sky-500", width: "w-[85%]" },
                                        { name: "Accenture", posts: 312, color: "bg-purple-600", width: "w-[75%]" },
                                        { name: "Persistent", posts: 198, color: "bg-[#c9a227]", width: "w-[50%]" },
                                        { name: "Capgemini", posts: 174, color: "bg-teal-600", width: "w-[45%]" },
                                        { name: "Wipro", posts: 162, color: "bg-emerald-600", width: "w-[40%]" },
                                        { name: "Cognizant", posts: 138, color: "bg-indigo-500", width: "w-[35%]" },
                                        { name: "Tech Mahindra", posts: 110, color: "bg-red-600", width: "w-[25%]" },
                                    ].map((company) => (
                                        <div key={company.name} className="flex items-center gap-4 text-sm">
                                            <span className="w-28 font-semibold text-slate-700 truncate">{company.name}</span>
                                            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${company.color} ${company.width}`} />
                                            </div>
                                            <span className="w-16 text-right text-xs font-bold text-slate-500">{company.posts} posts</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-[#c9a227]" /> Key Placement Takeaways
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" />
                                        <p><span className="font-bold text-slate-800">TCS, Infosys, and Accenture</span> lead in the highest volume of shared experiences.</p>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" />
                                        <p><span className="font-bold text-slate-800">SQL joins, OOPs principles, and Arrays/Strings DSA</span> are the top 3 most repeated technical topics.</p>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" />
                                        <p><span className="font-bold text-slate-800">88% of candidates</span> noted that clearing the <span className="font-bold text-slate-800">time-bound Aptitude Round</span> was crucial for shortlisting.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Charts Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Interview Rounds */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Interview Round Breakdown</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Aptitude Test", sub: "First Filter Round", percent: "88%", width: "w-[88%]", color: "bg-[#c9a227]" },
                                        { name: "Technical Interview", sub: "Core Concepts & Projects", percent: "92%", width: "w-[92%]", color: "bg-[#c9a227]" },
                                        { name: "Coding Assessment", sub: "DSA & Algorithms", percent: "64%", width: "w-[64%]", color: "bg-[#c9a227]" },
                                        { name: "HR / Behavioral", sub: "Culture & Communication", percent: "78%", width: "w-[78%]", color: "bg-[#c9a227]" },
                                        { name: "System Design", sub: "Advanced Roles", percent: "24%", width: "w-[24%]", color: "bg-[#c9a227]" },
                                    ].map((round) => (
                                        <div key={round.name} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <p className="font-bold text-sm text-slate-800">{round.name}</p>
                                                    <p className="text-[10px] text-slate-500">{round.sub}</p>
                                                </div>
                                                <span className="bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold px-2 py-1 rounded-md">{round.percent}</span>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${round.color} ${round.width}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Preparation Topics */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Popular Preparation Topics</h3>
                                <ul className="space-y-3">
                                    {[
                                        { topic: "Data Structures & Algorithms", posts: 342 },
                                        { topic: "Aptitude & Logical Reasoning", posts: 298 },
                                        { topic: "SQL & Database Management", posts: 210 },
                                        { topic: "Object Oriented Programming", posts: 188 },
                                        { topic: "Operating Systems & Networks", posts: 176 },
                                        { topic: "Resume & HR Preparation", posts: 150 },
                                    ].map((item) => (
                                        <li key={item.topic} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0 text-sm">
                                            <span className="text-slate-600 font-medium truncate pr-4">{item.topic}</span>
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md shrink-0">{item.posts} posts</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. COMPANY TRENDS TAB */}
                {activeTab === "Company Trends" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#c9a227] shrink-0"><Building2 className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">120</p><p className="text-xs font-semibold text-slate-500 mb-1">Companies Covered</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 15% vs last year</p></div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><FileText className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">2,500+</p><p className="text-xs font-semibold text-slate-500 mb-1">Placement Experiences</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 28% vs last year</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <div className="flex items-center justify-between mb-6">
                                    <div><h3 className="text-lg font-bold text-[#0f2747]">Top Companies by Shared Experiences</h3><p className="text-xs text-slate-500">Most active campus recruiters in recent drives</p></div>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">Batch 2025 - 2026</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: "TCS", posts: 428, color: "bg-blue-600", width: "w-full" },
                                        { name: "Infosys", posts: 356, color: "bg-sky-500", width: "w-[85%]" },
                                        { name: "Accenture", posts: 312, color: "bg-purple-600", width: "w-[75%]" },
                                        { name: "Persistent", posts: 198, color: "bg-[#c9a227]", width: "w-[50%]" },
                                        { name: "Capgemini", posts: 174, color: "bg-teal-600", width: "w-[45%]" },
                                        { name: "Wipro", posts: 162, color: "bg-emerald-600", width: "w-[40%]" },
                                        { name: "Cognizant", posts: 138, color: "bg-indigo-500", width: "w-[35%]" },
                                        { name: "Tech Mahindra", posts: 110, color: "bg-red-600", width: "w-[25%]" },
                                    ].map((company) => (
                                        <div key={company.name} className="flex items-center gap-4 text-sm">
                                            <span className="w-28 font-semibold text-slate-700 truncate">{company.name}</span>
                                            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${company.color} ${company.width}`} /></div>
                                            <span className="w-16 text-right text-xs font-bold text-slate-500">{company.posts} posts</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Popular Preparation Topics</h3>
                                <ul className="space-y-3">
                                    {[
                                        { topic: "Data Structures & Algorithms", posts: 342 },
                                        { topic: "Aptitude & Logical Reasoning", posts: 298 },
                                        { topic: "SQL & Database Management", posts: 210 },
                                        { topic: "Object Oriented Programming", posts: 188 },
                                        { topic: "Operating Systems & Networks", posts: 176 },
                                        { topic: "Resume & HR Preparation", posts: 150 },
                                    ].map((item) => (
                                        <li key={item.topic} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0 text-sm">
                                            <span className="text-slate-600 font-medium truncate pr-4">{item.topic}</span>
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md shrink-0">{item.posts} posts</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. INTERVIEW INSIGHTS TAB */}
                {activeTab === "Interview Insights" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><FileText className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">2,500+</p><p className="text-xs font-semibold text-slate-500 mb-1">Placement Experiences</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 28% vs last year</p></div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0"><Star className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">3.6 / 5</p><p className="text-xs font-semibold text-slate-500 mb-1">Average Difficulty Rating</p><p className="text-[10px] font-bold text-[#c9a227]">Moderate Overall</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Interview Round Breakdown</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Aptitude Test", sub: "First Filter Round", percent: "88%", width: "w-[88%]", color: "bg-[#c9a227]" },
                                        { name: "Technical Interview", sub: "Core Concepts & Projects", percent: "92%", width: "w-[92%]", color: "bg-[#c9a227]" },
                                        { name: "Coding Assessment", sub: "DSA & Algorithms", percent: "64%", width: "w-[64%]", color: "bg-[#c9a227]" },
                                        { name: "HR / Behavioral", sub: "Culture & Communication", percent: "78%", width: "w-[78%]", color: "bg-[#c9a227]" },
                                        { name: "System Design", sub: "Advanced Roles", percent: "24%", width: "w-[24%]", color: "bg-[#c9a227]" },
                                    ].map((round) => (
                                        <div key={round.name} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <div><p className="font-bold text-sm text-slate-800">{round.name}</p><p className="text-[10px] text-slate-500">{round.sub}</p></div>
                                                <span className="bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold px-2 py-1 rounded-md">{round.percent}</span>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden"><div className={`h-full rounded-full ${round.color} ${round.width}`} /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6 flex items-center gap-2"><Zap className="w-5 h-5 text-[#c9a227]" /> Key Placement Takeaways</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" /><p><span className="font-bold text-slate-800">TCS, Infosys, and Accenture</span> lead in the highest volume of shared experiences.</p></li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" /><p><span className="font-bold text-slate-800">SQL joins, OOPs principles, and Arrays/Strings DSA</span> are the top 3 most repeated technical topics.</p></li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" /><p><span className="font-bold text-slate-800">88% of candidates</span> noted that clearing the <span className="font-bold text-slate-800">time-bound Aptitude Round</span> was crucial for shortlisting.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. POPULAR TOPICS TAB */}
                {activeTab === "Popular Topics" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><FileText className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">2,500+</p><p className="text-xs font-semibold text-slate-500 mb-1">Placement Experiences</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 28% vs last year</p></div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Users className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">580+</p><p className="text-xs font-semibold text-slate-500 mb-1">Students & Alumni Contributed</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 32% vs last year</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <div className="flex items-center justify-between mb-6">
                                    <div><h3 className="text-lg font-bold text-[#0f2747]">Top Companies by Shared Experiences</h3><p className="text-xs text-slate-500">Most active campus recruiters in recent drives</p></div>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">Batch 2025 - 2026</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: "TCS", posts: 428, color: "bg-blue-600", width: "w-full" },
                                        { name: "Infosys", posts: 356, color: "bg-sky-500", width: "w-[85%]" },
                                        { name: "Accenture", posts: 312, color: "bg-purple-600", width: "w-[75%]" },
                                        { name: "Persistent", posts: 198, color: "bg-[#c9a227]", width: "w-[50%]" },
                                        { name: "Capgemini", posts: 174, color: "bg-teal-600", width: "w-[45%]" },
                                        { name: "Wipro", posts: 162, color: "bg-emerald-600", width: "w-[40%]" },
                                        { name: "Cognizant", posts: 138, color: "bg-indigo-500", width: "w-[35%]" },
                                        { name: "Tech Mahindra", posts: 110, color: "bg-red-600", width: "w-[25%]" },
                                    ].map((company) => (
                                        <div key={company.name} className="flex items-center gap-4 text-sm">
                                            <span className="w-28 font-semibold text-slate-700 truncate">{company.name}</span>
                                            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${company.color} ${company.width}`} /></div>
                                            <span className="w-16 text-right text-xs font-bold text-slate-500">{company.posts} posts</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Popular Preparation Topics</h3>
                                <ul className="space-y-3">
                                    {[
                                        { topic: "Data Structures & Algorithms", posts: 342 },
                                        { topic: "Aptitude & Logical Reasoning", posts: 298 },
                                        { topic: "SQL & Database Management", posts: 210 },
                                        { topic: "Object Oriented Programming", posts: 188 },
                                        { topic: "Operating Systems & Networks", posts: 176 },
                                        { topic: "Resume & HR Preparation", posts: 150 },
                                    ].map((item) => (
                                        <li key={item.topic} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0 text-sm">
                                            <span className="text-slate-600 font-medium truncate pr-4">{item.topic}</span>
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md shrink-0">{item.posts} posts</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* 5. STUDENT OUTCOMES TAB */}
                {activeTab === "Student Outcomes" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Users className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">580+</p><p className="text-xs font-semibold text-slate-500 mb-1">Students & Alumni Contributed</p><p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> 32% vs last year</p></div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0"><Star className="w-6 h-6" /></div>
                                <div><p className="text-2xl font-extrabold text-[#0f2747]">3.6 / 5</p><p className="text-xs font-semibold text-slate-500 mb-1">Average Difficulty Rating</p><p className="text-[10px] font-bold text-[#c9a227]">Moderate Overall</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6">Interview Round Breakdown</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Aptitude Test", sub: "First Filter Round", percent: "88%", width: "w-[88%]", color: "bg-[#c9a227]" },
                                        { name: "Technical Interview", sub: "Core Concepts & Projects", percent: "92%", width: "w-[92%]", color: "bg-[#c9a227]" },
                                        { name: "Coding Assessment", sub: "DSA & Algorithms", percent: "64%", width: "w-[64%]", color: "bg-[#c9a227]" },
                                        { name: "HR / Behavioral", sub: "Culture & Communication", percent: "78%", width: "w-[78%]", color: "bg-[#c9a227]" },
                                        { name: "System Design", sub: "Advanced Roles", percent: "24%", width: "w-[24%]", color: "bg-[#c9a227]" },
                                    ].map((round) => (
                                        <div key={round.name} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <div><p className="font-bold text-sm text-slate-800">{round.name}</p><p className="text-[10px] text-slate-500">{round.sub}</p></div>
                                                <span className="bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold px-2 py-1 rounded-md">{round.percent}</span>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden"><div className={`h-full rounded-full ${round.color} ${round.width}`} /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                                <h3 className="text-lg font-bold text-[#0f2747] mb-6 flex items-center gap-2"><Heart className="w-5 h-5 text-rose-500" /> Shared Student Outcomes</h3>
                                <ul className="space-y-4">
                                    <li className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-bold text-[#0f2747]"><CheckCircle2 className="w-4 h-4 text-[#c9a227]" /> Selected / Offered</div>
                                        <span className="text-lg font-extrabold text-[#c9a227]">42%</span>
                                    </li>
                                    <li className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-bold text-blue-700"><TrendingUp className="w-4 h-4 text-blue-500" /> Interview Completed</div>
                                        <span className="text-lg font-extrabold text-blue-600">32%</span>
                                    </li>
                                    <li className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-bold text-rose-700"><Heart className="w-4 h-4 text-rose-500" /> Rejected / Feedback Shared</div>
                                        <span className="text-lg font-extrabold text-rose-600">26%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}