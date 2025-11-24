import React, { useState, useMemo } from "react";
import {
  Search,
  LogOut,
  Plus,
  Home,
  Bookmark,
  ChevronDown,
  Filter, 
  Users,
  Bell,
  Settings,
  Grid,
  Menu, // Used for the filter/sort menu icon in the main content area
  MessageCircle,
  BarChart,
  User,
} from "lucide-react";

// The base data structure
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

// Dedicated Profile Card component
const ProfileCard = ({ profile }) => {
  const avatarBg = useMemo(() => {
    // Colors matching the gradient style in the image
    const colors = [
      "from-red-400 to-pink-300",
      "from-green-400 to-cyan-300",
      "from-blue-400 to-indigo-300",
      "from-yellow-400 to-orange-300",
      "from-purple-400 to-fuchsia-300",
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
    <article className="profile-card-outer p-[2px] rounded-2xl shadow-xl relative hover:shadow-2xl transition-all duration-200 bg-gradient-to-br from-[#8889C8] via-[#5EB4FF] to-[#9092FF] cursor-pointer">
      
      {/* Inner container to hold the content, must be solid white */}
      <div className="profile-card bg-white rounded-2xl p-6 h-full flex flex-col items-center">

        {/* Bookmark icon */}
        <div className="bookmark-icon absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
          <Bookmark className="w-5 h-5 fill-current" />
        </div>

        {/* Avatar */}
        <div className={`profile-avatar w-20 h-20 rounded-full bg-gradient-to-tr ${avatarBg} flex items-center justify-center shadow-lg ring-4 ring-white`}>
          {/* Using User icon for generic avatar as in the image */}
          <User className="w-10 h-10 text-white" />
        </div>

        <div className="text-center mt-3">
          <h3 className="profile-name font-semibold text-lg text-gray-800">{profile.name}</h3>
          <div className="profile-role text-sm text-blue-600 font-medium mt-0.5">{profile.title}</div>
          <div className="profile-location text-xs text-gray-500 mt-1">{profile.country}</div>
        </div>

        <div className="mt-4 text-xs text-gray-500 font-medium select-none"> &lt; - Experience - &gt; </div>
        <div className="profile-experience text-base font-bold text-blue-800">{profile.exp}</div>

        {/* Tags */}
        <div className="card-footer mt-4 flex flex-wrap gap-2 justify-center">
          {profile.tags.map((t, i) => (
            <span 
              key={i} 
              className="skill-tag px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState(""); // For the main header search (global/dummy)
  const [localSearchQuery, setLocalSearchQuery] = useState(""); // For the main content filter

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
    // 1. Outer Container: Soft blue/purple background and large rounding to match the whole page canvas
    <div className="dashboard-hr min-h-screen p-4 sm:p-8 bg-gradient-to-b from-[#E7E9FF] to-[#CCDAFF] font-sans antialiased text-gray-700">
      <div className="dashboard-hr-container max-w-[1400px] mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* Header (Top Navigation) */}
        <header className="dashboard-header bg-blue-800 text-white p-4 flex items-center justify-between">
          
          {/* Logo/Title - Left */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-2xl font-extrabold pl-2 tracking-wide">PerFile</div>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-1 flex justify-center px-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search Profile, User"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                // White background, colorful border as seen in the image
                className="w-full rounded-full py-2 px-4 pl-10 pr-10 text-sm focus:outline-none text-gray-900 placeholder-gray-500 border-4 border-[#5EB4FF] shadow-inner"
              />
              {/* Search Icon - Left */}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5EB4FF]" />

              {/* Filter Icon - Right (Funnel icon used for general filtering context) */}
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5EB4FF] cursor-pointer hover:opacity-80 transition-opacity" />

            </div>
          </div>

          {/* Log out Button - Right */}
          <button className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors flex-shrink-0 border border-white">
            Log out
          </button>
        </header>

        {/* Main Content Area (Full Width since Sidebar is removed) */}
        <main className="dashboard-main flex-1 p-6 w-full">
          
          {/* Top Local Filter Bar */}
          <div className="content-header mb-6 flex justify-between items-center gap-4">
            
            <div className="relative flex-1">
              <input
                className="local-search w-full outline-none text-sm placeholder-gray-400 rounded-full px-4 py-2 shadow-inner border border-gray-200"
                placeholder="ค้นหาชื่อ :"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Controls icon (Simplified to Menu icon as seen in the image top right) */}
            <button className="p-2 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Grid of cards */}
          {filteredProfiles.length > 0 ? (
                <div className="profiles-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
  );
}