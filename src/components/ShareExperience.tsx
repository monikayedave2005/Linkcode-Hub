import { useState } from 'react';
import { ArrowLeft, Building2, Briefcase, IndianRupee, Layers, CheckCircle2, XCircle, Clock, Plus, Minus, ArrowRight } from 'lucide-react';

interface ShareExperienceProps {
    onSuccess: () => void;
    onBack: () => void;
}

export default function ShareExperience({ onSuccess, onBack }: ShareExperienceProps) {
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        package: '',
        rounds: '3',
        outcome: 'Selected',
        difficulty: 'Moderate',
        questions: '',
        tips: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Backend आल्यावर इथे API कॉल जाईल
        console.log('Experience Submitted:', formData);
        onSuccess();
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-[#0f2747] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a5f] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <button onClick={onBack} className="absolute top-0 left-0 text-white hover:text-[#c9a227] flex items-center gap-2 text-sm font-bold transition bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>

                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6 mt-8">
                            <Layers className="w-3.5 h-3.5 text-[#c9a227]" />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Placement Experience Sharing</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Share Your <span className="text-[#c9a227]">Interview Journey</span>
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                            Your experience can help hundreds of Linkcode students prepare better. Please provide accurate details about your interview process.
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN FORM SECTION */}
            <main className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                    <div className="p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* SECTION 1: Basic Info */}
                            <div>
                                <h3 className="text-lg font-bold text-[#0f2747] mb-4 border-b border-slate-100 pb-2">1. Basic Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Company Name</label>
                                        <div className="relative">
                                            <Building2 className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. Tata Consultancy Services" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Job Role / Designation</label>
                                        <div className="relative">
                                            <Briefcase className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input type="text" name="role" required value={formData.role} onChange={handleChange} placeholder="e.g. Software Developer" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Package (CTC)</label>
                                        <div className="relative">
                                            <IndianRupee className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input type="text" name="package" required value={formData.package} onChange={handleChange} placeholder="e.g. 4.5 LPA" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Number of Rounds</label>
                                        <div className="relative">
                                            <Layers className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <select name="rounds" value={formData.rounds} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                                <option value="1">1 Round</option>
                                                <option value="2">2 Rounds</option>
                                                <option value="3">3 Rounds</option>
                                                <option value="4">4 Rounds</option>
                                                <option value="5+">5+ Rounds</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2: Outcome & Difficulty */}
                            <div>
                                <h3 className="text-lg font-bold text-[#0f2747] mb-4 border-b border-slate-100 pb-2">2. Outcome & Difficulty</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Final Result</label>
                                        <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                                            <button type="button" onClick={() => setFormData({ ...formData, outcome: 'Selected' })} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${formData.outcome === 'Selected' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}><CheckCircle2 className="w-4 h-4" /> Selected</button>
                                            <button type="button" onClick={() => setFormData({ ...formData, outcome: 'Rejected' })} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${formData.outcome === 'Rejected' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}><XCircle className="w-4 h-4" /> Rejected</button>
                                            <button type="button" onClick={() => setFormData({ ...formData, outcome: 'Pending' })} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${formData.outcome === 'Pending' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}><Clock className="w-4 h-4" /> Pending</button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Overall Difficulty</label>
                                        <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                            <option value="Easy">Easy</option>
                                            <option value="Moderate">Moderate</option>
                                            <option value="Hard">Hard</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: Questions & Tips */}
                            <div>
                                <h3 className="text-lg font-bold text-[#0f2747] mb-4 border-b border-slate-100 pb-2">3. Interview Details</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Questions Asked (Technical, Coding, HR)</label>
                                        <textarea name="questions" required value={formData.questions} onChange={handleChange} rows={4} placeholder="e.g. 1. Implement a Binary Search Tree. 2. Explain ACID properties. 3. Why do you want to join our company?" className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl p-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm resize-none"></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Preparation Tips for Juniors</label>
                                        <textarea name="tips" required value={formData.tips} onChange={handleChange} rows={3} placeholder="e.g. Focus heavily on DSA and be confident in the HR round..." className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl p-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-100">
                                <button type="button" onClick={onBack} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition">Cancel</button>
                                <button type="submit" className="bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(201,162,39,0.3)] flex items-center gap-2">
                                    Submit Experience <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}