import { useState, useEffect } from "react";
import { CheckCircle2, MessageSquare, HelpCircle, Send } from "lucide-react";

export default function QandA() {
    const [posts, setPosts] = useState<any[]>([]);
    const [answeringId, setAnsweringId] = useState<number | null>(null);
    const [answerText, setAnswerText] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

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

    const handleAnswer = async (id: number) => {
        if (!answerText) return;
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/qa/${id}/answer/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ answer: answerText })
            });

            if (response.ok) {
                alert("Answer submitted!");
                setAnsweringId(null);
                setAnswerText("");
                fetchPosts();
            } else {
                alert("Failed to submit answer. Are you an Alumni?");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            {/* ✅ HERO SECTION (Updated to match Dashboard/About layout) */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                            <MessageSquare className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Alumni Q&A Portal</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Q & A <span className="text-[#c9a227]">Forum</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                            Alumni can answer pending student questions here. Guide the next generation of tech talent.
                        </p>
                    </div>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-6">
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl border border-slate-200 p-6">
                            <div className="flex gap-3 mb-3">
                                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${post.is_answered ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                    {post.is_answered ? <CheckCircle2 className="w-3.5 h-3.5" /> : <HelpCircle className="w-3.5 h-3.5" />}
                                    {post.is_answered ? "Answered" : "Pending Answer"}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#0f2747] mb-2">{post.title}</h3>
                            <p className="text-sm text-slate-600 mb-4">{post.body}</p>

                            {post.is_answered ? (
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                    <p className="text-sm font-bold text-emerald-800 mb-1">Answer:</p>
                                    <p className="text-sm text-emerald-700">{post.answer}</p>
                                </div>
                            ) : (
                                <div>
                                    {answeringId === post.id ? (
                                        <div className="mt-4">
                                            <textarea
                                                value={answerText}
                                                onChange={(e) => setAnswerText(e.target.value)}
                                                rows={3}
                                                placeholder="Write your answer here..."
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#c9a227] mb-2 resize-none"
                                            />
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => setAnsweringId(null)} className="px-4 py-2 text-xs text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition">Cancel</button>
                                                <button onClick={() => handleAnswer(post.id)} className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition">
                                                    <Send className="w-3.5 h-3.5" /> Submit Answer
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button onClick={() => setAnsweringId(post.id)} className="text-xs font-bold text-[#0f2747] bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 transition">
                                            <MessageSquare className="w-4 h-4" /> Write an Answer
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}