import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { registerUser } from "../utils/UserApiFunction";
import NavBar from "../layout/Nav";
import registrationImg from "../assets/images/loginpage.webp";
import "./UserRegister.css";
import logo from "../assets/images/LogoSNR.jpg" // Import the new CSS file

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please Enter your Name"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
  mobileNumber: Yup.string()
    .required("Please enter a valid mobile number")
    .matches(/^(0)?[1-9][0-9]{9}$/, "Mobile number must be 10 digits."),
});

const UserRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegistration = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await registerUser(values);
      setSuccessMessage(result);
      setErrorMessage("");
      resetForm();
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
      <NavBar />
      <section className="user-register-container mt-5 mb-5">
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        {successMessage && (
          <p className="alert alert-success">{successMessage}</p>
        )}

        <div className="row">
          <div className="col-md-6">
            <div className="card user-register-card">
              <div className="card-body">
              <div style={{ display: "flex", justifyContent: "center" }}>
               <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                style={{ width: "70px", height: "70px" }}
               />
              </div>
                <h2 className="card-title user-register-title text-center  mb-5 mt-2">User Registration</h2>
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
                        <label htmlFor="name" className="col-sm-3 col-form-label user-register-label">
                          Name
                        </label>
                        <div className="col-sm-9">
                          <Field
                            id="name"
                            name="name"
                            type="text"
                            className="form-control user-register-input"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger user-register-error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-3 col-form-label user-register-label">
                          Username
                        </label>
                        <div className="col-sm-9">
                          <Field
                            id="username"
                            name="username"
                            type="text"
                            className="form-control user-register-input"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-danger user-register-error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-3 col-form-label user-register-label">
                          Email
                        </label>
                        <div className="col-sm-9">
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            className="form-control user-register-input"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger user-register-error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-3 col-form-label user-register-label">
                          Password
                        </label>
                        <div className="col-sm-9">
                          <Field
                            id="password"
                            name="password"
                            type="password"
                            className="form-control user-register-input"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger user-register-error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="mobileNumber" className="col-sm-3 col-form-label user-register-label">
                          Mobile
                        </label>
                        <div className="col-sm-9">
                          <Field
                            id="mobileNumber"
                            name="mobileNumber"
                            type="text"
                            className="form-control user-register-input"
                          />
                          <ErrorMessage
                            name="mobileNumber"
                            component="div"
                            className="text-danger user-register-error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 text-center">
                        <button
                          type="submit"
                          className="btn btn-hotel user-register-button mt-3"
                          style={{ marginRight: "10px" }}
                          disabled={isSubmitting}
                        >
                          Register
                        </button>
                      </div>
                      <div className="mb-2 text-center"> 
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
          <div className="col-md-6">
            <div>
              <img
                src={registrationImg}
                className="card-img-top user-register-img"
                alt="Registration Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRegister;
