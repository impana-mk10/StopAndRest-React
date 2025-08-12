import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoomsByUserId } from "../utils/ApiFunctions";
import { getOwner } from "../utils/OwnerApiFunctions";
import Nav from "../layout/Nav";

const OwnerProfile = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
  });

  const [rooms, setRooms] = useState([
    {
      id: "",
      propertyName: "",
      roomType: "",
      roomPrice: "",
      address: "",
      postcode: "",
      city: "",
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
        const userData = await getOwner(userId, token);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await getRoomsByUserId(userId, token);
        setRooms(response);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
        setErrorMessage(error.message);
      }
    };

    fetchRooms();
  }, [userId]);

  const handleCloseProfile = () => {
    navigate("/list-properties");
  };

  return (
    <>
      <Nav />
      <div className="container">
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {message && <p className="text-danger">{message}</p>}
        {user ? (
          <div
            className="card p-5 mt-5"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <h4 className="card-title text-center">User Information</h4>
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

                <h4 className="card-title text-center">Room History</h4>

                {rooms.length > 0 ? (
                  <table className="table table-bordered table-hover shadow">
                    <thead>
                      <tr>
                        <th scope="col">Property Name</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Room Price</th>
                        <th scope="col">Address</th>
                        <th scope="col">Postcode</th>
                        <th scope="col">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rooms.map((room, index) => (
                        <tr key={index}>
                          <td>{room.propertyName}</td>
                          <td>{room.roomType}</td>
                          <td>{room.roomPrice}</td>
                          <td>{room.address}</td>
                          <td>{room.postcode}</td>
                          <td>{room.city}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>You have not added any properties yet.</p>
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

export default OwnerProfile;
