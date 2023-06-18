import React from "react";
import { NavLink } from "react-router-dom";

const Slogan = (props) => {
  const setActive = ({ isActive }) => (isActive ? "" : "c-font");
  return (
    <div
      className="slogan"
      style={{ marginTop: 136, marginBottom: 110, maxWidth: 475 }}
    >
      <span className="slogan-font">{props.main}</span>
      <span
        className="lower-text"
        style={{ fontSize: "18px" }}
      >
        {props.bottom}
      </span>
      <div className="cyan-btn">
        <NavLink
          to="/textbook"
          className={setActive}
        >
          К учебнику
          <img
            src="/images/cyan-arrow.svg"
            alt="c-arrow"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Slogan;
