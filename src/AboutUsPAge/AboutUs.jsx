import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./AboutUsPAge.css";
import Footer from "../components/Footer/Footer";

function AboutUs() {
  return (
    <>
      <div>
        <Media />
        <Navigation />
        <div className="ladding-page">
          <div className="about">
            <h1>
              We are dedicated to <br /> providing the best <br />
              travel experience
            </h1>
            <span>Discover the Land of a Thousand Hills</span>
            <div className="search1">
              <div className="item1">
                <div className="item-guest1">
                  <p>guest</p>
                  <div className="date-1">
                    <span>2 Adult</span>
                    <img src="./dropdown.svg" alt="" />
                  </div>
                </div>
                <div className="item-guest1">
                  <p>Date</p>
                  <div className="date-1">
                    <span>12-13 April 2021</span>
                    <img src="./dropdown.svg" alt="" />
                  </div>
                </div>
                <div className="item-guest1">
                  <p>package</p>
                  <div className="date-1">
                    <span>All</span>
                    <img src="./dropdown.svg" alt="" />
                  </div>
                </div>
                <button className="btn1">Book Now</button>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="./Gorilla.png" alt="" />
          </div>
        </div>

        <div className="text2">
          <h1>Welcome to Africa Wizzy Safari</h1>
          <img src="./Line 2.png" alt="" />
        </div>

        <div className="about-sect">
          <div className="about-img">
            <img src="./about-1.png" alt="" />
          </div>
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
          <div className="about-img">
            <img src="./about-2.png" alt="" />
          </div>
          <div className="about-img">
            <img src="./about-3.png" alt="" />
          </div>
          <p>
            We are proud to have received numerous awards and accolades for our
            commitment to excellence, including the RDD award and the Excellence
            award. <br /> <br />  Thank you for choosing Africa Wizzy
            Safari for your travel needs in Rwanda. We look forward to welcoming
            you on one of our tours soon!
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
