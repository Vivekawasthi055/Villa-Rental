import React, { useState } from "react";
import "./BookNow.css";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const BookNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
    category: "",
    location: "",
    location2: "", // New state for location2
    checkInDate: "",
    checkOutDate: "",
  });

  const [showLocation2, setShowLocation2] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // State to control pop-up message

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();

    const {
      fullName,
      address,
      phone,
      email,
      gender,
      category,
      location,
      location2, // Include location2 in submission
      checkInDate,
      checkOutDate,
    } = userData;

    if (
      fullName &&
      address &&
      phone &&
      email &&
      gender &&
      category &&
      checkInDate &&
      checkOutDate &&
      ((category === "Sea Side" && location2) || location) // Check if location or location2 is selected based on category
    ) {
      let selectedLocation = category === "Sea Side" ? location2 : location;

      Email.send({
        SecureToken: "ba9fb359-3f5a-45fe-946f-2ab92da58c87",
        To: userData.email,
        From: "luxuryvillarentals3@gmail.com",
        Subject: "Booking Confirmation",
        Body: `<b>Dear ${fullName}</b>,<br>Your booking has been confirmed! We will contact you soon!<br><br><b>Your booking details entered by you are as follows :</b><br>Full Name: ${fullName}<br>Address: ${address}<br>Contact Number: ${phone}<br>E-mail: ${email}<br>Gender: ${gender}<br>Villa Category: ${category}<br>Villa Name & Location: ${selectedLocation}<br>Check-in Date: ${checkInDate}<br>Check-out Date: ${checkOutDate}<br><br><b>Thank you for choosing us.<br><br>Regards,<br>Team Luxury Villa Rentals</b>`,
      }).then(
        (message) => alert("Booking details have been sent to your email."),
        (error) => console.error("Error:", error)
      );

      const res = await fetch(
        "https://luxury-villa-rentals-7722e-default-rtdb.firebaseio.com/Villa-Booking-Records.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            address,
            phone,
            email,
            gender,
            category,
            location: selectedLocation,
            checkInDate,
            checkOutDate,
          }),
        }
      );
      if (res) {
        setSubmitted(true); //Submit pop-up Message
      } else {
        setPopupMessage("Please fill your details !"); // error pop-up Message
      }
    } else {
      setPopupMessage("Please fill your details !"); // error pop-up Message
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setUserData({ ...userData, category: selectedCategory });

    if (selectedCategory === "Sea Side") {
      setShowLocation2(true);
    } else {
      setShowLocation2(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-box">
          <form method="POST">
            <img src="/booking.png" alt="" />
            <section className="input-sec">
              <h1 className="form-h">Luxury Villa Booking</h1>
              <div className="input-container">
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="off"
                  value={userData.fullName}
                  onChange={postUserData}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="address" className="label">
                  Full Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  autoComplete="off"
                  value={userData.address}
                  onChange={postUserData}
                />
              </div>
              <div className="input-container">
                <label htmlFor="phone" className="label">
                  Contact Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="off"
                  value={userData.phone}
                  onChange={postUserData}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email" className="label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={userData.email}
                  onChange={postUserData}
                />
              </div>

              <div className="input-container">
                <label htmlFor="gender" className="label">
                  Select Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={userData.gender}
                  onChange={postUserData}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="input-container">
                <label htmlFor="category" className="label">
                  Select Location Category
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  value={userData.category}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option>Mountain Side</option>
                  <option>Sea Side</option>
                </select>
              </div>
              {showLocation2 ? (
                <div className="input-container">
                  <label htmlFor="location2" className="label">
                    Select Villa & Location
                  </label>
                  <select
                    name="location2"
                    id="location2"
                    required
                    value={userData.location2}
                    onChange={postUserData}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    <option>SeaBreeze Villa / Goa</option>
                    <option>PearlSeas Villa / Goa</option>
                    <option>Paradise Villa / Goa</option>
                    <option>WishOcean Villa / Lakshadweep</option>
                  </select>
                </div>
              ) : (
                <div className="input-container">
                  <label htmlFor="location" className="label">
                    Select Villa & Location
                  </label>
                  <select
                    name="location"
                    id="location"
                    required
                    value={userData.location}
                    onChange={postUserData}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    <option>Sunshine Villa / Manali</option>
                    <option>Mount Villa / Manali</option>
                    <option>Everpeak Villa / Manali</option>
                    <option>Valleytop Villa / Ladakh</option>
                    <option>Skyridge Villa / Ladakh</option>
                  </select>
                </div>
              )}

              <div className="input-container">
                <label htmlFor="arrival" className="label">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  id="checkInDate"
                  required
                  value={userData.checkInDate}
                  onChange={postUserData}
                />
              </div>
              <div className="input-container">
                <label htmlFor="departure" className="label">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  id="checkOutDate"
                  required
                  value={userData.checkOutDate}
                  onChange={postUserData}
                />
              </div>
              <button type="submit" className="submitbtn" onClick={submitData}>
                Book Now
              </button>
            </section>
          </form>
        </div>
        {submitted && (
          <div className="blur-background">
            <div className="popup">
              <p>Your booking has been confirmed !</p>
              <br />
              <p>Our team will contact you soon.</p>
              <br />
              <p>Thank you for choosing us.</p>
              <Link className="okaybtn" to={"/"}>
                Okay
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Pop-up for validation message */}
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

export default BookNow;
