import React, { useState } from "react";
import "./styles/Contact.css";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

const SubContact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleNavLinkClick = (path) => {
    if (!isAuthenticated) {
      // If user is not authenticated, redirect to login page or show login modal
      loginWithRedirect();
    } else {
      navigate(path);
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    fullName: "",
    message: "",
    email: "",
  });

  const [popupMessage, setPopupMessage] = useState("");

  let name, value;
  const postFeedbackData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();

    const { fullName, message, email } = feedbackData;

    if (fullName && message && email) {
      const res = await fetch(
        "https://luxury-villa-rentals-7722e-default-rtdb.firebaseio.com/Feedback-Contact-Records.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            message,
            email,
          }),
        }
      );
      if (res) {
        setSubmitted(true);
      } else {
        setPopupMessage("PLEASE FIL YOUR DETAILS");
      }
    } else {
      setPopupMessage("PLEASE FIL YOUR DETAILS");
    }
  };

  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container_1">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+91 6666 66 6666</span>
            </div>
            <div>
              <p>Email</p>
              <span>luxuryvillarentals3@gmail.com</span>
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

          <div className="container_2" onClick={() => handleNavLinkClick("/")}>
            <h3>We'd love to hear from you</h3>
            <form method="POST">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="fullName"
                  autoComplete="off"
                  value={feedbackData.fullName}
                  onChange={postFeedbackData}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  value={feedbackData.email}
                  onChange={postFeedbackData}
                />
              </div>
              <textarea
                rows="4"
                placeholder="Your Message..."
                name="message"
                autoComplete="off"
                value={feedbackData.message}
                onChange={postFeedbackData}
              />
              <button type="submit" onClick={submitData}>
                SEND
              </button>
            </form>
          </div>
        </div>
        {submitted && (
          <div className="blur-background">
            <div className="hostpopup">
              <p>Your data has been submited !</p>

              <p>We will contact you soon.</p>

              <p>Thank you for trusting us.</p>
              <button
                className="hostbtn"
                onClick={() => window.location.reload()}
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </section>
      {popupMessage && (
        <div className="blur-background">
          <div className="popup errorpopup">
            <p>
              <MdErrorOutline />
              {popupMessage}
            </p>
            <button className="errorbtn" onClick={() => setPopupMessage("")}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubContact;
