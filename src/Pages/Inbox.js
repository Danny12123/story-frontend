import React, {useState, useContext} from 'react'
import NavBar from '../Component/NavBar'
import Message from '../Holder/Messages/Message';
import { SendMessage } from '../Util/StoryIcon';
import ".././Styles/inbox.css";
import ChartNav from '../Component/ChartNav';
import Uimessage from '../Holder/Messages/Uimessage';
import SMessage from '../Holder/Messages/SMessage';
import MyMessages from '../Holder/Messages/MyMessages';
import { AuthContext } from '../Context/AuthContext';
const Inbox = () => {
      
  return (
    <div id="inbox_mes">
      {/* <ChartNav /> */}
      <div className="inbox_container">
      <MyMessages />
      </div>
    </div>
  );
}

export default Inbox
