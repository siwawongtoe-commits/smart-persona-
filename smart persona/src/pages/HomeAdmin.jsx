import React, { useState, useMemo } from "react";
import {
  Search,
  LogOut,
  Plus,
  Home as HomeIcon,
  Bookmark,
  Filter,
  Users,
  Bell,
  Settings,
  Grid,
  User,
} from "lucide-react";
import "../styles/HomeAdmin.css";

// Profile data from DashboardAdmin
const profiles = [
	{ name: "สมชาย ใจดีมาก", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"], type: "private"  },
	{ name: "ปพิชญา วงศ์สถิตย์", title: "Software Developer", country: "Thailand | USA", exp: "2.5 years", tags: ["Python", "Javascript", "React"], type: "private" },
	{ name: "กวิน สุวีวรินทร์", title: "UX/UI Designer", country: "Thailand", exp: "6 years", tags: ["Photoshop", "Illustrator", "Design"], type: "private" },
	{ name: "ศิริ วัฒนกุล", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"], type: "private" },
	{ name: "เชน ธนภูมิ", title: "Mobile App Developer", country: "Thailand", exp: "3.5 years", tags: ["Kotlin", "Flutter", "Swift"], type: "private"},
	{ name: "ธนการ หลายพันธ์", title: "Data Scientist", country: "Thailand | Singapore", exp: "4 years", tags: ["Python", "Machine Learning", "SQL"], type: "public" },
	{ name: "ณิชาพัชร์ เกษมสุข", title: "Cybersecurity Analyst", country: "Thailand", exp: "5 years", tags: ["Network Security", "Linux", "Penetration Testing"], type: "public", },
];

// Sidebar component
const Sidebar = () => (
  <aside className="sidebar1">
    <a href="/Home-Admin">
    <div className="sidebar-create-btn">
      <HomeIcon className="w-5 h-5" />
      <span>Home</span>
    </div>
    </a>
    <a href="/Dashboard-Admin">
    <div className="sidebar-create-btn">
      <Grid className="w-5 h-5" />
      <span>Dashboard</span>
    </div>
    </a>
    <div className="sidebar-create-btn">
      <Bell className="w-5 h-5" />
      <span>Notification</span>
    </div>
    <a href="/Setting-Admin">
    <div className="sidebar-create-btn">
      <User className="w-5 h-5" />
      <span>User</span>
    </div>
    </a>

  </aside>
);

// Profile Card component
const ProfileCard = ({ profile }) => (
  <div className={`profile-card-admin ${profile.status}`}>
    <div className="profile-card-header-admin">
      {profile.status === "pending" && (
        <span className="status-badge-admin pending">ยังไม่ยืนยัน</span>
      )}
      {profile.status === "verified" && (
        <span className="status-badge-admin verified">✓ ยืนยัน</span>
      )}
      <Bookmark className="profile-bookmark-icon-admin" />
    </div>

    <div className="profile-card-avatar-admin">
      <div className="avatar-placeholder-admin">
        <User className="w-10 h-10 text-white" />
      </div>
    </div>

    <div className="profile-card-content-admin">
      <h3 className="profile-name-admin">{profile.name}</h3>
      <p className="profile-title-admin">{profile.title}</p>
      <p className="profile-country-admin">{profile.country}</p>
      <div className="profile-experience-admin">
        &lt; - Experience - &gt;
        <p className="experience-years-admin">{profile.exp}</p>
      </div>
    </div>

    <div className="profile-tags-admin">
      {profile.tags.map((tag, idx) => (
        <span key={idx} className="tag-admin">
          {tag}
        </span>
      ))}
    </div>

    <div className="profile-footer-admin">
      <small>Edited - 30 minutes ago</small>
    </div>
  </div>
);

export default function HomeAdmin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredProfiles = useMemo(() => {
    let filtered = profiles;

    if (filterStatus !== "all") {
      filtered = filtered.filter((p) => p.status === filterStatus);
    }

    if (!searchQuery) return filtered;
    const q = searchQuery.toLowerCase();
    return filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [searchQuery, filterStatus]);

  const pendingCount = profiles.filter((p) => p.status === "pending").length;

  return (
    <div className="home-admin-container">
      {/* Header */}
      <header className="home-header-admin">
        <div className="header-left-admin">
          <h1 className="header-title-admin">PerFile</h1>
        </div>
        <div className="header-search-admin">

				</div>
				<div className="header-actions">
					<a href="/" className="header-admin-logout">
						Log out
					</a>
				</div>
      </header>

      <div className="home-layout-admin">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="home-main-admin">
          {/* Title Section */}
          <div className="home-title-section-admin">
            
            <div className="home-controls-admin">
              <div className="search-local-admin">
                <input
                  type="text"
                  placeholder="ค้นหาชื่อ :"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-local-admin"
                />
                <Search className="search-icon-local-admin" />
              </div>
             
            </div>
          </div>

          {/* Profile Section */}
          <section className="profile-section-admin">
            <h3 className="section-heading-admin">Users ที่ยังไม่ได้ยืนยัน</h3>
            <div className="profile-grid-admin">
              {filteredProfiles.filter(p => p.status === "pending").length > 0 ? (
                filteredProfiles
                  .filter(p => p.status === "pending")
                  .map((p, idx) => <ProfileCard key={idx} profile={p} />)
              ) : (
                <p className="no-results-admin">ไม่พบผู้ใช้ที่ยังไม่ยืนยัน</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
