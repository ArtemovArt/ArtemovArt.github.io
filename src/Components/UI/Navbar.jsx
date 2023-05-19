import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "headings-font-active" : "headings-font";
const Navbar = () => {
  return (
    <div className="textbook-navbar">
      <div className="sections">
        <div
          className="d-flex flex-row align-center"
          style={{ gap: 10 }}
        >
          <img
            src="/images/hat.svg"
            alt="hat"
          />
          <NavLink
            to="/textbook"
            className={setActive}
          >
            Textbook
          </NavLink>
        </div>
        <img
          src="/images/small-vert-line.svg"
          alt="line"
        />
        <div
          className="d-flex flex-row align-center"
          style={{ gap: 10 }}
        >
          <img
            src="/images/book.svg"
            alt="book"
          />
          <NavLink
            to="/dictionary"
            className={setActive}
          >
            Dictionary
          </NavLink>
        </div>
      </div>
      <div
        className="d-flex flex-row align-center"
        style={{ gap: 10 }}
      >
        {/* <img
          src="/images/sprint-button.svg"
          alt="sprint-btn"
        /> */}
        <div className="pink-btn">
          <img
            src="/images/small-pink-boots.svg"
            style={{ borderRadius: 100 }}
            alt="small-boots"
          />
          <NavLink
            to="/sprint"
            className="in-box-text"
            style={{ padding: "14px 45px 14px 9px", borderRadius: 100 }}
          >
            Sprint
          </NavLink>
        </div>
        <span className="settings-box">
          <img
            src="/images/gear.svg"
            alt="gear"
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
