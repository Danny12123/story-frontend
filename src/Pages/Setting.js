import React, {useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Home from "./Home";
import "../Styles/setting.css"
import { Deactivate, DeviceSecurity, TransactionPin } from "../Util/StoryIcon";
import { FaArrowRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Setting = () => {
  const location = useLocation().pathname;
  const [transac, setTransac] = useState(false);
  const [setting, setSetting] = useState(false);
  const transactionHandlr = () => setTransac(!transac);
  const navigate = useNavigate();
  const [settingsChang, setSettingsChang] = useState(1);
  const settingShow = () =>{ 
    navigate("/"); 
    setSettingsChang(1);
  };
  const transctionPage = (index) => {
    setSettingsChang(index)
  };

  if (location) {
    
    return (
      <div>
        <div className="home_holder">
          <Home />
        </div>

        <div className="setting_box">
          <div
            className={
              settingsChang === 1 ? "st_box_holder  " : "setting_box_active"
            }
          >
            <h5>Security Settings</h5>
            <p>Secure your account and transactions</p>

            <div className="st_cont_box">
              <div className="st_container">
                <div className="st_icon">
                  <TransactionPin />
                </div>
                <div className="st_arr">
                  <p>Transaction Pin</p>
                  <FaArrowRight onClick={transctionPage} />
                </div>
              </div>
              <div className="st_container">
                <div className="st_icon">
                  <DeviceSecurity />
                </div>
                <div className="st_arr">
                  <p>Transaction Pin</p>
                  <div
                    className="st_swt_box"
                    onClick={() => transactionHandlr(2)}
                  >
                    <div className={transac ? "div-ryt" : "div-left"}></div>
                  </div>
                </div>
              </div>
              <div className="st_container">
                <div className="st_icon">
                  <Deactivate />
                </div>
                <div className="st_arr">
                  <p>Transaction Pin</p>
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <GrClose className="uplo_fa" onClick={settingShow} />
          </div>

          {/* //second page */}
          <div
            className={
              settingsChang === 2 ? "st_box_holder  " : "setting_box_active"
            }
            // className="st_box_holder"
          >
            <h5>Transaction Pin</h5>
            <p>Secure your account and transactions</p>

            <div className="st_cont_box">
              <div className="st_container">
                <div className="st_icon">
                  <DeviceSecurity />
                </div>
                <div className="st_arr">
                  <p>Change Pin</p>
                  <FaArrowRight onClick={() => transactionHandlr(3)} />
                </div>
              </div>
              <div className="st_container">
                <div className="st_icon">
                  <DeviceSecurity />
                </div>
                <div className="st_arr">
                  <p>Forgot my Pin</p>
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <GrClose className="uplo_fa" onClick={settingShow} />
          </div>
          <div
            className="st_box_holder"
            // {
            //   settingsChang === 3 ? "st_box_holder" : "setting_box_active"
            // }
          >
            <h5>Curent Pin</h5>
            <p>Confirm by entering current PIN</p>

            <div className="inputs">
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>

            <GrClose className="uplo_fa" onClick={settingShow} />
          </div>
        </div>
      </div>
    );
  } else {
    <h2>Setting Page</h2>;
  }
};

export default Setting;
