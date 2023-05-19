import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
//import ProgressCircle from "../UI/ProgressCircle";
import Word from "./utils/Word";
//import Word from "./Components/Pages/utils/Word";return-btn-text
const setActive = ({ isActive }, cl) => (isActive ? "" : `${cl}`);

const GameOver = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="game-over">
        <div className="stats">
          <div
            className="d-flex flex-row align-center"
            style={{ margin: "60px 40px 30px" }}
          >
            <img
              src="/images/diploma.svg"
              alt="diploma"
            />
            <div className="d-flex flex-column align-center">
              <div className="d-flex flex-column align-start mb-20">
                <span className="main-font mb-10"> Your Sprint</span>
                <span className="lower-font">You did pretty good</span>
              </div>

              <div className="hz">
                {/* <ProgressCircle
                  className="result-circle"
                  progr={75}
                  children={
                    <span
                      className="shadow"
                      style={{ maxWidth: 260 }}
                    >
                      <span className="d-flex flex-column align-center">
                        <span
                          className="lower-font"
                          style={{ color: "#000000" }}
                        >
                          Retrieved
                        </span>
                        <span className="main-font">240</span>
                        <span className="lower-font">points</span>
                      </span>
                    </span>
                  }
                ></ProgressCircle> */}
                <div className="new">
                  <div className="new-body">
                    <span
                      className="shadow"
                      style={{ maxWidth: 260 }}
                    >
                      <span className="d-flex flex-column align-center">
                        <span
                          className="lower-font"
                          style={{ color: "#000000" }}
                        >
                          Retrieved
                        </span>
                        <span className="main-font">240</span>
                        <span className="lower-font">points</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="new-2">
                  <div className="new-body">
                    <span className="d-flex flex-column align-center">
                      <span
                        className="lower-font"
                        style={{ color: "#000000" }}
                      >
                        30/
                      </span>
                      <span className="main-font">40</span>
                      <span className="lower-font">words</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-row align-center"
            style={{ gap: 30 }}
          >
            <div className="play-again">
              <img
                src="/images/repeat.svg"
                className="repeat"
                alt="repeat"
              />
              <NavLink
                to="/game"
                className={setActive({}, "font")}
                style={{ marginLeft: 5 }}
              >
                Play Again
              </NavLink>
            </div>
            <div className="cyan-btn">
              <NavLink
                to="/textbook"
                className={setActive({}, "return-btn-text")}
              >
                Go to textbook
              </NavLink>
            </div>
          </div>
        </div>
        <div className="words">
          <div
            className="d-flex flex-column align-start mt-40 mb-40"
            style={{ maxHeight: 320, marginLeft: 25 }}
          >
            <div
              className="d-flex flex-row align-center mb-30"
              style={{ gap: 10 }}
            >
              <span className="main-font">I know</span>
              <div className="green-button">
                <span
                  className="lower-font"
                  style={{ color: "#2B788B" }}
                >
                  15 words
                </span>
              </div>
            </div>
            <div
              className="d-flex flex-row align-start"
              style={{ gap: 10 }}
            >
              <div
                className="d-flex flex-column align-start"
                style={{ gap: 32, maxHeight: 240, overflow: "auto" }}
              >
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column align-start mt-40 ml-40 mb-40 "
            style={{ maxHeight: 320, marginRight: 25 }}
          >
            <div
              className="d-flex flex-row align-center mb-30"
              style={{ gap: 10 }}
            >
              <span className="main-font">I don`t know</span>
              <div className="red-btn">
                <span
                  className="lower-font"
                  style={{ color: "#945069" }}
                >
                  15 words
                </span>
              </div>
            </div>
            <div className="d-flex flex-row align-start">
              <div
                className="d-flex flex-column align-start"
                style={{ gap: 32 }}
              >
                <div className="d-flex flex-row align-start ml-40">
                  <span
                    className="lower-font"
                    style={{ color: "#000000" }}
                  >
                    anniversary &nbsp;
                  </span>
                  <span className="lower-font">-&nbsp;anniversary</span>
                </div>
                <div className="d-flex flex-row align-start ml-40">
                  <span
                    className="lower-font"
                    style={{ color: "#000000" }}
                  >
                    anniversary &nbsp;
                  </span>
                  <span className="lower-font">-&nbsp;anniversary</span>
                </div>
                <div className="d-flex flex-row align-start ml-40">
                  <span
                    className="lower-font"
                    style={{ color: "#000000" }}
                  >
                    anniversary &nbsp;
                  </span>
                  <span className="lower-font">-&nbsp;anniversary</span>
                </div>
                <div className="d-flex flex-row align-start ml-40">
                  <span
                    className="lower-font"
                    style={{ color: "#000000" }}
                  >
                    anniversary &nbsp;
                  </span>
                  <span className="lower-font">-&nbsp;anniversary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GameOver;
