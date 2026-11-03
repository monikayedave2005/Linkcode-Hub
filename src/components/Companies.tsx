import { useState } from "react";
import { Search, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

const companiesData = [
    { id: 1, name: "Tata Consultancy Services (TCS)", shortName: "TCS", logo: "/logos/tcs.png", type: "IT Services", location: "Pune / Pan India", desc: "Global leader in IT services, consulting, and business solutions with regular campus drives.", package: "3.36 - 7.0 LPA", logs: "42 Shared", tags: ["Aptitude", "DSA", "OOP", "HR", "SQL"], brandColor: "bg-[#0f2747]", initial: "T" },
    { id: 2, name: "Infosys", shortName: "Infosys", logo: "/logos/infosys.png", type: "IT Services", location: "Pune / Bangalore", desc: "Offers next-generation digital services hiring across System Engineer (SE) and Specialist Programmer (SP).", package: "3.6 - 9.5 LPA", logs: "38 Shared", tags: ["DBMS", "OS", "Java", "CN", "HackWithInfy"], brandColor: "bg-[#007cc2]", initial: "I" },
    { id: 3, name: "Accenture", shortName: "Accenture", logo: "/logos/accenture.png", type: "Consulting", location: "Pune / Mumbai", desc: "Hires for Associate Software Engineer (ASE) and Advanced ASE roles through structured cognitive tests.", package: "4.5 - 6.5 LPA", logs: "31 Shared", tags: ["System Design", "DBMS", "Coding", "Communication"], brandColor: "bg-[#a100ff]", initial: "A" },
    { id: 4, name: "Persistent Systems", shortName: "PERS", logo: "/logos/persistent.png", type: "Product", location: "Pune, Maharashtra", desc: "Focuses heavily on software product engineering, requiring strong algorithmic problem-solving.", package: "5.0 - 8.5 LPA", logs: "24 Shared", tags: ["DSA", "OOPs", "Java", "Problem Solving"], brandColor: "bg-[#e31837]", initial: "P" },
    { id: 5, name: "Capgemini", shortName: "CAP", logo: "/logos/capgemini.png", type: "IT Services", location: "Pune / Mumbai", desc: "Conducts regular campus drives for Analyst and Senior Analyst positions for Engineering graduates.", package: "4.0 - 7.5 LPA", logs: "27 Shared", tags: ["Pseudo Code", "Aptitude", "Technical", "HR"], brandColor: "bg-[#0070ad]", initial: "C" },
    { id: 6, name: "Wipro", shortName: "Wipro", logo: "/logos/wipro.png", type: "IT Services", location: "Pune / Bangalore", desc: "Wipro Elite NTH drives recruit engineering graduates for Project Engineer roles across domains.", package: "3.5 - 6.5 LPA", logs: "22 Shared", tags: ["Aptitude", "Coding", "Java", "HR"], brandColor: "bg-[#341f97]", initial: "W" }
];

export default function Companies() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCompanies = companiesData.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Verified Recruiting Partners</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Recruiting <span className="text-[#c9a227]">Companies</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Explore hiring processes, selection rounds, average packages, and authentic interview experiences shared by Linkcode students and alumni.
                        </p>
                        <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl">
                            <div className="flex items-center pl-4 text-slate-400"><Search className="w-5 h-5" /></div>
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by company name or industry..." className="flex-1 px-4 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 text-sm" />
                            <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-8 font-bold text-sm transition-colors">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Showing {filteredCompanies.length} Companies</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCompanies.map((company) => (
                        <div key={company.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#c9a227] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-5">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${company.brandColor}`}>
                                            <img src={company.logo} alt={company.name} className="w-8 h-8 object-contain hidden" onLoad={(e) => (e.target as HTMLImageElement).style.display = 'block'} onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
                                            <span className="text-white font-black text-xl uppercase">{company.initial}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-base font-black text-[#0f2747] group-hover:text-blue-600 transition-colors leading-tight">{company.name}</h2>
                                            <span className="inline-block mt-1 px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">{company.type}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                                    <MapPin className="w-3.5 h-3.5 text-[#c9a227]" />
                                    {company.location}
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-2">{company.desc}</p>

                                <div className="grid grid-cols-2 gap-3 mb-5">
                                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Package (CTC)</p>
                                        <p className="text-sm font-black text-[#c9a227]">{company.package}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Interview Logs</p>
                                        <p className="text-sm font-black text-[#0f2747]">{company.logs}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {company.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-white text-slate-600 text-[10px] font-semibold rounded-md border border-slate-200">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-white hover:bg-[#c9a227] text-[#0f2747] hover:text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm border border-slate-200 hover:border-[#c9a227]">
                                View Insights <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}