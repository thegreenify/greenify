import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoEarthSharp } from "react-icons/io5";
import { BsMastodon, BsHouse } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { RiSurveyLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";

const sideBarLink = [
  {
    title: "Dashboard",
    link: "/",
    icon: <MdOutlineDashboard className="icon" />,
  },
  {
    title: "User",
    link: "/user",
    icon: <BiUser className="icon" />,
  },
  {
    title: "Employ",
    link: "/employ",
    icon: <GrUserWorker className="icon" />,
  },

  { title: "Houses", link: "/houses", icon: <BsHouse className="icon" /> },
  { title: "Survey", link: "/survey", icon: <RiSurveyLine className="icon" /> },
  {
    title: "Stock's",
    link: "/meters",
    icon: <BsBoxSeam className="icon" />,
  },
];
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false);
  const [stock, setStock] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {sideBarLink.map((item, index) => (
          <li>
            {item.icon} <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="dropdown" style={{ marginBottom: 5 }}>
        <div
          className="d-button"
          style={{ backgroundColor: "#12a812", color: "#fff" }}
          onClick={() => {
            if (open == true) setOpen(false);
            else setOpen(true);
          }}
        >
          <BsMastodon />
          Masters
          <IoIosArrowDown className={open ? "animating" : "animating2"} />
        </div>
        <ul className={open ? "show content" : "content"}>
          <li style={{ padding: "5px 10px" }}>
            <IoEarthSharp /> <Link to="/geography">Geography</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <div
          className="d-button"
          style={{ backgroundColor: "#12a812", color: "#fff" }}
          onClick={() => {
            if (on == true) setOn(false);
            else setOn(true);
          }}
        >
          <FiSettings />
          Settings
          <IoIosArrowDown className={on ? "animating" : "animating2"} />
        </div>
        <ul className={on ? "show content" : "content"}>
          <li style={{ padding: "5px 10px" }}>
            <FaUserCog /> <Link to="/user-roles">User Roles</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
