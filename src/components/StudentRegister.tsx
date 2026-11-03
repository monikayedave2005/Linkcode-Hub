import { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, BookOpen, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface StudentRegisterProps {
    onSuccess: (name: string, email: string) => void; // ✅ Changed
    onBack: () => void;
    onNavigateToLogin: () => void;
}

export default function StudentRegister({ onSuccess, onBack, onNavigateToLogin }: StudentRegisterProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        course: '',
        batch: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Student Registered:', formData);
        onSuccess(formData.name, formData.email); // ✅ Changed
    };

    // ✅ New Courses List
    const courses = [
        "Java Full Stack", "Python Full Stack", "MEAN / MERN Stack", "Mobile App Development",
        "DevOps Development", "AWS Cloud Infrastructure", "DSA (Data Structure Algorithm)",
        "Data Analytics", "Data Science", "Gen AI", "Digital Marketing"
    ];

    // ✅ New Batches List (40 to 50)
    const batches = Array.from({ length: 11 }, (_, i) => `Batch-${40 + i}`);

    return (
        <div className="min-h-screen flex font-sans relative overflow-hidden bg-slate-50">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1a30] via-[#17335c] to-[#c9a227]/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#c9a227]/20 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="hidden lg:flex w-1/2 relative flex-col justify-center items-center p-12 z-10">
                <div className="text-center max-w-md flex flex-col items-center">
                    <div className="bg-[#0f2747] border border-[#c9a227]/50 rounded-2xl px-8 py-4 shadow-[0_0_30px_rgba(201,162,39,0.3)] mb-8 transform hover:scale-105 transition-transform duration-300">
                        <img src="/linkcode-logo.png" alt="Linkcode Logo" className="h-12 md:h-16 w-auto object-contain" />
                    </div>
                    <div className="w-20 h-20 bg-[#0f2747] rounded-full border-4 border-[#c9a227] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(201,162,39,0.4)]">
                        <ShieldCheck className="w-10 h-10 text-[#c9a227]" />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-4 drop-shadow-md">Start Your Journey</h2>
                    <p className="text-slate-200 text-base leading-relaxed mb-8 drop-shadow">
                        Join 5,000+ Linkcode students getting verified insights, mentorship, and AI-driven preparation.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
                <button onClick={onBack} className="absolute top-8 left-8 text-white hover:text-[#c9a227] flex items-center gap-2 text-sm font-bold transition bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="w-full max-w-md bg-[#0f2747]/95 backdrop-blur-md p-8 rounded-3xl border border-[#c9a227]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Student Registration</h1>
                        <p className="text-xs text-[#c9a227] font-semibold tracking-wider uppercase">Create your account to access the portal</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Full Name</label>
                            <div className="relative">
                                <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-[#17335c] border border-[#3a6199] text-white placeholder-slate-500 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Email Address</label>
                            <div className="relative">
                                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@linkcode.edu.in" className="w-full bg-[#17335c] border border-[#3a6199] text-white placeholder-slate-500 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Course</label>
                                <div className="relative">
                                    <BookOpen className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <select name="course" required value={formData.course} onChange={handleChange} className="w-full bg-[#17335c] border border-[#3a6199] text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                        <option value="" disabled>Select Course</option>
                                        {courses.map((course, idx) => (<option key={idx} value={course}>{course}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Batch</label>
                                <div className="relative">
                                    <Calendar className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <select name="batch" required value={formData.batch} onChange={handleChange} className="w-full bg-[#17335c] border border-[#3a6199] text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                        <option value="" disabled>Select Batch</option>
                                        {batches.map((batch, idx) => (<option key={idx} value={batch}>{batch}</option>))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Password</label>
                            <div className="relative">
                                <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-[#17335c] border border-[#3a6199] text-white placeholder-slate-500 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(201,162,39,0.3)] flex items-center justify-center gap-2 mt-6 hover:scale-[1.02]">
                            Register & Continue <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                        Already have an account?
                        <span onClick={onNavigateToLogin} className="text-[#c9a227] font-bold cursor-pointer hover:underline hover:text-white transition ml-1">Log In</span>
                    </p>
                </div>
            </div>
        </div>
    );
}