import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../api/ApiService";
import "./login.css";

const Login = () => {
  const [input, setInput] = useState({
    emailOrMobileNumber:"",
    password: "",
  });

 const handelSubmit =async()=>{
    try{
        const res = await ApiService.login(input.emailOrMobileNumber,input.password);
        localStorage.setItem("token", res.data);
			window.location = "/";
    }catch(err){
        console.log(err.message)
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
            <label>Email or Mobile Number</label>
          </div>
          <div className="inputs">
            <input
              type="password"
              required
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <label>Password</label>
          </div>
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
