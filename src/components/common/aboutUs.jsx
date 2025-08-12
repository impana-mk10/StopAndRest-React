import React from "react";
import "./aboutUs.css";
import landingImage from "../assets/images/landingimg.jpg";
import booking from "../assets/images/booking.webp";
import listings from "../assets/images/listings.jpg";
import booking2 from "../assets/images/booking2.png";
import NavBar from "../layout/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div id="MainWrapper">
        {/* <header className="ab-header-section">
                <h1 className='ab-header'>About Us</h1>
            </header> */}

        <section
          id="ab-Landingbannerwrapper"
          style={{ marginBottom: "1cm", marginTop: "1cm" }}
        >
          <div className="about-container">
            <img src={landingImage} alt="" width="1600" height="450" />
            <div className="landing-banner-content">
              <h1 className="landing-banner-title">
                Discover Comfort and Convenience with Stop N Rest
              </h1>
              <div className="slider-caption">
                <p className="para">
                  "At Stop N Rest, we bridge the gap between travelers seeking
                  comfortable accommodations and hotel owners looking to list
                  their properties, ensuring a seamless and satisfying
                  experience for all"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="ab-bod-card">
          <div className="about-container">
            <h2 className="ab-section-heading">TRAVELLER SERVICES</h2>
            <p className="ab-section-subheading">
              To Find the Best Hotels around the Country
            </p>
            <div className="ab-key-wrapper">
              <div className="ab-key-card">
                <h2 style={{ fontSize: "30px" }}>Effortless Booking</h2>
                <img src={booking} alt="Image 1" className="ab-key-image" />
                <p className="ab-key-description">
                  With our user-friendly interface, travelers can easily search,
                  compare, and book rooms that fit their preferences and
                  budgets, all in one place.
                </p>
              </div>
              <div className="ab-key-card">
                <h2>Verified Listings</h2>
                <img src={listings} alt="Image 2" className="ab-key-image" />
                <p className="ab-key-description">
                  We prioritize your safety and satisfaction by ensuring that
                  all listed properties are verified for quality and
                  reliability. Enjoy peace of mind knowing that your stay will
                  meet your expectations.
                </p>
              </div>
              <div className="ab-key-card">
                <h2>24/7 Booking</h2>
                <img src={booking2} alt="Image 3" className="ab-key-image" />
                <p className="ab-key-description">
                  Our platform allows you to book rooms at any time, day or
                  night, giving you the flexibility to plan your travel
                  according to your schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ab-board-of-directors" className="ab-bod-card1">
          <div className="about-container">
            <h2 className="ab-section-heading">FOR HOTEL OWNERS</h2>
            <h1 className="ab-section-subheading">
              Maximize your property's potential with our comprehensive support.
            </h1>
            <div className="ab-key-wrapper">
              <div className="ab-key-card1">
                <p className="ab-rad-name">Expand Your Reach</p>
                <p className="ab-rad-description">
                  List your properties on our platform to gain access to a wide
                  audience of potential guests. Increase your occupancy rates
                  and maximize your revenue with minimal effort.
                </p>
              </div>
              <div className="ab-key-card1">
                <p className="ab-rad-name">Management Tools</p>
                <p className="ab-rad-description">
                  Our platform provides comprehensive tools for managing your
                  listings, handling bookings, and responding to guest inquiries
                  efficiently. Focus on providing exceptional service while we
                  handle the rest.
                </p>
              </div>
              <div className="ab-key-card1">
                <p className="ab-rad-name">Insights and Analytics</p>
                <p className="ab-rad-description">
                  Gain valuable insights into booking trends and guest
                  preferences with our analytics tools, helping you optimize
                  your offerings and improve your services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
