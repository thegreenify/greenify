import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../api/ApiService";
import "./login.css";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [input, setInput] = useState({
    emailOrMobileNumber: "",
    password: "",
  });
  const [reCAPTCHAToken, setReCAPTCHAToken] = useState("");  
  const handleRecaptchaChange = (response) => {
    setReCAPTCHAToken(response); // Update the reCAPTCHA token
  };

  const handelSubmit = async () => {
    try {
      
// console.log(reCAPTCHAToken,"reCAPTCHAToken");
if(!reCAPTCHAToken) return alert('Captcha need to be filled')




//setting the tole from the response in the local storage
//& that user token will protect all other pages
      const res = await login(
        input.emailOrMobileNumber,
        input.password
      );

      localStorage.setItem("token", res.token);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  async function login(emailOrMobileNumber, password) {
    const url = "http://localhost:8000/users/login";
    const data = {
      email: emailOrMobileNumber,
      password,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
  


  return (
    <div className="mainContainer">
      <div className="leftDev">
        <img src="./greenify-removebg.png" alt="/" />
      </div>
      <div className="rightDev">
        <div class="container">
          <div className="inputs">
            <input
              type="text"
              required
              onChange={(e) =>
                setInput({ ...input, emailOrMobileNumber: e.target.value })
              }
            />
            <label>Email</label>
          </div>
          <div className="inputs">
            <input
              type="password"
              required
              onChange={(e) => setInput({ ...input, password: e.target.value })}
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
            Login
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
            to="/signup"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
