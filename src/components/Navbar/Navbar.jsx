import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    if (!isAuthenticated) {
      // If user is not authenticated, redirect to login page or show login modal
      loginWithRedirect();
    } else {
      navigate(path);
    }
    setNavHeight(false); // Close the navbar after navigation
  };
  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => handleNavLinkClick("/")}>
          LUXURY VILLA RENTALS
        </div>
        <ul>
          <li>
            <Link
              to={"/aboutus"}
              onClick={() => handleNavLinkClick("/aboutus")}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to={"/villas"} onClick={() => handleNavLinkClick("/villas")}>
              VILLAS
            </Link>
          </li>
          <li>
            <Link
              to={"/booknow"}
              onClick={() => handleNavLinkClick("/booknow")}
            >
              BOOK NOW
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              onClick={() => handleNavLinkClick("/contact")}
            >
              CONTACT
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="log-in-out-btn"
              >
                LOG OUT
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => loginWithRedirect()}
                className="log-in-out-btn"
              >
                LOG IN
              </button>
            </li>
          )}
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
};

export default Navbar;
