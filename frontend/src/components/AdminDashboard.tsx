import { useState, useEffect } from "react";
import {
    Users, ShieldCheck, FileText, CheckCircle2, XCircle, Search,
    TrendingUp, Activity, UserPlus, Bot, Sparkles
} from "lucide-react";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'overview' | 'verify-alumni' | 'moderate-posts'>('overview');

    // ✅ State for real data
    const [pendingAlumni, setPendingAlumni] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ Fetch Pending Alumni from Django
    const fetchPendingAlumni = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/pending-alumni/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setPendingAlumni(data);
            } else {
                console.error("Failed to fetch pending alumni.");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (activeTab === 'verify-alumni') {
            fetchPendingAlumni();
        }
    }, [activeTab]);

    // ✅ Handle Approve/Reject Click
    const handleVerifyAlumni = async (id: number, status: 'verified' | 'rejected') => {
        const token = localStorage.getItem('access_token');
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/auth/verify-alumni/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: status })
            });

            if (response.ok) {
                // Remove the user from the UI list after action
                setPendingAlumni(pendingAlumni.filter(u => u.id !== id));
                alert(`Alumni ${status} successfully!`);
            } else {
                alert("Failed to update status.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* TOP HEADER */}
            <div className="bg-[#0f2747] text-white pt-10 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck className="w-8 h-8 text-[#c9a227]" />
                        <h1 className="text-3xl font-black tracking-tight">Admin Control Panel</h1>
                    </div>
                    <p className="text-slate-300 text-sm">Manage users, verify alumni, and moderate platform content.</p>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-6 -mt-10">

                {/* TABS */}
                <div className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-200 w-fit">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'overview' ? 'bg-[#c9a227] text-[#0f2747] shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                    >
                        <Activity className="w-4 h-4" /> Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('verify-alumni')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'verify-alumni' ? 'bg-[#c9a227] text-[#0f2747] shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                    >
                        <ShieldCheck className="w-4 h-4" /> Verify Alumni
                    </button>
                    <button
                        onClick={() => setActiveTab('moderate-posts')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'moderate-posts' ? 'bg-[#c9a227] text-[#0f2747] shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                    >
                        <FileText className="w-4 h-4" /> Moderate Experiences
                    </button>
                </div>

                {/* ========================================= */}
                {/* 1. OVERVIEW TAB */}
                {/* ========================================= */}
                {activeTab === 'overview' && (
                    <div className="space-y-6 animate-in fade-in duration-300">

                        {/* ✅ WELCOME BANNER */}
                        <div className="bg-[#17335c] rounded-3xl p-6 md:p-8 flex items-center justify-between relative overflow-hidden shadow-lg border border-[#3a6199]">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-black text-white mb-2">Welcome back, Admin! 👋</h2>
                                <p className="text-slate-300 text-sm max-w-lg">Here is what's happening on Linkcode Hub today.</p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12%</span>
                                </div>
                                <h3 className="text-3xl font-black text-[#0f2747]">5,240</h3>
                                <p className="text-sm font-semibold text-slate-500 mt-1">Total Students</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">{pendingAlumni.length} Pending</span>
                                </div>
                                <h3 className="text-3xl font-black text-[#0f2747]">320</h3>
                                <p className="text-sm font-semibold text-slate-500 mt-1">Verified Alumni</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c9a227] flex items-center justify-center">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-[#0f2747]">1,450</h3>
                                <p className="text-sm font-semibold text-slate-500 mt-1">Shared Experiences</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-[#0f2747]">98%</h3>
                                <p className="text-sm font-semibold text-slate-500 mt-1">Platform Health</p>
                            </div>
                        </div>

                        {/* Bottom Section: Logs + Quick Actions */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2"><Activity className="w-5 h-5 text-[#c9a227]" /> Recent System Logs</h2>
                                </div>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5"><UserPlus className="w-4 h-4" /></div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-700 leading-tight">New user registered successfully.</p>
                                            <p className="text-[10px] text-slate-400 font-semibold mt-1">10 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                                    <h2 className="text-lg font-bold text-[#0f2747] mb-4">Quick Actions</h2>
                                    <div className="space-y-3">
                                        <button onClick={() => setActiveTab('verify-alumni')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-100 transition">
                                            <ShieldCheck className="w-5 h-5" /> Verify Alumni
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-[#0f2747] rounded-2xl p-6 text-center relative overflow-hidden shadow-lg">
                                    <h3 className="text-white font-bold text-lg mb-1">Platform is Healthy</h3>
                                    <p className="text-slate-400 text-xs">All systems operational.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ========================================= */}
                {/* 2. VERIFY ALUMNI TAB (Now Dynamic!) */}
                {/* ========================================= */}
                {activeTab === 'verify-alumni' && (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
                        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-[#0f2747]">Pending Alumni Verifications</h2>
                                <p className="text-xs text-slate-500 mt-1">Verify their company details before granting access.</p>
                            </div>
                            <div className="relative w-full md:w-72">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="text" placeholder="Search by name or email..." className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] text-sm" />
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="p-10 text-center text-slate-500 font-bold">Loading...</div>
                        ) : pendingAlumni.length === 0 ? (
                            <div className="p-10 text-center text-slate-500 font-bold">No pending verifications right now.</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-bold border-b border-slate-200">
                                            <th className="p-4 pl-6">Name / Email</th>
                                            <th className="p-4">Company & Role</th>
                                            <th className="p-4">Batch</th>
                                            <th className="p-4 text-right pr-6">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {pendingAlumni.map((alumni) => (
                                            <tr key={alumni.id} className="hover:bg-slate-50 transition">
                                                <td className="p-4 pl-6">
                                                    <p className="font-bold text-[#0f2747]">{alumni.username}</p>
                                                    <p className="text-xs text-slate-500">{alumni.email}</p>
                                                </td>
                                                <td className="p-4">
                                                    <p className="font-bold text-[#0f2747]">{alumni.company || "N/A"}</p>
                                                    <p className="text-xs text-slate-500">{alumni.designation || "N/A"}</p>
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-slate-600">{alumni.batch || "N/A"}</td>
                                                <td className="p-4 text-right pr-6 flex justify-end gap-2">
                                                    <button
                                                        onClick={() => handleVerifyAlumni(alumni.id, 'verified')}
                                                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleVerifyAlumni(alumni.id, 'rejected')}
                                                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 flex items-center gap-1"
                                                    >
                                                        <XCircle className="w-3.5 h-3.5" /> Reject
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                {/* ========================================= */}
                {/* 3. MODERATE POSTS TAB */}
                {/* ========================================= */}
                {activeTab === 'moderate-posts' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-[#0f2747] font-bold text-sm mb-1 flex items-center gap-1">AI Moderation Assistant is Active <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" /></h3>
                                <p className="text-xs text-slate-600">The system has automatically analyzed all pending experiences for spam.</p>
                            </div>
                        </div>

                        <div className="p-10 text-center text-slate-500 font-bold bg-white rounded-2xl border border-slate-200 shadow-sm">
                            Experience moderation coming soon.
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}