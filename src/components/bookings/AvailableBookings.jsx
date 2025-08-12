import React, { useEffect, useState } from "react";
import { cancelBooking, getOwnerBookings } from "../utils/ApiFunctions";
import Header from "../common/Header";
import BookingsTable from "./BookingsTable";
import Nav from "../layout/Nav";

function AvailableBookings() {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getOwnerBookings()
        .then((data) => {
          setBookingInfo(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const handleBookingCancellation = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      const data = await getOwnerBookings();
      setBookingInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Nav />
      <section style={{ backgroundColor: "whitesmoke" }}>
        <Header title={"Existing Bookings"} />
        {error && <div className="text-danger">{error}</div>}
        {isLoading ? (
          <div>Loading Booked Rooms...</div>
        ) : (
          <BookingsTable
            bookingInfo={bookingInfo}
            handleBookingCancellation={handleBookingCancellation}
          />
        )}
      </section>
    </>
  );
}

export default AvailableBookings;
