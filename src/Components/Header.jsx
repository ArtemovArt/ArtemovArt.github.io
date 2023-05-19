import React from "react";
import "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "navbar-buttons");
  return (
    <header className="navbar">
      <div className="inner-bar">
        <div className="bar-content">
          <div className="logo text-uppercase">Enjoy English</div>
          <NavLink
            to="/main"
            className={setActive}
          >
            Home
          </NavLink>
          <NavLink
            to="/textbook"
            className={setActive}
          >
            TextBook
          </NavLink>
          <NavLink
            to="/sprint"
            className={setActive}
          >
            Sprint
          </NavLink>
        </div>
        <div className="profile">
          <div className="user-side">
            <span className="user-image">A</span>
            <span className="font-weight: 600;">Artem</span>
          </div>
          <span className="font-weight: 700;">Sign Out →</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
