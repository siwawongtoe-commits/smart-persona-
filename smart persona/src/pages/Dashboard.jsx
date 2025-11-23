import React from 'react';
import {
    Bookmark, Search, Menu, Settings, Plus, Home, LayoutDashboard, Bell, User, LogOut
} from 'lucide-react';

// --- 1. ข้อมูลตัวอย่างสำหรับ Profile Cards (7 รายการ) ---
const profileData = [
    { name: "สมชาย ใจดีมาก", role: "Web Developer", location: "Thailand", experience: "4 years", skills: ["Laravel", "Vue.js", "SEO"], avatar: "https://placehold.co/100x100/38bdf8/ffffff?text=SM" },
    { name: "ปิยพฤกษ์ วงศ์สถิตย์", role: "Software Developer", location: "Thailand | USA", experience: "2.5 years", skills: ["Python", "Javascript", "React"], avatar: "https://placehold.co/100x100/a78bfa/ffffff?text=PY" },
    { name: "กวิน กุลวัฒน์", role: "UX/UI Designer", location: "Thailand", experience: "6 years", skills: ["Photoshop", "Illustrator", "Design"], avatar: "https://placehold.co/100x100/fb7185/ffffff?text=KW" },
    { name: "พีรธีร์ อนันตกูล", role: "Web Developer", location: "Thailand", experience: "4 years", skills: ["Laravel", "Vue.js", "Tailwind"], avatar: "https://placehold.co/100x100/10b981/ffffff?text=PT" },
    { name: "เบน ธนภูมิ", role: "Mobile App Developer", location: "Thailand", experience: "3.5 years", skills: ["Kotlin", "Flutter", "Swift"], avatar: "https://placehold.co/100x100/f59e0b/ffffff?text=BN" },
    { name: "ธนากร หลายพันธ์ศรี", role: "Data Scientist", location: "Thailand | Singapore", experience: "4 years", skills: ["Python", "Machine Learning", "SQL"], avatar: "https://placehold.co/100x100/6366f1/ffffff?text=TK" },
    { name: "ภัชรินทร์ เกษมสุข", role: "Cybersecurity Analyst", location: "Thailand", experience: "5 years", skills: ["Network Security", "Linux", "Penetration Testing"], avatar: "https://placehold.co/100x100/ef4444/ffffff?text=PC" },
];

// --- 2. ProfileCard Component (ใช้ Tailwind CSS) ---
const ProfileCard = ({ profile }) => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
                {/* Avatar */}
                <img 
                    src={profile.avatar} 
                    alt="Profile Avatar" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400 shadow-lg" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/334155/ffffff?text=User" }}
                />
                {/* Bookmark Icon */}
                <Bookmark className="w-5 h-5 text-indigo-400 hover:text-indigo-300 transition-colors" />
            </div>
            
            <div className="space-y-1 mb-4">
                <h3 className="text-xl font-bold text-gray-50 truncate">{profile.name}</h3>
                <p className="text-sm font-medium text-indigo-300">{profile.role}</p>
                <p className="text-xs text-gray-400">{profile.location}</p>
                <p className="text-xs text-gray-300 italic mt-2">
                    <span className="font-semibold text-indigo-400">ประสบการณ์:</span> {profile.experience}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {profile.skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="text-xs font-medium bg-gray-700 text-gray-100 px-3 py-1 rounded-full hover:bg-indigo-600 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

// --- 3. Dashboard Component หลัก (ใช้ Tailwind CSS) ---
const Dashboard = () => {
    // กำหนดความกว้างของ Sidebar สำหรับ Desktop และ Tablet
    const sidebarWidth = "w-20 lg:w-64"; 

    // รายการนำทาง
    const navItems = [
        { icon: Plus, text: "Create", active: true },
        { icon: Home, text: "Home", active: false },
        { icon: LayoutDashboard, text: "Dashboard", active: false },
        { icon: Bell, text: "Notifications", active: false },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <aside className={`fixed z-20 h-screen bg-gray-800/80 backdrop-blur-md border-r border-gray-700 p-4 transition-all duration-300 ${sidebarWidth} shadow-2xl`}>
                <div className="flex items-center justify-center lg:justify-start mb-8 h-10">
                    <span className="text-2xl font-extrabold text-indigo-400 lg:block hidden">PerFile</span>
                    <span className="text-2xl font-extrabold text-indigo-400 lg:hidden block">P</span>
                </div>
                
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <a 
                            key={item.text}
                            href="#"
                            className={`flex items-center p-3 rounded-lg transition-colors duration-200 group 
                                ${item.active 
                                    ? 'bg-indigo-600/80 text-white shadow-lg' 
                                    : 'text-gray-300 hover:bg-gray-700/70 hover:text-indigo-300'
                                }`}
                            title={item.text}
                        >
                            <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-white' : 'text-gray-400 group-hover:text-indigo-300'}`} />
                            <span className="ml-4 text-sm font-medium hidden lg:inline">{item.text}</span>
                        </a>
                    ))}
                    
                    {/* User Profile Icon */}
                    <div className="pt-4 mt-4 border-t border-gray-700/50 flex justify-center lg:justify-start">
                        <User className="w-6 h-6 p-1 rounded-full text-gray-300 bg-gray-700/50 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer" />
                        <span className="ml-4 text-sm font-medium hidden lg:inline self-center">Profile</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className={`flex-1 transition-all duration-300 p-4 sm:p-8 lg:ml-64 ml-20`}>
                
                {/* Top Navigation Bar & Search */}
                <header className="flex items-center justify-between h-16 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10 -mx-4 sm:-mx-8 px-4 sm:px-8">
                    <div className="flex items-center w-full max-w-lg bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-inner">
                        <Search className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Search Profile, User..." 
                            className="flex-grow bg-transparent text-sm text-white placeholder-gray-500 outline-none px-3" 
                        />
                        <div className="p-1 bg-gray-700 rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer">
                            <Menu className="w-5 h-5 text-gray-300" />
                        </div>
                    </div>
                    
                    <button className="flex items-center bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors">
                        <LogOut className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Log out</span>
                    </button>
                </header>

                {/* Content Header & Filter */}
                <div className="mt-8 mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
                    <h1 className="text-2xl sm:text-3xl font-light text-indigo-300">
                        ค้นหาผู้เชี่ยวชาญด้าน IT ในไทย
                    </h1>
                    <div className="flex items-center space-x-3">
                        <input 
                            type="text" 
                            placeholder="คำที่ค้นหา :" 
                            className="bg-gray-800 text-sm text-white placeholder-gray-500 p-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none w-32 sm:w-48"
                        />
                        <div className="p-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer shadow-md">
                            <Settings className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Profiles Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {profileData.map((profile, index) => (
                        <ProfileCard key={index} profile={profile} />
                    ))}
                </div>
                
            </main>
        </div>
    );
};

export default Dashboard;