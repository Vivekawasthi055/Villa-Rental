import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={
          isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
        }
      >
        <div className="container">
          <h4>LUXURY VILLA RENTALS</h4>
          <p>
          Discover luxury redefined with Luxury Villa Rentals. Your gateway to unforgettable experiences awaits.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 6666 66 6666</p>
          <p>luxuryvillarentals@gmail.com</p>
          <p>© All Rights Reserved By Luxury Villa Rentals.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
