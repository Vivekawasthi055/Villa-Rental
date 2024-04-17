import React from "react";
import "./styles/TopVillas.css";
import { villas } from "../VillasList/villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const TopVillas = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleNavLinkClick = (path) => {
    if (!isAuthenticated) {
      // If user is not authenticated, redirect to login page or show login modal
      loginWithRedirect();
    } else {
      navigate(path);
    }
  };

  return (
    <section id="topVillas">
      <h1>TOP PICK VILLAS</h1>
      <p>
        Discover our handpicked selection of exquisite villas, each offering
        unrivaled luxury and breathtaking views. Elevate your vacation
        experience with our top pick villas, where opulence meets comfort in
        every detail.
      </p>
      <div className="villasContainer">
        {villas.slice(0, 3).map((element) => {
          return (
            <Link
              to={`/villa/${element.id}`}
              onClick={() => handleNavLinkClick(`/villa/${element.id}`)}
              className="card"
              key={element.id}
            >
              <img src={element.image} alt={element.name} />
              <div className="location_text">
                <span>{element.location}</span>
                <span>
                  <RxDot />
                </span>
                <span>{element.category}</span>
              </div>
              <div className="title_text">{element.name}</div>
              <div className="specifications">
                <div className="spec">
                  <IoIosPeople />
                  <span>{element.guests}</span>
                  Guests
                </div>
                <div className="spec">
                  <FaBed />
                  <span>{element.bedrooms}</span>
                  Bedrooms
                </div>
                <div className="spec">
                  <BiArea />
                  <span>{element.squareMeter}</span>
                  Area
                </div>
                <div className="spec">
                  <FaBath />
                  <span>{element.bathrooms}</span>
                  Bathrooms
                </div>
              </div>
              <div className="badge">
                From <span>{element.dailyRent} / Day </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;
