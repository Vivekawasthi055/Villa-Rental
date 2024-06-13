import React from "react";
import "./Villas.css";
import { villas } from "../../VillasList/villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Villas = () => {
  return (
    <>
      <div className="page" id="allVillas">
        <h1>ALL AVAILABLE VILLAS</h1>
        <p>{villas.length} Properties</p>
        <div className="villasContainer">
          {villas.map((element) => {
            return (
              <Link
                to={`/villa/${element.id}`}
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
        <span className="note">
          <span> Note :</span> The owners of these villas are different, but
          LUXURY VILLA RENTALS has taken over all the villas on lease with the
          paperwork, and all the villas are owned by the LUXURY VILLA RENTALS
          Company until the lease period ends. If you would like to rent any of
          the villas listed on our website, please contact us or book through
          our website. thank you. <br />
          Team Luxury Villa Rentals
        </span>
      </div>
    </>
  );
};

export default Villas;
