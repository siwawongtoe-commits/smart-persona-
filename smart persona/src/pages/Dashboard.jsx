import React, { useState, useMemo } from "react";
import {
  Search,
  LogOut,
  Plus,
  Home,
  Bookmark,
  ChevronDown,
  Filter, // Filter icon (funnel) is used for the search bar
  Users,
  Bell,
  Settings,
  Grid,
  Menu,
  MessageCircle,
  BarChart,
  User,
} from "lucide-react";

// The base data structure remains the same, adding a couple more profiles for variety
const profiles = [
  { name: "สมชาย ใจดีมาก", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"] },
  { name: "ปพิชญา วงศ์สถิตย์", title: "Software Developer", country: "Thailand | USA", exp: "2.5 years", tags: ["Python", "Javascript", "React"] },
  { name: "กวิน สุวีวรินทร์", title: "UX/UI Designer", country: "Thailand", exp: "6 years", tags: ["Photoshop", "Illustrator", "Design"] },
  { name: "ศิริ วัฒนกุล", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"] },
  { name: "เชน ธนภูมิ", title: "Mobile App Developer", country: "Thailand", exp: "3.5 years", tags: ["Kotlin", "Flutter", "Swift"] },
  { name: "ธนการ หลายพันธ์", title: "Data Scientist", country: "Thailand | Singapore", exp: "4 years", tags: ["Python", "Machine Learning", "SQL"] },
  { name: "ณิชาพัชร์ เกษมสุข", title: "Cybersecurity Analyst", country: "Thailand", exp: "5 years", tags: ["Network Security", "Linux", "Penetration Testing"] },
  { name: "รารัช เจริญธรรม", title: "Video Editor", country: "Thailand", exp: "4 years", tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"] },
  { name: "ปรเมศวร์ วงษ์สุกรี", title: "Marketing Analyst", country: "Thailand", exp: "3.5 years", tags: ["Data Studio", "Excel", "Google Analytics"] },
  { name: "แพรว แสงสุวรรณ", title: "Product Developer", country: "Thailand", exp: "5 years", tags: ["Roadmapping", "Agile", "Market Research"] }
];

// Utility function to generate initials from a name string.
const getInitials = (name) => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return parts[0][0] + parts[1][0];
  }
  return parts[0][0];
};

// Reusable component for sidebar icons
const SidebarItem = ({ Icon, label, active }) => (
  <button
    className={`flex items-center gap-3 py-2 px-4 rounded-lg w-full text-left transition-colors duration-200
      ${active
        ? "bg-blue-100 text-blue-700 font-semibold"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm">{label}</span>
  </button>
);

// Dedicated Sidebar component
const Sidebar = () => (
  <aside className="w-60 bg-white p-4 flex flex-col gap-6 border-r border-gray-100 shadow-sm hidden lg:flex">
    {/* Create Button */}
    <button className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
      <Plus className="w-5 h-5" />
      <span className="font-semibold text-sm">Create</span>
    </button>

    {/* Navigation */}
    <nav className="space-y-2">
      <SidebarItem Icon={Home} label="Home" active />
      <SidebarItem Icon={Grid} label="Dashboard" />
      <SidebarItem Icon={Users} label="Members" />
      <SidebarItem Icon={Bookmark} label="Bookmarked" />
      <SidebarItem Icon={Bell} label="Notifications" />
      <SidebarItem Icon={Settings} label="Settings" />
      <SidebarItem Icon={MessageCircle} label="Messages" />
      <SidebarItem Icon={BarChart} label="Statistics" />
    </nav>
  </aside>
);

// Dedicated Profile Card component
const ProfileCard = ({ profile }) => {
  const initials = getInitials(profile.name);
  const avatarBg = useMemo(() => {
    const colors = [
      "from-red-300 to-red-100",
      "from-green-300 to-green-100",
      "from-blue-300 to-blue-100",
      "from-yellow-300 to-yellow-100",
      "from-purple-300 to-purple-100",
    ];
    // Simple hash to pick a consistent color for each name
    let hash = 0;
    for (let i = 0; i < profile.name.length; i++) {
      hash = profile.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  }, [profile.name]);

  return (
    // Outer container with gradient background and 2px padding for the border effect
    <article className="p-[2px] rounded-xl shadow-lg relative hover:shadow-xl transition-all duration-200 
                        bg-gradient-to-br from-[#8889C8] via-[#5EB4FF] to-[#9092FF]">
      
      {/* Inner container to hold the content, must be solid white */}
      <div className="bg-white rounded-xl p-4 h-full">

        {/* Bookmark icon */}
        <div className="absolute top-3 right-3 text-gray-400">
          <Bookmark className="w-5 h-5 fill-current" />
        </div>

        {/* avatar */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${avatarBg} flex items-center justify-center shadow-md`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#fff" />
              <path d="M3 20c0-3.866 3.582-7 8.5-7S20 16.134 20 20v1H3v-1z" fill="#fff" />
            </svg>
          </div>

          <div className="text-center">
            <h3 className="font-medium text-sm text-gray-800">{profile.name}</h3>
            <div className="text-xs text-blue-600 font-medium">{profile.title}</div>
            <div className="text-xs text-gray-500">{profile.country}</div>
          </div>

          <div className="mt-2 text-xs text-gray-500 font-medium">&lt; - Experience - &gt;</div>
          <div className="text-sm font-semibold text-blue-800">{profile.exp}</div>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {profile.tags.map((t, i) => (
            <span key={i} className="px-3 py-1 border border-gray-300 rounded-full text-xs bg-white shadow-sm text-gray-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const filteredProfiles = useMemo(() => {
    if (!localSearchQuery) return profiles;
    const query = localSearchQuery.toLowerCase();
    return profiles.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.title.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [localSearchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-700">
      <div className="max-w-[1400px] mx-auto bg-white shadow-lg rounded-xl overflow-hidden my-6">

        {/* Header - ปรับปรุงการจัดเรียงให้ช่องค้นหาอยู่ตรงกลาง */}
        <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
          
          {/* Logo/Title - ซ้าย */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-2xl font-bold pl-2">PerFile</div>
          </div>

          {/* Search Bar - ตรงกลาง (ถูกปรับให้มีความกว้างจำกัดและจัดอยู่กึ่งกลาง) */}
          <div className="flex-1 flex justify-center px-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search Profile, User"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                // ** เพิ่ม pr-10 เพื่อเว้นที่ว่างสำหรับไอคอนด้านขวา **
                className="w-full rounded-full py-2 px-4 pl-10 pr-10 text-sm focus:outline-none text-gray-900 placeholder-[#8889C8] border-4 border-[#5EB4FF]"
              />
              {/* ไอคอนค้นหา - ซ้าย */}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5EB4FF]" />

              {/* ** ไอคอนตัวกรอง - ขวา (เปลี่ยนกลับเป็น Filter icon (กรวย) ตามภาพ) ** */}
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5EB4FF] cursor-pointer hover:opacity-80 transition-opacity" />

            </div>
          </div>

          {/* Log out Button - ขวา (เพิ่ม border border-white) */}
          <button className="bg-red-600 px-4 py-1 rounded text-sm hover:bg-red-700 transition-colors flex-shrink-0 border border-white">
            Log out
          </button>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 p-6">
            {/* Top Search Bar (Local Filter) */}
            <div className="mb-6">
              <div className="bg-white rounded-full px-4 py-2 shadow-inner border border-gray-200 flex items-center">
                <input
                  className="w-full outline-none text-sm placeholder-gray-400"
                  placeholder="ค้นหาชื่อ :"
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                />
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>

            {/* Controls row (Sort & Filter) */}
            <div className="flex justify-end items-center mb-6 gap-4 text-gray-600">
              <button className="flex items-center gap-1 p-2 rounded-lg bg-white shadow border border-gray-200 text-sm hover:bg-gray-50 transition-colors">
                Sort <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 p-2 rounded-lg bg-white shadow border border-gray-200 text-sm hover:bg-gray-50 transition-colors">
                Filter <Menu className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of cards */}
            {filteredProfiles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredProfiles.map((p, idx) => (
                    <ProfileCard key={idx} profile={p} />
                ))}
                </div>
            ) : (
                <div className="text-center p-10 bg-white rounded-xl shadow-lg mt-8 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-600">ไม่พบโปรไฟล์</h3>
                    <p className="text-gray-400 mt-2">ลองปรับเกณฑ์การค้นหาของคุณ</p>
                </div>
            )}

            {/* bottom spacing */}
            <div className="h-16" />
          </main>
        </div>
      </div>
    </div>
  );
}