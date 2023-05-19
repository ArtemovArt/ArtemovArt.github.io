import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "in-box-text-active" : "in-box-text";
const GamesPreview = () => {
  //document.querySelector("in-box-text").style.removeProperty("clear a");
  return (
    <div>
      <div className="d-flex flex-row">
        <img
          style={{
            marginLeft: "370px",
            marginTop: "78px",
            marginBottom: "78px",
          }}
          src="images/learning-girl.png"
          alt="girl"
        />
        <div
          className="slogan"
          style={{
            marginLeft: "120px",
            marginTop: "122px",
            marginBottom: "127px",
          }}
        >
          <span
            className="slogan-font"
            style={{ lineHeight: "100%" }}
          >
            Learn a language <br></br> in a playful way
          </span>
          <span className="lower-text">
            Make learning words more fun with mini-games
          </span>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <img
                src="images/pink-boots.png"
                style={{ position: "absolute" }}
                alt="boots"
              />
              <div className="pink-box">
                <NavLink
                  to="/sprint"
                  className={setActive}
                >
                  Sprint
                  <img
                    src="/images/arrow.svg"
                    alt="arrow"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPreview;
