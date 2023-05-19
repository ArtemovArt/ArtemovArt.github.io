import React from "react";
import { NavLink } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import Level from "../UI/Level";

const setActive = ({ isActive }) => (isActive ? "" : "text");

const SprintGame = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="sprint-game">
        <div className="game-window">
          <img
            src="images/running-girl.svg"
            alt="run-girl"
          />
          <div className="game-description">
            <div className="title">
              <span
                className="slogan-font d-flex flex-row align-center"
                style={{ lineHeight: "100%", fontSize: "48px" }}
              >
                Sprint
              </span>
              <span className="lower-text">
                Trains the skill of fast translation. You have to choose if the
                translation corresponds to the suggested word.
              </span>
            </div>
            <div className="diff-level">
              <span className="lower-text">Choose a Level:</span>
              <div className="levels-container">
                <Level
                  color={"#639B6D"}
                  lighten={"#c1d7c5"}
                  // onClick={() => setIsClicked(!isClicked)}
                  // back={isClicked ? "#c1d7c5" : "#ffffff"}
                  children={
                    <span
                      className="level-text"
                      style={{ color: "#639B6D" }}
                    >
                      {"A1"}
                    </span>
                  }
                />
                <Level
                  color={"#C4A24C"}
                  lighten={"#e7dab7"}
                  // onClick={() => setIsClicked(!isClicked)}
                  // back={isClicked ? "#e7dab7" : "#ffffff"}
                  children={
                    <span
                      className="level-text"
                      style={{ color: "#C4A24C" }}
                    >
                      {"A2"}
                    </span>
                  }
                />
                <Level
                  color={"#CB5B43"}
                  lighten={"#eabdb4"}
                  // onClick={() => setIsClicked(!isClicked)}
                  // back={isClicked ? "#eabdb4" : "#ffffff"}
                  children={
                    <span
                      className="level-text"
                      style={{ color: "#CB5B43" }}
                    >
                      {"B1"}
                    </span>
                  }
                />
                <Level
                  color={"#A95151"}
                  lighten={"#ddb9b9"}
                  // onClick={() => setIsClicked(!isClicked)}
                  // back={isClicked ? "#c1d7c5" : "#ffffff"}
                  children={
                    <span
                      className="level-text"
                      style={{ color: "#A95151" }}
                    >
                      {"B2"}
                    </span>
                  }
                />
              </div>
            </div>
            <div className="start-button">
              <NavLink
                to="/game"
                className={setActive}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SprintGame;
