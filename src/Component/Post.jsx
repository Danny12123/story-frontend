import React, { useContext, useRef, useEffect, useState } from "react";
import "../Styles/postContent.css";
import "../Styles/pupImage.css";
import {
  FaHeart,
  FaRetweet,
  FaShare,
  FaStar,
  FaTag,
  FaPlay,
} from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Pic1 from "../Img/22.jpeg";
import Pic2 from "../Img/33.jpeg";
import Pic3 from "../Img/44.jpeg";
import Pic4 from "../Img/55.jpeg";
import Pic5 from "../Img/66.jpeg";
import Pic6 from "../Img/77.jpeg";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";

import Comment from "../Holder/Comments/Comment";

import profile from ".././Img/profile.jpg";
import { format } from "timeago.js";
import { AuthContext } from "../Context/AuthContext";
import ShareItem from '../Component/ShareItem';
import {UserAction} from '../Redax/Action';
import { useSelector, useDispatch } from "react-redux";
// import {io, Socket} from "socket.io-client";

const Post = ({ itemPost, socket }) => {
  const [like, setLike] = useState(itemPost.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [retweet, setRetweet] = useState(itemPost.retweet.length);
  const [isRetweet, setIsRetweet] = useState(false);
  const dispatch  = useDispatch()

  const [showFullContent, setShowFullContent] = useState(false);
  const limitedContent = itemPost.desc.slice(0, 40);

  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //video
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);



  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setDuration(event.target.duration);
  };

  const showCommetn = document.querySelectorAll(".show-rplies");
  showCommetn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let parentContainer = e.target.closest(".comment_container");
      let _id = parentContainer.id;
      if (_id) {
        let childrenContainer = parentContainer.querySelectorAll(
          `[dataset=${_id}]`
        );
        childrenContainer.forEach((child) => child.classList.toggle(".open"));
      }
    })
  );

  // display comment
  const [displaeyComment, setDisplaeyComment] = useState(false);

  const commentHandle = () => {
    if (itemPost._id) {
      setDisplaeyComment(!displaeyComment);
    }
  };

  const { user: currentUser } = useContext(AuthContext);
  //comment
  const [showComment, setShowComment] = useState(false);
  const [commentlength, setCommentlength] = useState([]);
  const showPopUpImage = () => {
    setShowComment(!showComment);
  };
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comment//${itemPost._id}`);

        setCommentlength(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [itemPost._id]);

  //likes
  useEffect(() => {
    setIsLiked(itemPost.likes.includes(currentUser._id));
  }, [currentUser._id, itemPost.likes]);
  // console.log(currentUser);
  const handleLike = async (type) => {
    const likeanime = document.querySelector(".post-ic-heart");
    try {
      axios.put("/post/" + itemPost._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    if (isLiked) {
      likeanime.classList.toggle('liked')
    }
    // socket?.emit("sendNotification", {
    //   senderName: currentUser,
    //   receiverId: itemPost.userId,
    //   type: type,
    // });
  };
  // console.log(socket);
  //repost a story
  const navigate = useNavigate();
  const RetweetHandler = async (post) => {
    // console.log(post)
    const repost = {
      userId: user._id,
      desc: post.desc,
      img: post.img,
      imgmut: post.imgmut,
      retweet: user._id,
    };
    try {
      await axios.post("/post", repost);
      window.location.reload();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //getuser
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const resp = await axios.get(`/users?userId=${itemPost.userId}`);
      // dispatch(UserAction(resp.data));
      setUser(resp.data);
    };
    fetchUser();
  }, [itemPost]);

   const users = useSelector((state) => state.Users);
  // console.log(users);
    const [sharenewPost, setSharenewPost] = useState(false);
    const sharePost =()=> {
    setSharenewPost(!sharenewPost);
  }
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    videoRef.current.play();
  };

  return (
    <div>
      <div className="post-content">
        <div className="post-content-head">
          <div className="post_lab">
            <Link
              to={`profile/${user.username}`}
              style={{ textDecoration: "none" }}
            >
              <div className="post_img_holder">
                {(user.profilePicture && (
                  <img
                    src={`http://localhost:7878/api/${user.profilePicture}`}
                    alt="image"
                  />
                )) || <img src={profile} alt="image" />}
                {/* <img
                  src={
                    user.profilePicture
                      ? `//localhost:7878/${user.profilePicture}`
                      : profile
                  }
                  alt="image"
                /> */}
              </div>
            </Link>
            <Link
              to={`/donate/${itemPost._id}`}
              className="link"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className="post_name">
                <h6 className="big_screen_name">
                  {user.username} shared a story
                </h6>
                <div className="big_post">
                  <div className="sm_screen_headerInfo">
                    <h5>
                      <img
                        src={
                          user.profilePicture
                            ? `//localhost:7878/${user.profilePicture}`
                            : profile
                        }
                        alt="image"
                      />
                    </h5>
                    <h4>{user.username} shared a story</h4>
                    <p className="tym">{format(itemPost.createdAt)}</p>
                  </div>

                  <p className="post_com">
                    {showFullContent ? itemPost.desc : limitedContent}
                    {!showFullContent && itemPost.desc.length > 40 && (
                      <button
                        onClick={() => setShowFullContent(!showFullContent)}
                        style={{
                          border: "none",
                          outline: "none",
                          background: "transparent",
                          marginLeft: "5px",
                        }}
                      >
                        Read More
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="post_tag">
            <FaTag />
          </div>
        </div>
        <div className="sma_post">
          {/* <p className="tym">{videos.createdAt}</p> */}
          <p className="post_com"></p>
        </div>

        <div className="post_cont_image">
          <div className="post_im_box">
            <div className="post_im_box1" onClick={showPopUpImage}>
              {itemPost.img && itemPost.img.slice(-2).toLowerCase() === "p4" ? (
                // <div className="video-container">
                <video
                  controls
                  width="100%"
                  height="100%"
                  onTimeUpdate={handleTimeUpdate}
                  onClick={handleVideoClick}
                  ref={videoRef}
                >
                  <source
                    src={`//localhost:7878/${itemPost.img}`}
                    type="video/mp4"
                  />
                </video>
              ) : (
                //   <FaPlay className="play-button" />
                // </div>
                <img src={`//localhost:7878/${itemPost.img}`} alt="image" />
              )}
            </div>
            {itemPost.imgmut.length >= 1 ? (
              <div className="p_im_holder">
                {itemPost.imgmut.length === 1 ? (
                  <div className="post_im_box2">
                    {itemPost.img &&
                    itemPost.img.slice(-2).toLowerCase() === "p4" ? (
                      <video
                        controls
                        width="100%"
                        onClick={handleVideoClick}
                        ref={videoRef}
                        height="100%"
                      >
                        <source
                          src={`//localhost:7878/${itemPost.img}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`//localhost:7878/${itemPost.img}`}
                        alt="image"
                      />
                    )}
                  </div>
                ) : (
                  itemPost.imgmut.slice(0, 2).map((item, index) => {
                    if (item.slice(-2).toLowerCase() === "p4") {
                      return (
                        <div className="post_im_box3" key={index}>
                          <video
                            controls
                            width="100%"
                            onClick={handleVideoClick}
                            ref={videoRef}
                            height="100%"
                          >
                            <source
                              src={`//localhost:7878/${item}`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      );
                    }
                    return (
                      <div className="post_im_box3" key={index}>
                        <img src={`//localhost:7878/${item}`} alt="image" />
                      </div>
                    );
                  })
                )}
              </div>
            ) : null}
          </div>
          <div className="post-btn">
            <a
              className="post-btn-1"
              href="https://commerce.coinbase.com/checkout/9fb4ccbf-f0bb-4efb-8a98-a8ec0e0b1a95"
            >
              DONATE NOW
            </a>

            <a className="post-btn-2" onClick={sharePost}>
              SHARE
            </a>
          </div>
          <div className="post_icons">
            <button className="action_btn" onClick={() => handleLike(1)}>
              <FaHeart className="post-ic-heart post_fa" />
            </button>
            <span>{like}</span>
            <BsChat className="post-ic-chat post_fa" onClick={commentHandle} />
            <span>{commentlength.length}</span>

            <FaRetweet
              className="post-ic-retweet post_fa"
              onClick={() => RetweetHandler(itemPost)}
            />

            <span>{itemPost.retweet.length}</span>
            <FaShare className="post-ic-share post_fa" onClick={sharePost} />
            <span>20</span>
          </div>
          <div
            onClick={sharePost}
            className={sharenewPost ? "showShare" : "showShare-active"}
          >
            <ShareItem description={itemPost} />
          </div>
          <div
            className={displaeyComment ? "comment_active" : "comment_disactive"}
          >
            <Comment postId={itemPost._id} currentUserId={user._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
