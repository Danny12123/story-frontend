import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const UprofileInfo = ({ recentActive, setRecentActive, upload, }) => {
    const {user} = useContext(AuthContext)
    // console.log(user)
  return (
    <div>
      <section id="profile_info">
        <div className="wa_info_name">
          <h5>{user.username}</h5>
          <span> verified</span>
        </div>
        <div className="wa_info_dec">
          <p>
            <span>Wallet ID: 0x3466***3c9fe270491af8d</span> <br />
            Father, <br /> Philantropist, <br /> {user.desc}
          </p>
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

export default UprofileInfo;
