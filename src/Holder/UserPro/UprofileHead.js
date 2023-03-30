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

const UprofileHead = () => {
  const [profileImg1, setProfileImg1] = useState("");
  const [profileImg2, setProfileImg2] = useState("./image/thumbnail.jpg");

  const {user} = useContext(AuthContext)
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
    try {
      // const resp = await axios.post("/Profile/api/upload", reader);
      // console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  // const {user} = useContext(AuthContext)
  const [file, setFile] = useState(null);
  const submitHandler = (e) => {
    setFile(e.target.files[0]);

    // const newPost = {
    //   userId: user._id,
    // };
    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now() + file.name;
    //   data.append("name", fileName);
    //   data.append("file", file);
    //   newPost.profilePicture = fileName;
    //   // console.log(newPost);
    //   try {
    //     await axios.post("/uploadprofile", data);
    //   } catch (err) {}
    // }
    // // try {
    // //   await axios.post("/posts", newPost);
    // //   window.location.reload();
    // // } catch (err) {}
  };
  const location = useLocation();
  // console.log(user);
  const [profilePicture, setProfilePicture] = useState(ProfileImg);
  const uploadCover = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("profilePicture", file);
    // formData.append("file.originalname", fileName);

    // fetch(`/users/${user._id}/profile-picture`, {
    //   method: "PUT",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Profile picture updated:", data);
    //     // update the user's profile picture in the React state
    //   })
    //   .catch((error) => {
    //     console.error("Profile picture update failed:", error);
    //     // display an error message to the user
    //   });

    //  }s
    // try {
    //   const response = await axios.put(
    //     `/users/${user._id}/profilePicture`,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    axios
      .post("/users/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
    // setFile(null);
  };

  const uploadProfile = async () => {
    const profilePic = {
      userId: user._id,
    };
  };
//   console.log(user);

  return (
    <div className="main_holder main_holder-active ">
      <section id="profile_header">
        <div className="bg_wallet_header">
          {file ? (
            <img src={URL.createObjectURL(file)} alt="" id="im2" />
          ) : (
            <img src={user.coverPicture || CoverImg} alt="" id="im2" />
          )}
        </div>
        <input
          type="file"
          name="image-thumbnail"
          id="input"
          accept=".png,.jpeg,.jpg"
          onChange={submitHandler}
        />
        <div id="edit">
          {file === null ? (
            <label htmlFor="input" className="image-upload edit_profile">
              edit profile
            </label>
          ) : (
            <button onClick={uploadCover}>Upload coverPicture</button>
          )}
        </div>
        <div className="wallet_profile_img">
          {profilePic ? (
            <img src={profilePic} alt="" id="im2" />
          ) : (
            <img
              src={user.profilePicture || ProfileImg}
              alt="profile"
              id="im2"
            />
          )}
        </div>
        <input
          type="file"
          name="image-profile"
          id="input2"
          onChange={handleSubmit}
          accept="image/*"
        />
        <div className="wallet_camera">
          {/* {} */}
          <label htmlFor="input2" className="image-upload">
            <FaCamera className="fa_Camera" />
          </label>
          {/* <FaCamera /> */}
        </div>
      </section>
     
    </div>
  );
};

export default UprofileHead;
