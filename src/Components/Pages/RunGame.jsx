import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
const setActive = ({ isActive }) => (isActive ? "" : "text");
const RunGame = () => {
  return (
    <div className="App clear">
      <Header></Header>
      <div className="run-game">
        <div className="timer">
          <div className="timer-line"></div>
          <div className="timer-body">
            <div
              className="d-flex flex-column align-center"
              style={{ gap: 40 }}
            >
              <div className="score">
                <div
                  className="d-flex flex-column align-center"
                  style={{ gap: 3 }}
                >
                  <span className="main-font">x2</span>
                  <span className="lower-font">множитель</span>
                </div>
                <img
                  src="/images/score-line.svg"
                  alt="line"
                />
                <div
                  className="d-flex flex-column align-center"
                  style={{ gap: 3 }}
                >
                  <span className="main-font">30</span>
                  <span className="lower-font">очков</span>
                </div>
              </div>
              <div className="d-flex flex-column align-center">
                <div
                  className="d-flex flex-row align-start"
                  style={{ gap: 10 }}
                >
                  <img
                    src="/images/stars.svg"
                    alt="star"
                  />
                  <img
                    src="/images/stars.svg"
                    alt="star"
                  />
                  <img
                    src="/images/stars.svg"
                    alt="star"
                  />
                </div>
                <span className="main-font">negative</span>
                <span
                  className="lower-font"
                  style={{
                    fontSize: "48px",
                    lineHeight: "100%",
                    color: "#2B788B",
                  }}
                >
                  негативный
                </span>
              </div>
              <div className="btns">
                <button className="wrong">
                  <span
                    className="lower-font"
                    style={{ color: "#945069" }}
                  >
                    Неверно
                  </span>
                </button>
                <button className="right">
                  <span
                    className="lower-font"
                    style={{ color: "#2B788B" }}
                  >
                    Верно
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="start-button">
          <NavLink
            to="/end"
            className={setActive}
          >
            Просмотр страницы с итогами
          </NavLink>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RunGame;
