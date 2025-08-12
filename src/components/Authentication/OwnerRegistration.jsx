import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ownerRegistration } from "../utils/OwnerApiFunctions";
import Nav from "../layout/Nav";
import registrationImg from "../assets/images/parrall.jpg";
import "./OwnerRegistration.css";
import logo from "../assets/images/LogoSNR.jpg"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  mobileNumber: Yup.string()
    .required("Please enter a valid mobile number")
    .matches(/^(0)?[1-9][0-9]{9}$/, "Mobile number must be 10 digits."),
});

const OwnerRegistration = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegistration = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await ownerRegistration(values);
      setSuccessMessage(result);
      setErrorMessage("");
      resetForm();
      navigate("/owner-login");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(`Registration error: ${error.message}`);
    }
    setSubmitting(false);
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <>
      <Nav />
      <section className="registration-page container mt-5 mb-5"> {/* Added registration-page class */}
        <div className="row">
          <div className="col-md-6"> {/* Adjust the size of the card */}
            <div className="card">
              <div className="card-body">
              <div style={{ display: "flex", justifyContent: "center" }}>
               <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                style={{ width: "70px", height: "70px" }}
               />
              </div>
                <h2 className=" hotel-color card-title text-center mb-5">Owner Registration</h2>
                {errorMessage && (
                  <p className="alert alert-danger">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="alert alert-success">{successMessage}</p>
                )}
                <Formik
                  initialValues={{
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                    mobileNumber: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleRegistration}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label"> {/* Adjusted label width */}
                          Name
                        </label>
                        <div className="col-sm-9"> {/* Adjusted input field width */}
                          <Field
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-3 col-form-label"> {/* Adjusted label width */}
                          Username
                        </label>
                        <div className="col-sm-9"> {/* Adjusted input field width */}
                          <Field
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-3 col-form-label"> {/* Adjusted label width */}
                          Email
                        </label>
                        <div className="col-sm-9"> {/* Adjusted input field width */}
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-3 col-form-label"> {/* Adjusted label width */}
                          Password
                        </label>
                        <div className="col-sm-9"> {/* Adjusted input field width */}
                          <Field
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="mobileNumber" className="col-sm-3 col-form-label"> {/* Adjusted label width */}
                          Mobile
                        </label>
                        <div className="col-sm-9"> {/* Adjusted input field width */}
                          <Field
                            id="mobileNumber"
                            name="mobileNumber"
                            type="text"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="mobileNumber"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="mb-3 text-center">
                        <button
                          type="submit"
                          className="btn btn-hotel"
                          style={{ marginRight: "10px" }}
                          disabled={isSubmitting}
                        >
                          Register
                        </button>
                      </div>
                      <div className="text-center">
                      <span style={{ marginLeft: "10px" }}>
                          Already have an account? <Link to="/owner-login">Login</Link>
                        </span>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-6"> {/* Image column */}
            <div className="image-container">
              <img
                src={registrationImg}
                className="card-img-top"
                alt="Registration Image"
              />
              <div className="quote">
                <p>Register today and start your journey!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnerRegistration;
