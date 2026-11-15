import { useState, useEffect } from "react";
import { User, Mail, BookOpen, Calendar, Building2, Briefcase, Award, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ProfileProps {
    onBack: () => void;
}

export default function Profile({ onBack }: ProfileProps) {
    const [userData, setUserData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await fetch('http://127.0.0.1:8000/api/auth/me/', {
                    headers: { 'Authorization': `Bearer ${token}` },
                    cache: 'no-store'
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("Profile Data:", data); // ✅ Check this in F12 console
                    setUserData(data);
                }
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
            setIsLoading(false);
        };
        fetchProfile();
    }, []);

    if (isLoading) return <div className="min-h-screen flex items-center justify-center font-bold text-slate-500">Loading Profile...</div>;
    if (!userData) return <div className="min-h-screen flex items-center justify-center font-bold text-rose-500">Failed to load profile.</div>;

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            <section className="max-w-4xl mx-auto px-6 py-12">
                <button onClick={onBack} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0f2747] transition">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </button>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    {/* Header Banner */}
                    <div className="bg-[#0f2747] p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="w-24 h-24 bg-[#c9a227] rounded-full mx-auto flex items-center justify-center text-4xl font-black text-[#0f2747] shadow-lg mb-4 relative z-10 border-4 border-white">
                            {userData.username.charAt(0).toUpperCase()}
                        </div>
                        <h1 className="text-2xl font-black text-white relative z-10">{userData.username}</h1>
                        <p className="text-[#c9a227] font-bold text-sm uppercase tracking-wider relative z-10 mt-1">{userData.role}</p>
                    </div>

                    <div className="p-8">
                        {/* Alumni Rewards Banner */}
                        {userData.role === 'alumni' && (
                            <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 mb-8 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#c9a227] rounded-xl flex items-center justify-center text-white shadow-md">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-[#0f2747]">Alumni Reward Points</h3>
                                        <p className="text-sm text-slate-600">Earn points by mentoring students and sharing experiences.</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-black text-[#c9a227]">{userData.points || 0}</span>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Total Points</p>
                                </div>
                            </div>
                        )}

                        {/* Profile Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <User className="w-5 h-5 text-[#c9a227]" />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Username</p>
                                        <p className="font-semibold text-[#0f2747]">{userData.username}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Mail className="w-5 h-5 text-[#c9a227]" />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Email Address</p>
                                        <p className="font-semibold text-[#0f2747]">{userData.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Calendar className="w-5 h-5 text-[#c9a227]" />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Batch</p>
                                        <p className="font-semibold text-[#0f2747]">{userData.batch || "Not provided"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {userData.role === 'student' ? (
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <BookOpen className="w-5 h-5 text-[#c9a227]" />
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Course</p>
                                            <p className="font-semibold text-[#0f2747]">{userData.course || "Not provided"}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <Building2 className="w-5 h-5 text-[#c9a227]" />
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Company</p>
                                                <p className="font-semibold text-[#0f2747]">{userData.company || "Not provided"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <Briefcase className="w-5 h-5 text-[#c9a227]" />
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Designation</p>
                                                <p className="font-semibold text-[#0f2747]">{userData.designation || "Not provided"}</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <div>
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase">Account Status</p>
                                        <p className="font-semibold text-emerald-800 capitalize">{userData.verification_status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}