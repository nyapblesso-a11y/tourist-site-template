import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./Homepage.css";

function Home() {
  return (
    <>
      <div>
        <Media />
        <Navigation />
      </div>

      <div className="home-image">
        <div className="hero">
          <h1>
            Experience the beauty <br></br>of Rwanda with us
          </h1>
          <p>Discover the land of a Thousand Hills</p>
        </div>

        <div className="backBtn">
          <img src="public/backbtn .png" alt="backbtn" />
          <img src="./forwardbtn.png" alt="forwardbtn" />
        </div>
      </div>

      <div className="search">
        <div className="items">
          <div className="imput">
            <p>Search activities or destinations</p>
            <img src="./search.svg" alt="search" />
          </div>

          <div className="item-guest">
            <span>guest</span>
            <div className="date">
              <span>2 Adult</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>
          <div className="item-guest">
            <span>Date</span>
            <div className="date">
              <span>12-13 April 2021</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>
          <div className="item-guest">
            <span>package</span>
            <div className="date">
              <span>All</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>

          <button className="btn">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
