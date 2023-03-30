import React, {useContext, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import "../Styles/verify.css";

const VerifyAc = () => {
  const [verificationToken, setVerificationToken] = useState("");
  const [message, setMessage] = useState("");
  const handleVerificationTokenChange = (event) => {
    setVerificationToken(event.target.value);
  };

  const handleVerifyClick = async () => {
    try {
      const response = await fetch(`/auth/verify-email/${verificationToken}`);

      if (response.ok) {
        setMessage("Email verified");
      } else {
        setMessage("Invalid verification token");
      }
    } catch (error) {
      console.log(error);
      setMessage("Error verifying email");
    }
  };
  const { user } = useContext(AuthContext);
  console.log(user);
  //get code
  try {
    // const res = await axios.post("/auth/send-verification-email", user);
    // setMsg(res.message);
    // if (res.ok) {
    //   setMsg("Email sent successfully");
    // } else {
    //   setMsg("Error sending email");
    // }
    // navigate("/verification");
    // history.push("/signin")
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <div id="ver_holder">
        <div className="verify">
          <div>
            <div className="sign_logo">
              <img src="./image/logo.jpeg" alt="image" />
              <h3>Story</h3>
            </div>
            <div className="ver_cont">
              <h6>Verify Your account</h6>
              <p>
                A verification Link has been sent to the email address you{" "}
                <br />
                provided. Please click on the link to verify your email.
              </p>
            </div>
            <label>
              Verification token:
              <input
                type="text"
                value={verificationToken}
                onChange={handleVerificationTokenChange}
              />
            </label>
            <button onClick={handleVerifyClick}>Verify email</button>
            <p>{message}</p>
            <div className="ver_btn">
              <button className="ver_btn_1">Log in to your account</button>
              <button className="ver_btn_2">Resend verification link</button>
            </div>
          </div>
        </div>
        <div className="verify_option">
          <div className="ver_typ">
            <div className="rad_1">
              <input type="radio" />

              <p>
                <span>Smart and Secured Network</span>
                <br />A social platform dedicated to charity & crypto.
              </p>
            </div>
            <div className="rad_1">
              <input type="radio" />

              <p>
                <span>Smart and Secured Network</span>
                <br />A social platform dedicated to charity & crypto.
              </p>
            </div>
            <div className="rad_1">
              <input type="radio" />

              <p>
                <span>Smart and Secured Network</span>
                <br />A social platform dedicated to charity & crypto.
              </p>
            </div>
            <div className="rad_1">
              <input type="radio" />
              <p>
                <span>Smart and Secured Network</span>
                <br />A social platform dedicated to charity & crypto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAc
