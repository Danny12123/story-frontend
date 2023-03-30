import React, {useState} from 'react';

const ProfileInfo = ({ recentActive, setRecentActive, upload, user }) => {
  return (
    <div>
      <section id="profile_info">
        <div className="wa_info_name">
          <h5>{user.username}</h5>
          <span> verified</span>
        </div>
        <div className="wa_info_dec">
          {user.desc === "" ? (
            <div>
              <p>write a description about your self..</p>
            </div>
          ) : (
            <p>
              <span>Wallet ID: 0x3466***3c9fe270491af8d</span> <br />
              Father, <br /> Philantropist, <br /> {user.desc}
            </p>
          )}

          <div className="wa_info_btn">
            <button onClick={upload} className="wa_btn_1">
              New Story
            </button>
            <button className="wa_btn_2">My Wallet</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo
