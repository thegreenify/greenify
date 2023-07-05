import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ApiService from "../../api/ApiService";
import "./signup.css";
import Card from "../../components/card/Card";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
  const [signup, setSignup] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [reCAPTCHAToken, setReCAPTCHAToken] = useState("");  


  const handelSubmit = async () => {
    try {
      //   const res = await axios.post(
      //     "http://localhost:8000/user/register",
      //     input
      //   );
      if(!reCAPTCHAToken)return alert('Captcha need to be filled')
      setSignup(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleRecaptchaChange = (response) => {
    setReCAPTCHAToken(response); // Update the reCAPTCHA token
  };


  return (
    <div className="mainContainer">
      <div className="leftDev">
        <img src="./greenify-removebg.png" alt="/" />
      </div>
      <div className="rightDev">
        {signup ? (
          <Card />
        ) : (
          <div class="container">
            <div className="inputs">
              <input
                type="text"
                required
                onChange={(e) =>
                  setInput({ ...input, firstName: e.target.value })
                }
              />
              <label>First Name</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                required
                onChange={(e) =>
                  setInput({ ...input, lastName: e.target.value })
                }
              />
              <label>Last Name</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                required
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <label>Register Email</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                required
                onChange={(e) =>
                  setInput({ ...input, mobileNumber: e.target.value })
                }
              />
              <label>Register Mobile Number</label>
            </div>
            <div className="inputs">
              <input
                type="password"
                required
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <label>Password</label>
            </div>
            <ReCAPTCHA
            sitekey="6LdI2PcmAAAAAIuW8MSPI_FHOjyHtBxAWQuxcHkU"
            onChange={handleRecaptchaChange}
          />
            <div
              style={{
                background: "#3bb19b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 0",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={handelSubmit}
            >
              SignUp
            </div>
            <p style={{ width: "100%", textAlign: "center", padding: "5px 0" }}>
              or
            </p>
            <Link
              style={{
                background: "#3bb19b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 0",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
