import React from "react";
import "./Contact.css";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Reach out to us to start planning your dream getaway today.</p>
        <p>Your luxury villa experience begins with a simple click.</p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+91 6666 66 6666</span>
            </div>
            <div>
              <p>Email</p>
              <span>luxuryvillarentals@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>New Delhi , India</span>
            </div>
            <ul>
              <Link to={"/facebook"} target="_blank">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/instagram"} target="_blank">
                <RiInstagramLine />
              </Link>
              <Link to={"/twitterX"} target="_blank">
                <RiTwitterXLine />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
