import React from "react";
import "./AboutUs.css";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>
            Luxury Villa Rentals invites you to indulge in the epitome of
            sophistication and comfort. With an exclusive collection of
            handpicked villas nestled in breathtaking locales,
          </p>
          <p>
            we curate unforgettable experiences tailored to your discerning
            tastes.
          </p>
          <p>
            Our commitment to excellence extends beyond luxurious
            accommodations; it's about crafting moments that resonate long after
            your stay.
          </p>
          <p>
            Trust us to elevate your journey with unparalleled service and
            attention to detail. Welcome to a world where every escape is an
            invitation to luxury.
          </p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
