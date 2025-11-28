import { useLocation } from "react-router-dom";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const query = new URLSearchParams(useLocation().search);

  const name = query.get("name");
  const title = query.get("title");
  const country = query.get("country");
  const exp = query.get("exp");
  const tags = query.get("tags")?.split(",") || [];

  return (
    <div className="profile-container">
      
      <header className="header">
        <div className="back-button" onClick={() => window.history.back()}>←</div>
        <div className="title">{name}</div> 
      </header>

      <main className="main-content">

        {/* ซ้าย */}
        <section className="left-column">
          <div className="grid-container">
            <div className="grid-item11 item-photo11">
              <div className="photo-placeholder">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>

            <div className="grid-item11 item-name">{name}</div>
            <div className="grid-item11 item-education">{title}</div>
            <div className="grid-item11 item-career-goals">{country}</div>
            <div className="grid-item11 item-skills">{tags.join(", ")}</div>
            <div className="grid-item11 item-work-experience">{exp}</div>
            <div className="grid-item11 item-attributes">-</div>
          </div>
        </section>

        {/* ขวา */}
        <section className="right-column">
          <div className="details-box">
            <h2 className="details-title">รายละเอียด</h2>
            <p><strong>สายงาน :</strong> {title}</p>
            <p><strong>ประเทศ :</strong> {country}</p>
            <p><strong>ประสบการณ์ :</strong> {exp}</p>
            <p><strong>ทักษะ :</strong> {tags.join(", ")}</p>
          </div>

          <div className="comment-box">
            <h3 className="comment-title">Comment</h3>
            <div className="user-comment-input">
                <div className="user-icon">👤</div>
                <div className="input-area">
                    <div className="username">User Name</div>
                    <div className="placeholder">(พิมพ์ความคิดเห็น...)</div>
                </div>
                <div className="more-options">...</div>
            </div>
            <div className="post-button-container">
                <button className="post-button">โพสต์ความคิดเห็นของคุณ</button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default UserProfile;
