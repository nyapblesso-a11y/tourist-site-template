import React from "react";
import Media from "../components/Media/Media";
import Navigation from "../components/Navigation/Navigation";
import "./ContacUs.css";
import Footer from "../components/Footer/Footer";

function ContactUs() {
  return (
    <>
      <div>
        <Media />
        <Navigation />
        <div className="hero-sec">
          <h1>Contact Us</h1>
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
        <div className="phrase">
          <h1>Get in Touch</h1>
          <p>
            We would love to hear from you! If you have any comments or
            suggestions about our website or our tours, please don't hesitate to
            get in touch. We are always looking for ways to improve and make
            your travel experience even better.
          </p>
        </div>

        <div className="contact-section">
          <h2>Contact us</h2>

          <form action="">
            <div className="name-sec">
              <div className="first-name">
                <p>First Name</p>
                <input
                  type="text"
                  placeholder="input your First Name in Here"
                />
              </div>
              <div className="last-name">
                <p>Last Name</p>
                <input type="text" placeholder="input your Last Name in Here" />
              </div>
            </div>

            <div className="address">
              <p>Email Address</p>
              <input
                type="address"
                placeholder="input your Email Address in Here"
              />
            </div>
            <div className="phone">
              <p>Phone Number</p>
              <input
                type="tel"
                id="phone"
                placeholder="input your Phone Number in Here"
              />
            </div>

            <div className="message">
              <p>Message</p>
              <textarea
                name="long_message"
                rows="5"
                cols="40"
                placeholder="Write message here"
              ></textarea>
            </div>
          </form>

          <button className="submit">Submit</button>
        </div>

        <div className="social-medias">
          <div className="socials">
            <h3>Social media</h3>
            <div className="icons">
              <img src="./facebook.svg" alt="facebook" />
              <img src="./camera.svg" alt="twitter" />
              <img src="./twitter.svg" alt="linkedin" />
              <img src="./intagram.svg" alt="instagram" />
            </div>
          </div>

          <div className="Socials">
            <h3>Email & phone</h3>
            <div className="icon">
              <div className="phones">
                <img src="./call.svg" alt="call" />
                <span>+250 784 688 641</span>
              </div>
              <div className="messages">
                <img src="./message.svg" alt="message" />
                <span>bbonteemma@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="socials">
            <h3>Address</h3>
            <div className="icons">
              <p>
                kk 600 st <br />
                Kigali, Rwanda
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
