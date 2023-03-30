import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import { AuthContext } from '../../Context/AuthContext';
import { format } from 'timeago.js';

const Message = ({ message }) => {
  // console.log(message);
  const { user } = useContext(AuthContext);
  return (
    <div className="mes">
      {message.map((message, index) => {
        return (
          <>
            <div
              key={index}
              className={
                message.sender === user._id
                  ? " mes_text_ryt"
                  : "mes_text"
              }
            >
            {/* <div className="mes_text_ryt"> */}
              <div>
                <div className="messageTop">
                  <p>{message.text}</p>
                </div>
              </div>
              <p id="span_tym">{format(message.createdAt)}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Message
