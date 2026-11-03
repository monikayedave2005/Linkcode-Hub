import { Search, Users, Award, HelpCircle, TrendingUp, ThumbsUp, MessageSquare, CheckCircle, Clock, XCircle, ArrowRight, Heart, Calendar, FileText } from 'lucide-react';

interface HomeProps {
    onNavigate: (page: 'home' | 'experiences' | 'companies' | 'askshare' | 'about' | 'insights') => void;
}

export default function Home({ onNavigate }: HomeProps) {
    const popularCompanies = [
        { name: "tcs", logo: "/logos/tcs.png" },
        { name: "Infosys", logo: "/logos/infosys.png" },
        { name: "accenture", logo: "/logos/accenture.png" },
        { name: "Persistent", logo: "/logos/persistent.png" },
        { name: "Capgemini", logo: "/logos/capgemini.png" },
        { name: "wipro", logo: "/logos/wipro.png" },
        { name: "Cognizant", logo: "/logos/cognizant.png" },
        { name: "HCL", logo: "/logos/hcl.png" },
    ];

    return (
        <div className="bg-slate-50 font-sans">

            {/* ✅ 1. HERO SECTION (Golden Gradient) */}
            <section className="bg-gradient-to-r from-amber-50/60 via-white to-white pt-12 pb-16 px-6 border-b border-amber-100/60">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-[#0f2747] tracking-tight leading-none mb-4">
                            Real Experiences. <br />
                            <span className="text-[#c9a227]">Stronger Together.</span>
                        </h1>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                            A community platform for Linkcode students to share placement experiences, ask questions, and learn from each other — whether you got selected, rejected, or are still in the process.
                        </p>

                        {/* Search Box */}
                        <div className="flex items-center bg-white rounded-xl p-2 border border-slate-200/80 shadow-lg mb-4 max-w-xl">
                            <Search className="w-5 h-5 text-slate-400 ml-3 mr-2" />
                            <input
                                type="text"
                                placeholder="Search companies, interview topics..."
                                className="bg-transparent w-full text-slate-900 placeholder-slate-400 focus:outline-none text-sm"
                            />
                            <button
                                onClick={() => onNavigate('companies')}
                                className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold px-5 py-2.5 rounded-lg text-sm transition shadow"
                            >
                                Search
                            </button>
                        </div>

                        {/* Popular Tags */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                            <span className="font-semibold text-slate-700">Popular:</span>
                            {['TCS', 'Infosys', 'Accenture', 'Persistent', 'Capgemini', 'Wipro'].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => onNavigate('companies')}
                                    className="bg-white hover:bg-amber-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 transition shadow-sm font-medium"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Hero Dark Card */}
                    <div className="bg-[#0f2747] border border-[#3a6199] rounded-3xl p-6 shadow-2xl relative text-white">
                        <div className="bg-gradient-to-b from-[#17335c] to-[#0a1a30] border border-[#3a6199]/60 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden">
                            <div className="flex justify-between items-center mb-6 text-[10px] text-slate-400 relative z-10">
                                <span className="bg-white/10 text-[#c9a227] px-2.5 py-1 rounded-full border border-[#c9a227]/20 font-medium">Students Helping Students</span>
                                <span>Linkcode Group of Institutes</span>
                            </div>

                            {/* ✅ UPDATED LOGO BOX (Removed White Background) */}
                            <div className="bg-[#0f2747] rounded-2xl mx-auto flex flex-col items-center justify-center mb-6 border border-[#c9a227]/30 shadow-lg relative z-10 px-8 py-4 w-fit">
                                <img
                                    src="/linkcode-logo.png"
                                    alt="Linkcode Logo"
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 relative z-10">Code. Evaluate. Improve.</h3>
                            <p className="text-xs text-slate-400 mb-6 relative z-10">Verified Linkcode Community</p>

                            <div className="flex justify-center gap-2 relative z-10">
                                {['👨‍💻', '👩‍🎓', '🧑‍💼', '👩‍💻'].map((badge, idx) => (
                                    <span key={idx} className="w-10 h-10 rounded-full bg-[#17335c] border-2 border-[#c9a227] text-lg flex items-center justify-center shadow-lg">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. STATS ROW (Connecting Line) */}
            <section className="max-w-7xl mx-auto px-6 py-10 relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#0f2747] -z-0"></div>
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-5 shadow-xl text-center text-white">
                        <span className="text-2xl md:text-3xl font-black text-white block">2,500+</span>
                        <span className="text-xs text-slate-300 mt-1 block font-medium">Placement Experiences</span>
                    </div>
                    <div className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-5 shadow-xl text-center text-white">
                        <span className="text-2xl md:text-3xl font-black text-white block">300+</span>
                        <span className="text-xs text-slate-300 mt-1 block font-medium">Companies Covered</span>
                    </div>
                    <div className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-5 shadow-xl text-center text-white">
                        <span className="text-2xl md:text-3xl font-black text-white block">5,000+</span>
                        <span className="text-xs text-slate-300 mt-1 block font-medium">Linkcode Students & Alumni</span>
                    </div>
                    <div className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-5 shadow-xl text-center text-white">
                        <span className="text-2xl md:text-3xl font-black text-white block">95%</span>
                        <span className="text-xs text-slate-300 mt-1 block font-medium">Would Recommend</span>
                    </div>
                </div>
            </section>

            {/* ✅ 3. HOW IT WORKS */}
            <section className="max-w-7xl mx-auto px-6 mt-10 mb-20 text-center">
                <h2 className="text-3xl font-extrabold text-[#0f2747] mb-2">How It Works</h2>
                <p className="text-slate-600 text-sm mb-10">A simple way to learn, share and grow together.</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                    <div onClick={() => onNavigate('experiences')} className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-6 cursor-pointer hover:border-[#c9a227] transition shadow-lg text-white">
                        <Users className="w-6 h-6 text-[#c9a227] mb-3" />
                        <h3 className="font-bold text-white mb-1 text-base">Explore Experiences</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">Read real-shared experiences by Linkcode students and alumni — selected, rejected, or ongoing.</p>
                    </div>
                    <div onClick={() => onNavigate('askshare')} className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-6 cursor-pointer hover:border-[#c9a227] transition shadow-lg text-white">
                        <Award className="w-6 h-6 text-[#c9a227] mb-3" />
                        <h3 className="font-bold text-white mb-1 text-base">Share Your Experience</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">Contribute your placement journey to help others, no matter the outcome.</p>
                    </div>
                    <div onClick={() => onNavigate('askshare')} className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-6 cursor-pointer hover:border-[#c9a227] transition shadow-lg text-white">
                        <HelpCircle className="w-6 h-6 text-[#c9a227] mb-3" />
                        <h3 className="font-bold text-white mb-1 text-base">Ask & Discuss</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">Ask questions and get answers from students and alumni who have been through it.</p>
                    </div>
                    <div onClick={() => onNavigate('insights')} className="bg-[#0f2747] border border-[#3a6199] rounded-2xl p-6 cursor-pointer hover:border-[#c9a227] transition shadow-lg text-white">
                        <TrendingUp className="w-6 h-6 text-[#c9a227] mb-3" />
                        <h3 className="font-bold text-white mb-1 text-base">Gain Insights</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">Discover trends, frequently asked topics and company insights to prepare better.</p>
                    </div>
                </div>
            </section>

            {/* ✅ 4. RECENT EXPERIENCES (Dark Background Matching SAE) */}
            <section className="bg-[#0a1a30] py-20 border-t border-[#1e3a5f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white mb-2">Recent Experiences</h2>
                            <p className="text-sm text-slate-400">Latest placement experiences shared by the community.</p>
                        </div>
                        <button onClick={() => onNavigate('experiences')} className="text-[#c9a227] font-bold text-sm hover:underline flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#17335c] border border-[#3a6199] rounded-2xl p-6 flex flex-col justify-between text-white">
                            <div>
                                <div className="flex justify-between items-center mb-4 border-b border-[#3a6199] pb-3">
                                    <span className="text-lg font-bold text-white lowercase">tcs</span>
                                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" /> Selected
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Software Developer</h3>
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2024</span>
                                    <span className="flex items-center gap-1"><Award className="w-3 h-3" /> 3 Rounds</span>
                                </div>
                                <div className="bg-[#0f2747] rounded-xl p-4 mb-4 border border-[#3a6199]/50">
                                    <p className="text-sm italic text-slate-300 leading-relaxed">"Aptitude was moderate, technical round focused on DSA and OOP. HR round was friendly."</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">DSA</span>
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">OOP</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-[#3a6199] text-xs text-slate-400">
                                <span className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#0f2747] flex items-center justify-center text-[10px] font-bold">A</div>
                                    Anonymous
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> 24</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 5</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#17335c] border border-[#3a6199] rounded-2xl p-6 flex flex-col justify-between text-white">
                            <div>
                                <div className="flex justify-between items-center mb-4 border-b border-[#3a6199] pb-3">
                                    <span className="text-lg font-bold text-white lowercase">infosys</span>
                                    <span className="text-[10px] bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full border border-sky-500/30 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> Interview Completed
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">System Engineer</h3>
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2024</span>
                                    <span className="flex items-center gap-1"><Award className="w-3 h-3" /> 3 Rounds</span>
                                </div>
                                <div className="bg-[#0f2747] rounded-xl p-4 mb-4 border border-[#3a6199]/50">
                                    <p className="text-sm italic text-slate-300 leading-relaxed">"Questions were mostly from core CS subjects. Good experience overall."</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">DBMS</span>
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">CN</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-[#3a6199] text-xs text-slate-400">
                                <span className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#0f2747] flex items-center justify-center text-[10px] font-bold">A</div>
                                    Anonymous
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> 18</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 3</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#17335c] border border-[#3a6199] rounded-2xl p-6 flex flex-col justify-between text-white">
                            <div>
                                <div className="flex justify-between items-center mb-4 border-b border-[#3a6199] pb-3">
                                    <span className="text-lg font-bold text-white lowercase">accenture</span>
                                    <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full border border-rose-500/30 flex items-center gap-1">
                                        <XCircle className="w-3 h-3" /> Rejected
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Application Developer</h3>
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2024</span>
                                    <span className="flex items-center gap-1"><Award className="w-3 h-3" /> 4 Rounds</span>
                                </div>
                                <div className="bg-[#0f2747] rounded-xl p-4 mb-4 border border-[#3a6199]/50">
                                    <p className="text-sm italic text-slate-300 leading-relaxed">"Technical round was tricky. Focused more on problem-solving and system design."</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">System Design</span>
                                    <span className="text-[10px] bg-[#0f2747] text-slate-300 px-2 py-1 rounded-md border border-[#3a6199]">DBMS</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-[#3a6199] text-xs text-slate-400">
                                <span className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#0f2747] flex items-center justify-center text-[10px] font-bold">A</div>
                                    Anonymous
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> 32</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 7</span>
                                </div>
                            </div>
                        </div>

                        {/* Side CTAs */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#17335c] border border-[#c9a227] rounded-2xl p-6 flex-1 flex flex-col justify-between shadow-lg">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#0f2747] border border-[#c9a227] flex items-center justify-center text-[#c9a227] mb-4">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">Have a placement experience to share?</h3>
                                    <p className="text-xs text-slate-400 mb-6">Help your peers by sharing your interview rounds, questions, and insights.</p>
                                </div>
                                <button onClick={() => onNavigate('askshare')} className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                                    Share Experience <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="bg-[#17335c] border border-[#3a6199] rounded-2xl p-6 flex-1 flex flex-col justify-between shadow-lg">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#0f2747] border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">Have a question?</h3>
                                    <p className="text-xs text-slate-400 mb-6">Ask the community and get answers from students and alumni who recently gave interviews.</p>
                                </div>
                                <button onClick={() => onNavigate('askshare')} className="w-full bg-transparent border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                                    Ask a Question <HelpCircle className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 5. POPULAR COMPANIES (Updated to match SAE design) */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#0f2747] mb-2">Popular Companies</h2>
                            <p className="text-sm text-slate-500">Explore experiences from top recruiters in Linkcode.</p>
                        </div>
                        <button onClick={() => onNavigate('companies')} className="text-[#c9a227] font-bold text-sm hover:underline flex items-center gap-1">
                            View All Companies <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Grid adjusted to fit 9 items perfectly on large screens */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
                        {popularCompanies.map((company, idx) => (
                            <div
                                key={idx}
                                className="bg-[#17335c] border border-[#3a6199] rounded-2xl py-6 px-2 flex flex-col items-center justify-center cursor-pointer hover:border-[#c9a227] hover:-translate-y-1 transition-all shadow-md group"
                            >
                                <div className="w-20 h-10 flex items-center justify-center mb-4">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-full h-full object-contain drop-shadow-md"
                                    />
                                </div>
                                <span className="text-[11px] font-bold text-white text-center w-full truncate tracking-wide">
                                    {company.name}
                                </span>
                            </div>
                        ))}

                        {/* View All Card */}
                        <div
                            onClick={() => onNavigate('companies')}
                            className="bg-[#0f2747] border border-[#c9a227] rounded-2xl py-6 px-2 flex flex-col items-center justify-center cursor-pointer hover:bg-[#17335c] hover:-translate-y-1 transition-all shadow-md"
                        >
                            <div className="w-20 h-10 flex items-center justify-center mb-4">
                                <div className="w-10 h-10 bg-transparent border border-[#c9a227] rounded-full flex items-center justify-center">
                                    <ArrowRight className="w-5 h-5 text-[#c9a227]" />
                                </div>
                            </div>
                            <span className="text-[11px] font-bold text-[#c9a227] text-center w-full tracking-wide">
                                View All
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}