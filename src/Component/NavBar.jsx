import React, { useContext, useState, useEffect } from "react";
import "../Styles/navBar.css";
import { FaAngleDown, FaArrowDown, FaBars, FaBell } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UseAuthContext";
import { AiOutlineScan } from "react-icons/ai";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {useSelector} from 'react-redux'
import ProfilePic from '.././Img/profile.jpg'
import { SmBarData } from "./SideBarData";

import logo from '../Img/log.png';
import pic1 from '../Img/66.jpeg';
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const NavBar = ({socket}) => {
  const [active, setActive] = useState(false);
  const sidebarActive = () => {
    setActive(!active)
  }
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);
    const [showNotification, setShowNotification] = useState(false);
    const [makeAllNoti, setMakeAllNoti] = useState(false);
    const showNot = () => {
      setShowNotification(!showNotification);
    };
    const makeAllHandler = () => {
      setMakeAllNoti(!makeAllNoti);
    };
  //search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchKeyDown = async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      try {
        const response = await axios.get(`/users/search?q=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  // const history = useHistory();

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   // const navbar = document.querySelector(".main-chat-nav");
  //   const poststory = document.querySelector(".imgpost");
  //   const smallScreen = document.querySelector(".sm_nav_holder");
  //   if (window.pageYOffset > 0) {
  //     // navbar.classList.add("nav_show_scroll");
  //     poststory.classList.add("imgpost_scroll");
  //     smallScreen.classList.add("sm_nav_holder_scroll");
  //   } else {
  //     // navbar.classList.remove("nav_show_scroll");
  //     poststory.classList.add("imgpost_scroll");
  //     smallScreen.classList.add("sm_nav_holder_scroll");
  //   }
  // };
  // const handleSearch = async (e) => {
  //    e.preventDefault();
  //   const response = await axios.get(`/users/search?q=${searchQuery}`);
  //   setSearchResults(response.data);
  // };
  const verifyEmail = async () => {
    try {
      const res = await axios.post("/auth/send-verification-email", {
        userId: user._id,
        email: user.email,
      });
      if(res.ok){
        navigate("/verification");
      }else {
        console.log(res.data)
      }
    } catch (err) {
      console.log(err)
    }
     
  };
  const [dropBox, setDropBox] = useState(false);
  const showBox = () => {
    setDropBox(!dropBox);
  }

  //logOut
  const LogoOutHandler = async (e) => {
     e.preventDefault();
    //  try {
    //   const res = await axios
    //     .delete(`/users/${user._id}`, { userId: user._id })
    //     .then((response) => {
    //       console.log(response.data);
    //       navigate("/signup");
    //     });
    //  } catch (err) {
    //   console.log(err)
    //  }
    try {
    await axios.post('/users/api/logout');
    // Redirect to login page or do other post-logout actions
    // await logout();
    // history.push('/login');
    navigate("/signup");
  } catch (error) {
    console.error(error);
  }
  }

  // const [notification, setNotification] = useState([]);
  // useEffect(() => {
  //   socket?.on("getNotification", (data) => {
  //     setNotification((prev) => [...prev, data]);
  //   });
  // }, [socket]);
  // console.log(notification);
  return (
    <div>
      <div className="main-chat-nav" onClick={makeAllHandler}>
        <div className="main-c-content">
          <form>
            <input
              type="text"
              value={searchQuery}
              className="border"
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchKeyDown}
              // onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            {/* <button onClick={handleSearch}>Search</button> */}
          </form>
          <section className="holder_nav">
            {/*signup for big screen*/}
            {user ? (
              <div className="logo-profile">
                <img
                  src={user.profilePicture ? user.profilePicture : logo}
                  alt="image"
                />
                <aside className="menu">
                  <div className="menu-content" onClick={showBox}>
                    <h5>
                      {user.username}
                      <FaAngleDown />
                    </h5>
                  </div>
                  <div className="arrow-up"></div>
                </aside>
                <div className={dropBox ? "drop_down " : "drop_down_active"}>
                  <ul>
                    <li>
                      <h6>Settings</h6>
                    </li>
                    <li>
                      <h6>Profile</h6>
                    </li>
                    <li onClick={verifyEmail}>
                      <h6>Verify Email</h6>
                    </li>
                    {user ? (
                      <li>
                        <h6 onClick={LogoOutHandler}>Log Out</h6>
                      </li>
                    ) : (
                      <li>
                        <h6>
                          <Link to="/signup" style={{ textDecoration: "none" }}>
                            SignUp
                          </Link>
                        </h6>
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <FaBell onClick={showNot} className="bell" />{" "}
                </div>

                <div className="imgpost">
                  <img src={logo} alt="logo" />
                  <h6>Post a Story</h6>
                  {/* <BsImage /> */}
                </div>
              </div>
            ) : (
              <div>
                <button>
                  <Link to="/signup">SignUp</Link>
                </button>
                <button>
                  <Link to="/signin">SignIn</Link>
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      <div
        className={showNotification ? "post_not_box" : "post_not_box_active"}
      >
        <div className="not_head">
          <h3>Notification</h3>
          <HiDotsHorizontal
            style={{ fontSize: "30px" }}
            onClick={makeAllHandler}
          />
        </div>
        {/* {notification.map((mes,index)=>{ */}
        {/* return ( */}
        <div id="notif">
          <div className="not_img">
            <img src={ProfilePic} alt="image of user" />
          </div>
          <div className="not_content">
            <h5>
              <span id="sp_noti"></span> Danny Liked your post
            </h5>
            <p>
              The system has detected that your account is logged in from an
              unknow
            </p>
            <span>2 days ago</span>
          </div>
        </div>
        {/* ); */}
        {/* })} */}

        <div
          className={
            makeAllNoti ? "not_make_container-active" : "not_make_container"
          }
        >
          <div className="not_mak_item">
            <h6>Mark all as read </h6>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="not_mak_item">
            <h6>Notification settings</h6>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="not_mak_item">
            <h6>See all</h6>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div className="sm_nav_holder">
        <div className="small_screen">
          <div>
            <FaBars className="sm_fa" onClick={sidebarActive} />
          </div>
          <div>
            <div>
              <AiOutlineScan className="sm_fa" />
              <FaBell onClick={showNot} className="bell" />
              <span
                style={{
                  width: "10px",
                  color: "#FD169C",
                  position: "absolute",
                  right: "74px",
                  top: "4px",
                  fontWeight: "800",
                  fontSize: "17px",
                }}
              >
                
              </span>
              <MdFaceRetouchingNatural className="sm_fa" />
            </div>

            {/* <Link to="/signup">
                <div className="sm_nav_bt_sign">
                  <h6>SIGN IN</h6>
                </div>
              </Link> */}
          </div>
        </div>
        <div
          className={showNotification ? "post_not_box" : "post_not_box_active"}
        >
          <div className="not_head">
            <h3>Notification</h3>
            <HiDotsHorizontal
              style={{ fontSize: "30px" }}
              onClick={makeAllHandler}
            />
          </div>
          <div id="notif" onClick={makeAllHandler}>
            <div className="not_img">
              <img src={ProfilePic} alt="image of user" />
            </div>
            <div className="not_content">
              <h5>
                <span id="sp_noti"></span> Danny Liked your post
              </h5>
              <p>
                The system has detected that your account is logged in from an
                unknow
              </p>
              <span>2 days ago</span>
            </div>
          </div>
          <div
            className={
              makeAllNoti ? "not_make_container-active" : "not_make_container"
            }
          >
            <div className="not_mak_item">
              <h6>Mark all as read </h6>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="not_mak_item">
              <h6>Notification settings</h6>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="not_mak_item">
              <h6>See all</h6>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>

        {/*display sm nav */}
        <div className={active ? "sm_nav_link" : "disactiveat"}>
          <div className="sm_nav_btn">
            <GrClose className="sm_fa" onClick={sidebarActive} />
            <div>
              <AiOutlineScan className="sm_fa" />
              <MdFaceRetouchingNatural className="sm_fa" />
            </div>
          </div>

          {/*pop up navbar */}
          <div>
            {user ? (
              <div className="sm_nav_header">
                <div className="sm_nav_email">
                  <h6>{user.email}</h6>
                  <p>Wallet ID: sYd***y87v***uX</p>
                </div>
                <div className="sm_ver">
                  <p>verified</p>
                </div>
              </div>
            ) : (
              <Link to="/signup">
                <div className="sm_nav_bt_sign">
                  <h6>SIGN IN</h6>
                </div>
              </Link>
            )}
          </div>

          <div className="sm_links">
            <div>
              {SmBarData.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    style={{ textDecoration: "none", color: "#000" }}
                    to={item.path}
                  >
                    <div className="sm_link_holder">
                      <div className="sm_link_tit">
                        <span>{item.icon}</span> <h6>{item.title}</h6>
                      </div>
                      <div className="sm_link_arr">{item.arrow}</div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="inp_search">
          <div className="sm_sear">
            <input type="search" placeholder="What are you looking for?" />
            <BsSearch className="ba_search" />
          </div>
          <div>
            <RxMixerHorizontal className="fa_mixer" />
          </div>
        </div>
      </div>
      {/* {} */}
      <div
        className={searchQuery.length >= 1 ? "searchBox" : "searchBox_active"}
      >
        {searchResults.map((item, index) => {
          return (
            <div key={index}>
              <Link
                to={`profile/${item.username}`}
                style={{ textDecoration: "none" }}
              >
                <h6>{item.username}</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
