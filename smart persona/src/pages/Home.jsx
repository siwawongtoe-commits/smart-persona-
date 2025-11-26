import React, { useState, useMemo } from "react";
import {
	Search,
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
import "../styles/Home.css";

// Profile data - same as Dashboard
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
		<div className="sidebar-create-btn">
			<Plus className="w-5 h-5" />
			<span>Create</span>
		</div>
		<a href="/Home">
		<div className="sidebar-create-btn">
			<Grid className="w-5 h-5" />
			<span>Home</span>
		</div>
		</a>
		<a href="/Dashboard">
		<div className="sidebar-create-btn">
			<Grid className="w-5 h-5" />
			<span>Dashboard</span>
		</div>
		</a>
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
	<div className="profile-card">
		<div className="profile-card-header">
			<span className="profile-role-badge">{profile.role}</span>
			{profile.status && (
				<span className={`profile-status-badge ${profile.status}`}>{profile.status}</span>
			)}
			<Bookmark className="profile-bookmark-icon" />
		</div>

		<div className="profile-card-avatar">
			<div className="avatar-placeholder">
				<User className="w-12 h-12 text-white" />
			</div>
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
			{profile.tags.map((tag, idx) => (
				<span key={idx} className="tag">
					{tag}
				</span>
			))}
		</div>

		<div className="profile-footer">
			<small>Edited - 30 minutes ago</small>
		</div>
	</div>
);

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	const privateProfiles = useMemo(
		() => profiles.filter((p) => p.type === "private"),
		[]
	);

	const publicProfiles = useMemo(
		() => profiles.filter((p) => p.type === "public"),
		[]
	);

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

	const filteredPublic = useMemo(() => {
		if (!searchQuery) return publicProfiles;
		const q = searchQuery.toLowerCase();
		return publicProfiles.filter(
			(p) =>
				p.name.toLowerCase().includes(q) ||
				p.title.toLowerCase().includes(q) ||
				p.tags.some((tag) => tag.toLowerCase().includes(q))
		);
	}, [searchQuery, publicProfiles]);

	return (
		<div className="home-container">
			{/* Header */}
			<header className="home-header">
				<div className="header-left">
					<h1 className="header-title">PerFile</h1>
				</div>
				<div className="header-search">
					<div className="search-input-wrapper">
						<Search className="search-icon" />
						<input
							type="text"
							placeholder="Search Profile, User"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="search-input"
						/>
						<Filter className="filter-icon" />
					</div>
				</div>
				<div className="header-actions">
					<a href="/Login" className="header-logout">
						Log out
					</a>
				</div>
			</header>

			<div className="home-layout">
				{/* Sidebar */}
				<Sidebar />

				{/* Main Content */}
				<main className="home-main">
					{/* Title Section */}
					<div className="home-title-section">
						<h2 className="home-section-title">เริ่มสร้างเรซูเม่ด้วยตัวตนแท้จริงของคุณ</h2>
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
							<button className="filter-btn">
								<Filter className="w-4 h-4" />
							</button>
						</div>
					</div>

					{/* Private Profile Section */}
					<section className="profile-section">
						<h3 className="section-heading">Private Profile</h3>
						<div className="profile-grid">
							{filteredPrivate.length > 0 ? (
								filteredPrivate.map((p, idx) => <ProfileCard key={idx} profile={p} />)
							) : (
								<p className="no-results">ไม่พบโปรไฟล์</p>
							)}
						</div>
					</section>

					{/* Public Profile Section */}
					<section className="profile-section">
						<h3 className="section-heading">Public Profile</h3>
						<div className="profile-grid">
							{filteredPublic.length > 0 ? (
								filteredPublic.map((p, idx) => <ProfileCard key={idx} profile={p} />)
							) : (
								<p className="no-results">ไม่พบโปรไฟล์</p>
							)}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
