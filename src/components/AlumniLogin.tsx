import { useState } from 'react';
import { ArrowLeft, Mail, Lock, ArrowRight, LogIn, Eye, EyeOff } from 'lucide-react';

interface AlumniLoginProps {
    onSuccess: (name: string, email: string) => void;
    onBack: () => void;
    onNavigateToRegister: () => void;
}

export default function AlumniLogin({ onSuccess, onBack, onNavigateToRegister }: AlumniLoginProps) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const derivedName = formData.email.split('@')[0];
            onSuccess(derivedName, formData.email);
        }, 800);
    };

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
                        <LogIn className="w-10 h-10 text-[#c9a227]" />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-4 drop-shadow-md">Alumni Portal</h2>
                    <p className="text-slate-200 text-base leading-relaxed mb-8 drop-shadow">
                        Log in to manage your mentorship requests, review resumes, and share interview experiences.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
                <button onClick={onBack} className="absolute top-8 left-8 text-white hover:text-[#c9a227] flex items-center gap-2 text-sm font-bold transition bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="w-full max-w-md bg-[#0f2747]/95 backdrop-blur-md p-8 rounded-3xl border border-[#c9a227]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Alumni Login</h1>
                        <p className="text-xs text-[#c9a227] font-semibold tracking-wider uppercase">Enter your credentials to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wide">Email Address</label>
                            <div className="relative">
                                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your alumni email" className="w-full bg-[#17335c] border border-[#3a6199] text-white placeholder-slate-500 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">Password</label>
                                <span className="text-xs text-[#c9a227] cursor-pointer hover:underline">Forgot?</span>
                            </div>
                            <div className="relative">
                                <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input type={showPassword ? "text" : "password"} name="password" required value={formData.password} onChange={handleChange} placeholder="Enter password" className="w-full bg-[#17335c] border border-[#3a6199] text-white placeholder-slate-500 rounded-xl py-3 pl-10 pr-12 focus:outline-none focus:border-[#c9a227] transition text-sm" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" disabled={isLoading} className={`w-full font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] ${isLoading ? 'bg-[#b08d22] text-[#0f2747]/50 cursor-not-allowed' : 'bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] shadow-[0_0_20px_rgba(201,162,39,0.3)]'}`}>
                            {isLoading ? (
                                <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-[#0f2747]/30 border-t-[#0f2747] rounded-full animate-spin"></div>Logging in...</span>
                            ) : (<>Log In <ArrowRight className="w-5 h-5" /></>)}
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                        Don't have an alumni account? <span onClick={onNavigateToRegister} className="text-[#c9a227] font-bold cursor-pointer hover:underline hover:text-white transition">Register Here</span>
                    </p>
                </div>
            </div>
        </div>
    );
}