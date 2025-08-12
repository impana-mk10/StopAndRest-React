import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";

import "./Bookingsuccess.css"; // Import the modified CSS file
import NavBar from "../layout/NavBar";

const BookingSuccess = () => {
  const location = useLocation();
  const message = location.state?.message;
  const error = location.state?.error;
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Header title="Booking Success" />
        <div className="booking-popup">
          {" "}
          {/* Apply the modified class name */}
          <div className="booking-card modal-content">
            {" "}
            {/* Apply the modified class names */}
            <div className="booking-content modal-body">
              {" "}
              {/* Apply the modified class names */}
              {message ? (
                <div>
                  <h3 className="booking-text-success modal-title">
                    Booking Success!
                  </h3>{" "}
                  {/* Apply the modified class names */}
                  <p className="booking-text-success">{message}</p>{" "}
                  {/* Apply the modified class name */}
                </div>
              ) : (
                <div>
                  <h3 className="booking-text-danger modal-title">
                    Error Booking Room!
                  </h3>{" "}
                  {/* Apply the modified class names */}
                  <p className="booking-text-danger">{error}</p>{" "}
                  {/* Apply the modified class name */}
                </div>
              )}
              <button
                className="booking-close-button btn-secondary"
                onClick={handleRedirectHome}
              >
                {" "}
                {/* Apply the modified class names */}
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
