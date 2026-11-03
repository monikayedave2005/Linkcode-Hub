import { useState } from "react";
import { Search, CheckCircle2, XCircle, Clock, ArrowRight, ThumbsUp, MessageSquare, Sparkles } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "TCS",
        role: "Software Developer",
        year: "2026 Drive",
        rounds: "3 Rounds",
        ctc: "4.5 LPA",
        status: "Selected",
        quote: "Aptitude was moderate, technical round focused heavily on DSA and OOP. HR round was friendly.",
        tags: ["DBMS", "OS", "CN", "SQL", "DSA"],
        author: { name: "Aditya R.", role: "BE CS", batch: "Batch 2026", initial: "A", color: "bg-yellow-600" },
        upvotes: 18,
        comments: 4,
    },
    {
        id: 2,
        company: "ACCENTURE",
        role: "Application Developer",
        year: "2026 Drive",
        rounds: "4 Rounds",
        ctc: "4.5 LPA",
        status: "Rejected",
        quote: "Technical round was tricky. Focused more on problem-solving scenario questions and Low-Level System Design.",
        tags: ["System Design", "DBMS", "Coding", "Pseudo-code"],
        author: { name: "Priya S.", role: "TE IT", batch: "Batch 2026", initial: "P", color: "bg-purple-600" },
        upvotes: 32,
        comments: 11,
    },
    {
        id: 3,
        company: "PERSISTENT",
        role: "Software Engineer Trainee",
        year: "2026 Drive",
        rounds: "3 Rounds",
        ctc: "6.0 LPA",
        status: "Selected",
        quote: "Coding round required strong matrix manipulation and dynamic programming skills. Be clear with your logic during live coding.",
        tags: ["DSA", "Matrix", "DP", "Java"],
        author: { name: "Rahul M.", role: "BE ENTC", batch: "Batch 2026", initial: "R", color: "bg-blue-600" },
        upvotes: 45,
        comments: 12,
    },
    {
        id: 4,
        company: "INFOSYS",
        role: "System Engineer",
        year: "2025 Drive",
        rounds: "3 Rounds",
        ctc: "3.6 LPA",
        status: "Interview Completed",
        quote: "Questions were mostly from core CS subjects. Good experience overall. Waiting for the result.",
        tags: ["DBMS", "CN", "OS", "Aptitude"],
        author: { name: "Sneha K.", role: "BE IT", batch: "Batch 2025", initial: "S", color: "bg-teal-600" },
        upvotes: 21,
        comments: 5,
    },
    {
        id: 5,
        company: "WIPRO",
        role: "Project Engineer",
        year: "2025 Drive",
        rounds: "2 Rounds",
        ctc: "3.5 LPA",
        status: "Selected",
        quote: "Aptitude round was the main filter. Technical was mostly basic Java and SQL queries. No hard DSA.",
        tags: ["Java", "SQL", "Aptitude"],
        author: { name: "Amit V.", role: "BE Civil", batch: "Batch 2025", initial: "A", color: "bg-orange-600" },
        upvotes: 15,
        comments: 2,
    },
    {
        id: 6,
        company: "CAPGEMINI",
        role: "Analyst",
        year: "2026 Drive",
        rounds: "3 Rounds",
        ctc: "4.0 LPA",
        status: "Rejected",
        quote: "The pseudo-code round was very confusing. They asked a lot of questions on OS and Networking in the technical interview.",
        tags: ["Pseudo-code", "OS", "Networking"],
        author: { name: "Neha R.", role: "BE CS", batch: "Batch 2026", initial: "N", color: "bg-pink-600" },
        upvotes: 28,
        comments: 9,
    },
    {
        id: 7,
        company: "COGNIZANT",
        role: "GenC Developer",
        year: "2025 Drive",
        rounds: "4 Rounds",
        ctc: "4.0 LPA",
        status: "Selected",
        quote: "Very lengthy aptitude test. Technical interview was standard. They checked my final year project deeply.",
        tags: ["Project", "Coding", "HR"],
        author: { name: "Kiran P.", role: "BE Mech", batch: "Batch 2025", initial: "K", color: "bg-indigo-600" },
        upvotes: 19,
        comments: 6,
    }
];

export default function Experiences() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredExperiences = experiences.filter(exp =>
        activeFilter === "All" ? true : exp.status === activeFilter
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Verified Placement Archives</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Real Interview <span className="text-[#c9a227]">Experiences</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Explore comprehensive interview reports, round-by-round breakdown questions, and preparation strategies shared directly by Linkcode students and alumni.
                        </p>
                        <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl mb-8">
                            <div className="flex items-center pl-4 text-slate-400"><Search className="w-5 h-5" /></div>
                            <input type="text" placeholder="Filter by company (e.g. tcs, Persistent), role, or topic..." className="flex-1 px-4 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 text-sm" />
                            <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-8 font-bold text-sm transition-colors">Search</button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["All", "Selected", "Interview Completed", "Rejected"].map((filter) => (
                                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === filter ? "bg-[#c9a227] text-[#0f2747] shadow-md" : "bg-[#17335c] text-slate-300 hover:bg-[#1e3a5f] border border-[#3a6199]"}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Showing {filteredExperiences.length} Verified Reports</p>
                    <p className="text-xs text-slate-500">Sorted by <span className="font-bold text-slate-700">Most Recent</span></p>
                </div>

                <div className="space-y-6">
                    {filteredExperiences.map((exp) => (
                        <div key={exp.id} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-xl font-black text-[#c9a227] uppercase tracking-wide">{exp.company}</h2>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.year}</span>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.rounds}</span>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.ctc}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f2747] group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                </div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border self-start ${exp.status === "Selected" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                                        exp.status === "Rejected" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-sky-50 text-sky-700 border-sky-200"
                                    }`}>
                                    {exp.status === "Selected" && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    {exp.status === "Rejected" && <XCircle className="w-3.5 h-3.5" />}
                                    {exp.status === "Interview Completed" && <Clock className="w-3.5 h-3.5" />}
                                    {exp.status}
                                </span>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-5 mb-5 border border-slate-100">
                                <p className="text-slate-700 italic text-sm leading-relaxed">"{exp.quote}"</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 bg-white text-slate-600 text-xs font-semibold rounded-md border border-slate-200">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${exp.author.color} flex items-center justify-center text-white font-bold text-xs`}>{exp.author.initial}</div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0f2747]">{exp.author.name}</p>
                                        <p className="text-[10px] text-slate-500">{exp.author.role} • {exp.author.batch}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <button className="text-sm font-bold text-[#c9a227] hover:text-[#0f2747] transition-colors flex items-center gap-1 group/btn">
                                        View Full Report <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                        <button className="flex items-center gap-1.5 hover:text-[#0f2747] transition-colors"><ThumbsUp className="w-4 h-4" /> {exp.upvotes}</button>
                                        <button className="flex items-center gap-1.5 hover:text-[#0f2747] transition-colors"><MessageSquare className="w-4 h-4" /> {exp.comments}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}