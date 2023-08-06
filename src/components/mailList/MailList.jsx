import React from "react";
import "./mailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="mailDesc">
        <div className="mailInputContainer">
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </span>
    </div>
  );
};
export default MailList;
