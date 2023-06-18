import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-div">
        <div className="top-text">
          <div className="nav-buttons">
            <NavLink
              to="/home"
              className="inner-div-font"
            >
              Главная
            </NavLink>
            <NavLink
              to="/textbook"
              className="inner-div-font"
            >
              Учебник
            </NavLink>
            <NavLink
              to="/sprint"
              className="inner-div-font"
            >
              Спринт
            </NavLink>
          </div>
          <div className="nav-buttons">
            <span className="inner-div-font">SFeDU Project Team</span>
          </div>
        </div>
        <img
          src="images/bottom-horis-line.svg"
          alt="hor-line"
        />
        <div className="bottom-content">
          <div className="icons">
            <img
              src="images/reddit-icon.svg"
              alt="reddit"
            />
            <img
              src="images/yt-icon.svg"
              alt="youtube"
            />
          </div>
          <span className="inner-div-font">
            ©2023 EnjoyEnglish. Project for SFeDU.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
