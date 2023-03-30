import React, { useState, useContext } from "react";
import "../Styles/profile.css";
import {
  FaAd,
  FaCamera,
  FaPhotoVideo,
  FaReceipt,
  FaSeedling,
} from "react-icons/fa";
import axios from "axios";
import ProfileImg from ".././Img/profile.jpg";
import CoverImg from ".././Img/thumbnail.jpg";
import { AuthContext } from "../Context/AuthContext";
import "./style.css";
import { useLocation } from "react-router";

const ProfileHeader = ({showProfileHandler}) => {
  const [profileImg1, setProfileImg1] = useState("");
  const [profileImg2, setProfileImg2] = useState("./image/thumbnail.jpg");

  const imageHandler1 = async (e) => {
    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        // setProfileImg1(reader.result);
        let img = reader.result;
        const formData = new FormData();
        for (const file of img) {
          formData.append("images", file);
        }
        //  console.log(formData);
        try {
          const reson = await axios.post("/Auth/signup", {
            img,
          });

          // dispatch(profileSuccess(reson.data));
        } catch (err) {
          // dispatch(loginFailure())
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //try--2
  const [selectedFiles, setSelectedFiles] = useState(null);
    const [popUpPro, setPopUpPro] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
  const handleSubmit = async (e) => {
    // setPopUpPro(!popUpPro);
    setProfilePic(e.target.file[0]);

  };

  const {user} = useContext(AuthContext)
   const [file, setFile] = useState(null);
  const submitHandler =(e) => {
      setFile(e.target.files[0])
  }
  const location = useLocation()
  // console.log(user);
  const [setCoverPicture, setSetCoverPicture] = useState(null);
  const mainCoverPic = (e) => {
    e.preventDefault();
    const data = new FormData();
    const fileName = setCoverPicture.name;
    data.append("coverPicture", setCoverPicture);
    data.append("file.originalname", fileName);

    axios
      .post(`users/userscover/${user._id}/coverPicture`, fileName)
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });

  }


  const uploadCover = async (event) => {
    event.preventDefault();
    const formData = new FormData();
   
    formData.append("profilePicture", file);
    
    axios
      .post(
        `users/usersprofile/${user._id}/profilePicture`,
      formData
      )
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
    setFile(null);
  };



  return (
    <div className="main_holder main_holder-active ">
      <section id="profile_header">
        <div className="bg_wallet_header">
          {setCoverPicture ? (
            <img src={URL.createObjectURL(setCoverPicture)} alt="" id="im2" />
          ) : (
            <img src={user.coverPicture || CoverImg} alt="" id="im2" />
          )}
        </div>
        <input
          type="file"
          name="image-thumbnail"
          id="input"
          accept=".png,.jpeg,.jpg"
          onChange={(e) => setSetCoverPicture(e.target.files[0])}
        />
        <div id="edit">
          {/* {setCoverPicture === null ? ( */}
            <label  className="image-upload edit_profile">
              edit profile
            </label>
          {/* ) : (
            <button onClick={mainCoverPic}>Upload coverPicture</button>
          )} */}
        </div>
        <div className="wallet_profile_img">
          {file ? (
            <img src={URL.createObjectURL(file)} alt="" id="im2" />
          ) : (
            <img
              src={user.profilePicture ? user.profilePicture : ProfileImg}
              alt="profile"
              id="im2"
            />
          )}
        </div>
        <input
          type="file"
          name="image-profile"
          id="input2"
          onChange={submitHandler}
          accept="image/*"
        />
        <div className="wallet_camera">
          {file === null ? (
            <label htmlFor="input2" className="image-upload">
              <FaCamera className="fa_Camera" />
            </label>
          ) : (
            <button onClick={uploadCover}>Upload coverPicture</button>
          )}

          {/* <FaCamera /> */}
        </div>
      </section>
      {/* <div className={popUpPro ? "pof_hed_box" : "pof_hed_box-active"}>
        <div className="pro_close">
          <h1>X</h1>
        </div>
        <div className="pro_img">
          <img src={file && URL.createObjectURL(file)} alt="image" />
        </div>
        <div className="pro_upload">
          <button onClick={uploadProfile}>Upload</button>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileHeader;
