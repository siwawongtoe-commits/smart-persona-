import React from 'react';
import './UserProfile.css';



function UserProfile() {
    return ( 
        <div>
            <main>
                <section>
                {/* ส่วนรายละเอียด (Details Section) */}

                <div className="details-box">
                    <h2 className="details-title">รายละเอียด</h2>
                    <p><strong>สายงาน :</strong></p>
                    <p><strong>การศึกษา :</strong></p>
                    <p><strong>ทักษะ :</strong></p>
                    <p><strong>คุณสมบัติการทำงาน :</strong></p>
                    <p><strong>ประสบการณ์การทำงาน :</strong></p>
                </div>

                {/* ส่วนความคิดเห็น (Comments Section) */}
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
}

export default UserProfile;