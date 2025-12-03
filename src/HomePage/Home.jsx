import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./Homepage.css";
import PackageComponent from "../components/PackagesComponent/PackageComponent";
import Footer from "../components/Footer/Footer";

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
          <div className="input">
            <p>Search activities or destinations</p>
            <img src="./search.svg" alt="search" />
          </div>

          <div className="item-guest">
            <p>guest</p>
            <div className="date">
              <span>2 Adult</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>
          <div className="item-guest">
            <p>Date</p>
            <div className="date">
              <span>12-13 April 2021</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>
          <div className="item-guest">
            <p>package</p>
            <div className="date">
              <span>All</span>
              <img src="./dropdown.svg" alt="" />
            </div>
          </div>

          <button className="btn">Book Now</button>
        </div>
      </div>

      <div className="home-text">
        <p>Chose your package</p>
        <h1>
          Select your best package <br /> for yout travel
        </h1>
      </div>

      <PackageComponent />
      <div className="home-text">
        <p>Popular Destinations</p>
        <h1>
          Select Our Best Popular <br /> Destinations
        </h1>
      </div>

      <div className="scroll-icon">
        <img src="./Button.svg" alt="" />
        <img src="./Button (1).svg" alt="" />
      </div>
      <div className="destination">
        <div className="destination-items">
          <img src="./Image (4).svg" alt="" />

          <div className="text">
            <h1>Kigali</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Volutpat elit sed
              pretium, <br /> egestas sed sit.
            </p>
          </div>
        </div>
        <div className="destination-items">
          <img src="./Image (5).svg" alt="" />

          <div className="text">
            <h1>Huye</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Volutpat elit sed
              pretium, <br /> egestas sed sit.
            </p>
          </div>
        </div>
        <div className="destination-items">
          <img src="./Image (6).svg" alt="" />

          <div className="text">
            <h1>Rubavu</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Volutpat elit sed
              pretium, <br /> egestas sed sit.
            </p>
          </div>
        </div>
        <div className="destination-items">
          <img src="./Image (7).svg" alt="" />

          <div className="text">
            <h1>Musanze</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. <br /> Volutpat elit sed
              pretium, <br /> egestas sed sit.
            </p>
          </div>
        </div>
      </div>

      <div className="home-text">
        <p>Why us?</p>
        <h1>
          Why Travel with Africa <br /> wizzy Safari
        </h1>
      </div>
      <div className="Us">
        <div className="chose-us">
          <div className="us-item">
            <img src="./car.svg" alt="" />
            <p>
              100+ tours around <br /> Rwanda
            </p>
          </div>
        </div>

        <div className="chose-us">
          <div className="us-item">
            <img src="./circle.svg" alt="" />
            <p>
              100% Trusted travel <br /> agency
            </p>
          </div>
        </div>

        <div className="chose-us">
          <div className="us-item">
            <img src="./calender.svg" alt="" />
            <p>
              10 years of travel <br /> experience
            </p>
          </div>
        </div>

        <div className="chose-us">
          <div className="us-item">
            <img src="./like.svg" alt="" />
            <p>
              90% of travelors <br /> are happy
            </p>
          </div>
        </div>
      </div>
      <div className="home-text">
        <p>Our Traveller Say</p>
        <h1>
          What our clients say <br />
          about us{" "}
        </h1>
      </div>
      <div className="client-section">
        <div className="client">
          <div className="image">
            <img src="./photo.svg" alt="" />
          </div>
          <h5>Emma Waston</h5>

          <p>
            I recently went on a tour with <br />
            XYZ Tourism Company and was
            <br /> extremely impressed with the <br /> level of professionalism
            and <br />
            organization.
          </p>
        </div>
        <div className="client">
          <div className="image">
            <img src="./photo.svg" alt="" />
          </div>
     <h5>Emma Waston</h5>
          <p>
            I recently went on a tour with <br />
            XYZ Tourism Company and was
            <br /> extremely impressed with the <br /> level of professionalism
            and <br />
            organization.
          </p>
        </div>
        <div className="client">
          <div className="image">
            <img src="./photo.svg" alt="" />
          </div>
          <h5>Emma Waston</h5>
          <p>
            I recently went on a tour with <br />
            XYZ Tourism Company and was
            <br /> extremely impressed with the <br /> level of professionalism
            and <br />
            organization.
          </p>
        </div>
      </div>

      <div className="img-scroll">
        <img src="./Group 19.svg" alt="" />
      </div>

      <Footer/>
    </>
  );
}

export default Home;
