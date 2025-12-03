import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./PackagePage.css";
import PackageComponent from "../components/PackagesComponent/PackageComponent";
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
              <h4>Home</h4>
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
      </div>
    </>
  );
}

export default Package;
