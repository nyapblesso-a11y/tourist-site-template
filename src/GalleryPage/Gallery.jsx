import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "../PackagePage/PackagePage.css";
import "./Gallety.css";
import Footer from "../components/Footer/Footer";

function Gallery() {
  return (
    <>
      <div>
        <Media />
        <Navigation />
        <div className="hero-sec">
          <h1>Gallery</h1>
          <div className="head-text">
            <h2>
              <p>Home</p>
              <span>
                <img src="./Vector (5).svg" alt="" />
                Gallery
              </span>
            </h2>
          </div>
        </div>
        <div className="photo-sec">
          <div className="buttonn">
            <button className="btn">Open Instagram</button>
          </div>
          <div className="photo-lybrary">
            <div className="photos">
              <div className="photo-1">
                <img src="./Image Placeholder (4).png" alt="" />
                <img src="./Image Placeholder (5).png" alt="" />
              </div>
              <div className="photo-2">
                <img src="./Image Placeholder (6).png" alt="" />
              </div>
              <div className="photo-3">
                <img src="./Image Placeholder (7).png" alt="" />
                <img src="./Image Placeholder (8).png" alt="" />
              </div>
              <div className="photo-4">
                <div className="photo4-1">
                  <img src="./Image Placeholder (9).png" alt="" />
                </div>
                <div className="photo4-2">
                  <img src="./Image Placeholder (10).png" alt="" />
                  <img src="./Image Placeholder (11).png" alt="" />
                </div>
              </div>
            </div>
             <div className="photos">
              <div className="photo-4">
                <div className="photo4-1">
                  <img src="./Image Placeholder (12).png" alt="" />
                </div>
                <div className="photo4-2">
                  <img src="./Image Placeholder (13).png" alt="" />
                  <img src="./Image Placeholder (14).png" alt="" />
                </div>
              </div>
              <div className="photo-3">
                <img src="./Image Placeholder (15).png" alt="" />
                <img src="./Image Placeholder (16).png" alt="" />
              </div>
               <div className="photo-2">
                <img src="./Image Placeholder (17).png" alt="" />
              </div>
               <div className="photo-1">
                <img src="./Image Placeholder (19).png" alt="" />
                <img src="./Image Placeholder (19).png" alt="" />
              </div>
             
            </div>
             <div className="photos">
              <div className="photo-1">
                <img src="./Image Placeholder (20).png" alt="" />
                <img src="./Image Placeholder (21).png" alt="" />
              </div>
              <div className="photo-2">
                <img src="./Image Placeholder (22).png" alt="" />
              </div>
              <div className="photo-3">
                <img src="./Image Placeholder (23).png" alt="" />
                <img src="./Image Placeholder (24).png" alt="" />
              </div>
              <div className="photo-4">
                <div className="photo4-1">
                  <img src="./Image Placeholder (25).png" alt="" />
                </div>
                <div className="photo4-2">
                  <img src="./Image Placeholder (26).png" alt="" />
                  <img src="./Image Placeholder (27).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

  
       <Footer/> 
      </div>
    </>
  );
}

export default Gallery;
