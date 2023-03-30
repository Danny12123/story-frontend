import React, { useContext, useRef, useState } from "react";
import { useUserAuth } from "../Context/UseAuthContext";
import "../Styles/signIn.css";
import { Alert } from "bootstrap";
import {  Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import pic1 from ".././Img/44.jpeg";
import pic2 from ".././Img/33.jpeg";
import pic3 from ".././Img/55.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { loginCall } from "../apiCalls";
const SignIn = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [err, setErr] = useState("");
    // const { signIn } = useUserAuth();
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const { user, isFetching, dispatch } = useContext(AuthContext);
    const signInHandler =  e => {
        e.preventDefault();
            // console.log(email.current.value);
        loginCall(
          { email: email.current.value, password: password.current.value },dispatch);
        // try {
        //   await signIn(email, password)
        //   navigate("/");
        // }catch (err) {
        //   setErr(err.message)
        // }
        // setEmail("");
        // setPassword("");
        // setErr("");
    }
    console.log(user)
  return (
    <div className="sign">
      <div id="sign_input">
        <div className="sign_content">
          <div>
            <div className="sign_logo">
              <img src="./image/logo.jpeg" alt="image" />
              <h3>Story</h3>
            </div>
            <div className="sign_holder">
              <p>Sign into your account</p>
              {/* {err && <Alert variant="danger">{err}</Alert>} */}
              <form onSubmit={signInHandler}>
                <input
                  type="email"
                  required
                  ref={email}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter address"
                />
                <input
                  type="password"
                  required
                  ref={password}
                  minLength="6"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button>
                  {isFetching ? "Loading" : "Login into your account"}
                </button>
              </form>
              <p className="forget">
                Forgot password? <a href="#">Reset it</a>
              </p>
            </div>
            <p className="car_acc">
              Don’t have an Account? <Link to="/signup">Create Account</Link>
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
}

export default SignIn
