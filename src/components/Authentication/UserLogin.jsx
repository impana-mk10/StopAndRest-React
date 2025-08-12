import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import NavBar from "../layout/NavBar";
import WelcomeQuote from "./WelcomeQuote";
import logo from "../assets/images/LogoSNR.jpg";
import loginimg from "../assets/images/loginpage.webp";
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const UserLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const location = useLocation();
  const redirectUrl = location.state?.path || "/browse-all-rooms";

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        values
      );
      if (response.status === 200) {
        const { accessToken } = response.data;
        console.log("Access token received:", accessToken); // Debug log
        handleLogin(accessToken); // Call handleLogin from AuthProvider
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
        setErrorMessage("An error occurred. Please try again later.");
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
      <section
        className="container mt-5 mb-5"
        style={{ backgroundColor: "#F8D2F3" }}
      >
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        <div className="row">
          <div className="col-md-12 mb-3">
            <WelcomeQuote /> {/* Include WelcomeQuote component */}
          </div>
          <div className="col-md-6 mb-3">
            <div className="card" style={{ marginTop: "1cm" }}>
              <div
                className="card-body"
                style={{ minHeight: "550px", marginTop: "1cm" }}
              >
                {" "}
                {/* Adjust the min-height */}
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src={logo} // Replace with your logo URL
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
                      <br />

                      <div className="text-center mb-3">
                        <button
                          type="submit"
                          className="btn btn-hotel"
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                        <br />
                        <br />
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="text-center">
                  Don't have an account yet? <br />
                  <br />
                  <br />
                  <Link to={"/user-registration"}>
                    Register now and start your amazing journey!
                    <br />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              style={{
                borderRadius: "10px 10px 0 0",
                overflow: "hidden",
                paddingTop: "1cm",
              }}
            >
              <img
                src={loginimg} // Replace with your image URL
                className="card-img-top"
                alt="Login Image"
                style={{ width: "100%", height: "auto" }} // Ensure the image takes up the full width of its container
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
