import React, { useContext, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import {
  FaAd,
  FaAddressBook,
  FaCamera,
  FaPhotoVideo,
  FaReceipt,
  FaSeedling,
} from "react-icons/fa";
import "./proUplo.css";
import { AddItem, Gallry } from "../../Util/StoryIcon";
import { async } from "@firebase/util";
import { storage } from "../../fireBase";
import { ref, uploadBytes } from "firebase/storage";
import {v4} from 'uuid'
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import {AuthContext} from '../../Context/AuthContext';
import ProfilePic from "../../Img/profile.jpg";
const ProfileStory = ({
  isActive,
  uploadStory,
  upload,
  uploadImaVid,
  uploadStoryVideo,
}) => {
  // const item = uploadStory.split(",")[0].split(";")[0];

  const [next, setNext] = useState(false);
  const handleNext = () => {
    setNext(!next);
  };
  const [uploTabs, setUploTabs] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const nextHandler = (index) => {
    setUploTabs(index);
  };
  const showMoreHanbler = () => {
    setShowMore(!showMore);
  };

  const {user} = useContext(AuthContext)

  // const [desc, setDesc] = useState("");
  const [imageList, setImageList] = useState([]);
  // const [newStoryAdd, setNewStoryAdd] = useState({
  //   uploadStory,
  //   imageList,
  // });

  const [files, setFiles] = useState([]);
  console.log(files)
  const newUpload = (e) => {
    setFiles(e.target.files);
  };
  
  const desc = useRef();
   const navigate = useNavigate();
  const handleCaption = async () => {
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
   
    if ((uploadStory, files)) {
      const data = new FormData();
      const fileName = uploadStory.name;
      data.append("files", uploadStory);
      data.append("file.originalname", fileName);
      newPost.img = fileName;

      // const datamu = new FormData();
      let filesNames = [];
      for (let i = 0; i < files.length; i++) {
        filesNames.push(files[i].name);
        data.append("files", files[i]);
      }
      newPost.imgmut = filesNames;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/post", newPost)
      navigate("/");
    } catch (err) {
      console.log(err)
    }
    
  }
//  console.log(uploadStory);

  return (
    <div className={isActive ? "uplo_holder" : "uplo_holder-active "}>
      <div className={uploTabs === 2 ? "uplo_box2" : "uplo_box"}>
        <div className={uploTabs === 2 ? "uplo_box_1_active" : "uplo_box_1"}>
          <div className="uplo_head">
            {uploadStory ? (
              <h4 onClick={() => nextHandler(2)}>Next</h4>
            ) : (
              <h4>Upload</h4>
            )}

            <GrClose className="uplo_fa" onClick={upload} />
          </div>
          <div className="uplo_item">
            {uploadStory ? (
              <div className="img_video_holder">
                <div className="up_img_vid">
                  {/* to display image or video */}
                  {uploadStory && uploadStory.type === "video/" ? (
                    <video width="400" controls>
                      <source
                        // src={`//localhost:8800/${uploadStory}`}
                        src={URL.createObjectURL(uploadStory)}
                        type={uploadStory.type}
                      />
                    </video>
                  ) : (
                    <img
                      src={URL.createObjectURL(uploadStory)}
                      className="uploadimage_hol"
                      alt="image"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="uplo_item_img">
                <div className="uplo_it_input">
                  <input
                    type="file"
                    name="image-profile"
                    id="upload"
                    onChange={uploadImaVid}
                    accept="image/video/*"
                  />
                  <div>
                    <label htmlFor="upload">
                      <FaPhotoVideo className="uplo_icon" />
                    </label>
                  </div>
                  <p style={{ color: "#858585", padding: "15px 0" }}>
                    Drag and drop or browse
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={uploadStory ? "add_item" : "add_item_active"}>
            <div
              className={
                showMore ? "hold_new_item_active" : "hold_new_item_box"
              }
            >
              <div className="hold_new_item">
                {imageList.map((media, index) => {
                  if (media && media.type === "video/") {
                    return (
                      <div className="uplo_new_img" key={index}>
                        <video
                          src={URL.createObjectURL(uploadStory)}
                          controls
                          width="60"
                          height="70"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    );
                  } else {
                    return (
                      <div className="uplo_new_img" key={index}>
                        <img
                          src={URL.createObjectURL(uploadStory)}
                          alt="uploaded media"
                        />
                      </div>
                    );
                  }
                })}

                <div className="uplo_ad_ic">
                  <div className="uplo_it_input">
                    <input
                      type="file"
                      name="image-profile"
                      id="upload"
                      // value={allItem}
                      onChange={newUpload}
                      // onChange={(e) => setFile(e.target.files)}
                      multiple
                      accept="image/*, video/*"
                    />
                    <div>
                      <label htmlFor="upload">
                        <AddItem />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="uplo_next">
              <Gallry className="uplo_next_btn" onClick={showMoreHanbler} />
            </button>
          </div>
        </div>
        <div className={uploTabs === 2 ? "uplo_box_2" : " uplo_box_2_active"}>
          <div className="uplo_item_2">
            <div className="uplo_head">
              {uploadStory ? (
                <h4 onClick={() => nextHandler(2)}>Next</h4>
              ) : (
                <h4>Upload</h4>
              )}

              <GrClose className="uplo_fa" onClick={upload} />
            </div>
            <div className="img_input">
              <div className="img_input_box1">
                <div className="img_in_a1">
                  {uploadStory && uploadStory.type === "video/" ? (
                    <video width="400" controls>
                      <source
                        src={URL.createObjectURL(uploadStory)}
                        type={uploadStory.type}
                      />
                    </video>
                  ) : (
                    uploadStory && (
                      <img
                        src={URL.createObjectURL(uploadStory)}
                        className="uploadimage_hol"
                        alt="image"
                      />
                    )
                  )}
                </div>

                <div className="img_in_b">
                  <div className="img_in_b_flex">
                    {imageList.length >= 1 ? (
                      <div className="p_im_holder">
                        {imageList.length === 1 ? (
                          <div className="post_im_box2">
                            {imageList.img && imageList.type === "video/" ? (
                              <video controls width="100%" height="100%">
                                <source
                                  src={URL.createObjectURL(imageList.img)}
                                  type="video/mp4"
                                />
                              </video>
                            ) : (
                              <img
                                src={URL.createObjectURL(imageList.img)}
                                alt="image"
                              />
                            )}
                          </div>
                        ) : (
                          imageList.slice(0, 2).map((item, index) => {
                            if (item.slice(-2).toLowerCase() === "p4") {
                              return (
                                <div className="post_im_box3" key={index}>
                                  <video controls width="100%" height="100%">
                                    <source
                                      src={URL.createObjectURL(item)}
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              );
                            }
                            return (
                              <div className="post_im_box3" key={index}>
                                <img
                                  src={URL.createObjectURL(item)}
                                  alt="image"
                                />
                              </div>
                            );
                          })
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="img_input_box2">
                <div className="img_in_bo_header">
                  <div className="profile_img">
                    <img
                      src={
                        user.profilePicture ? user.profilePicture : ProfilePic
                      }
                      alt="image"
                    />
                  </div>
                  {/* <h5>{currentUser.name}</h5> */}
                </div>
                <textarea
                  placeholder="write a caption"
                  ref={desc}
                  // onChange={(e) => setDesc(e.target.value)}
                />
                <button onClick={handleCaption}>Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStory;
