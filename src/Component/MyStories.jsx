import React, {useContext, useEffect, useState} from 'react';
import "../Styles/postContent.css";
import "../Styles/mystory.css";
import { FaHeart, FaRetweet, FaShare, FaStar, FaTag } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Pic1 from "../Img/22.jpeg";
import Pic2 from "../Img/33.jpeg";
import Pic3 from "../Img/44.jpeg";
import Pic4 from "../Img/55.jpeg";
import Pic5 from "../Img/66.jpeg";
import Pic6 from "../Img/77.jpeg";
import Comment from '../Holder/Comments/Comment';
import axios from 'axios';
import { format } from 'timeago.js';
import profile from ".././Img/profile.jpg";
import { AuthContext } from '../Context/AuthContext';

const MyStories = ({ poetUser, channel }) => {
  const [showAllComment, setShowAllComment] = useState(false);
  const [myStory, setMyStory] = useState([]);
  // const [like, setLike] = useState(channel.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  
  useEffect(() => {
    const myPost = async () => {
      try {
        const res = await axios.get("/post/timeline/" + channel.userId);
        // console.log(res);
        setMyStory(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    myPost();
  }, [channel]);
  const showComment = () => {
    setShowAllComment(!showAllComment);
  };
  const [showFullContent, setShowFullContent] = useState(false);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
   const RetweetHandler = async (item) => {
     // console.log(post)
     const repost = {
       userId: user._id,
       desc: item.desc,
       img: item.img,
       imgmut: item.imgmut,
       retweet: user._id,
     };
     try {
       await axios.post("/post", repost);
      //  window.location.reload();
      navigate("/");
     } catch (err) {
       console.log(err);
     }
   };
  
  return (
    <>
      {myStory.map((item, index) => {
        console.log(item);
        const { createdAt, desc, img, imgmut, retweet } = item;
        const limitedContent = desc.slice(0, 40);
        //retweet
       
        return (
          <section className="my_story" key={index}>
            <div className="post-content">
              <div className="post-content-head">
                <div className="post_lab">
                  <Link
                    to={`profile/${poetUser.username}`}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <h1>
                      <img
                        src={(poetUser && poetUser.profilePicture) || profile}
                        alt="image"
                      />
                    </h1>
                  </Link>
                  <div className="post_name">
                    <Link
                      to={`profile/${poetUser.username}`}
                      className="link"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        <img
                          src={(poetUser && poetUser.profilePicture) || profile}
                          alt="image"
                        />
                      </h5>
                    </Link>
                    {/* <h6>{poetUser && poetUser.username} shared a story</h6> */}
                    <div className="big_post">
                      <h3>{poetUser && poetUser.username} shared a story</h3>
                      <p className="tym">{format(createdAt)}</p>
                      <p className="post_com">
                        {/* Comment  */}
                        {desc}
                        {showFullContent ? desc : limitedContent}
                        {!showFullContent && desc.length > 40 && (
                          <button
                            onClick={() => setShowFullContent(true)}
                            style={{
                              border: "none",
                              outline: "none",
                              background: "transparent",
                              marginLeft: "5px",
                            }}
                          >
                            Read More...
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post_tag">
                  <FaTag />
                </div>
              </div>
              <div className="sma_post">
                <p className="tym">{format(createdAt)}</p>
                <p className="post_com">
                  {/* Comment  */}
                  {desc}
                </p>
              </div>

              <div className="post_cont_image">
                {/* image  */}
                <Link
                  // to={`/donate/${videos._id}`}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="post_im_box">
                    <div className="post_im_box1">
                      <img src={`//localhost:8800/${img}`} alt="image" />
                    </div>

                    {imgmut.length >= 1 ? (
                      <div className="p_im_holder">
                        {imgmut.length === 1 ? (
                          <div className="post_im_box2">
                            <img src={`//localhost:8800/${img}`} alt="image" />
                          </div>
                        ) : (
                          imgmut.slice(0, 2).map((item, index) => {
                            return (
                              <div className="post_im_box3" key={index}>
                                <img
                                  src={`//localhost:8800/${item}`}
                                  alt="image"
                                />
                              </div>
                            );
                          })
                        )}
                      </div>
                    ) : null}
                  </div>
                </Link>
                <div className="post-btn">
                  <Link to={`/donate/${item._id}`} className="link">
                    <a className="post-btn-1">DONATE NOW </a>
                  </Link>
                  <a className="post-btn-2">SHARE </a>
                </div>
                <div className="post_icons">
                  <FaHeart
                    className="post-ic-heart post_fa"
                    // onClick={handleLike}
                  />
                  {/* <span>{like}</span> */}
                  <BsChat
                    className="post-ic-chat post_fa"
                    // onClick={showComment}
                  />
                  <span>20</span>
                  <FaRetweet
                    onClick={() => RetweetHandler(item)}
                    className="post-ic-retweet post_fa"
                  />
                  <span>{retweet.length}</span>
                  <FaShare className="post-ic-share post_fa" />
                  <span>20</span>
                </div>
              </div>
              <div className={showAllComment ? "show_comment" : "not_show"}>
                <Comment currentUserId="1" />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default MyStories
