import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";

interface ChatProps {
    onBack: () => void;
    contactId: string;
    contactName: string;
}

export default function Chat({ onBack, contactId, contactName }: ChatProps) {
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // ✅ Get current user info from localStorage
    const currentUserEmail = localStorage.getItem('email') || "";
    const currentUserName = localStorage.getItem('name') || "";

    const fetchMessages = async () => {
        const token = localStorage.getItem('access_token');
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/messages/get_chat/?user_id=${contactId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 3000);
        return () => clearInterval(interval);
    }, [contactId]);

    // ✅ Auto-scroll to bottom inside the container only
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const token = localStorage.getItem('access_token');
        try {
            const response = await fetch('http://127.0.0.1:8000/api/messages/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    receiver: contactId,
                    content: newMessage
                })
            });

            if (response.ok) {
                setNewMessage("");
                fetchMessages();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-slate-100 h-screen font-sans flex flex-col overflow-hidden">

            {/* Header */}
            <div className="bg-[#0f2747] shadow-lg shrink-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4 text-white">
                    <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center font-bold text-xl text-[#0f2747] shadow-md border-2 border-white/20">
                        {contactName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">{contactName}</h2>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <p className="text-xs text-slate-300">Active now</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50"
            >
                <div className="max-w-4xl mx-auto space-y-4">
                    {messages.length === 0 ? (
                        <div className="text-center mt-20">
                            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="w-8 h-8 text-slate-400" />
                            </div>
                            <p className="text-slate-500 font-medium text-lg">Start the conversation</p>
                            <p className="text-slate-400 text-sm">Say hi to {contactName}!</p>
                        </div>
                    ) : (
                        messages.map((msg, idx) => {
                            // ✅ Check if the sender is you
                            const isMe =
                                msg.sender_name === currentUserName ||
                                msg.sender_name === currentUserEmail ||
                                msg.sender_email === currentUserEmail;

                            return (
                                <div key={idx} className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-2`}>
                                    <div className={`max-w-[75%] md:max-w-[60%] px-5 py-3 rounded-2xl text-sm shadow-sm ${isMe
                                        ? 'bg-[#c9a227] text-[#0f2747] rounded-br-sm font-medium'
                                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm'
                                        }`}>
                                        <p className="leading-relaxed">{msg.content}</p>
                                        <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-[#0f2747]/70' : 'text-slate-400'}`}>
                                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-slate-200 p-4 shrink-0 z-10">
                <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-center gap-3">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
                    />
                    <button
                        type="submit"
                        className="w-12 h-12 rounded-full bg-[#0f2747] flex items-center justify-center text-white hover:bg-[#c9a227] hover:text-[#0f2747] transition-all shadow-md group shrink-0"
                    >
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
}