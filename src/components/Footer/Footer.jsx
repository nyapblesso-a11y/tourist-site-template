import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      {" "}
      <div className="footer-section">
        <div className="footer">
          <div className="footer-left">
            <h1>
              If you have any question, <br /> Let us help you!
            </h1>
            <span>
              If you have any questions or would like to <br />
              book a tour with us, please don't hesitate <br />
              to contact us.
            </span>
            <p>
              Phone: +250 788 123 456 <br />
              Email: info@rwandatourism.com <br />
              Address: Kigali, Rwanda{" "}
            </p>

            <h3>Subscribe to our newspaper</h3>
            <div className="input-text">
              <div className="input">
                <span>Input your email here</span>
              </div>
              <img src="./Button (1).svg" alt="" />
            </div>
          </div>

          <div className="footer-right">
            <div className="africa">
              <img src="./Africa.svg" alt="" />
              <div className="icons">
                <img src="./facebooklogo.png" alt="facebook" />
                <img src="./twitterlogo.png" alt="twitter" />
                <img src="./linkedinlogo.png" alt="linkedin" />
                <img src="./instagram.png" alt="instagram" />
              </div>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br /> industry.
            </p>

            <div className="footer-btm">
              <div className="btm">
                <ul>
                  <li>Home</li>
                  <li>Testimonials</li>
                  <li>Destinations</li>
                  <li>signinn</li>
                </ul>
              </div>
              <div className="btm">
                <ul>
                  <li>About Us</li>
                  <li>Packages</li>
                  <li>Events</li>
                  <li>Gallery</li>
                </ul>
              </div>
              <div className="btm">
                <ul>
                  <li>Our Team</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <span className="txt">Copyright Africa Wizzy Safari 2022</span>
      </div>
    </>
  );
}

export default Footer;
