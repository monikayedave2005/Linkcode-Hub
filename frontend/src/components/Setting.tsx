import { useState } from "react";
import { ArrowLeft, Lock, CheckCircle2 } from "lucide-react";

interface SettingsProps {
    onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
    const [formData, setFormData] = useState({ old_password: '', new_password: '', confirm_password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        // Check if passwords match
        if (formData.new_password !== formData.confirm_password) {
            setMessage({ type: 'error', text: "New passwords do not match!" });
            return;
        }

        setIsLoading(true);
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/change-password/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    old_password: formData.old_password,
                    new_password: formData.new_password
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: "Password changed successfully!" });
                setFormData({ old_password: '', new_password: '', confirm_password: '' });
            } else {
                setMessage({ type: 'error', text: data.error || "Failed to change password." });
            }
        } catch (error) {
            setMessage({ type: 'error', text: "Network error. Try again." });
        }
        setIsLoading(false);
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            <section className="max-w-3xl mx-auto px-6 py-12">
                <button onClick={onBack} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0f2747] transition">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-[#0f2747] p-8 text-center relative">
                        <div className="w-16 h-16 bg-[#c9a227] rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
                            <Lock className="w-8 h-8 text-[#0f2747]" />
                        </div>
                        <h1 className="text-3xl font-black text-white">Account Settings</h1>
                        <p className="text-slate-300 mt-2">Update your password securely.</p>
                    </div>

                    <div className="p-8">
                        {message.text && (
                            <div className={`p-4 mb-6 rounded-xl flex items-center gap-3 font-bold text-sm ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                                <CheckCircle2 className="w-5 h-5" /> {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase">Current Password</label>
                                <input
                                    type="password"
                                    name="old_password"
                                    required
                                    value={formData.old_password}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#c9a227]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase">New Password</label>
                                <input
                                    type="password"
                                    name="new_password"
                                    required
                                    value={formData.new_password}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#c9a227]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    required
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-[#c9a227]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#c9a227] hover:bg-[#b08d22] text-[#0f2747] font-bold py-3.5 rounded-xl transition-all shadow-md mt-4"
                            >
                                {isLoading ? "Updating..." : "Update Password"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}