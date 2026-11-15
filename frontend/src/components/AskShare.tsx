import { useState, useEffect } from "react";
import {
    Search, MessageSquare, CheckCircle2,
    Plus, ShieldCheck, HelpCircle, MessageCircle
} from "lucide-react";

export default function AskShare() {
    const [posts, setPosts] = useState<any[]>([]);
    const [activeFilter, setActiveFilter] = useState("All Posts");
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', body: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch real data
    const fetchPosts = async () => {
        const token = localStorage.getItem('access_token');
        try {
            const response = await fetch('http://127.0.0.1:8000/api/qa/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/qa/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Posted successfully!");
                setShowForm(false);
                setFormData({ title: '', body: '' });
                fetchPosts();
            } else {
                setIsSubmitting(false);
                alert("Failed to post. Make sure you are logged in.");
            }
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    // ✅ THIS IS THE MISSING FILTER LOGIC
    const filteredPosts = posts.filter(post => {
        if (activeFilter === "Answered") return post.is_answered === true;
        if (activeFilter === "Unanswered") return post.is_answered === false;
        return true; // For "All Posts"
    });

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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Ask & <span className="text-[#c9a227]">Share</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Ask your doubts, share your interview experiences, and help your peers.
                        </p>
                        <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl">
                            <div className="flex items-center pl-4 text-slate-400"><Search className="w-5 h-5" /></div>
                            <input type="text" placeholder="Search questions, topics..." className="flex-1 px-4 py-3.5 text-slate-800 outline-none" />
                            <button className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-6 font-bold text-sm transition-colors">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6">
                {/* FILTERS */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex items-center justify-between sticky top-20 z-40">
                    <div className="flex flex-wrap gap-2">
                        {["All Posts", "Answered", "Unanswered"].map((f) => (
                            <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeFilter === f ? "bg-[#c9a227] text-[#0f2747] shadow-md" : "bg-[#17335c] text-slate-300 hover:bg-[#1e3a5f] border border-[#3a6199]"}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => setShowForm(!showForm)} className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition-colors">
                        <Plus className="w-4 h-4" /> Ask or Share
                    </button>
                </div>

                {/* FORM */}
                {showForm && (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6 animate-in fade-in">
                        <h3 className="text-lg font-bold text-[#0f2747] mb-4">Create a Post</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 mb-4 focus:outline-none focus:border-[#c9a227]" />
                            <textarea required value={formData.body} onChange={(e) => setFormData({ ...formData, body: e.target.value })} placeholder="Details..." rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4 focus:outline-none focus:border-[#c9a227] resize-none" />
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-slate-500 font-bold hover:bg-slate-100 rounded-lg">Cancel</button>
                                <button type="submit" disabled={isSubmitting} className="bg-[#0f2747] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1a3a63]">
                                    {isSubmitting ? "Posting..." : "Post"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-4">
                        {/* ✅ USING filteredPosts.map INSTEAD OF posts.map */}
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-10 text-slate-500 font-bold">No posts found in this category.</div>
                        ) : (
                            filteredPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-200">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold mb-3 ${post.is_answered ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                            {post.is_answered ? <CheckCircle2 className="w-3.5 h-3.5" /> : <HelpCircle className="w-3.5 h-3.5" />}
                                            {post.is_answered ? "Answered" : "Unanswered"}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0f2747] mb-2">{post.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.body}</p>

                                        {post.is_answered && (
                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4 border-l-4 border-l-[#c9a227]">
                                                <p className="text-sm font-bold text-[#0f2747] mb-1">Answer from Alumni:</p>
                                                <p className="text-sm text-slate-700">{post.answer}</p>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                                            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                                                {post.student_name ? post.student_name.charAt(0).toUpperCase() : "S"}
                                            </div>
                                            <p className="text-xs font-bold text-slate-800">{post.student_name || "Student"} <span className="font-normal text-slate-500">• {new Date(post.created_at).toLocaleDateString()}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-[#0f2747] mb-4 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Community Guidelines</h3>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Be respectful</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> Share honest experiences</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}