import React from 'react'
import Recent from '../Component/Recent';
import { FaArrowLeft } from "react-icons/fa";
import {
  useLocation
} from "react-router-dom";
import MyMessages from './Messages/MyMessages';

const RecentHolder = ({ isActive }) => {
    const location = useLocation();
    
    if (location.pathname === "/inbox") {
        return null;
    } else if (location.pathname === "/") {
      return (
        <div>
          <Recent />
          <div className="close_icon">
            <FaArrowLeft className="fa_arrow_rec" onClick={isActive} />
          </div>
        </div>
      );
    }
  
};

export default RecentHolder
