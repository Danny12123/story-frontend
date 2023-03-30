import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserImage from "../../Img/profile.jpg";
import { format } from "timeago.js";
import { Link } from 'react-router-dom';
import Pic1 from '../.././Img/77.jpeg'
const Rmessage = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friends = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friends);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div>
      <section id="use_message">
        {/* <Link to="/smchat" style={{ textDecoration: "none" }}> */}
        <div className="use_me_holder">
          <div className="usr_holder">
            <div className="user_holder">
              {/* <img src={UserImage} alt="" /> */}
              <img
                src={user?.profilePicture ? user.profilePicture : UserImage}
                alt="imge"
              />
            </div>
          </div>
          <div className="us_text">
            <span>{format(user?.createdAt)}</span>
            <h5>{user?.username}</h5>
            <p>We have the team that helps</p>
          </div>
        </div>
        {/* </Link> */}
      </section>
      <section id="sm_use_message">
        {/* <Link to="/smchat" style={{ textDecoration: "none" }}> */}
        <div className="sm_use_me_holder">
          <div className="sm_user_holder">
            {/* <img
              src={user?.profilePicture ? user.profilePicture : UserImage}
              alt="imge"
            /> */}
            {/* <img src={Pic1} alt="" /> */}
          </div>
          <div className="sm_us_text">
            <h5>{user?.username}</h5>
          </div>
        </div>
        {/* </Link> */}
      </section>
    </div>
  );
};

export default Rmessage
