import React, { useState } from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Navigation() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={toggle ? "navbar expanded" : "navbar"}>
        <div className="nav-bar">
          <img src="./africalogo.png" alt=" africa" />
          <ul className="links">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about_us")}>About</li>
            <li onClick={() => navigate("/packages")}>Tour-Package</li>
            <li onClick={() => navigate("/gallery")}>Gallery</li>
            <li onClick={() => navigate("/contact_us")}>Contact us</li>
          </ul>
        </div>
        <div className="button">
          <button className="btn">Sign In</button>
        </div>

        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? (
            <FiX size={40} className="icons" />
          ) : (
            <FiMenu size={40} className="icons" />
          )}
        </div>
      </div>
    </>
  );
}
export default Navigation;
