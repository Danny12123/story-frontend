import React, { useContext, useEffect, useState, useRef } from 'react';
import "../../Styles/message.css"
import Rmessage from './Rmessage';
import {AuthContext} from "../../Context/AuthContext"
import axios from "axios";
import Uimessage from './Uimessage';
import SMessage from './SMessage';
import Message from './Message';
import { SendMessage } from "../../Util/StoryIcon";
import { io, } from "socket.io-client";
import { FaArrowLeft } from 'react-icons/fa';
import ProfileImage from '../../Img/profile.jpg';
import { Link } from 'react-router-dom';

const MyMessages = () => {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const socket = useRef();
  const { user } = useContext(AuthContext);

  //socket
  const [arrivalMessage, setArrivalMessage] = useState(null);
  useEffect(()=>{
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
      
  },[]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessage((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);


  useEffect(()=>{
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", users=>{
      // console.log(users)
    })
  },[user])
  


  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversation/" + user._id);
        setConversation(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._id]);

  const [message, setMessage] = useState([]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currentChat?._id);
        setMessage(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  // useEffect(()=>{
  //   scrollRef?.current.scrollIntoView({behavior: "smooth"})
  // },[message])
  
  const [messageNew, setMessageNew] = useState("");

  const messageHandler = async (e) => {
    e.preventDefault();
    const messageh = {
      sender: user._id,
      text: messageNew,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(member=>member !==user._id)
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: messageNew,
    });
    try {
      const res = await axios.post("/message", messageh);
      setMessage([...message, res.data]);
      setMessageNew("");
    } catch (err) {
      console.log(err)
    }
    
  };

  //  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [ismodal, setIsmodal] = useState(true);
  const openModalHandler = () => {
    setIsmodal();
  }
  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };
  // const handleSearch = async (e) => {
  //   // Do something with the searchQuery, e.g. send it to the server
  //   e.preventDefault();
  //   const response = await axios.get(`/users/search?q=${searchQuery}`);
  //   setSearchResults(response.data);
  // };
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(`/users/search?q=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    setSearchQuery("");
  };
//new conversation
const newConversation = async (item) => {
  const newConversation = {
    senderId: user._id,
    receiverId: item._id
  };
  const res = await axios.post("/conversation", newConversation);
  
  setSearchQuery("")
  // console.log(res)
}
 

  return (
    <div>
      <div className="box_convs">
        <div className="user_box">
          <div className="user_lg_box">
            <div className="mes_header">
              <h6>My messages</h6>
            </div>
            <div className="mes_sec_head">
              {/* <select className="mes_sel_option">
                <option value="#" key="#">
                  Newest
                </option>
                <option value="#" key="#">
                  Newest
                </option>
                <option value="#" key="#">
                  Newest
                </option>
                <option value="#" key="#">
                  Newest
                </option>
              </select> */}
              <input
                type="text"
                // value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search"
                id="me_search"
              />
              {/* <button onClick={handleSearch}>Search</button> */}
            </div>

            {conversation.length <= 0 ? (
              <h3 style={{ margin: "35px auto" }}>Search for a user now!</h3>
            ) : (
              conversation.map((item, index) => {
                // console.log(item);
                return (
                  <div key={index} onClick={() => setCurrentChat(item)}>
                    <Rmessage conversation={item} currentUser={user} />
                  </div>
                );
              })
            )}
          </div>

          {/* for small screen */}
          <div className="user_sn_box">
            <div className="u_sn_box_header">
              <Link to="/" style={{ textDecoration: "none" }}>
                <FaArrowLeft />
              </Link>
              <h3>Message</h3>
            </div>
            <div className="search_holder">
              <input type="text" placeholder="Search.." id="sn_me_search" />
            </div>
            <div id="use_container">
              {conversation.map((item, index) => {
                return (
                  <div key={item._id} c>
                    <Rmessage conversation={item} currentUser={user} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="conversation">
          <div className="big_coneversation">
            <div className="seenMessage">
              <h2>Message</h2>
              <div className="big_sc_message">
                <div>
                  <div>
                    {currentChat ? (
                      <div className="message_cont">
                        <Message message={message} />
                      </div>
                    ) : (
                      <span>Open a conversation to start a chat.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="sendMesssage">
              <div className="inbox_inputs">
                <input
                  type="text"
                  value={messageNew}
                  placeholder="Type Message"
                  onChange={(e) => setMessageNew(e.target.value)}
                  id="inbox_text"
                />
                <div className="sendMessage" onClick={messageHandler}>
                  <SendMessage />
                </div>
              </div>
            </div>
          </div>

          <div className="small_coneversation">
            <div className="sm_seenMessage">
              <div className="sm__message">
                <div>
                  <div>
                    {currentChat ? (
                      <div className="message_cont">
                        <Message message={message} />
                      </div>
                    ) : (
                      <span className="sp">
                        Open a conversation to start a chat.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="smin_sendMesssage">
              <div className="sm_inbox_inputs">
                <input
                  type="text"
                  value={messageNew}
                  placeholder="Type Message"
                  onChange={(e) => setMessageNew(e.target.value)}
                  id="sm_inbox_text"
                />
                <div className="sm_sendMessage" onClick={messageHandler}>
                  <SendMessage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {searchResults.length > 0 ? (
          <div className={ismodal ? "search_box" : "disactive_box"}>
            {searchResults.map((item, index)=>{
              return (
                <h6
                  className="new_m_box"
                  key={index}
                  onClick={() => {
                    newConversation(item);
                    // setCurrentChat(item);
                    setIsmodal(!ismodal);
                  }}
                >
                  {item.username}
                </h6>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyMessages
