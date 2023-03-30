import React, {useEffect, useState, useRef} from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useLocation } from 'react-router';
import NavBar from '../Component/NavBar';
import "../Styles/donate.css";
import { Link } from 'react-router-dom';
//Route
import { useParams } from "react-router-dom";
import axios from 'axios';
import MyStories from '../Component/MyStories';
import MyFavouSto from '../Component/MyFavouSto';
import Completed from '../Component/Completed';
import Postcontent from '../Component/Postcontent';
import profile from ".././Img/profile.jpg";

import Pic1 from "../Img/22.jpeg";
import Pic2 from "../Img/33.jpeg";
import Pic3 from "../Img/44.jpeg";
import Pic4 from "../Img/55.jpeg";
import Pic5 from "../Img/66.jpeg";
import Pic6 from "../Img/77.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Styles/swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import PostDesc from '../Component/PostDesc';
import ShareItem from '../Component/ShareItem';
//component
//icons
const Donate = () => {
  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});
  const [poetUser, setPoetUser] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //donate 
  const [isDonate, setIsDonate] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BTC");
  const [walletAddress, setWalletAddress] = useState("");
  const [successful, setSuccessful] = useState("");



    const handleSubmit = (event) => {
      event.preventDefault();
     
    };
  const showDonate =()=> {
    setIsDonate(!isDonate);
  }

  // apikey: f66827d1-7e13-491e-b770-a6d8e37f9dec


  //toggle tabs
  const [toggleTabs, setToggleTabs] = useState(1);
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  //getting the post that was clicked
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/story/find/${path}`);
        setChannel(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [path]);

  useEffect(()=>{
    const fetchPostUser = async () => {
      try {
        const postUser = await axios.get(`/users?userId=${channel.userId}`);
        setPoetUser(postUser.data);
      } catch (err) {
        console.log(err)
      }

    }
    fetchPostUser()
  },[channel])
  // console.log(channel.img && channel.img.slice(-2));

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   const donsate = document.querySelector(".donate");

  //   if (window.pageYOffset > 0) {
  //     donsate.classList.add("donatescroll");
      
  //   } else {
  //     donsate.classList.remove("donatescroll");
      
  //   }
  // };
  
  return (
    <div>
      <NavBar />

      <div className="donate">
        <div className="donate_box">
          <div className="don_box_1">
            <Swiper
              // style={{
              //   "--swiper-navigation-color": "#fff",
              //   "--swiper-pagination-color": "#fff",
              // }}
              spaceBetween={10}
              navigation={true}
              thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {channel.img && channel.img.slice(-2).toLowerCase() === "p4" ? (
                <SwiperSlide>
                  <video controls width="100%" height="100%">
                    <source
                      src={`//localhost:7878/${channel.img}`}
                      type="video/mp4"
                    />
                  </video>
                </SwiperSlide>
              ) : (
                <SwiperSlide>
                  <img src={`//localhost:7878/${channel.img}`} />
                </SwiperSlide>
              )}

              {/* <SwiperSlide>
                <img src={`//localhost:7878/${channel.img}`} />
              </SwiperSlide> */}

              {channel.imgmut &&
                channel.imgmut.map((image, index) => {
                  if (image.slice(-2).toLowerCase() === "p4") {
                    return (
                      <SwiperSlide>
                        <div key={index}>
                          <video controls width="100%" height="100%">
                            <source
                              src={`//localhost:7878/${image}`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </SwiperSlide>
                    );
                  }
                  return (
                    <SwiperSlide>
                      <img src={`//localhost:7878/${image}`} key={index} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={`//localhost:7878/${channel.img}`} />
              </SwiperSlide>
              {channel.imgmut &&
                channel.imgmut.map((image, index) => {
                  if (image.slice(-2).toLowerCase() === "p4") {
                    return (
                      <SwiperSlide>
                        <div key={index}>
                          <video controls width="100%" height="100%">
                            <source
                              src={`//localhost:7878/${image}`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </SwiperSlide>
                    );
                  }
                  return (
                    <SwiperSlide>
                      <img src={`//localhost:7878/${image}`} key={index} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>

          <div className="don_box_2">
            <h5>{poetUser && poetUser?.username} reshared a Story.</h5>
            {/* <p>{currentVideo.title}</p> */}
            <h6>Campaign by:</h6>
            <div className="don_box_pro">
              <img
                src={(poetUser && poetUser.profilePicture) || profile}
                alt="image_profile"
              />
              <div className="ver">
                <h6>{poetUser && poetUser.username}</h6>
                <p>Verified user</p>
              </div>
              <div className="don_ic">
                <FaFacebookMessenger />
              </div>
            </div>
            <div>
              <div>
                <h6>1000.0 $</h6>
                <p>110 Paticipants</p>
              </div>
              <div className="prog_bar"></div>
              <div className="don_btn">
                <a
                  className="don_btn_1"
                  href="https://commerce.coinbase.com/checkout/9fb4ccbf-f0bb-4efb-8a98-a8ec0e0b1a95"
                >
                  Donate
                </a>
                {/* <button onClick={showDonate} className="don_btn_1">
                  DONATE NOW
                </button> */}
                <a onClick={showDonate} className="don_btn_2">
                  SHARE
                </a>
              </div>
            </div>
          </div>
        </div>

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
              FAQ
            </h5>
            <h5
              className={toggleTabs === 3 ? "tabsActive" : ""}
              onClick={() => toggleTab(3)}
            >
              Comment
            </h5>
          </div>
        </section>

        <section id="sub_content">
          <div
            className={
              toggleTabs === 1 ? "my_stories pro_ro_active" : "pro_ro_disactive"
            }
          >
            {/* <MyStories poetUser={poetUser} channel={channel} /> */}

            <PostDesc channel={channel} />
          </div>
          <div
            className={
              toggleTabs === 2 ? "favourite pro_ro_active" : "pro_ro_disactive"
            }
          >
            <MyFavouSto />
          </div>
          <div
            className={
              toggleTabs === 3 ? "completed pro_ro_active" : "pro_ro_disactive"
            }
          >
            <Completed postId={path} poetUser={poetUser} />
          </div>
        </section>
      </div>

      <div
        onClick={showDonate}
        className={isDonate ? "do_box" : "isDonate_Active"}
      >
        <div className="do_form">
          <h6>Share Danny post</h6>
          <div className="item_sh">
            <div className="item_img">
              <img src={`//localhost:7878/${channel.img}`} />
            </div>
          </div>
          <ShareItem description={channel} />
        </div>
      </div>
    </div>
  );
}


export default Donate
