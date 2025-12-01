import React from "react";
import "./media.css";

function Media() {
  return (
    <div className="media">
      <div className="group">
        <img src="./group phone.png" alt="phone" />
        <img src="./group email.png" alt="email" />
      </div>

      <div className="social-media">
        <img src="./facebooklogo.png" alt="facebook" />
        <img src="./twitterlogo.png" alt="twitter" />
        <img src="./linkedinlogo.png" alt="linkedin" />
        <img src="./instagram.png" alt="instagram" />
      </div>
    </div>
  );
}

export default Media;
