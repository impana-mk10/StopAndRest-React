import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyDashboard.css";
import propertyImg from "../assets/images/propertyimg.jpg"; // Assuming you have a CSS file for custom styles
import Nav from "../layout/Nav";
import { useOwnerAuth } from "../Authentication/OwnerAuthProvider"; // Adjust the import path if necessary

function PropertyDashboard() {
  const { user } = useOwnerAuth();
  const navigate = useNavigate();

  const handleListYourPropertyClick = () => {
    if (user) {
      navigate("/add-newRoom");
    } else {
      navigate("/owner-login");
    }
  };

  return (
    <>
      <Nav />
      <div id="top-section" className="container-fluid content-section">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-6 text-center text-lg-left">
            <h1 className="lg-title-3-bld mt-4">
              Want{" "}
              <span className="purple">
                guests who
                <br />
                love hotels
              </span>
              ?<br />
              We've got them.
            </h1>
            <p>
              <strong>
                Fill your hotel with travellers who love to travel and spend
                more.
              </strong>
            </p>
            <div className="top-section-buttons">
              <button
                type="button"
                className="btn-content full-width"
                onClick={handleListYourPropertyClick}
              >
                <span className="text">List your property</span>
                <div className="icon-container icon-end">
                  <svg
                    width="16"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        id="arrow-left"
                        d="M6 3L4 5.5L10 12L4 18.5L6 21L16 12L6 3Z"
                      />
                    </defs>
                    <use xlinkHref="#arrow-left" href="#arrow-left"></use>
                  </svg>
                </div>
              </button>
            </div>
            <div className="inbox-text mr-2">
              Want to access Stop N Rest's Travel page?
              <strong>
                <a
                  href="http://localhost:3000/user-login"
                  className="inbox-link  "
                >
                  <br/>
                  Login as Traveller
                </a>
              </strong>
            </div>
          </div>
          <div className="col-lg-4 col-xl-6 mt-4">
            <div className="card h-100">
              <img
                src={propertyImg}
                className="card-img-top"
                alt="Video Thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDashboard;
