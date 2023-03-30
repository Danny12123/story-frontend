import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Uimessage from './Uimessage'

const SmChat = () => {
  return (
    <div>
      <div className="smHeader">
        <Link to="/inbox" style={{textDecoration:"none"}}>
        <FaArrowAltCircleLeft />
        </Link>
        <h6>Message</h6>
      </div>
      <div>
        <Uimessage />
      </div>
    </div>
  );
}

export default SmChat
