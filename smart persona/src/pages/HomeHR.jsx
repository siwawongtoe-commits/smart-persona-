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
  Menu,
  MessageCircle,
  BarChart,
  User,
} from "lucide-react";
import "../styles/HomeHR.css";

// Profile data from DashboardHR
const profiles = [
  { name: "สมชาย ใจดีมาก", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"], isFavorite: false },
  { name: "ปพิชญา วงศ์สถิตย์", title: "Software Developer", country: "Thailand | USA", exp: "2.5 years", tags: ["Python", "Javascript", "React"], isFavorite: false },
  { name: "กวิน สุวีวรินทร์", title: "UX/UI Designer", country: "Thailand", exp: "6 years", tags: ["Photoshop", "Illustrator", "Design"], isFavorite: false },
  { name: "ศิริ วัฒนกุล", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"], isFavorite: false },
  { name: "เชน ธนภูมิ", title: "Mobile App Developer", country: "Thailand", exp: "3.5 years", tags: ["Kotlin", "Flutter", "Swift"], isFavorite: false },
  { name: "ธนการ หลายพันธ์", title: "Data Scientist", country: "Thailand | Singapore", exp: "4 years", tags: ["Python", "Machine Learning", "SQL"], isFavorite: false },
  { name: "ณิชาพัชร์ เกษมสุข", title: "Cybersecurity Analyst", country: "Thailand", exp: "5 years", tags: ["Network Security", "Linux", "Penetration Testing"], isFavorite: false },
  { name: "รารัช เจริญธรรม", title: "Video Editor", country: "Thailand", exp: "4 years", tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"], isFavorite: false },
  { name: "ปรเมศวร์ วงษ์สุกรี", title: "Marketing Analyst", country: "Thailand", exp: "3.5 years", tags: ["Data Studio", "Excel", "Google Analytics"], isFavorite: true },
  { name: "แพรว แสงสุวรรณ", title: "Product Developer", country: "Thailand", exp: "5 years", tags: ["Roadmapping", "Agile", "Market Research"], isFavorite: false },
];

// Sidebar component
const Sidebar = () => (
  <aside className="sidebar-hr">
    <button className="sidebar-create-btn-hr">
      <Plus className="w-5 h-5" />
    </button>
    <nav className="sidebar-nav-hr">
      <button className="sidebar-item-hr active">
        <Home className="w-5 h-5" />
      </button>
      <button className="sidebar-item-hr">
        <Grid className="w-5 h-5" />
      </button>
      <button className="sidebar-item-hr">
        <Users className="w-5 h-5" />
      </button>
      <button className="sidebar-item-hr">
        <Bookmark className="w-5 h-5" />
      </button>
      <button className="sidebar-item-hr">
        <Bell className="w-5 h-5" />
      </button>
      <button className="sidebar-item-hr">
        <Settings className="w-5 h-5" />
      </button>
    </nav>
  </aside>
);

// Profile Card component
const ProfileCard = ({ profile }) => (
  <div className="profile-card-hr">
    <div className="profile-card-header-hr">
      <Bookmark className="profile-bookmark-icon-hr" />
    </div>

    <div className="profile-card-avatar-hr">
      <div className="avatar-placeholder-hr">
        <User className="w-10 h-10 text-white" />
      </div>
    </div>

    <div className="profile-card-content-hr">
      <h3 className="profile-name-hr">{profile.name}</h3>
      <p className="profile-title-hr">{profile.title}</p>
      <p className="profile-country-hr">{profile.country}</p>
      <div className="profile-experience-hr">
        &lt; - Experience - &gt;
        <p className="experience-years-hr">{profile.exp}</p>
      </div>
    </div>

    <div className="profile-tags-hr">
      {profile.tags.map((tag, idx) => (
        <span key={idx} className="tag-hr">
          {tag}
        </span>
      ))}
    </div>

    <div className="profile-footer-hr">
      <small>Edited - 30 minutes ago</small>
    </div>
  </div>
);

export default function HomeHR() {
  const [searchQuery, setSearchQuery] = useState("");

  const favoriteProfiles = useMemo(
    () => profiles.filter((p) => p.isFavorite),
    []
  );

  const filteredFavorites = useMemo(() => {
    if (!searchQuery) return favoriteProfiles;
    const q = searchQuery.toLowerCase();
    return favoriteProfiles.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [searchQuery, favoriteProfiles]);

  return (
    <div className="home-hr-container">
      {/* Header */}
      <header className="home-header-hr">
        <div className="header-left-hr">
          <h1 className="header-title-hr">PerFile</h1>
        </div>
        <div className="header-search-hr">
          <div className="search-input-wrapper-hr">
            <Search className="search-icon-hr" />
            <input
              type="text"
              placeholder="Search Profile, User"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-hr"
            />
            <Filter className="filter-icon-hr" />
          </div>
        </div>
        <button className="header-logout-hr">Log out</button>
      </header>

      <div className="home-layout-hr">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="home-main-hr">
          {/* Title Section */}
          <div className="home-title-section-hr">
            <h2 className="home-section-title-hr">เริ่มค้นหารูปเพิ่มเติมจากปังรับสองคุณ</h2>
            <div className="home-controls-hr">
              <div className="search-local-hr">
                <input
                  type="text"
                  placeholder="ค้นหาชื่อ :"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-local-hr"
                />
                <Search className="search-icon-local-hr" />
              </div>
              <button className="filter-btn-hr">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Favorites Profile Section */}
          <section className="profile-section-hr">
            <h3 className="section-heading-hr">Favorites Profile</h3>
            <div className="profile-grid-hr">
              {filteredFavorites.length > 0 ? (
                filteredFavorites.map((p, idx) => <ProfileCard key={idx} profile={p} />)
              ) : (
                <p className="no-results-hr">ไม่พบโปรไฟล์</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
