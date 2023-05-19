import React from "react";

import Card from "../Cards/Card";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../UI/Navbar";

const Textbook = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="textbook-wrapper">
        <Navbar />
        <div className="textbook-content">
          <div className="d-flex flex-wrap align-center">
            <Card />
            <Card />
            <Card />

            {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Textbook;
