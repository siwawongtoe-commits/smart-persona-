import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	Search,
	Plus,
	Home as HomeIcon,
	Bookmark,
	Grid,
	User,
	Bell,
} from "lucide-react";
import "../styles/HomeHR.css";

// ตัวอย่าง Profile
const profiles = [
	{ name: "สมชาย ใจดีมาก", title: "Web Developer", country: "Thailand", exp: "4 years", tags: ["Laravel", "Vue js", "SEO"], type: "private"  },
	{ name: "ปพิชญา วงศ์สถิตย์", title: "Software Developer", country: "Thailand | USA", exp: "2.5 years", tags: ["Python", "Javascript", "React"], type: "private" },
];

const Sidebar = () => (
	<aside className="sidebar1">
		<a href="/Home-HR">
		<div className="sidebar-create-btn">
			<HomeIcon className="w-5 h-5" />
			<span>Home</span>
		</div>
		</a>
		<a href="/DashboardHR">
			<div className="sidebar-create-btn">
				<Grid className="w-5 h-5" />
				<span>Dashboard</span>
			</div>
		</a>
		<div className="sidebar-create-btn">
			<Bell className="w-5 h-5" />
			<span>Notification</span>
		</div>
		<a href="/SettingHR">
			<div className="sidebar-create-btn">
				<User className="w-5 h-5" />
				<span>User</span>
			</div>
		</a>
	</aside>
);

const ProfileCard = ({ profile }) => {
	const navigate = useNavigate();
	const openProfile = () => {
		navigate(`/UserProfile?name=${encodeURIComponent(profile.name)}&title=${encodeURIComponent(profile.title)}&country=${encodeURIComponent(profile.country)}&exp=${encodeURIComponent(profile.exp)}&tags=${encodeURIComponent(profile.tags.join(","))}`);
	};
	return (
		<div className="profile-card" onClick={openProfile} style={{ cursor: "pointer" }}>
			<div className="profile-card-header">
				<Bookmark className="profile-bookmark-icon" />
			</div>
			<div className="profile-avatar1 w-20 h-20 rounded-full bg-gradient-to-tr flex items-center justify-center shadow-lg ring-4 ring-white">
				<User className="w-12 h-12 text-white" />
			</div>
			<div className="profile-card-content">
				<h3 className="profile-name">{profile.name}</h3>
				<p className="profile-title">{profile.title}</p>
				<p className="profile-country">{profile.country}</p>
				<div className="profile-experience">
					&lt; - Experience - &gt;
					<p className="experience-years">{profile.exp}</p>
				</div>
			</div>
			<div className="profile-tags">
				{profile.tags.map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
			</div>
			<div className="profile-footer">
				<small>Edited - 30 minutes ago</small>
			</div>
		</div>
	);
};

export default function HomeHR() {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentUser, setCurrentUser] = useState(null);
	const navigate = useNavigate();

	// ดึง HR ล่าสุดจาก localStorage
	useEffect(() => {
		const users = JSON.parse(localStorage.getItem("currentUserHR")) || { HR: [], Admin: [] };
		if (users.HR.length > 0) setCurrentUser(users.HR[users.HR.length - 1]);
	}, []);

	const privateProfiles = useMemo(() => profiles.filter((p) => p.type === "private"), []);
	const filteredPrivate = useMemo(() => {
		if (!searchQuery) return privateProfiles;
		const q = searchQuery.toLowerCase();
		return privateProfiles.filter(
			(p) =>
				p.name.toLowerCase().includes(q) ||
				p.title.toLowerCase().includes(q) ||
				p.tags.some((tag) => tag.toLowerCase().includes(q))
		);
	}, [searchQuery, privateProfiles]);

	return (
		<div className="home-container">
			<header className="home-header1">
				<div className="header-left">
					<h1 className="header-title">PerFile</h1>
				</div>
				<div className="header-actions">
					{currentUser && <span className="welcome-text">สวัสดี, {currentUser.name}</span>}
					<a href="/" className="header-logout1">Log out</a>
				</div>
			</header>
			<div className="home-layout">
				<Sidebar />
				<main className="home-main">
					<div className="home-title-section">
						<div className="home-controls">
							<div className="search-local">
								<input
									type="text"
									placeholder="ค้นหาชื่อคน"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="search-input-local"
								/>
								<Search className="search-icon-local" />
							</div>
						</div>
					</div>
					<section className="profile-section">
						<h3 className="section-heading1">Favourite Profile</h3>
						<div className="profile-grid">
							{filteredPrivate.map((p, idx) => <ProfileCard key={idx} profile={p} />)}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
