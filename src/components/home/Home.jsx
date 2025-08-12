import React from "react";
import HeaderMain from "../layout/HeaderMain";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousel";
import RoomSearch from "../common/RoomSearch";
import NavBar from "../layout/NavBar";
import SWISSSection from '../common/SWISSSection';

function Home() {
  return (
    <div style={{backgroundColor:'rgb(252, 223, 245)'}}>
      <NavBar />
      <section>
        <HeaderMain />
        <section className="container">
          <RoomSearch />
          <RoomCarousel />
          <SWISSSection />
          <Parallax />
          <RoomCarousel />
          <HotelService />
          <Parallax />
        </section>
      </section>
    </div>
  );
}

export default Home;
