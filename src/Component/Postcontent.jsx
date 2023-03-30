import React, { useContext, useEffect, useState } from "react";
import "../Styles/postContent.css";

import axios from "axios";
import { async } from "@firebase/util";
import Post from "./Post";
import { FaBars, FaTag } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { PostContext } from "../Context/PostContext";
import { useSelector, useDispatch } from "react-redux";
import { AllstoryAction } from "../Redax/Action";


const Postcontent = ({ username, socket }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  // "proxy": "http://localhost:5000/Story/"
  //await axios.get("/post/timeline/" + user._id)
  useEffect(() => {
    const fetchPost = async () => {
      const resp = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/story");
      // const data = await resp.data.sort((p1, p2) => {
      //   return new Date(p2.createdAt) - new Date(p1.createdAt);
      // });
      //    dispatch(AllstoryAction(data) );
      setPosts(
        resp.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username]);
  const post = useSelector(state=>state.AllStory.data);

  return (
    <div id="post">
      <div className="post_holder">
        <div className="post-header">
          <h3>Favourite Stories</h3>
          <div className="post_bars">
            <FaBars />
            <FaTag />
          </div>
        </div>

        {post.map((itemPost, index) => {
          return (
            <div key={index}>
              <Post itemPost={itemPost} socket={socket} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Postcontent;
