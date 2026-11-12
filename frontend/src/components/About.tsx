import { ShieldCheck, Target, Users, Award, TrendingUp, BookOpen, Quote } from "lucide-react";

export default function About() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                            <ShieldCheck className="w-4 h-4 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">The Linkcode Story</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-3xl leading-tight">
                            Bridging the Gap Between <br className="hidden md:block" />
                            <span className="text-[#c9a227]">Talent and Opportunity.</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            Pune's premier IT training and placement institute. We empower students with industry-ready skills and connect them with top corporate opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-[#c9a227] transition-all group">
                        <div className="w-12 h-12 bg-amber-50 text-[#c9a227] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0f2747] mb-1">15+</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Years of Excellence</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-[#c9a227] transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0f2747] mb-1">20K+</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Students Trained</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-[#c9a227] transition-all group">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0f2747] mb-1">95%</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Placement Success</p>
                    </div>
                </div>
            </section>

            {/* STORY & MISSION SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Our Story */}
                    <div>
                        <div className="inline-block bg-[#0f2747] text-[#c9a227] text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wider">
                            Our Story
                        </div>
                        <h2 className="text-3xl font-extrabold text-[#0f2747] mb-6 leading-tight">
                            Empowering the Next Generation of <span className="text-[#c9a227]">Tech Leaders</span>
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Founded with a vision to transform IT education, Linkcode Technologies has grown into Pune's No. 1 training and placement institute. We build problem-solvers, not just coders.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8">
                            <strong>Linkcode Hub</strong> was created to give our students a competitive edge through authentic, peer-to-peer interview experiences and a supportive alumni community.
                        </p>

                        <div className="flex items-center gap-4 border-l-4 border-[#c9a227] pl-4 py-2 bg-slate-100/50 rounded-r-xl">
                            <Quote className="w-8 h-8 text-[#c9a227]/40 shrink-0" />
                            <p className="text-sm font-medium italic text-slate-700">
                                "Our mission is simple: bridge the gap between academic learning and corporate expectations."
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Core Values */}
                    <div className="space-y-4">
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex gap-4 hover:border-[#c9a227] transition-colors">
                            <div className="w-10 h-10 bg-amber-50 text-[#c9a227] rounded-xl flex items-center justify-center shrink-0">
                                <Target className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-[#0f2747] mb-1">Industry-Aligned Training</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Our curriculum is constantly updated to match the dynamic needs of the IT industry.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex gap-4 hover:border-[#c9a227] transition-colors">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-[#0f2747] mb-1">Practical Learning</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">We focus on hands-on projects, live coding, and real-world scenarios rather than just theory.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex gap-4 hover:border-[#c9a227] transition-colors">
                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-[#0f2747] mb-1">Strong Alumni Network</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Our alumni are placed in top MNCs and consistently give back by mentoring juniors.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}