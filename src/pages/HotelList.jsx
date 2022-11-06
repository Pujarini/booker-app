import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./styles.css";

const HotelList = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
    </div>
  );
};

export default HotelList;
