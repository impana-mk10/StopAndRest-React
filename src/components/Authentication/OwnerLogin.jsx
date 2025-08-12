import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useOwnerAuth } from "./OwnerAuthProvider";
import NavBar from "../layout/NavBar";
import logo from "../assets/images/LogoSNR.jpg";
import "./OwnerLogin.css"; // Import the CSS file

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const OwnerLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { ownerHandleLogin } = useOwnerAuth();

  const location = useLocation();
  const redirectUrl = location.state?.path || "/add-newRoom";

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/hotel-owner/auth/login",
        values
      );
      if (response.status === 200) {
        const { accessToken } = response.data;
        ownerHandleLogin(accessToken);
        navigate(redirectUrl, { replace: true });
      } else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        console.log(
          "Server responded with error status:",
          error.response.status
        );
        console.log("Error response data:", error.response.data);
        setErrorMessage("Invalid Email Or Password");
      } else if (error.request) {
        console.log("No response received from the server:", error.request);
        setErrorMessage(
          "No response received from the server. Please try again later."
        );
      } else {
        console.log("Error setting up request:", error.message);
        setErrorMessage("Invalid Email Or Password.");
      }
      setErrors({
        email: "Invalid Email or Password",
        password: "Invalid Email or Password",
      });
    }
    setSubmitting(false);
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };

  return (
    <>
      <NavBar />
      <div className="login-background">
        <div className="login-card">
          <div className="card-body">
            <div className="d-flex justify-content-center mb-3">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <h2 className="text-center" style={{ color: "black" }}>
              Login
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="form-control form-control-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="form-control form-control-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <button
                      type="submit"
                      className="btn btn-hotel"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center">
              Don't have an account yet? <br />
              <Link to={"/owner-registration"}>
                Register now and start your amazing journey!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerLogin;
