import React, { useState } from "react";
import "./styles/Host.css";
import { MdErrorOutline } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const Host = () => {
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
  const [hostData, setHostData] = useState({
    fullname: "",
    address: "",
    phone: "",
    email: "",
  });

  const [popupMessage, setPopupMessage] = useState("");

  let name, value;
  const postHostData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setHostData({ ...hostData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();

    const { fullname, address, phone, email } = hostData;

    if (fullname && address && phone && email) {
      const res = await fetch(
        "https://luxury-villa-rentals-7722e-default-rtdb.firebaseio.com/Villa-Hosting-Records.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            address,
            phone,
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
      <section id="host">
        <div className="container" onClick={() => handleNavLinkClick("/")}>
          <p>BECOME A HOST</p>
          <h3>Become a host</h3>
          <p>
            "Are you a proud owner of a luxurious villa? Join our exclusive
            network of hosts and showcase your property to discerning travelers
            from around the world.
          </p>
          <div className="form-box">
            <form method="POST">
              <div className="input-set1">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter full name"
                  autoComplete="off"
                  required
                  value={hostData.fullname}
                  onChange={postHostData}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Full Address"
                  autoComplete="off"
                  required
                  value={hostData.address}
                  onChange={postHostData}
                />
              </div>
              <div className="input-set2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  required
                  value={hostData.email}
                  onChange={postHostData}
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter contact number"
                  autoComplete="off"
                  required
                  value={hostData.phone}
                  onChange={postHostData}
                />
              </div>
              <button onClick={submitData}>JOIN TODAY</button>
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

export default Host;
