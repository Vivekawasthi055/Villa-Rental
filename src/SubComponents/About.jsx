import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              Welcome to Luxury Villa Rentals, where dreams merge with luxury
              and tranquility. Our mission is to curate unforgettable
              experiences in the world's most captivating destinations. We
              invite you to indulge in the opulence of our handpicked villas.
            </p>
            <p>
              Beyond our exquisite accommodations, our devoted team strives to
              exceed your expectations at every turn. From your initial inquiry
              to your departure, we ensure a seamless and memorable journey.
              Whether arranging bespoke excursions or offering insider tips, we
              elevate your experience.
            </p>
            <p>
              At Luxury Villa Rentals, your satisfaction is paramount. Explore
              our collection of exceptional properties and embark on a journey
              of unparalleled hospitality. Your dream vacation is within reach.
            </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
