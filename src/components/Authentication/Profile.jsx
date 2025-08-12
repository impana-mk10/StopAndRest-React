import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getUser } from "../utils/UserApiFunction";
import { getBookingsByUserId } from "../utils/ApiFunctions";
import NavBar from "../layout/NavBar";

const Profile = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
  });

  const [bookings, setBookings] = useState([
    {
      id: "",
      room: { id: "", propertyName: "", roomType: "" },
      checkInDate: "",
      checkOutDate: "",
      bookingConfirmationCode: "",
    },
  ]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId, token);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookingsByUserId(userId, token);
        setBookings(response);
      } catch (error) {
        console.error("Error fetching bookings:", error.message);
        setErrorMessage(error.message);
      }
    };

    fetchBookings();
  }, [userId]);

  const handleCloseProfile = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {message && <p className="text-danger">{message}</p>}
        {user ? (
          <div
            className="card p-5 mt-5"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <h4 className="card-title text-center hotel-color">User Information</h4>
            <div className="card-body">
              <div className="col-md-10 mx-auto">
                <div className="card mb-3 shadow">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="d-flex justify-content-center align-items-center mb-4">
                        <img
                          src="https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg"
                          alt="Profile"
                          className="rounded-circle"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-10">
                      <div className="card-body">
                        <div className="form-group row">
                          <label className="col-md-2 col-form-label fw-bold">
                            ID:
                          </label>
                          <div className="col-md-10">
                            <p className="card-text">{user.id}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="form-group row">
                          <label className="col-md-2 col-form-label fw-bold">
                            Name:
                          </label>
                          <div className="col-md-10">
                            <p className="card-text">{user.name}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="form-group row">
                          <label className="col-md-2 col-form-label fw-bold">
                            Email:
                          </label>
                          <div className="col-md-10">
                            <p className="card-text">{user.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title text-center hotel-color">Booking History</h4>

                {bookings.length > 0 ? (
                  <table className="table table-bordered table-hover shadow">
                    <thead>
                      <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Room ID</th>
                        <th scope="col">Property Name</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Check In Date</th>
                        <th scope="col">Check Out Date</th>
                        <th scope="col">Confirmation Code</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.id}</td>
                          <td>{booking.room.id}</td>
                          <td>{booking.room.propertyName}</td>
                          <td>{booking.room.roomType}</td>
                          <td>
                            {moment(booking.checkInDate)
                              .subtract(1, "month")
                              .format("MMM Do, YYYY")}
                          </td>
                          <td>
                            {moment(booking.checkOutDate)
                              .subtract(1, "month")
                              .format("MMM Do, YYYY")}
                          </td>
                          <td>{booking.bookingConfirmationCode}</td>
                          <td className="text-success">On-going</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>You have not made any bookings yet.</p>
                )}

                <div className="d-flex justify-content-center">
                  <div className="mx-2">
                    <button
                      className="btn btn-hotel btn-sm"
                      onClick={handleCloseProfile}
                    >
                      Close profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
