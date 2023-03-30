import React, { useContext, useEffect, useState, useRef } from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "../Pages/Home";
import Wallet from "../Pages/Wallet";
import Profile from "../Pages/Profile";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MyStories from "../Component/MyStories";
import Donate from "../Pages/Donate";
import Faq from "../Holder/FAQ/Faq";
import StoryDes from "../Holder/StoryDes/StoryDes";
import Stake from "../Pages/Stake";
import About from "../Pages/About";
import Setting from "../Pages/Setting";
import Inbox from "../Pages/Inbox";
import axios from "axios";
import SmChat from "../Holder/Messages/SmChat";
import { useParams } from "react-router"; 
import { AuthContext } from "../Context/AuthContext";
import Index from "./EmailVerify/index";
import VerifyAc from "./VerifyAc";
import {  useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";

const Mainpage = ({ recentActive, setRecentActive }) => {
  const { user } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const idNumber = useRef();
  const navigate = useNavigate();
  const signUpHandler = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      idNumber: idNumber.current.value,
    };
    try {
      const res = await axios.post("/auth/signup", user);
      setMsg(res.data);
      if (res.ok) {
        setMsg("Email sent successfully");
      } else {
        setMsg("Error sending email");
      }
      navigate("/signin");
      // history.push("/signin")
    } catch (err) {
      console.log(err);
    }
    try {
      await axios.post("/auth/send-verification-email", { username, email });
    } catch (err) {}
  };

  // const [socket, setSocket] = useState(null);
  // useEffect(() => {
  //  setSocket(io("/socket"));
  // }, []);

  // useEffect(() => {
  //   socket?.emit("newUser", user);
  // }, [socket, user]);
  

  return (
    <>
      <div style={{position:'ralative'}}>
        <Routes>
          <Route
            path="/signup"
            element={
              user ? (
                <SignIn />
              ) : (
                <SignUp
                  signUpHandler={signUpHandler}
                  username={username}
                  email={email}
                  password={password}
                  idNumber={idNumber}
                  msg={msg}
                />
              )
            }
          />
          <Route path="/signin" element={user ? <Home /> : <SignIn />} />
          <Route
            path="/verification"
            element={<VerifyAc username={username} />}
          />
          {/* <Route path="/users/:id/verify/:token" element={<Index />} /> */}
          <Route path="/" element={user ? <Home /> : <SignIn />} />
          <Route
            path="wallet"
            element={user ? <Wallet recentActive={recentActive} /> : <SignUp />}
          />
          <Route path="stake" element={user ? <Stake /> : <SignUp />} />
          <Route path="about" element={user ? <About /> : <SignUp />} />
          <Route path="setting" element={user ? <Setting /> : <SignUp />} />
          <Route path="inbox" element={user ? <Inbox /> : <SignUp />} />

          <Route path="smchat" element={<SmChat />} />

          <Route
            path="/profile/:username"
            element={
              user ? (
                <Profile
                  recentActive={recentActive}
                  setRecentActive={setRecentActive}
                />
              ) : (
                <SignUp />
              )
            }
          />
          <Route
            path="profile"
            element={
              user ? (
                <Profile
                  recentActive={recentActive}
                  setRecentActive={setRecentActive}
                />
              ) : (
                <SignUp />
              )
            }
          />

          <Route path="/donate/:id" element={user ? <Donate /> : <SignUp />} />
          <Route path="donate">
            <Route path=":id:story" element={<StoryDes />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </div>
        {/* <div className="logOut"></div> */}
    </>
  );
};

export default Mainpage;
