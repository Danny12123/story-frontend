import React, { useState } from "react";
import "../Styles/navBar.css";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useUserAuth } from "../Context/UseAuthContext";
import { AiOutlineScan } from "react-icons/ai";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";


import { SmBarData } from "./SideBarData";

import logo from "../Img/log.png";

const ChartNav = () => {
  const [active, setActive] = useState(false);
  const sidebarActive = () => {
    setActive(!active);
  };

  // const { user, logout } = useUserAuth();
  // console.log(user);
  const handleLogOut = async () => {
    // try {
    //   await logout();
    // } catch (err) {
    //   console.log(err.message);
    // }
  };
  
  return (
    <div>
      <div className="main-chat-nav">
        <div className="main-c-content">
          <form>
            <input type="text" className="border" placeholder="Search..." />
          </form>
          <section className="holder_nav">
            {/*signup for big screen*/}
            {/* {currentUser ? ( */}
              <div className="logo-profile" >
                {/* <img src={profileImage} alt="image" /> */}
                <aside className="menu">
                  <div  className="menu-content">
                    {/* <h5>{currentUser.name}</h5> */}
                  </div>
                  <div className="arrow-up"></div>
                </aside>
                {/* {hover ? ( */}
                  <div className="menu_items">
                    <ul>
                      <li>Hey</li>
                      <li>
                        <Link to="/signup">SignUp</Link>
                      </li>
                      <li>SignUp</li>
                      <li>SignUp</li>
                      <li onClick={handleLogOut}>SignIn</li>
                    </ul>
                  </div>
                {/* ) : ( */}
                  {/* <FaAngleDown /> */}
                {/* )} */}

                <div className="imgpost">
                  <img src={logo} alt="logo" />
                  <h6>Post a Story</h6>
                  {/* <BsImage /> */}
                </div>
              </div>
            {/* ) : ( */}
              {/* <div>
                <button>
                  <Link to="/signup">SignUp</Link>
                </button>
                <button>
                  <Link to="/signin">SignIn</Link>
                </button>
              </div> */}
            {/* )} */}
          </section>
        </div>
      </div>

      <div className="sm_nav_holder">
        <div className="small_screen">
          <div>
            <FaBars className="sm_fa" onClick={sidebarActive} />
          </div>
          <div>
            {/* {currentUser ? ( */}
              <div>
                <AiOutlineScan className="sm_fa" />
                <MdFaceRetouchingNatural className="sm_fa" />
              </div>
            {/* ) : ( */}
              {/* <Link to="/signup">
                <div className="sm_nav_bt_sign">
                  <h6>SIGN IN</h6>
                </div>
              </Link> */}
            {/* )} */}
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
            {/* {currentUser ? ( */}
              <div className="sm_nav_header">
                <div className="sm_nav_email">
                  {/* <h6>{currentUser.email}</h6> */}
                  <p>Wallet ID: sYd***y87v***uX</p>
                </div>
                <div className="sm_ver">
                  <p>verified</p>
                </div>
              </div>
            {/* ) : ( */}
              {/* <Link to="/signup">
                <div className="sm_nav_bt_sign">
                  <h6>SIGN IN</h6>
                </div>
              </Link> */}
            {/* )} */}
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
      </div>
    </div>
  );
};

export default ChartNav;
