import React, {useState} from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import About from "../Pages/About";
import Wallet from "../Pages/Wallet";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


import { FaArrowRight, FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
// import { HiOutlineInboxArrowDown } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

import "./styleUi.css";
import Recent from "../Component/Recent";
import Donate from "../Pages/Donate";
import Stake from "../Pages/Stake";
import { useUserAuth } from "../Context/UseAuthContext";
import Mainpage from "./Mainpage";
import { SideBarData } from "../Component/SideBarData";
import { FaArrowLeft } from 'react-icons/fa';
import { StoryImage } from "../Util/StoryImage";
import RecentHolder from "../Holder/RecentHolder";
const BasePage = () => {
  const navigate = useNavigate();

  const [recentActive, setRecentActive] = useState(true);

  const isActive = () => {
    setRecentActive(!recentActive);
    };
    const location = useLocation();
    const signIn = useLocation().pathname 
    // const pathHolder = ["/inbox", "/signin", "/signup"];
     if (location.pathname === "/inbox") {
       return (
         <div id="basepage">
           <div className="sidebar">
             <div className="sidebar_holder">
               <div className="logo">
                 <img
                   src="./image/icons/logo1.png"
                   alt="IMAGE"
                   className="logoimg"
                 />
                 {/* <StoryImage  className="logoImage"/> */}
               </div>
               <div>
                 {SideBarData.map((item, index) => {
                   return (
                     <div id="nva_holder" key={index}>
                       <NavLink
                         style={{ textDecoration: "none" }}
                         to={item.path}
                       >
                         <div className="nac_item">
                           <span className="nav_icon">{item.icon}</span>
                           <span className="nav_name">{item.title}</span>
                         </div>
                       </NavLink>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>

           <div className={recentActive ? "recent_bag " : "recent_holder"}>
             <div className={recentActive ? "recent " : "recent"}>
               <RecentHolder isActive={isActive} />
             </div>
           </div>

           <div className={recentActive ? "content content_holder" : "content"}>
             <Mainpage
               recentActive={recentActive}
               setRecentActive={setRecentActive}
             />
           </div>
         </div>
       );
     } else {
       return (
         <div id="basepage">
           <div className="sidebar">
             <div className="sidebar_holder">
               <div className="logo">
                 <img
                   src="./image/icons/logo1.png"
                   alt="IMAGE"
                   className="logoimg"
                 />
                 {/* <StoryImage  className="logoImage"/> */}
               </div>
               <div>
                 {SideBarData.map((item, index) => {
                   return (
                     <div id="nva_holder" key={index}>
                       <NavLink
                         style={{ textDecoration: "none" }}
                         to={item.path}
                       >
                         <div className="nac_item">
                           <span className="nav_icon">{item.icon}</span>
                           <span className="nav_name">{item.title}</span>
                         </div>
                       </NavLink>
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>

           <div
             className={
               recentActive 
                 ? "recent_bag "
                 : "recent_holder"
             }
           >
             <div className={recentActive ? "recent " : "recent"}>
               <RecentHolder isActive={isActive} />
             </div>
           </div>

           <div className={recentActive ? "content content_holder" : "content"}>
             <Mainpage
               recentActive={recentActive}
               setRecentActive={setRecentActive}
             />

             <div
               className={
                 recentActive 
                   ? "faarrowr "
                   : "faarrowr_holder"
               }
             >
               <FaArrowRight className="fa_arrow_rec" onClick={isActive} />
             </div>
           </div>
         </div>
       );
     }

};

export default BasePage;
