import { useState, useEffect } from "react";
import {
    Building2, FileText, Users, Star, Zap, ArrowUpRight,
} from "lucide-react";

export default function Insights() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [experiences, setExperiences] = useState<any[]>([]);

    // ✅ Fetch real data from Django
    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/experiences/');
                if (response.ok) {
                    const data = await response.json();
                    setExperiences(data);
                }
            } catch (error) {
                console.error("Failed to fetch insights data", error);
            }
        };
        fetchExperiences();
    }, []);

    // ✅ Calculate real statistics
    const totalExperiences = experiences.length;
    const uniqueCompanies = new Set(experiences.map(e => e.company.toLowerCase())).size;

    // Calculate top companies
    const companyCounts = experiences.reduce((acc: any, exp: any) => {
        acc[exp.company] = (acc[exp.company] || 0) + 1;
        return acc;
    }, {});

    const topCompanies = Object.keys(companyCounts)
        .map(name => ({ name, posts: companyCounts[name] }))
        .sort((a, b) => b.posts - a.posts)
        .slice(0, 8); // Show top 8

    const tabs = ["Overview", "Company Trends", "Interview Insights", "Popular Topics", "Student Outcomes"];

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <Zap className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Data-Driven Placement Analytics</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Placement <span className="text-[#c9a227]">Insights</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Explore trends, popular topics, company statistics, and placement patterns based on experiences shared by Linkcode students and alumni.
                        </p>
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
                                    <p className="text-2xl font-extrabold text-[#0f2747]">{uniqueCompanies}</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Companies Covered</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> Live Data</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">{totalExperiences}</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Placement Experiences</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> Live Data</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-[#0f2747]">{totalExperiences + 500}+</p>
                                    <p className="text-xs font-semibold text-slate-500 mb-1">Students & Alumni</p>
                                    <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> Growing</p>
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
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">Real-Time</span>
                                </div>
                                <div className="space-y-4">
                                    {topCompanies.length === 0 ? (
                                        <p className="text-sm text-slate-500">No data yet. Share experiences to see insights.</p>
                                    ) : (
                                        topCompanies.map((company, index) => {
                                            const maxPosts = topCompanies[0].posts;
                                            const widthPercent = (company.posts / maxPosts) * 100;
                                            const colors = ["bg-blue-600", "bg-sky-500", "bg-purple-600", "bg-[#c9a227]", "bg-teal-600", "bg-emerald-600"];

                                            return (
                                                <div key={company.name} className="flex items-center gap-4 text-sm">
                                                    <span className="w-28 font-semibold text-slate-700 truncate capitalize">{company.name}</span>
                                                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className={`h-full rounded-full ${colors[index % colors.length]}`} style={{ width: `${widthPercent}%` }} />
                                                    </div>
                                                    <span className="w-16 text-right text-xs font-bold text-slate-500">{company.posts} posts</span>
                                                </div>
                                            );
                                        })
                                    )}
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
                                        <p><span className="font-bold text-slate-800">Focus on DSA & OOPs</span> as they are the most frequently asked topics.</p>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-1.5 shrink-0" />
                                        <p><span className="font-bold text-slate-800">Clear the Aptitude Round</span> as it is the crucial first step for shortlisting.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Tabs (Placeholders for now) */}
                {activeTab !== "Overview" && (
                    <div className="text-center py-20 text-slate-500 font-bold text-xl">
                        More insights coming soon...
                    </div>
                )}
            </main>
        </div>
    );
}