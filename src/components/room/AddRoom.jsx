import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";
import "./AddRoom.css";
import { Link } from "react-router-dom";
import NavBar from "../layout/Nav";
import roomimg from "../assets/images/add5.jpg";

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required("Room photo is required"),
  roomType: Yup.string().required("Room type is required"),
  roomPrice: Yup.number()
    .required("Room price is required")
    .positive("Price must be positive"),
  propertyName: Yup.string().required("Property name is required"),
  address: Yup.string().required("Address is required"),
  postcode: Yup.string().required("Postcode is required"),
  city: Yup.string().required("City is required"),
  ownerEmail: Yup.string().email("Invalid email").required("Email is required"),
});

const AddRoom = () => {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai"];
  const currentUser = localStorage.getItem("userId");
  const [imagePreview, setImagePreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    photo: null,
    roomType: "",
    roomPrice: "",
    propertyName: "",
    address: "",
    postcode: "",
    city: "",
    ownerEmail: currentUser,
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("photo", values.photo);
      formData.append("roomType", values.roomType);
      formData.append("roomPrice", values.roomPrice);
      formData.append("propertyName", values.propertyName);
      formData.append("address", values.address);
      formData.append("postcode", values.postcode);
      formData.append("city", values.city);
      formData.append("ownerEmail", values.ownerEmail);

      const success = await addRoom(formData);
      if (success !== undefined) {
        setSuccessMessage("A new room was added to the database");
        resetForm();
        setImagePreview(null);
        setErrorMessage("");
      } else {
        setErrorMessage("Error adding room");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <NavBar />
      <section className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-2 hotel-color">Property Details</h2>
            <p className="mt-2 mb-3">Information about your property</p>
            {successMessage && (
              <div className="alert alert-success fade show">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger fade show">{errorMessage}</div>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <div className="mb-3 mt-4">
                    <label
                      htmlFor="ownerEmail"
                      className="form-label hotel-color"
                    >
                      Property Owner Email
                    </label>
                    <Field
                      type="email"
                      id="ownerEmail"
                      name="ownerEmail"
                      className="form-control"
                      disabled
                    />
                    <ErrorMessage
                      name="ownerEmail"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="propertyName"
                      className="form-label hotel-color"
                    >
                      Property Name
                    </label>
                    <Field
                      type="text"
                      id="propertyName"
                      name="propertyName"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="propertyName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">
                      Room Type
                    </label>
                    <RoomTypeSelector
                      handleRoomInputChange={(e) =>
                        setFieldValue("roomType", e.target.value)
                      }
                      newRoom={values}
                    />
                    <ErrorMessage
                      name="roomType"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="roomPrice"
                      className="form-label hotel-color"
                    >
                      Room Price
                    </label>
                    <Field
                      type="number"
                      id="roomPrice"
                      name="roomPrice"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="roomPrice"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="photo"
                      className="form-label hotel-color d-block"
                    >
                      Room Photo
                    </label>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setFieldValue("photo", e.currentTarget.files[0]);
                        handlePhotoChange(e);
                      }}
                    />
                    <div className="preview-image-container">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Room Preview"
                          className="preview-image"
                          height={300}
                          width={500}
                        />
                      ) : (
                        <p className="text-muted">Room photo preview</p>
                      )}
                    </div>
                    <ErrorMessage
                      name="photo"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <h3 className="subtitle">Property Address</h3>
                  <div className="mb-3">
                    <label
                      htmlFor="address"
                      className="form-label hotel-color"
                    >
                      Address
                    </label>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="postcode"
                      className="form-label"
                    >
                      Postcode
                    </label>
                    <Field
                      type="text"
                      id="postcode"
                      name="postcode"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="postcode"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="city"
                      className="form-label hotel-color"
                    >
                      City
                    </label>
                    <Field
                      as="select"
                      id="city"
                      name="city"
                      className="form-control"
                    >
                      <option value="">Select a city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="d-grid d-md-flex mt-2">
                    <Link
                      to={"/existing-rooms"}
                      className="btn btn-outline-info"
                    >
                      Added Properties
                    </Link>
                    <button className="btn btn-hotel ms-3" type="submit">
                      Save Room
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {/* Placeholder for image preview */}
            <div className="preview-image-container mt-5">
              {roomimg ? (
                <img
                  src={roomimg}
                  alt="Room Preview"
                  className="preview-image"
                  height={800}
                  width={500}
                />
              ) : (
                <p className="text-muted">Room photo preview</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRoom;
