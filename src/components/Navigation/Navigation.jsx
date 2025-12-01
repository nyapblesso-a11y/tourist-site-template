import React from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navigation">
        <div className="nav-bar">
          <img src="./africalogo.png" alt=" africa" />
          <ul>
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
      </div>
    </>
  );
}

export default Navigation;
