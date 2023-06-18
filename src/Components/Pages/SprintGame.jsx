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
                Спринт
              </span>
              <span className="lower-text">
                Тренирует навык быстрого перевода. Вы должны выбрать,
                соответствует ли перевод предложенному слову. У вас есть 45
                секунд.
              </span>
            </div>
            <div className="diff-level">
              <span className="lower-text">Выберите сложность:</span>
              <div className="levels-container">
                <Level
                  color={"#639B6D"}
                  lighten={"#c1d7c5"}
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
                Приступить
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
