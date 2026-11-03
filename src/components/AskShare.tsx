import { useState } from "react";
import {
    Search, MessageSquare, TrendingUp, Users, Star, CheckCircle2,
    Plus, Award, Quote, Flame, ShieldCheck, HelpCircle, MessageCircle
} from "lucide-react";

const posts = [
    {
        id: 1,
        type: "Question",
        title: "What topics should I focus on for TCS technical round?",
        body: "I have my TCS technical round next week for the Software Developer role. Can anyone who recently appeared for the interview share the important topics and type of questions asked? Is DSA heavily weighted or should I focus more on DBMS and OOP?",
        tags: ["TCS", "Technical", "DSA", "DBMS"],
        author: { name: "Riya S.", role: "TE Computer", batch: "Batch 2026", avatar: "RS", color: "bg-orange-500" },
        timeAgo: "2 hours ago",
        answers: 5,
        views: 124,
        votes: 12,
    },
    {
        id: 2,
        type: "Experience",
        title: "Infosys interview experience (Result Awaited)",
        body: "I appeared for the Infosys off-campus drive on 5th Sept 2026. Sharing my experience for those who have upcoming drives. The aptitude round was standard, technical focused on Java + DBMS, HR was conversational.",
        tags: ["Infosys", "Technical", "HR", "Off-Campus"],
        author: { name: "Aditya P.", role: "BE IT", batch: "Batch 2026", avatar: "AP", color: "bg-teal-600" },
        timeAgo: "5 hours ago",
        answers: 8,
        views: 230,
        votes: 28,
    },
    {
        id: 3,
        type: "Discussion",
        title: "How to improve problem-solving for company placements?",
        body: "I am good with basic DSA but struggle with medium and hard problems. What resources, strategy, or platforms helped you improve? Any specific roadmap for the next 3 months?",
        tags: ["DSA", "Preparation Tips"],
        author: { name: "Sneha K.", role: "TE Computer", batch: "Batch 2026", avatar: "SK", color: "bg-purple-600" },
        timeAgo: "1 day ago",
        answers: 12,
        views: 412,
        votes: 36,
    },
    {
        id: 4,
        type: "Question",
        title: "Is it possible to get placed with low CGPA?",
        body: "My CGPA is 6.5 and I'm worried about placements. Has anyone with a similar CGPA been placed? What companies should I target and what can I do to improve my chances?",
        tags: ["Placement", "CGPA", "Advice"],
        author: { name: "Rohit M.", role: "BE Mechanical", batch: "Batch 2026", avatar: "RM", color: "bg-red-600" },
        timeAgo: "1 day ago",
        answers: 20,
        views: 380,
        votes: 25,
    },
    {
        id: 5,
        type: "Experience",
        title: "Accenture interview experience (Rejected)",
        body: "I gave my Accenture interview last week and unfortunately got rejected. Sharing my experience so that others can prepare better. The questions were mostly scenario-based and coding focused.",
        tags: ["Accenture", "Coding", "HR"],
        author: { name: "Priya S.", role: "TE IT", batch: "Batch 2026", avatar: "PS", color: "bg-pink-600" },
        timeAgo: "2 days ago",
        answers: 15,
        views: 500,
        votes: 42,
    },
];

const typeStyles: Record<string, any> = {
    Question: { bg: "bg-orange-50", text: "text-orange-600", icon: HelpCircle },
    Experience: { bg: "bg-purple-50", text: "text-purple-600", icon: Award },
    Discussion: { bg: "bg-blue-50", text: "text-blue-600", icon: MessageCircle },
};

