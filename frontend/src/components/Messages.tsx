import { useState, useEffect } from "react";
import { MessageCircle, Mail, ArrowLeft, Users } from "lucide-react";

interface MessagesProps {
    onBack: () => void;
    onStartChat: (contactId: string, contactName: string) => void;
    userRole: string;
}

export default function Messages({ onBack, onStartChat, userRole }: MessagesProps) {
    const [contacts, setContacts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await fetch('http://127.0.0.1:8000/api/mentorship/', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    // Only show accepted requests
                    setContacts(data.filter((req: any) => req.status === 'accepted'));
                }
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };
        fetchContacts();
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen font-sans pb-20">
            <section className="max-w-4xl mx-auto px-6 py-12">
                <button onClick={onBack} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0f2747] transition">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-[#0f2747] p-8 text-center relative">
                        <div className="w-16 h-16 bg-[#c9a227] rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
                            <MessageCircle className="w-8 h-8 text-[#0f2747]" />
                        </div>
                        <h1 className="text-3xl font-black text-white">My Chats</h1>
                        <p className="text-slate-300 mt-2">Connect with your {userRole === 'student' ? 'mentors' : 'mentees'}.</p>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {isLoading ? (
                            <div className="p-10 text-center text-slate-400 font-bold">Loading...</div>
                        ) : contacts.length === 0 ? (
                            <div className="p-10 text-center text-slate-400 font-bold">
                                No active chats yet. {userRole === 'student' ? 'Request a mentor from the Experiences page!' : 'Accept a mentorship request to start chatting.'}
                            </div>
                        ) : (
                            contacts.map((contact) => {
                                // If I am student, I talk to alumni. If I am alumni, I talk to student.
                                const isStudent = userRole === 'student';
                                const targetId = isStudent ? contact.alumni : contact.student;
                                const targetName = isStudent ? contact.alumni_name : contact.student_name;
                                const targetEmail = isStudent ? contact.alumni_email : contact.student_email;

                                return (
                                    <div key={contact.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isStudent ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                                {targetName ? targetName.charAt(0).toUpperCase() : "U"}
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-[#0f2747]">{targetName}</p>
                                                <p className="text-xs text-slate-500">{targetEmail}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => onStartChat(targetId, targetName)} className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0f2747] text-white hover:bg-[#1a3a63] flex items-center gap-2 transition shadow-md">
                                                <MessageCircle className="w-4 h-4" /> Chat Now
                                            </button>
                                            <a href={`mailto:${targetEmail}`} className="px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 flex items-center gap-2 transition">
                                                <Mail className="w-4 h-4" /> Email
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}