import React, { useState } from "react";
import "./navbar.css";
import { TfiSearch } from "react-icons/tfi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsPower } from "react-icons/bs";

const NavBar = () => {
  const [check, setCheck] = useState(false);
  const menu = [
    {
      title: "My Profile",
      icon: <FiUser />,
    },
    {
      title: "Message",
      icon: <SlEnvolope />,
    },
    {
      title: "Settings",
      icon: <CiSettings />,
    },
  ];

  console.log(check)
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        //borderBottom: "1px solid black",
        padding: "0 50px 0 10px",
        boxShadow: "0px 5px 7px lightgrey",
        backgroundColor: "#fff",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="../greenify-removebg.png"
          style={{
            width: "120px",
            backgroundColor: "#fff",
            marginRight: "5em",
          }}
        />

        <div className="search">
          <TfiSearch />
          <input />
        </div>
      </div>
      <div className="admin">
        <IoNotificationsOutline className="bell" />
        <SlEnvolope className="message-icon" />
        <div
          style={{
            borderLeft: "1px solid",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4>John Deo</h4>
          <div
            style={{
              borderRadius: "100%",
              background: "green",
              color: "#fff",
              padding: "10px",
              marginLeft: "10px",
            }}
            className="dropdown"
            onClick={() => {
              if (check==true) {
                setCheck(false);
              }
              setCheck(true);
            }}
          >
            JD
            <ul className={check ? "visible" : "dropdown-menu"}>
              {menu.map((item, index) => (
                <li onClick={() => setCheck(!check)} key={index}>
                  {item.icon}
                  <p>{item.title}</p>
                </li>
              ))}
              <li style={{ borderTop: "0.5px solid silver " }}>
                <BsPower />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
