import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import "../Styles/profile.css";
// import { FaAd, FaCamera, FaReceipt, FaSeedling } from "react-icons/fa";
import {
  FaAd,
  FaCamera,
  FaPhotoVideo,
  FaReceipt,
  FaSeedling,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import ProfilRouter from "../Routers/ProfilRouter";
import { GrClose } from "react-icons/gr";
import ProfileHeader from "../Holder/ProfileHeader";
import ProfileInfo from "../Holder/ProfileH/ProfileInfo";
import ProfileStory from "../Holder/ProfileH/ProfileStory";
import MyStories from "../Component/MyStories";
import MyFavouSto from "../Component/MyFavouSto";
import Completed from "../Component/Completed";
import axios from "axios";
import { useParams } from "react-router";
import Postcontent from "../Component/Postcontent";
import { AuthContext } from "../Context/AuthContext";

const Profile = ({ recentActive, setRecentActive }) => {
  const [uploadStory, setUploadStory] = useState("");
  const [uploadStoryVideo, setUploadStoryVideo] = useState("");
  const [profileNavActive, setProfileNavActive] = useState(false);
  // const [userpost, setUserpost] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const username = useParams();
  const {user} = useContext(AuthContext);
  // console.log(user.username);
  const upload = () => {
    setIsActive(!isActive);
    setUploadStory("");
  };
  //for uploading a stroy
  const uploadImaVid = (e) => {

    setUploadStory(e.target.files[0]);
  };

  const showActiev = () => {
    setProfileNavActive(!profileNavActive);
  };

  //toggle tabs
  const [toggleTabs, setToggleTabs] = useState(1);
  const toggleTab = (index) => {
    setToggleTabs(index);
  };
  const [userBox, setUserBox] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
        const resp = await axios.get(`/users?username=${username}`);
        setUserBox(resp.data);
      
      // console.log(resp.data)
      
    };
    fetchUser();
  }, [user.username]);


  //upload profile
  const [openPorfile, setOpenPorfile] = useState(false)

  const showProfileHandler = () => {
    setOpenPorfile(!openPorfile)
  }

  
  
  return (
    <>
      <div className="holder_profile">
        <NavBar />

        <ProfileHeader user={userBox} />

        <ProfileInfo
          // userpost={userpost}
          user={userBox}
          recentActive={recentActive}
          setRecentActive={setRecentActive}
          upload={upload}
        />

        <section id="profile_rout">
          <div className="pro_rut_container">
            <h5
              className={toggleTabs === 1 ? "tabsActive" : ""}
              onClick={() => toggleTab(1)}
            >
              My Stories
            </h5>
            <h5
              className={toggleTabs === 2 ? "tabsActive" : ""}
              onClick={() => toggleTab(2)}
            >
              Favourite Stories
            </h5>
            <h5
              className={toggleTabs === 3 ? "tabsActive" : ""}
              onClick={() => toggleTab(3)}
            >
              Completed
            </h5>
          </div>
        </section>

        <section>
          <div
            className={
              toggleTabs === 1 ? "my_stories pro_ro_active" : "pro_ro_disactive"
            }
          >
            <Postcontent username={user.username} />
            {/* <MyStories username={user.username} /> */}
          </div>
          <div
            className={
              toggleTabs === 2 ? "favourite pro_ro_active" : "pro_ro_disactive"
            }
          >
            <MyFavouSto />{" "}
          </div>
          <div
            className={
              toggleTabs === 3 ? "completed pro_ro_active" : "pro_ro_disactive"
            }
          >
            <Completed />{" "}
          </div>
        </section>

        {/*To upload a story*/}
        <ProfileStory
          isActive={isActive}
          uploadStory={uploadStory}
          uploadStoryVideo={uploadStoryVideo}
          upload={upload}
          uploadImaVid={uploadImaVid}
        />
      </div>

      {/* // <div className={openPorfile ? "active_profile":"disactive_profile"}>
      //   <div className="edit_profile">
      //     <div className="coverpic">
            
      //     </div>
      //       <div className="profilepic"></div>
      //   </div>
      // </div> */}
    </>
  );
};

export default Profile;
