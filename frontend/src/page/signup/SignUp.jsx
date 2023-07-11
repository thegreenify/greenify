import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ApiService from "../../api/ApiService";
import "./signup.css";

import Card from "../../components/card/Card";
import ReCAPTCHA from "react-google-recaptcha";
import ApiService from "../../api/ApiService";

const SignUp = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [reCAPTCHAToken, setReCAPTCHAToken] = useState("");

  const handleSubmit = async () => {
    try {
      //   const res = await axios.post(
      //     "http://localhost:8000/user/register",
      //     input
      //   );
      const {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        confirmPassword,
      } = input;
      if (
        !firstName ||
        !lastName ||
        !email ||
        !mobileNumber ||
        !password ||
        !confirmPassword
      ) {
        return alert("Please fill in all fields");
      }

      if(password !== confirmPassword) return alert('confirm password not matching')

      if (!reCAPTCHAToken) return alert("Captcha need to be filled");
      const res = await register(firstName,
  lastName,
  email,
  mobileNumber,
  password)
  console.log('signUp', res);
  // return
  setInput({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  })
  return alert('SignUp Successfull')
    } catch (err) {
      alert(err)
      console.log(err.message);
    }
  };

  const register = async (firstName, lastName, email, mobileNumber, password)=> {
    const url = "http://localhost:8000/users/register";
    const data = {
      firstName,
      lastName,
      email,
      mobileNumber,
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
        throw new Error(response.error);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }


  const handleRecaptchaChange = (response) => {
    setReCAPTCHAToken(response); // Update the reCAPTCHA token
  };

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
              value= {input.firstName}
              onChange={(e) =>
                setInput({ ...input, firstName: e.target.value })
              }
            />
            <label>First Name</label>
          </div>
          <div className="inputs">
            <input
              type="text"
              value= {input.lastName}
              required
              onChange={(e) => setInput({ ...input, lastName: e.target.value })}
            />
            <label>Last Name</label>
          </div>
          <div className="inputs">
            <input
              type="text"
              value= {input.email}
              required
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <label>Register Email</label>
          </div>
          <div className="inputs">
            <input
              type="text"
              value= {input.mobileNumber}
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
              value= {input.password}
              required
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <div className="inputs">
              <input
                type="password"
                value= {input.confirmPassword}
                required
                onChange={(e) =>
                  setInput({ ...input, confirmPassword: e.target.value })
                }
              />
              <label>Confirm Password</label>
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
            onClick={handleSubmit}
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
      </div>
    </div>
  );
};

export default SignUp;
