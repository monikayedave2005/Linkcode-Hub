import { useState, useEffect } from "react";
import { Users, FileText, MessageSquare, Award, Upload, CheckCircle2 } from "lucide-react";

interface AlumniDashboardProps {
    onNavigate: (page: any) => void;
}

export default function AlumniDashboard({ onNavigate }: AlumniDashboardProps) {
    // ✅ 1. ALL STATE VARIABLES MUST BE DECLARED HERE
    const [myExperiences, setMyExperiences] = useState<any[]>([]);
    const [requests, setRequests] = useState<any[]>([]); // <-- This was missing!
    const [isLoading, setIsLoading] = useState(true);

    // ✅ 2. Fetch Data
    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem('access_token');
            if (!token) return;

            try {
                // Fetch Experiences
                const expResponse = await fetch('http://127.0.0.1:8000/api/experiences/', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (expResponse.ok) {
                    const expData = await expResponse.json();
                    setMyExperiences(expData.slice(0, 3));
                }

                // Fetch Mentorship Requests
                const reqResponse = await fetch('http://127.0.0.1:8000/api/mentorship/', {
                    headers: { 'Authorization': `Bearer ${token}` },
                    cache: 'no-store'
                });

                if (reqResponse.ok) {
                    const reqData = await reqResponse.json();
                    console.log("Mentorship Requests from DB:", reqData);
                    setRequests(reqData); // Now this will work!
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
                setIsLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    // ✅ 3. Handle Accept/Reject
    const handleRequestAction = async (id: number, action: 'accepted' | 'rejected') => {
        const token = localStorage.getItem('access_token');
        try {
            await fetch(`http://127.0.0.1:8000/api/mentorship/${id}/update_status/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: action })
            });
            setRequests(requests.filter(r => r.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

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
                            <h3 className="text-2xl font-black text-[#0f2747]">{myExperiences.length}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Experiences Shared</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-[#c9a227] transition cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[#0f2747]">{requests.filter(r => r.status === 'accepted').length}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Active Mentees</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-[#c9a227] transition cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[#0f2747]">0</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Questions Answered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ACTIONS */}
            <main className="max-w-7xl mx-auto px-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div onClick={() => onNavigate('share-experience')} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#c9a227] transition cursor-pointer flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#c9a227] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f2747] mb-2">Share Interview Experience</h3>
                        <p className="text-sm text-slate-500">Help students by sharing your recent interview rounds and questions.</p>
                    </div>

                    <div onClick={() => onNavigate('review-resumes')} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#c9a227] transition cursor-pointer flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f2747] mb-2">Review Student Resumes</h3>
                        <p className="text-sm text-slate-500">Provide feedback on student resumes to help them get placed.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* MENTORSHIP REQUESTS BLOCK */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#c9a227]" /> Mentorship Requests
                            </h2>
                            <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-1 rounded-md">
                                {requests.length} Pending
                            </span>
                        </div>
                        <div className="divide-y divide-slate-100 flex-1">
                            {requests.length === 0 ? (
                                <div className="p-10 text-center text-slate-400 font-medium">No pending requests right now.</div>
                            ) : (
                                requests.map((req) => (
                                    <div key={req.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                                                {req.student_name ? req.student_name.charAt(0).toUpperCase() : "S"}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0f2747]">{req.student_name || "Student"}</p>
                                                <p className="text-xs text-slate-500">{req.message || "Wants to connect"}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleRequestAction(req.id, 'accepted')} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100">Accept</button>
                                            <button onClick={() => handleRequestAction(req.id, 'rejected')} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100">Decline</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* MY SHARED EXPERIENCES BLOCK */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#c9a227]" /> My Shared Experiences
                            </h2>
                            <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-2 py-1 rounded-md">{myExperiences.length} Total</span>
                        </div>
                        <div className="divide-y divide-slate-100 flex-1">
                            {isLoading ? (
                                <div className="p-10 text-center text-slate-400">Loading...</div>
                            ) : myExperiences.length === 0 ? (
                                <div className="p-10 text-center text-slate-400">You haven't shared any experiences yet.</div>
                            ) : (
                                myExperiences.map((exp, idx) => (
                                    <div key={idx} className="p-5 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                                {exp.company.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0f2747]">{exp.company} - {exp.role}</p>
                                                <p className="text-xs text-slate-500">{exp.year}</p>
                                            </div>
                                        </div>
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                                            <CheckCircle2 className="w-3 h-3" /> Published
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}