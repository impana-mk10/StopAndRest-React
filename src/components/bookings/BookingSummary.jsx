import React, { useState, useEffect } from "react";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './BookingSummary.css'; // Import your CSS file
import { FaRupeeSign } from "react-icons/fa";

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
  const checkInDate = moment(booking.checkInDate);
  const checkOutDate = moment(booking.checkOutDate);
  const numberOfDays = checkOutDate.diff(checkInDate, "days");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const navigate = useNavigate();

  const openRazorpayPayment = () => {
    const options = {
      key: "rzp_test_1FpxKzEk6Dpy2b",
      amount: payment * 100, // Amount in paisa
      currency: "INR",
      name: "STOP AND REST",
      description: "Booking payment",
      prefill: {
        name: booking.guestFullName,
        email: booking.guestEmail,
        contact: "7904425033", // Assuming this is a static contact number
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: handlePaymentSuccess, // Callback for payment success
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handlePaymentSuccess = (response) => {
    console.log(
      "Payment successful! Payment ID: " + response.razorpay_payment_id
    );
    setIsPaymentDone(true);
    setIsProcessingPayment(false);
  };

  const handleConfirmBooking = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsBookingConfirmed(true);
      onConfirm(); // Assuming onConfirm is a callback to proceed after booking confirmation
    }, 1000);
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      navigate("/booking-success", {
        state: { message: "Your booking was successful!" },
      });
    }
  }, [isBookingConfirmed, navigate]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card card-body mt-5 booking-summary-card">
            <h4 className="card-title hotel-color">Reservation Summary</h4>
            <p>
              Name: <strong>{booking.guestFullName}</strong>
            </p>
            <p>
              Email: <strong>{booking.guestEmail}</strong>
            </p>
            <p>
              Check-In Date:{" "}
              <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
            </p>
            <p>
              Check-Out Date:{" "}
              <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
            </p>
            <p>
              Number of Days Booked: <strong>{numberOfDays}</strong>
            </p>

            <div>
              <h5 className="hotel-color">Number of Guests</h5>
              <strong>
                Adult{booking.numOfAdults > 1 ? "s" : ""} : {booking.numOfAdults}
              </strong>
              <strong>
                <p>Children : {booking.numOfChildren}</p>
              </strong>
            </div>

            {payment > 0 ? (
              <>
                <p>
                  Total payment: <strong><FaRupeeSign style={{ fontSize: '13px' }}/>{payment}</strong>
                </p>

                {isFormValid && !isBookingConfirmed ? (
                  !isPaymentDone ? (
                    <Button variant="success" onClick={openRazorpayPayment}>
                      {isProcessingPayment ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Processing Payment...
                        </>
                      ) : (
                        "Pay"
                      )}
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={handleConfirmBooking}>
                      Confirm Booking
                    </Button>
                  )
                ) : isBookingConfirmed ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-danger">
                Check-out date must be after check-in date.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
