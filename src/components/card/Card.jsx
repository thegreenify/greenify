import React, { useState } from "react";

function Card() {
  const [otp, setOtp] = useState([]);
  const handelOtp = async () => {
    try {
        setOtp(otp.toString())
    } catch (err) {
      console.log(err.message);
    }
    //window.location = "/";
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "100px 0",
      }}
    >
      <h4>Enter your otp to verify your email</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          // onKeyPress={this.keyPressed}
          onChange={(e) => setOtp([...otp, e.target.value ])}
          tabIndex="1"
          maxLength="1"
          //onKeyUp={(e) => this.inputfocus(e)}
          style={{
            width: "35px",
            height: "40px",
            border: "0.5px solid grey",
            borderRadius: "5px",
            textAlign: "center",
          }}
        />
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          // onKeyPress={this.keyPressed}
          onChange={(e) => setOtp([...otp, e.target.value ])}
          tabIndex="2"
          maxLength="1"
          //onKeyUp={(e) => this.inputfocus(e)}
          style={{
            width: "35px",
            height: "40px",
            border: "0.5px solid grey",
            borderRadius: "5px",
            textAlign: "center",
          }}
        />
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          // onKeyPress={this.keyPressed}
          onChange={(e) => setOtp([...otp, e.target.value ])}
          tabIndex="3"
          maxLength="1"
          //onKeyUp={(e) => this.inputfocus(e)}
          style={{
            width: "35px",
            height: "40px",
            border: "0.5px solid grey",
            borderRadius: "5px",
            textAlign: "center",
          }}
        />
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className="otpInput"
          // onKeyPress={this.keyPressed}
          onChange={(e) => setOtp([...otp, e.target.value ])}
          tabIndex="4"
          maxLength="1"
          //onKeyUp={(e) => this.inputfocus(e)}
          style={{
            width: "35px",
            height: "40px",
            border: "0.5px solid grey",
            borderRadius: "5px",
            textAlign: "center",
          }}
        />
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
          marginTop: "50px",
        }}
        onClick={handelOtp}
      >
        Verify
      </div>
    </div>
  );
}

export default Card;
