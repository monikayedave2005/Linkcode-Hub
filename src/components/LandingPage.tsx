import { ArrowRight, BookOpen, MessageSquare, BarChart3, Users, Quote, Briefcase } from 'lucide-react';

// ✅ 1. Interface अपडेट केला आहे (नवीन पेजेस स्वीकारण्यासाठी)
interface LandingPageProps {
    onNavigate: (page: 'register-portal' | 'student-login' | 'alumni-login' | 'landing') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div className="min-h-screen relative flex flex-col font-sans text-white overflow-hidden">

            {/* ✅ Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/meeting-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#0a1a30]/50"></div>
            </div>

            {/* Top Navigation Bar */}
            <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
                {/* Top Left Logo Box */}
                <div className="flex flex-col items-start cursor-pointer bg-[#0f2747] border border-[#c9a227]/40 px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(15,39,71,0.8)]">
                    <img src="/linkcode-logo.png" alt="Linkcode Logo" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* ✅ Top Right Buttons (Student Login, Alumni Login, Get Started) */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onNavigate('student-login')}
                        className="text-sm font-bold text-white hover:text-[#c9a227] transition-colors px-4 py-2"
                    >
                        Student Login
                    </button>
                    <button
                        onClick={() => onNavigate('alumni-login')}
                        className="text-sm font-bold text-white hover:text-[#c9a227] transition-colors px-4 py-2"
                    >
                        Alumni Login
                    </button>
                    <button
                        onClick={() => onNavigate('register-portal')}
                        className="bg-[#0f2747] hover:bg-[#17335c] text-[#c9a227] border border-[#c9a227] font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(201,162,39,0.3)] flex items-center gap-2 hover:scale-105"
                    >
                        Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center mt-4">

                {/* Center Logo Box */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-[#0f2747] border border-[#c9a227]/50 rounded-2xl px-10 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/linkcode-logo.png"
                            alt="Linkcode Logo"
                            className="h-14 md:h-16 w-auto object-contain"
                        />
                    </div>
                    <p className="text-sm md:text-base tracking-[0.5em] text-white uppercase font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        Learn • Share • Grow Together
                    </p>
                </div>

                {/* Pill Badge */}
                <div className="bg-[#0f2747]/90 border border-[#3a6199] rounded-full px-6 py-2.5 text-xs font-semibold text-white mb-8 flex items-center gap-2 shadow-lg">
                    <Users className="w-4 h-4 text-[#c9a227]" /> Student-driven placement community
                </div>

                {/* Hero Title */}
                <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6 max-w-4xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]">
                    Real Experiences. <br className="md:hidden" />
                    <span className="text-[#c9a227] drop-shadow-[0_0_20px_rgba(201,162,39,0.4)]">Brighter Futures.</span>
                </h3>

                <p className="text-slate-100 text-sm md:text-lg max-w-2xl mb-12 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium">
                    A student-driven platform to share placement experiences, ask questions, explore insights and help each other succeed.
                </p>

                {/* 4 Glass Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-14">
                    {/* Card 1 */}
                    <div
                        onClick={() => onNavigate('register-portal')}
                        className="bg-[#0f2747]/95 hover:bg-[#17335c] border border-[#3a6199] hover:border-[#c9a227] rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,162,39,0.2)] group"
                    >
                        <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-5 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#c9a227] transition-colors">Explore</h4>
                        <p className="text-sm text-slate-300">Real placement experiences</p>
                    </div>

                    {/* Card 2 */}
                    <div
                        onClick={() => onNavigate('register-portal')}
                        className="bg-[#0f2747]/95 hover:bg-[#17335c] border border-[#3a6199] hover:border-[#c9a227] rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,162,39,0.2)] group"
                    >
                        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-5 border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all">
                            <MessageSquare className="w-7 h-7" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#c9a227] transition-colors">Ask & Share</h4>
                        <p className="text-sm text-slate-300">Get answers from peers</p>
                    </div>

                    {/* Card 3 */}
                    <div
                        onClick={() => onNavigate('register-portal')}
                        className="bg-[#0f2747]/95 hover:bg-[#17335c] border border-[#3a6199] hover:border-[#c9a227] rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,162,39,0.2)] group"
                    >
                        <div className="w-14 h-14 bg-[#c9a227]/20 text-[#c9a227] rounded-2xl flex items-center justify-center mb-5 border border-[#c9a227]/30 group-hover:scale-110 group-hover:bg-[#c9a227]/30 transition-all">
                            <BarChart3 className="w-7 h-7" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#c9a227] transition-colors">Gain Insights</h4>
                        <p className="text-sm text-slate-300">Discover trends & opportunities</p>
                    </div>

                    {/* Card 4 */}
                    <div
                        onClick={() => onNavigate('register-portal')}
                        className="bg-[#0f2747]/95 hover:bg-[#17335c] border border-[#3a6199] hover:border-[#c9a227] rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,162,39,0.2)] group"
                    >
                        <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-5 border border-purple-500/30 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all">
                            <Users className="w-7 h-7" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#c9a227] transition-colors">Grow Together</h4>
                        <p className="text-sm text-slate-300">Support the Linkcode community</p>
                    </div>
                </div>

                {/* Quote Banner */}
                <div className="w-full max-w-4xl bg-[#0f2747]/95 border border-[#3a6199] rounded-2xl p-6 flex items-center gap-4 mb-12 text-left shadow-2xl">
                    <div className="w-12 h-12 rounded-full bg-[#17335c] border border-[#c9a227]/30 flex items-center justify-center shrink-0">
                        <Quote className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                        <p className="text-base italic text-slate-200 mb-1">"Every experience shared today can help someone prepare better tomorrow."</p>
                        <p className="text-sm font-bold text-[#c9a227]">— Linkcode Technology</p>
                    </div>
                </div>

                {/* ✅ Bottom Buttons - Added Alumni Option */}
                <div className="mb-12 flex flex-col items-center">
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <button
                            onClick={() => onNavigate('register-portal')}
                            className="bg-[#0f2747] hover:bg-[#17335c] text-[#c9a227] border border-[#c9a227] font-black px-10 py-4 rounded-full text-base transition-all shadow-[0_0_25px_rgba(201,162,39,0.4)] flex items-center gap-2 hover:scale-105"
                        >
                            Get Started <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => onNavigate('student-login')}
                            className="bg-[#17335c] hover:bg-[#1e3a5f] text-white border-2 border-[#3a6199] hover:border-[#c9a227] font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105"
                        >
                            Student Sign In
                        </button>
                        <button
                            onClick={() => onNavigate('alumni-login')}
                            className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 flex items-center gap-2"
                        >
                            <Briefcase className="w-5 h-5" /> Alumni Sign In
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}