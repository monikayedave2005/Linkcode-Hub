import { Target, Zap, ArrowLeft, CheckCircle2, Gift, Award } from "lucide-react";

interface RewardsProps {
    onBack: () => void;
}

export default function Rewards({ onBack }: RewardsProps) {
    // ✅ Mock Data for Points and Progress
    const currentPoints = 120;
    const nextMilestone = 200;
    const progressPercentage = (currentPoints / nextMilestone) * 100;

    // ✅ Mock Data for Points History
    const pointsHistory = [
        { id: 1, action: "Shared TCS Interview Experience", points: "+50", date: "2 days ago", type: "add" },
        { id: 2, action: "Answered Q&A: How to prepare for Infosys?", points: "+10", date: "4 days ago", type: "add" },
        { id: 3, action: "Reviewed Resume of Priya S.", points: "+20", date: "1 week ago", type: "add" },
        { id: 4, action: "Accepted Mentorship Request from Rahul M.", points: "+30", date: "2 weeks ago", type: "add" },
        { id: 5, action: "Redemption: ₹100 Amazon Voucher", points: "-100", date: "1 month ago", type: "subtract" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <button onClick={onBack} className="absolute top-0 left-0 text-white hover:text-[#c9a227] flex items-center gap-2 text-sm font-bold transition bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </button>

                        {/* ✅ Real Trophy Image with Glow */}
                        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 mt-6 relative">
                            <div className="absolute inset-0 bg-[#c9a227] blur-3xl opacity-30 rounded-full scale-75"></div>
                            <img
                                src="/trophy.png"
                                alt="Golden Trophy"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(201,162,39,0.3)] animate-in zoom-in duration-500"
                            />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                            Your Impact <span className="text-[#c9a227]">Rewards</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-8">
                            Earn points by helping students and unlock exclusive rewards from Linkcode Technologies.
                        </p>

                        {/* Progress Bar Area */}
                        <div className="bg-[#17335c]/80 border border-[#3a6199] p-6 rounded-2xl w-full max-w-xl text-left backdrop-blur-md">
                            <div className="flex justify-between items-end mb-3">
                                <div>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Current Score</p>
                                    <p className="text-4xl font-black text-white">{currentPoints} <span className="text-lg text-[#c9a227]">pts</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Next Reward at</p>
                                    <p className="text-xl font-bold text-slate-300">{nextMilestone} pts</p>
                                </div>
                            </div>

                            <div className="w-full bg-[#0a1a30] h-4 rounded-full overflow-hidden border border-[#3a6199] shadow-inner mb-3">
                                <div
                                    className="h-full bg-gradient-to-r from-[#c9a227] to-[#e8c75d] rounded-full relative"
                                    style={{ width: `${progressPercentage}%` }}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-sm"></div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 text-center font-medium">
                                You are <strong className="text-[#c9a227]">{nextMilestone - currentPoints} points</strong> away from a <strong className="text-white">₹500 Amazon Voucher!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">

                {/* Left Side: How to Earn & Badges */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[#0f2747] mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#c9a227]" /> How to Earn Points
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <span className="text-sm text-slate-600 font-medium">Share Experience</span>
                                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+50 pts</span>
                            </li>
                            <li className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <span className="text-sm text-slate-600 font-medium">Review Resume</span>
                                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+20 pts</span>
                            </li>
                            <li className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <span className="text-sm text-slate-600 font-medium">Accept Mentorship</span>
                                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+30 pts</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-sm text-slate-600 font-medium">Answer Q&A Forum</span>
                                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+10 pts</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[#0f2747] mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#c9a227]" /> Unlocked Badges
                        </h3>
                        <div className="flex gap-4 flex-wrap">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center border-2 border-[#c9a227] shadow-sm text-2xl">🥇</div>
                                <span className="text-[10px] font-bold text-slate-600 text-center">Top Mentor</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-blue-400 shadow-sm text-2xl">🚀</div>
                                <span className="text-[10px] font-bold text-slate-600 text-center">First Share</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-50 grayscale">
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-300 text-2xl">🏆</div>
                                <span className="text-[10px] font-bold text-slate-500 text-center">1000 Pts</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Points History */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
                        <h3 className="text-lg font-bold text-[#0f2747] mb-6 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-[#c9a227]" /> Recent Activity & Points
                        </h3>

                        <div className="space-y-4">
                            {pointsHistory.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.type === 'add' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                            }`}>
                                            {item.type === 'add' ? <CheckCircle2 className="w-5 h-5" /> : <Gift className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0f2747]">{item.action}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{item.date}</p>
                                        </div>
                                    </div>
                                    <span className={`text-base font-black ${item.type === 'add' ? 'text-emerald-600' : 'text-rose-600'
                                        }`}>
                                        {item.points}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}