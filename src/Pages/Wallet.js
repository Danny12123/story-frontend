import React, {useState} from 'react'
import { FaAd, FaCamera, FaPhoneAlt, FaPhotoVideo, FaReceipt, FaSeedling } from 'react-icons/fa';
import NavBar from '../Component/NavBar';
import { GrClose } from "react-icons/gr";
import "../Styles/wallet.css";
import ProfileHeader from '../Holder/ProfileHeader';
import ProfileInfo from '../Holder/ProfileH/ProfileInfo';

const Wallet = () => {
  const [isActive, setisActive ] = useState(false);
  
  const upload = () => {
    setisActive(!isActive);
  }
  return (
    <div className="holder_wallet">
      <NavBar />
      <section>
        <ProfileHeader />

        {/* <ProfileInfo /> */}

        <section id="wa_sec1">
          <div className="wa_sec1_logo">
            <img src="./image/logo.jpeg" alt="image_logo" />
            <div>
              <h2>Story</h2>
              <p>story Price (STORY)</p>
            </div>
            {/* <div className="wa_sec1_graph"></div> */}
          </div>
          <div className="wa_sec1_amount">
            <h1>$0.0006566</h1>
            <span>52%</span>
          </div>
        </section>

        <section id="wa_sec2">
          <div className="wa_sec2_box1">
            <p>Estimated Portfolio Value</p>
            <h1>$322,800.76</h1>
            <span>6,942,000 STORY</span>
          </div>
          <div className="wa_sec2_box2">
            <div className="wa_sec2_send">
              <FaSeedling className="wa_ic" />
              <span>Send</span>
            </div>
            <div className="wa_sec2_send">
              <FaReceipt className="wa_ic" />
              <span>Receive</span>
            </div>
            <div className="wa_sec2_send">
              <FaAd className="wa_ic" />
              <span>Add</span>
            </div>
          </div>
        </section>

        
      </section>
    </div>
  );
}

export default Wallet