export default function AskShare() {
    const [activeFilter, setActiveFilter] = useState("All Posts");
    const [votedPosts, setVotedPosts] = useState<number[]>([]);

    const handleVote = (id: number) => {
        if (votedPosts.includes(id)) {
            setVotedPosts(votedPosts.filter(pId => pId !== id));
        } else {
            setVotedPosts([...votedPosts, id]);
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
                            <MessageSquare className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Student-driven knowledge exchange</span>
                        </div>

                        {/* ✅ White + Yellow Heading */}
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Ask & <span className="text-[#c9a227]">Share</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Questions. Discussions. Experiences.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Ask your doubts, share your interview experiences, and help your peers — whether you are a current student or an alumnus. Every question and experience matters!
                        </p>

                        {/* Search Bar inside Hero */}
                        <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl">
                            <div className="flex items-center pl-4 text-slate-400">
                                <Search className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search questions, interview discussions, topics..."
                                className="flex-1 px-4 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 text-sm"
                            />
                            <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-6 font-bold text-sm transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-6">

                {/* LIVE STRIP */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-bold text-slate-800">42</span> questions answered today
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-[#c9a227]" /> 156 posts this month</span>
                        <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-orange-500" /> Trending: <span className="font-bold text-slate-800">TCS Interview, Resume Review</span></span>
                    </div>
                </div>

                {/* FILTERS */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex items-center justify-between sticky top-20 z-40">
                    <div className="flex flex-wrap gap-2">
                        {["All Posts", "Questions", "Experiences", "Discussions"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === f
                                    ? "bg-[#c9a227] text-[#0f2747] shadow-md"
                                    : "bg-[#17335c] text-slate-300 hover:bg-[#1e3a5f] border border-[#3a6199]"
                                    }`}
                            >
                                {f} {f !== "All Posts" && <span className="opacity-60 ml-1">2</span>}
                            </button>
                        ))}
                    </div>
                    <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition-colors">
                        <Plus className="w-4 h-4" /> Ask or Share
                    </button>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Posts Feed */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Category Chips */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["DSA", "HR", "Technical", "Accenture", "Advice", "CGPA", "Coding"].map(chip => (
                                <button key={chip} className="px-3 py-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-md hover:border-[#c9a227]">
                                    {chip}
                                </button>
                            ))}
                        </div>

                        {posts.map((post) => {
                            const isVoted = votedPosts.includes(post.id);
                            const type = typeStyles[post.type];
                            const TypeIcon = type.icon;

                            return (
                                <div key={post.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4 hover:shadow-md transition-shadow">
                                    {/* Vote Button */}
                                    <div className="flex flex-col items-center">
                                        <button
                                            onClick={() => handleVote(post.id)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isVoted ? "bg-[#0f2747] text-[#c9a227]" : "bg-slate-50 text-slate-400 hover:text-slate-600 border border-slate-200"
                                                }`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                        </button>
                                        <span className={`text-sm font-bold mt-1 ${isVoted ? "text-[#0f2747]" : "text-slate-600"}`}>
                                            {post.votes + (isVoted ? 1 : 0)}
                                        </span>
                                    </div>

                                    {/* Post Content */}
                                    <div className="flex-1">
                                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold mb-3 ${type.bg} ${type.text}`}>
                                            <TypeIcon className="w-3.5 h-3.5" /> {post.type}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0f2747] mb-2 cursor-pointer hover:text-[#0093E9]">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            {post.body}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-7 h-7 rounded-full ${post.author.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                                                    {post.author.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-800">{post.author.name} <span className="font-normal text-slate-500">· {post.author.role} · {post.author.batch} · {post.timeAgo}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                                <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {post.answers} answers</span>
                                                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {post.views} views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Sidebar */}
                    <aside className="space-y-6">
                        <div className="flex flex-col gap-3">
                            <button className="w-full bg-[#0f2747] hover:bg-[#1a3a63] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <Plus className="w-4 h-4" /> Ask a Question
                            </button>
                            <button className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <Plus className="w-4 h-4" /> Share Your Experience
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-[#0f2747] mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#c9a227]" /> Community at a Glance</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#c9a227]"><MessageSquare className="w-5 h-5" /></div>
                                    <div><p className="text-xl font-bold text-[#0f2747]">324</p><p className="text-xs text-slate-500">Total Posts</p></div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-5 h-5" /></div>
                                    <div><p className="text-xl font-bold text-[#0f2747]">1.2K</p><p className="text-xs text-slate-500">Answers</p></div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><Users className="w-5 h-5" /></div>
                                    <div><p className="text-xl font-bold text-[#0f2747]">850</p><p className="text-xs text-slate-500">Students & Alumni</p></div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#c9a227]"><Star className="w-5 h-5" /></div>
                                    <div><p className="text-xl font-bold text-[#0f2747]">95%</p><p className="text-xs text-slate-500">Helpful Responses</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-[#0f2747] mb-4 flex items-center gap-2"><Award className="w-4 h-4 text-[#c9a227]" /> Top Contributors</h3>
                            <ol className="space-y-3">
                                {[{ name: "Akash J.", score: 87, medal: "🥇" }, { name: "Neha R.", score: 62, medal: "🥈" }, { name: "Vikram S.", score: 48, medal: "🥉" }].map((user, i) => (
                                    <li key={user.name} className="flex items-center gap-3 text-sm">
                                        <span className="text-lg">{user.medal}</span>
                                        <span className="flex-1 font-semibold text-slate-700">{user.name}</span>
                                        <span className="text-xs text-slate-500 font-bold">{user.score}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-[#0f2747] mb-4 flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500" /> Trending Topics</h3>
                            <ol className="space-y-3">
                                {["TCS Interview", "Resume Review", "Off-Campus Opportunities", "HR Questions", "DSA Preparation"].map((topic, i) => (
                                    <li key={topic} className="flex items-center gap-3 text-sm">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? "bg-[#c9a227] text-white" : "bg-slate-100 text-slate-500"}`}>{i + 1}</span>
                                        <span className="flex-1 font-semibold text-slate-700">{topic}</span>
                                        <span className="text-xs text-slate-500">{48 - i * 4}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-[#0f2747] mb-4 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Community Guidelines</h3>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Be respectful and supportive</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Share honest and genuine experiences</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Avoid sharing sensitive information</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Help others grow</li>
                            </ul>
                        </div>

                        <div className="bg-[#0f2747] rounded-2xl p-6 shadow-sm relative overflow-hidden">
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#c9a227]/20" />
                            <p className="text-sm italic text-white/90 mb-3 relative z-10 leading-relaxed">"A supportive community builds brighter futures."</p>
                            <p className="text-xs font-bold text-[#c9a227]">— Linkcode Hub</p>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}