import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./PackagePage.css";
import PackageComponent from "../components/PackagesComponent/PackageComponent";
import Footer from "../components/Footer/Footer";
function Package() {
  return (
    <>
      <div>
        <Media />
        <Navigation />
        <div className="hero-sec">
          <h1>Tour Package</h1>
          <div className="head-text">
            <h2>
              <p>Home</p>
              <span>
                <img src="./Vector (5).svg" alt="" />
                Tour Package
              </span>
            </h2>
          </div>
        </div>

        <div className="home-text">
          <p>Chose your package</p>
          <h1>
            Select your best package <br /> for yout travel
          </h1>
        </div>

        <PackageComponent />
        <PackageComponent />

        <div className="scroll-bar">
          <img src="./Button.svg" alt="" />
          <img src="./Button (1).svg" alt="" />
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default Package;
