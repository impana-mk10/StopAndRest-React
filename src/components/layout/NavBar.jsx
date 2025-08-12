import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "../Authentication/Logout";
import { AuthContext } from "../Authentication/AuthProvider";
import Logo from "../assets/images/LogoSNR.jpg";

function NavBar() {
  const [showAccount, setShowAccount] = useState(false);
  const { user } = useContext(AuthContext);
  const isLoggedIn = user !== null;

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-0 sticky-top">
      <div className="container-fluid">
        <img src={Logo} alt="" className="round" width="75px" height="75px" />
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="hotel-color">StopNRest</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto me-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/browse-all-rooms"
              >
                Browse all rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/list-properties"
              >
                List your property
              </NavLink>
            </li>
           
          </ul>
          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/find-booking">
                Find My Booking
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/aboutus"
            >
                About Us
            </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  showAccount ? "show" : ""
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showAccount ? "true" : "false"}
                onClick={handleAccountClick}
              >
                Account
              </a>
              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {isLoggedIn ? (
                  <Logout />
                ) : (
                  <li>
                    <Link to="/user-login" className="dropdown-item">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
