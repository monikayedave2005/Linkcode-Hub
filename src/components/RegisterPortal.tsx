import { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, BookOpen, Calendar, ArrowRight, ShieldCheck, Building2, Briefcase, GraduationCap } from 'lucide-react';

interface RegisterPortalProps {
    onSuccess: (name: string, email: string, role: 'student' | 'alumni') => void;
    onBack: () => void;
    onNavigateToLogin: (role: 'student' | 'alumni') => void;
}

export default function RegisterPortal({ onSuccess, onBack, onNavigateToLogin }: RegisterPortalProps) {
    const [activeTab, setActiveTab] = useState<'student' | 'alumni'>('student');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        // Student specific
        course: '',
        batch: '',
        // Alumni specific
        company: '',
        designation: '',
        passingBatch: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSuccess(formData.name, formData.email, activeTab);
    };

    // Dropdown Data
    const courses = [
        "Java Full Stack", "Python Full Stack", "MEAN / MERN Stack", "Mobile App Development",
        "DevOps Development", "AWS Cloud Infrastructure", "DSA (Data Structure Algorithm)",
        "Data Analytics", "Data Science", "Gen AI", "Digital Marketing"
    ];
    const batches = Array.from({ length: 15 }, (_, i) => `Batch-${35 + i}`); // 35 to 50

    return (
        <div className="min-h-screen flex font-sans relative overflow-hidden bg-slate-50">

            {/* ✅ Beautiful Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1a30] via-[#17335c] to-[#c9a227]/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#c9a227]/20 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Left Side - Visual/Branding (Changes based on Tab) */}
            <div className="hidden lg:flex w-1/2 relative flex-col justify-center items-center p-12 z-10">
                <div className="text-center max-w-md flex flex-col items-center">

                    {/* Small Logo Box */}
                    <div className="bg-[#0f2747] border border-[#c9a227]/50 rounded-2xl px-8 py-3 shadow-[0_0_30px_rgba(201,162,39,0.3)] mb-8 transform hover:scale-105 transition-transform duration-300">
                        <img src="/linkcode-logo.png" alt="Linkcode Logo" className="h-10 md:h-12 w-auto object-contain" />
                    </div>

                    {/* Icon Box */}
                    <div className="w-20 h-20 bg-[#0f2747] rounded-full border border-[#c9a227]/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(201,162,39,0.2)]">
                        {activeTab === 'student' ? (
                            <ShieldCheck className="w-10 h-10 text-[#c9a227]" />
                        ) : (
                            <Briefcase className="w-10 h-10 text-[#c9a227]" />
                        )}
                    </div>

                    {/* Dynamic Text */}
                    <h2 className="text-4xl font-black text-white mb-4 drop-shadow-md">
                        {activeTab === 'student' ? 'Start Your Journey' : (
                            <>Give Back & <span className="text-[#c9a227]">Guide</span></>
                        )}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                        {activeTab === 'student'
                            ? 'Join 5,000+ Linkcode students getting verified insights, mentorship, and AI-driven preparation.'
                            : 'Join our verified alumni network to share your interview experiences, mentor current students, and help shape future tech careers.'}
                    </p>
                </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
                <button
                    onClick={onBack}
                    className="absolute top-8 left-8 text-white hover:text-[#c9a227] flex items-center gap-2 text-xs font-bold transition bg-[#0f2747]/80 px-4 py-2 rounded-full border border-[#3a6199]"
                >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
                </button>

                <div className="w-full max-w-md bg-[#0f2747]/95 backdrop-blur-md p-8 rounded-3xl border border-[#3a6199] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    {/* TABS */}
                    <div className="flex bg-[#0a1a30] p-1.5 rounded-xl mb-8 border border-[#3a6199]">
                        <button
                            onClick={() => setActiveTab('student')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'student' ? 'bg-[#c9a227] text-[#0f2747] shadow-md' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <GraduationCap className="w-4 h-4" /> Student
                        </button>
                        <button
                            onClick={() => setActiveTab('alumni')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'alumni' ? 'bg-[#c9a227] text-[#0f2747] shadow-md' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <Briefcase className="w-4 h-4" /> Alumni
                        </button>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-2xl font-extrabold text-white mb-1 tracking-tight">
                            {activeTab === 'student' ? 'Student Registration' : 'Alumni Registration'}
                        </h1>
                        <p className="text-[10px] text-[#c9a227] font-semibold tracking-wider uppercase">
                            {activeTab === 'student' ? 'Create your account to access the portal' : 'Register to share experiences & mentor'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* FULL NAME */}
                        <div>
                            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={activeTab === 'student' ? "John Doe" : "Jane Smith"} className="w-full bg-[#0a1a30] border border-[#3a6199] text-white placeholder-slate-600 rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                                {activeTab === 'student' ? 'Email Address' : 'Corporate Email'}
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={activeTab === 'student' ? "john@linkcode.edu.in" : "jane.smith@company.com"} className="w-full bg-[#0a1a30] border border-[#3a6199] text-white placeholder-slate-600 rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        {/* CONDITIONAL FIELDS */}
                        {activeTab === 'student' ? (
                            // Student Fields
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Course</label>
                                    <div className="relative">
                                        <BookOpen className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <select name="course" required value={formData.course} onChange={handleChange} className="w-full bg-[#0a1a30] border border-[#3a6199] text-white rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                            <option value="" disabled>Select Course</option>
                                            {courses.map((course, idx) => (<option key={idx} value={course}>{course}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Batch</label>
                                    <div className="relative">
                                        <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <select name="batch" required value={formData.batch} onChange={handleChange} className="w-full bg-[#0a1a30] border border-[#3a6199] text-white rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                            <option value="" disabled>Select Batch</option>
                                            {batches.map((batch, idx) => (<option key={idx} value={batch}>{batch}</option>))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Alumni Fields
                            <>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Current Company</label>
                                        <div className="relative">
                                            <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. TCS" className="w-full bg-[#0a1a30] border border-[#3a6199] text-white placeholder-slate-600 rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Job Role</label>
                                        <div className="relative">
                                            <Briefcase className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input type="text" name="designation" required value={formData.designation} onChange={handleChange} placeholder="e.g. Developer" className="w-full bg-[#0a1a30] border border-[#3a6199] text-white placeholder-slate-600 rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Passing Batch</label>
                                    <div className="relative">
                                        <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <select name="passingBatch" required value={formData.passingBatch} onChange={handleChange} className="w-full bg-[#0a1a30] border border-[#3a6199] text-white rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm appearance-none cursor-pointer">
                                            <option value="" disabled>Select Passing Batch</option>
                                            {batches.map((batch, idx) => (<option key={idx} value={batch}>{batch}</option>))}
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* PASSWORD */}
                        <div>
                            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-[#0a1a30] border border-[#3a6199] text-white placeholder-slate-600 rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-black py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(201,162,39,0.3)] flex items-center justify-center gap-2 mt-4 hover:scale-[1.02]">
                            Register as {activeTab === 'student' ? 'Student' : 'Alumni'} <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-500 mt-5 font-medium">
                        Already have an account?
                        <span
                            onClick={() => onNavigateToLogin(activeTab)}
                            className="text-[#c9a227] font-bold cursor-pointer hover:underline hover:text-white transition ml-1"
                        >
                            Log In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}