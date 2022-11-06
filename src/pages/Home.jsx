import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import LikedProperties from "../components/LikedProperties";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="hotelContainer">
        <Featured />
        <h1 className="homeTitle">Browse by category Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Hotels that guests love</h1>
        <LikedProperties />
      </div>
    </>
  );
};

export default Home;
