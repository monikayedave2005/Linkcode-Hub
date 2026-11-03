import { useState, useRef, useEffect } from "react";
import { Search, Bell, Heart, User, Settings, LogOut, Info, LayoutDashboard, CheckCircle2, Clock, UserPlus } from "lucide-react";

// ✅ Import all page components
import LandingPage from "./LandingPage";
import RegisterPortal from "./RegisterPortal";
import StudentLogin from "./StudentLogin";
import AlumniLogin from "./AlumniLogin";
import AlumniDashboard from "./AlumniDashboard";
import ShareExperience from "./ShareExperience";
import ReviewResumes from "./ReviewResumes";
import Home from "./Home";
import Experiences from "./Experiences";
import Companies from "./Companies";
import AskShare from "./AskShare";
import Insights from "./Insights";
import About from "./About";

type PageType =
  | 'landing' | 'register-portal' | 'student-login' | 'alumni-login' | 'alumni-dashboard'
  | 'share-experience' | 'review-resumes' | 'home' | 'experiences' | 'companies'
  | 'askshare' | 'about' | 'insights' | 'my-experiences' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [user, setUser] = useState({
    name: "Student",
    email: "student@linkcode.edu.in",
    role: "student" as "student" | "alumni"
  });

  // ✅ Dropdown & Notifications State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  // ✅ Notifications Data (Role based)
  const notifications = user.role === 'alumni' ? [
    { id: 1, title: "New Mentorship Request", desc: "Rahul M. wants you to be his mentor.", time: "2 hours ago", type: "request" },
    { id: 2, title: "Resume Review Pending", desc: "Priya S. uploaded her resume for review.", time: "5 hours ago", type: "resume" },
    { id: 3, title: "Experience Approved", desc: "Your TCS experience was approved by Admin.", time: "1 day ago", type: "approved" },
  ] : [
    { id: 1, title: "Resume Reviewed!", desc: "Your resume was reviewed by an alumni.", time: "1 hour ago", type: "approved" },
    { id: 2, title: "New Company Added", desc: "Persistent Systems added a new interview experience.", time: "3 hours ago", type: "info" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = (name: string) => {
    if (!name || name === "Student") return "ST";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleStudentLoginSuccess = (name: string, email: string) => {
    setUser({ name, email, role: "student" });
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  const handleAlumniLoginSuccess = (name: string, email: string) => {
    setUser({ name, email, role: "alumni" });
    setIsAuthenticated(true);
    setCurrentPage("alumni-dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("landing");
    setIsDropdownOpen(false);
    setIsNotifOpen(false);
    setUser({ name: "Student", email: "student@linkcode.edu.in", role: "student" });
  };

  const handleExperienceShared = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentPage("alumni-dashboard");
    }, 2500);
  };

  const renderPage = () => {
    if (!isAuthenticated) {
      switch (currentPage) {
        case "landing":
          return <LandingPage onNavigate={setCurrentPage} />;
        case "register-portal":
          return (
            <RegisterPortal
              onSuccess={(name, email, role) => {
                setUser({ name, email, role });
                setIsAuthenticated(true);
                setCurrentPage(role === 'alumni' ? 'alumni-dashboard' : 'home');
              }}
              onBack={() => setCurrentPage("landing")}
              onNavigateToLogin={(role) => setCurrentPage(role === 'alumni' ? 'alumni-login' : 'student-login')}
            />
          );
        case "student-login":
          return <StudentLogin onSuccess={handleStudentLoginSuccess} onBack={() => setCurrentPage("landing")} onNavigateToRegister={() => setCurrentPage("register-portal")} />;
        case "alumni-login":
          return <AlumniLogin onSuccess={handleAlumniLoginSuccess} onBack={() => setCurrentPage("landing")} onNavigateToRegister={() => setCurrentPage("register-portal")} />;
        default:
          return <LandingPage onNavigate={setCurrentPage} />;
      }
    }

    switch (currentPage) {
      case "alumni-dashboard":
        return <AlumniDashboard onNavigate={setCurrentPage} />;
      case "share-experience":
        return <ShareExperience onSuccess={handleExperienceShared} onBack={() => setCurrentPage("alumni-dashboard")} />;
      case "review-resumes":
        return <ReviewResumes onBack={() => setCurrentPage("alumni-dashboard")} />;
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "experiences":
        return <Experiences />;
      case "companies":
        return <Companies />;
      case "askshare":
        return <AskShare />;
      case "insights":
        return <Insights />;
      case "about":
        return <About />;
      case "my-experiences":
        return <div className="min-h-[60vh] flex items-center justify-center text-slate-500 font-bold text-2xl">My Experiences Page Coming Soon</div>;
      case "settings":
        return <div className="min-h-[60vh] flex items-center justify-center text-slate-500 font-bold text-2xl">Settings Page Coming Soon</div>;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">

      {/* ✅ NAVBAR */}
      {isAuthenticated && (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage(user.role === 'alumni' ? 'alumni-dashboard' : 'home')}>
              <img src="/linkcode-logo.jpg" alt="Linkcode" className="h-12 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; document.getElementById('fallback-logo')!.style.display = 'block'; }} />
              <div id="fallback-logo" className="hidden">
                <h1 className="text-xl font-black tracking-tighter text-[#0f2747]">Link<span className="text-[#c9a227]">code</span></h1>
                <p className="text-[10px] tracking-widest text-slate-500 uppercase">Alumni Hub</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {user.role === 'alumni' ? (
                <>
                  <button onClick={() => setCurrentPage("alumni-dashboard")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "alumni-dashboard" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Dashboard</button>
                  <button onClick={() => setCurrentPage("experiences")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "experiences" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Experiences</button>
                  <button onClick={() => setCurrentPage("askshare")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "askshare" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Q&A Forum</button>
                  <button onClick={() => setCurrentPage("about")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "about" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>About</button>
                </>
              ) : (
                <>
                  <button onClick={() => setCurrentPage("home")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "home" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Home</button>
                  <button onClick={() => setCurrentPage("experiences")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "experiences" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Experiences</button>
                  <button onClick={() => setCurrentPage("companies")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "companies" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Companies</button>
                  <button onClick={() => setCurrentPage("askshare")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "askshare" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Ask & Share</button>
                  <button onClick={() => setCurrentPage("insights")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "insights" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>Insights</button>
                  <button onClick={() => setCurrentPage("about")} className={`text-sm font-bold pb-1 border-b-2 transition-all ${currentPage === "about" ? "text-[#0f2747] border-[#c9a227]" : "text-slate-500 border-transparent hover:text-[#0f2747]"}`}>About</button>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-full"><Search className="w-5 h-5 text-slate-600" /></button>

              {/* ✅ Notification Bell with Dropdown */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setIsNotifOpen(!isNotifOpen)}
                  className="p-2 hover:bg-slate-100 rounded-full relative"
                >
                  <Bell className="w-5 h-5 text-slate-600" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                </button>

                {isNotifOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                      <h3 className="font-bold text-[#0f2747] text-sm">Notifications</h3>
                      <span className="text-[10px] font-bold text-[#c9a227] cursor-pointer hover:underline">Mark all as read</span>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition cursor-pointer flex gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${notif.type === 'request' ? 'bg-blue-100 text-blue-600' :
                              notif.type === 'resume' ? 'bg-amber-100 text-amber-600' :
                                'bg-emerald-100 text-emerald-600'
                            }`}>
                            {notif.type === 'request' ? <UserPlus className="w-4 h-4" /> :
                              notif.type === 'resume' ? <Clock className="w-4 h-4" /> :
                                <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#0f2747] leading-tight mb-0.5">{notif.title}</p>
                            <p className="text-xs text-slate-500 mb-1">{notif.desc}</p>
                            <p className="text-[10px] font-semibold text-slate-400">{notif.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 text-center border-t border-slate-100">
                      <button className="text-xs font-bold text-slate-500 hover:text-[#0f2747] py-1">View All Notifications</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={dropdownRef}>
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-10 h-10 rounded-full bg-[#0f2747] flex items-center justify-center text-[#c9a227] font-bold text-sm cursor-pointer ml-2 hover:ring-2 hover:ring-[#c9a227] transition-all">
                  {getInitials(user.name)}
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50">
                    <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                      <h3 className="font-bold text-[#0f2747] text-sm truncate uppercase">{user.name}</h3>
                      <p className="text-xs text-slate-500 truncate mt-1">{user.email}</p>
                      <span className="inline-block mt-2 bg-[#c9a227]/20 text-[#997a1a] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {user.role}
                      </span>
                    </div>

                    <div className="p-2">
                      <button onClick={() => { setCurrentPage(user.role === 'alumni' ? 'alumni-dashboard' : 'my-experiences'); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-[#0f2747] rounded-xl transition font-medium">
                        {user.role === 'alumni' ? <LayoutDashboard className="w-4 h-4 text-slate-400" /> : <User className="w-4 h-4 text-slate-400" />}
                        {user.role === 'alumni' ? 'Alumni Dashboard' : 'My Experiences'}
                      </button>
                      <button onClick={() => { setCurrentPage('about'); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-[#0f2747] rounded-xl transition font-medium"><Info className="w-4 h-4 text-slate-400" /> About Linkcode Hub</button>
                      <button onClick={() => { setCurrentPage('settings'); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-[#0f2747] rounded-xl transition font-medium"><Settings className="w-4 h-4 text-slate-400" /> Settings</button>
                    </div>

                    <div className="p-2 border-t border-slate-100">
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition font-bold"><LogOut className="w-4 h-4" /> Sign Out</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="flex-1">
        {renderPage()}
      </div>

      {isAuthenticated && (
        <footer className="bg-[#0f2747] pt-12 pb-8 border-t border-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="mb-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg inline-block">
                    <img src="/linkcode-logo.png" alt="Linkcode Logo" className="h-12 w-auto object-contain" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
                  </div>
                </div>
                <p className="text-sm text-[#e2d1a6] leading-relaxed mb-6">
                  Linkcode Technologies is Pune's No. 1 IT training and placement institute, committed to shaping careers and bridging the gap between talent and opportunity.
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#0a66c2] flex items-center justify-center hover:opacity-80 transition-opacity"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#1DA1F2] flex items-center justify-center hover:opacity-80 transition-opacity"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                </div>
              </div>
              <div>
                <h4 className="text-[#c9a227] font-bold mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
                <ul className="space-y-3 text-sm text-[#e2d1a6]">
                  <li><button onClick={() => setCurrentPage("about")} className="hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={() => setCurrentPage("experiences")} className="hover:text-white transition-colors">Experiences</button></li>
                  <li><button onClick={() => setCurrentPage("companies")} className="hover:text-white transition-colors">Companies</button></li>
                  <li><button onClick={() => setCurrentPage("insights")} className="hover:text-white transition-colors">Insights</button></li>
                  <li><button onClick={() => setCurrentPage("askshare")} className="hover:text-white transition-colors">Ask & Share</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#c9a227] font-bold mb-6 tracking-wide text-sm uppercase">Courses</h4>
                <ul className="space-y-3 text-sm text-[#e2d1a6]">
                  <li><a href="#" className="hover:text-white transition-colors">Java Full stack</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Python Full Stack</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">MEAN / MERN Stack</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Devops Development</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Explore More</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#c9a227] font-bold mb-6 tracking-wide text-sm uppercase">Contact</h4>
                <div className="text-sm text-[#e2d1a6] mb-6 leading-relaxed uppercase">
                  <p>Office NO.12, 3RD FLOOR, BARVE MEMORIAL COMPLEX, OPPOSITE TO PANCHALI HOTEL, JM ROAD, SHIVAJINAGAR, PUNE, 411005.</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#e2d1a6]">
                  <span>+91 9604430489</span>
                  <span>+91 7057336919</span>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-[#1e3a5f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#e2d1a6]">
              <p>© 2026 Linkcode Technologies Pvt. Ltd. All rights reserved.</p>
              <p className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-rose-500" /> for the Linkcode Community</p>
            </div>
          </div>
        </footer>
      )}

      {/* ✅ SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black text-[#0f2747] mb-2">Experience Submitted!</h2>
            <p className="text-slate-500 text-sm mb-6">
              Your interview experience has been sent to the Admin for verification. It will be visible to students once approved.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}