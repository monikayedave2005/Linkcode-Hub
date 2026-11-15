import { useState, useEffect } from "react";
import { ArrowLeft, Search, FileText, X, CheckCircle2, Download } from "lucide-react";

interface ReviewResumesProps {
    onBack: () => void;
}

export default function ReviewResumes({ onBack }: ReviewResumesProps) {
    const [resumes, setResumes] = useState<any[]>([]);
    const [selectedResume, setSelectedResume] = useState<any>(null);
    const [feedback, setFeedback] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // ✅ Fetch REAL resumes from Django
    useEffect(() => {
        const fetchResumes = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await fetch('http://127.0.0.1:8000/api/resumes/', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    // Only show pending ones
                    setResumes(data.filter((r: any) => r.status === 'pending'));
                }
            } catch (error) {
                console.error("Failed to fetch resumes", error);
            }
            setIsLoading(false);
        };
        fetchResumes();
    }, []);

    // ✅ Handle Feedback Submit
    const handleSubmitFeedback = async () => {
        if (!feedback) return alert("Please write feedback");
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/resumes/${selectedResume.id}/submit_feedback/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ feedback: feedback })
            });

            if (response.ok) {
                alert("Feedback submitted successfully!");
                // Remove from UI
                setResumes(resumes.filter(r => r.id !== selectedResume.id));
                setSelectedResume(null);
                setFeedback("");
            } else {
                alert("Failed to submit feedback.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <button onClick={onBack} className="absolute top-0 left-0 text-white hover:text-[#c9a227] flex items-center gap-2 text-sm font-bold transition bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </button>
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6 mt-8">
                            <FileText className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Student Resume Reviews</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Guide the <span className="text-[#c9a227]">Future Talent</span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                            Review resumes uploaded by students, provide constructive feedback, and help them land their dream jobs.
                        </p>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-lg font-bold text-[#0f2747] flex items-center gap-2">Pending Resume Reviews</h2>
                        <div className="relative w-full md:w-72">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input type="text" placeholder="Search students..." className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] text-sm" />
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="p-10 text-center text-slate-500 font-bold">Loading...</div>
                    ) : resumes.length === 0 ? (
                        <div className="p-10 text-center text-slate-500 font-bold">No pending resumes right now.</div>
                    ) : (
                        <div className="divide-y divide-slate-100">
                            {resumes.map((resume) => (
                                <div key={resume.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                                            {resume.student_name ? resume.student_name.charAt(0).toUpperCase() : "S"}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-[#0f2747]">{resume.student_name}</h3>
                                            <p className="text-xs text-slate-500 mt-1">Uploaded: {new Date(resume.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <a href={resume.resume_file} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#c9a227] hover:underline flex items-center gap-1">
                                            <Download className="w-4 h-4" /> View PDF
                                        </a>
                                        <button
                                            onClick={() => setSelectedResume(resume)}
                                            className="bg-[#0f2747] hover:bg-[#1a3a63] text-white px-6 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2"
                                        >
                                            <FileText className="w-4 h-4" /> Review Resume
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* ✅ Real Feedback Modal */}
            {selectedResume && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300 relative">
                        <button onClick={() => setSelectedResume(null)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-500 transition">
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-black text-[#0f2747] mb-1">Review Resume</h2>
                        <p className="text-sm text-slate-500 mb-6">Providing feedback for <span className="font-bold text-[#0f2747]">{selectedResume.student_name}</span></p>

                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Your Feedback / Suggestions</label>
                        <textarea
                            rows={4}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Provide constructive feedback on formatting, projects, or skills..."
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl p-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm resize-none mb-6"
                        ></textarea>

                        <button
                            onClick={handleSubmitFeedback}
                            className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-black py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(201,162,39,0.3)] flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 className="w-5 h-5" /> Submit Feedback
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}