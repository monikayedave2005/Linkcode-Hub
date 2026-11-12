import { useState, useEffect } from "react";
import { Search, CheckCircle2, XCircle, Clock, ArrowRight, ThumbsUp, MessageSquare, Sparkles, UserPlus } from "lucide-react";

// ✅ 1. Define the type of data coming from Django
interface Experience {
    id: number;
    company: string;
    role: string;
    year: string;
    rounds: string;
    ctc: string;
    status: string;
    quote: string;
    tags: string;
    upvotes: number;
    author_name: string;
    author_role: string;
    author_id: number; // ✅ ADDED THIS
    created_at: string;
}

export default function Experiences() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // ✅ 2. Fetch real data from Django on page load
    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/experiences/');
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                setExperiences(data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                setError("Could not load experiences. Is the backend running?");
                setIsLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    // ✅ 3. Mentorship Request Function
    const handleRequestMentorship = async (alumniId: number) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            alert("Please log in as a student to request mentorship.");
            return;
        }

        const message = prompt("Write a short message to the Alumni (optional):");
        if (message === null) return; // User clicked cancel

        try {
            const response = await fetch('http://127.0.0.1:8000/api/mentorship/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    alumni: alumniId,
                    message: message
                })
            });

            if (response.ok) {
                alert("Mentorship request sent successfully!");
            } else {
                const errorData = await response.json();
                alert("Failed: " + JSON.stringify(errorData));
            }
        } catch (error) {
            console.error(error);
            alert("Could not connect to server.");
        }
    };

    // ✅ 4. Filter logic
    const filteredExperiences = experiences.filter(exp =>
        activeFilter === "All" ? true : exp.status === activeFilter
    );

    // ✅ 5. Random colors for avatars
    const avatarColors = ["bg-yellow-600", "bg-purple-600", "bg-blue-600", "bg-teal-600", "bg-orange-600", "bg-pink-600", "bg-indigo-600"];
    const getAvatarColor = (name: string) => {
        const charCode = name.charCodeAt(0) || 0;
        return avatarColors[charCode % avatarColors.length];
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Verified Placement Archives</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Real Interview <span className="text-[#c9a227]">Experiences</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Explore comprehensive interview reports, round-by-round breakdown questions, and preparation strategies shared directly by Linkcode students and alumni.
                        </p>
                        <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl mb-8">
                            <div className="flex items-center pl-4 text-slate-400"><Search className="w-5 h-5" /></div>
                            <input type="text" placeholder="Filter by company (e.g. tcs, Persistent), role, or topic..." className="flex-1 px-4 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 text-sm" />
                            <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-8 font-bold text-sm transition-colors">Search</button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["All", "Selected", "Interview Completed", "Rejected"].map((filter) => (
                                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === filter ? "bg-[#c9a227] text-[#0f2747] shadow-md" : "bg-[#17335c] text-slate-300 hover:bg-[#1e3a5f] border border-[#3a6199]"}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Showing {filteredExperiences.length} Verified Reports
                    </p>
                    <p className="text-xs text-slate-500">Sorted by <span className="font-bold text-slate-700">Most Recent</span></p>
                </div>

                {/* ✅ Loading & Error States */}
                {isLoading && <div className="text-center py-20 text-slate-500 font-bold text-lg">Loading experiences...</div>}
                {error && <div className="text-center py-20 text-rose-500 font-bold text-lg">{error}</div>}
                {!isLoading && !error && filteredExperiences.length === 0 && (
                    <div className="text-center py-20 text-slate-500 font-bold text-lg">No experiences found.</div>
                )}

                <div className="space-y-6">
                    {filteredExperiences.map((exp) => (
                        <div key={exp.id} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-xl font-black text-[#c9a227] uppercase tracking-wide">{exp.company}</h2>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.year}</span>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.rounds}</span>
                                        <span className="text-xs text-slate-500 font-medium">• {exp.ctc}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f2747] group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                </div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border self-start ${exp.status === "Selected" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                                    exp.status === "Rejected" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-sky-50 text-sky-700 border-sky-200"
                                    }`}>
                                    {exp.status === "Selected" && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    {exp.status === "Rejected" && <XCircle className="w-3.5 h-3.5" />}
                                    {exp.status === "Interview Completed" && <Clock className="w-3.5 h-3.5" />}
                                    {exp.status}
                                </span>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-5 mb-5 border border-slate-100">
                                <p className="text-slate-700 italic text-sm leading-relaxed">"{exp.quote}"</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {exp.tags.split(',').map((tag, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-white text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${getAvatarColor(exp.author_name)} flex items-center justify-center text-white font-bold text-xs`}>
                                        {exp.author_name ? exp.author_name.charAt(0).toUpperCase() : "A"}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0f2747]">{exp.author_name || "Anonymous"}</p>
                                        <p className="text-[10px] text-slate-500 capitalize">{exp.author_role || "Alumni"} Contributor</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">

                                    {/* ✅ ADDED MENTORSHIP BUTTON HERE */}
                                    <button
                                        onClick={() => handleRequestMentorship(exp.author_id)}
                                        className="text-xs font-bold bg-[#0f2747] text-white px-4 py-2 rounded-lg hover:bg-[#c9a227] hover:text-[#0f2747] transition-colors flex items-center gap-1"
                                    >
                                        <UserPlus className="w-3 h-3" /> Request Mentorship
                                    </button>

                                    <button className="text-sm font-bold text-[#c9a227] hover:text-[#0f2747] transition-colors flex items-center gap-1 group/btn">
                                        View Full Report <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                        <button className="flex items-center gap-1.5 hover:text-[#0f2747] transition-colors"><ThumbsUp className="w-4 h-4" /> {exp.upvotes}</button>
                                        <button className="flex items-center gap-1.5 hover:text-[#0f2747] transition-colors"><MessageSquare className="w-4 h-4" /> 0</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}