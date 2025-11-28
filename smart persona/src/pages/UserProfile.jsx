import "../styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
        {/* {/ ส่วนหัว (Header) /} */}
      <header className="header">
        <div className="back-button">←</div>
        <div className="title">สมชาย ใจดีมาก</div> 
      </header>

      {/* {/ เนื้อหาหลัก (Main Content) /} */}
      <main className="main-content">

        {/* {/ คอลัมน์ซ้าย (Left Column - The Grid) /} */}
        <section className="left-column">
          <div className="grid-container">
            <div className="grid-item item-photo">
              <div className="photo-placeholder">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="grid-item item-name">Name</div>
            <div className="grid-item item-education">Education</div>
            <div className="grid-item item-career-goals">Career Goals</div>
            <div className="grid-item item-skills">Skills</div>
            <div className="grid-item item-work-experience">Work Experience</div>
            <div className="grid-item item-attributes">Attributes</div>
          </div>
        </section>

        {/* คอลัมน์ขวา (Right Column - Details & Comment) */}
        <section className="right-column">
        {/* รายละเอียด (Details Section) */}
          <div className="details-box">
            <h2 className="details-title">รายละเอียด</h2>
            <p><strong>สายงาน :</strong></p>
            <p><strong>การศึกษา :</strong></p>
            <p><strong>ทักษะ :</strong></p>
            <p><strong>คุณสมบัติการทำงาน :</strong></p>
            <p><strong>ประสบการณ์การทำงาน :</strong></p>
          </div>

          {/* ส่วน Comment (Comment Section) */}
          <div className="comment-box">
            <h3 className="comment-title">Comment</h3>
            <div className="user-comment-input">
                <div className="user-icon">👤
</div>
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