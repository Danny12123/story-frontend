import React, { useState, useEffect, useContext } from "react";
import Ads from '../Component/Ads'
import NavBar from '../Component/NavBar'
import Postcontent from '../Component/Postcontent'
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";


const Home = ({ userpost, socket }) => {
  const [videos, setVideos] = useState([]);
  const { user } = useContext(AuthContext);
  //get post
  useEffect(() => {
    const fetchPost = async () => {
      // const resp = await axios.get("/post/timeline/64157ec8ad27555d511edc47");
      const resp = userpost
        ? await axios.get("/post/profile/" + userpost)
        : await axios.get("post/timeline/" + user._id);
      setVideos(resp.data);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <div >
        <NavBar socket={socket} />
        <Ads />
        <Postcontent videos={videos} socket={socket} />
      </div>
    </div>
  );
};

export default Home
