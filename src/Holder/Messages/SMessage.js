import React from 'react';
import { Link } from 'react-router-dom';
import MyMessages from './MyMessages';


const SMessage = () => {
  return (
    // <>
    //   <div>
    //     <MyMessages />
    //   </div>
    // </>
    <div>
      <Link to="/smchat" style={{ textDecoration: "none" }}>
        <div className="sm_holder_mess">
          <div className="img_hold_mes"></div>
          <div className="text_hold_mes">
            <div className="text_hold_mes_head">
              <h6>Danny</h6>
              <span>1 week age</span>
            </div>
            <p>How are you doing..</p>
          </div>
        </div>
      </Link>
      <div className="sm_holder_mess">
        <div className="img_hold_mes"></div>
        <div className="text_hold_mes">
          <div className="text_hold_mes_head">
            <h6>Danny</h6>
            <span>1 week age</span>
          </div>
          <p>How are you doing..</p>
        </div>
      </div>
      <div className="sm_holder_mess">
        <div className="img_hold_mes"></div>
        <div className="text_hold_mes">
          <div className="text_hold_mes_head">
            <h6>Danny</h6>
            <span>1 week age</span>
          </div>
          <p>How are you doing..</p>
        </div>
      </div>
      <div className="sm_holder_mess">
        <div className="img_hold_mes"></div>
        <div className="text_hold_mes">
          <div className="text_hold_mes_head">
            <h6>Danny</h6>
            <span>1 week age</span>
          </div>
          <p>How are you doing..</p>
        </div>
      </div>
    </div>
  );
};

export default SMessage
