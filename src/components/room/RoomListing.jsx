import React from "react";
import Room from "./Room";
import NavBar from "../layout/NavBar";

function RoomListing() {
  return (
    <>
      <NavBar />
      <section className="bg-light p-2 mb-5 mt-5 shadow">
        <Room />
      </section>
    </>
  );
}

export default RoomListing;
