import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../UI/Navbar";

const setActive = ({ isActive }) => (isActive ? "" : "text");
const Dictionary = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="dictionary-wrapper">
        <Navbar></Navbar>
        <div className="content-wrapper">
          <div className="empty">
            <img
              src="/images/study-boy.svg"
              alt="lil-boy"
            />
            <div
              className="d-flex flex-column align-start"
              style={{ gap: 40 }}
            >
              <span className="font-main">No words in this section yet</span>
              <span className="font-bottom">
                To save difficult words for further study, go to the textbook
                and <br></br> select 'add to dictionary'
              </span>
              <div className="start-button">
                <NavLink
                  to="/textbook"
                  className={setActive}
                >
                  To Textbook
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dictionary;
