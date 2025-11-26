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
const profiles = [];

// Sidebar component
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-create-btn">
      <HomeIcon className="w-5 h-5" />
      <span>Home</span>
    </div>
    <div className="sidebar-create-btn">
      <Grid className="w-5 h-5" />
      <span>Dsahboard</span>
    </div>
    <div className="sidebar-create-btn">
      <Bell className="w-5 h-5" />
      <span>Notification</span>
    </div>
    <div className="sidebar-create-btn">
      <User className="w-5 h-5" />
      <span>User</span>
    </div>	

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
          <div className="search-input-wrapper-admin">
            <Search className="search-icon-admin" />
            <input
              type="text"
              placeholder="Search Profile, User"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-admin"
            />
            <Filter className="filter-icon-admin" />
          </div>
				</div>
				<div className="header-actions">
					<a href="/Login" className="header-logout">
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
            <h2 className="home-section-title-admin">ค้นหา User ที่ยังไม่ได้ยืนยัน</h2>
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
              <button className="filter-btn-admin">
                <Filter className="w-4 h-4" />
              </button>
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
