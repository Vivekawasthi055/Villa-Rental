import React from "react";
import "./styles/Regions.css";

const Regions = () => {
  return (
    <>
      <section id="regions">
        <h1>OUR REGIONS</h1>
        <p>
          Explore our curated collection of picturesque regions, each offering
          its own unique charm and allure. From sun-kissed beaches to serene
          countryside retreats, discover the perfect backdrop for your next
          luxury getaway.
        </p>
        <div className="region_container">
          <div className="card">
            <img src="/region1.jpg" alt="mountains" />
            <h2>Mountains</h2>
            <p>
              <span>90</span> Properties
            </p>
          </div>
          <div className="card">
            <img src="/region2.jpg" alt="coastline" />
            <h2>Seaside</h2>
            <p>
              <span>52</span> Properties
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Regions;
