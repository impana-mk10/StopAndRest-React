import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import { Link, useParams } from "react-router-dom";
import "./AddRoom.css";
import Nav from "../layout/Nav";

function EditRoom() {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai"];

  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
    propertyName: "",
    address: "",
    postcode: "",
    city: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    console.log("Selected Image:", selectedImage);
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(roomData.photo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoom();
  }, [roomId]);

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccessMessage("Room updated successfully!");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(updatedRoomData.photo);
        setErrorMessage("");
      } else {
        setErrorMessage("Erroe updating room");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-5 mb-5">
        <h3 className="text-center mb-5 mt-5 hotel-color">
          Update Room Details
        </h3>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {successMessage && (
              <div className="alert alert-success " role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger " role="alert">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handelSubmit}>
              <div className="mb-3 ">
                <label
                  htmlFor="propertyName"
                  className="form-label hotel-color"
                >
                  Property Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="propertyName"
                  name="propertyName"
                  value={room.propertyName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="roomType" className="form-label hotel-color">
                  Room Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="roomType"
                  name="roomType"
                  value={room.roomType}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="roomPrice" className="form-label hotel-color">
                  Room Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="roomPrice"
                  name="roomPrice"
                  value={room.roomPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label hotel-color">
                  Photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={`data:image/jpeg;base64,${imagePreview}`}
                    alt="Room preview"
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                    className="mt-3"
                  />
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label hotel-color">
                  Address
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  value={room.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postcode" className="form-label hotel-color">
                  Postcode
                </label>
                <input
                  className="form-control"
                  type="text"
                  required
                  id="postcode"
                  name="postcode"
                  value={room.postcode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label hotel-color">
                  City
                </label>
                <select
                  className="form-control"
                  id="city"
                  name="city"
                  value={room.city}
                  onChange={handleInputChange}
                >
                  <option value="">Select a city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-grid gap-2 d-md-flex mt-2">
                <Link
                  to={"/existing-rooms"}
                  className="btn btn-outline-info ml-5"
                >
                  back
                </Link>
                <button type="submit" className="btn btn-outline-warning  ">
                  Edit Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditRoom;
