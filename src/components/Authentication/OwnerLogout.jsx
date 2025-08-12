import React from "react";
import { useOwnerAuth } from "./OwnerAuthProvider";
import { Link, useNavigate } from "react-router-dom";

const OwnerLogout = () => {
  const auth = useOwnerAuth();
  const navigate = useNavigate();

  const ownerHandleLogout = () => {
    auth.ownerHandleLogout();
    navigate("/list-properties", {
      state: { message: "You have been logged out!" },
    });
  };

  const isLoggedIn = auth.user !== null;

  return isLoggedIn ? (
    <>
      <li>
        <Link className="dropdown-item" to={"/owner-profile"}>
          Profile
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <button className="dropdown-item" onClick={ownerHandleLogout}>
          Logout
        </button>
      </li>
    </>
  ) : null;
};

export default OwnerLogout;
