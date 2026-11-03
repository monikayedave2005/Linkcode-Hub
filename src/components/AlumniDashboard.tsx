import { useState } from 'react';
import { Users, FileText, MessageSquare, Award, Upload, Clock, CheckCircle2 } from "lucide-react";

interface AlumniDashboardProps {
    onNavigate: (page: any) => void;
}

export default function AlumniDashboard({ onNavigate }: AlumniDashboardProps) {
    // ✅ Mock data for previously shared experiences
    const [sharedExperiences, setSharedExperiences] = useState([
        { id: 1, company: "TCS", role: "Software Developer", date: "2026 Drive", status: "Approved" },
        { id: 2, company: "Infosys", role: "System Engineer", date: "2025 Drive", status: "Approved" }
    ]);

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <Award className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Verified Alumni Portal</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Welcome Back, <span className="text-[#c9a227]">Mentor!</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                            Guide the next generation of tech talent. Review resumes, answer career questions, and share your industry experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUICK STATS */}
            <section className="max-w-7xl mx-auto px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-[#c9a227] transition cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[#0f2747]">{sharedExperiences.length}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Experiences Shared</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-[#c9a227] transition cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[#0f2747]">5</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Active Mentees</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-[#c9a227] transition cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[#0f2747]">8</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Questions Answered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ACTIONS */}
            <main className="max-w-7xl mx-auto px-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div
                        onClick={() => onNavigate('share-experience')}
                        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#c9a227] transition cursor-pointer flex flex-col items-center text-center group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#c9a227] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f2747] mb-2">Share Interview Experience</h3>
                        <p className="text-sm text-slate-500">Help students by sharing your recent interview rounds and questions.</p>
                    </div>

                    <div
                        onClick={() => onNavigate('review-resumes')}
                        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#c9a227] transition cursor-pointer flex flex-col items-center text-center group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f2747] mb-2">Review Student Resumes</h3>
                        <p className="text-sm text-slate-500">Provide feedback on student resumes to help them get placed.</p>
                    </div>
                </div>

                {/* PENDING TASKS SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Mentorship Requests */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#c9a227]" /> Mentorship Requests
                            </h2>
                            <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-1 rounded-md">3 Pending</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-5 flex items-center justify-between hover:bg-slate-50 transition">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">R</div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0f2747]">Rahul M.</p>
                                        <p className="text-xs text-slate-500">TE Computer • Batch 2026</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100">Accept</button>
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* My Shared Experiences */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#c9a227]" /> My Shared Experiences
                            </h2>
                            <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-2 py-1 rounded-md">{sharedExperiences.length} Total</span>
                        </div>
                        <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                            {sharedExperiences.map((exp, idx) => (
                                <div key={idx} className="p-5 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">{exp.company.charAt(0)}</div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0f2747]">{exp.company} - {exp.role}</p>
                                            <p className="text-xs text-slate-500">{exp.date}</p>
                                        </div>
                                    </div>
                                    {/* ✅ Status Badges (Approved / Pending) */}
                                    {exp.status === 'Approved' ? (
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200"><CheckCircle2 className="w-3 h-3" /> Approved</span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200"><Clock className="w-3 h-3" /> Pending</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}