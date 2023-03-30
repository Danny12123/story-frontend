import React, { useRef, useState } from "react";
import { ImOpt } from "react-icons/im";
import "../Styles/signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";
import axios from "axios";
import pic1 from ".././Img/44.jpeg";
import pic2 from ".././Img/33.jpeg";
import pic3 from ".././Img/55.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { StoryLogo } from "../Util/StoryIcon";
// import {useHistory} from "react-router-dom";

const SignUp = ({
  signUpHandler,
  username,
  password,
  email,
  idNumber,
  msg,
}) => {
  const [err, setErr] = useState("");

  // const {signUp} = useUserAuth();
  // const navigate = useNavigate();
  // const email = useRef();
  // const password = useRef();
  // const username = useRef();
  // const idNumber = useRef();
  // const history = useHistory();

  // const signUpHandler = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     username: username.current.value,
  //     email: email.current.value,
  //     password: password.current.value,
  //     idNumber: idNumber.current.value,
  //   };
  //   try {
  //     const res = await axios.post("/auth/signup", user);
  //     setMsg(res.data);
  //     if (res.ok) {
  //       setMsg("Email sent successfully");
  //     } else {
  //       setMsg("Error sending email");
  //     }
  //     navigate("/verification");
  //     // history.push("/signin")
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   try {
  //     await axios.post("/auth/send-verification-email", { username, email });
  //   } catch (err) {}
  // };
  // const signUpHandler = async(e) => {
  //     e.preventDefault();
  //     dispatch(loginStart())
  //     try {
  //       await signUp(email, password)
  //       // navigate("/signin");
  //       const reson = await axios.post("/Auth/signup", {
  //         name,
  //         password,
  //         email,
  //         idNumber,
  //       });
  //       dispatch(loginSuccess(reson.data));
  //       navigate("/signin")
  //       // console.log(reson.data)
  //     }catch (err) {
  //       dispatch(loginFailure())
  //     }
  //     setEmail("");
  //     setName("");
  //     setPassword("");
  //     setIdNumber("");
  //     setErr("")
  // }
  return (
    <div className="sign">
      <div id="sign_input">
        <div className="sign_content">
          <div>
            <div className="sign_logo">
              {/* <StoryLogo /> */}
              <img src="./image/logo.jpeg" alt="image" />
              <h3>Story</h3>
            </div>
            <div className="sign_holder">
              <p>Sign up for an account</p>
              {msg && <p>{msg}</p>}
              <form onSubmit={signUpHandler}>
                <input
                  type="text"
                  ref={username}
                  required
                  placeholder="Enter username"
                />
                <input
                  type="email"
                  ref={email}
                  placeholder="Enter address"
                  required
                />
                <input
                  type="password"
                  ref={password}
                  placeholder="Password"
                  required
                  minLength="6"
                />
                <input
                  type="text"
                  ref={idNumber}
                  required
                  placeholder="Enter referral ID"
                />
                {err && (
                  <div>
                    <p>{err}</p>
                  </div>
                )}
                {msg && (
                  <div>
                    <p>{msg}</p>
                  </div>
                )}
                <button>Create your account</button>
              </form>
            </div>
            <p className="p-c">
              By clicking the "Create your account" button, you agree to <br />
              StoryToken terms of use and privacy policy
            </p>
            <p className="got_account">
              Got an Account?
              <span>
                <Link to="/signin">
                  <a> Sign in</a>
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="sign_slider">
          <div className="sign_slider_holder">
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <img src={pic1} className="car_img_sign" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={pic2} className="car_img_sign" alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={pic3} className="car_img_sign" alt="Image 2" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
