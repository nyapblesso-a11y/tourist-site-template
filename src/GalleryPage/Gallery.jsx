import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "../PackagePage/PackagePage.css"

function Gallery() {
  return (
    <>
      <div>
       <Media/>
        <Navigation/>

       <div className="hero-sec">
          <h1>Gallery</h1>
          <div className="head-text">
            <h2>
              <h4>Home</h4>
              <span>
                <img src="./Vector (5).svg" alt="" />
                Gallery
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
