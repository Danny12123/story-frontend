import React from 'react';
import "../Styles/recent.css";

import pic1 from '../Img/44.jpeg'
import pic2 from '../Img/33.jpeg'
import pic3 from '../Img/55.jpeg'
import pic4 from '../Img/77.jpeg'


const Recent = () => {
  return (
    <div>
      <div >

      <div className="heder-trend">
        <h6>Favourite Campaign</h6>
      </div>
      <div className="sor">
        <select>
          <option value="Na">Name</option>
          <option value="Na">Name</option>
          <option value="Na">Name</option>
        </select>
      </div>

      <div className="recent_box">
        <div className="recent_box_conten">
          <div className="recent-header">
            <img src={pic3} alt="image" />
            <h6>Monday 4:30PM</h6>
          </div>
          <div id="rec_con_holder">
            <h2>Support the new-world Project.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ad iure possimus
            </p>
            <div className="recent-img">
              <div className="recent-img1">
                <div className="img1">
                  <img src={pic4} alt="image" />
                </div>
                <div className="rrr">
                  <div className="rrr_img_1">
                    <img src={pic3} alt="image" />
                  </div>
                  <div className="rrr_img_2">
                    <img src={pic4} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>

    </div>
  );
}

export default Recent
