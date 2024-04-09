import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../VillasList/villas";
import "./SingleVilla.css";
const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filteredVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.image} alt={filteredVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={"/landing.jpg"} alt="villa" />
                <img src={"/people.jpg"} alt="villa" />
              </div>
              <div>
                <img src={"/people2.jpg"} alt="villa" />
                <img src={"/villa10.jpg"} alt="villa" />
              </div>
            </div>
          </div>
          <h4>{filteredVilla.location}</h4>
          <div id="full-details">
            <h5>
              Bedrooms :<span>{filteredVilla.bedrooms}</span> | Bathrooms :
              <span>{filteredVilla.bathrooms}</span> | Category :
              <span>{filteredVilla.category}</span> | Area :
              <span>{filteredVilla.squareMeter} sq m</span> | Ratings :
              <span>{filteredVilla.rating}</span> | Daily Rent :
              <span>{filteredVilla.dailyRent} / Day</span>
            </h5>
          </div>
          <div className="checkin_out">
            <h5>
              Check In : <span> 9:00 AM</span>
            </h5>
            <h5>
              Check Out : <span> 11:00 PM</span>
            </h5>
          </div>
          <div className="details">
            <h5>
              Description : <span>{filteredVilla.discription}</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src={filteredVilla.maplocation}
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;
