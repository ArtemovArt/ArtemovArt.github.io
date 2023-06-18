import React from "react";
import { NavLink } from "react-router-dom";

//import ProgressCircle from "../UI/ProgressCircle";

import { useSelector } from "react-redux";
import data from "./data/words";
import Word from "./utils/Word";
//import Word from "./Components/Pages/utils/Word";return-btn-text
const setActive = ({ isActive }, cl) => (isActive ? "" : `${cl}`);

const GameOver = (props) => {
  const result = (props.score / 520).toFixed(2) * 100;
  const count = (props.right.length / 20).toFixed(2) * 100;
  const dataNew = useSelector((state) => state.cards.cards);

  return (
    <div className="App">
      <div className="game-over">
        <div className="stats">
          <div className="inner-content">
            <img
              src="/images/diploma.svg"
              alt="diploma"
            />
            <div className="d-flex flex-column align-center">
              <div className="results">
                <span className="main-font mb-10"> Итоги</span>
                {result > 50 ? (
                  <span className="lower-font">Вы неплохо справились!</span>
                ) : (
                  <span className="lower-font">
                    Вы можете лучше, попробуйте еще раз!
                  </span>
                )}
                {/* {result === 100 ? (
                  <span className="lower-font-special">
                    Воу воу, Вероника, да ты настоящая English Lady! Для тебя
                    предусмотрен особый приз :&#41;&#41;
                  </span>
                ) : result > 50 ? (
                  <span className="lower-font">Вы неплохо справились!</span>
                ) : (
                  <span className="lower-font">
                    Вы можете лучше, попробуйте еще раз!
                  </span>
                )} */}
              </div>

              <div className="hz">
                <div
                  className="new"
                  style={{
                    backgroundImage: `conic-gradient(rgb(43, 120, 139) ${result}%, rgb(195, 220, 227) 0)`,
                  }}
                >
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
                          Набрано
                        </span>
                        <span className="main-font">{props.score}</span>
                        <span className="lower-font">очков</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className="new-2"
                  style={{
                    backgroundImage: `conic-gradient(rgb(99, 155, 109) ${count}%, rgb(193, 215, 197) 0)`,
                  }}
                >
                  <div className="new-body">
                    <span className="d-flex flex-column align-center">
                      <span
                        className="lower-font"
                        style={{ color: "#000000" }}
                      >
                        {props.right.length}/
                      </span>
                      <span className="main-font">20</span>
                      <span className="lower-font">слов</span>
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
              <div
                className={"font"}
                style={{ marginLeft: 5 }}
                onClick={props.replay}
              >
                Сыграть снова
              </div>
            </div>
            <div className="cyan-btn">
              <NavLink
                to="/textbook"
                className={setActive({}, "return-btn-text")}
              >
                К учебнику
              </NavLink>
            </div>
            {/* <div className="cyan-btn-special">
              <NavLink
                to="/special"
                className={setActive({}, "return-btn-text")}
              >
                Да да, кликай сюда
              </NavLink>
            </div> */}
          </div>
        </div>
        <div className="words">
          <div className="side">
            <div
              className="d-flex flex-row align-center mb-30"
              style={{ gap: 10 }}
            >
              <span className="main-font">Верно</span>
              <div className="green-button">
                <span
                  className="lower-font"
                  style={{ color: "#2B788B" }}
                >
                  {props.right.length} слов
                </span>
              </div>
            </div>

            <div className="list">
              {props.right.map((elem, index) => (
                <Word
                  word={elem.word}
                  translation={
                    dataNew.find((w) => w.word === elem.word).translation
                  }
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="side">
            <div
              className="d-flex flex-row align-center mb-30"
              style={{ gap: 10 }}
            >
              <span className="main-font">Неверно</span>
              <div className="red-btn">
                <span
                  className="lower-font"
                  style={{ color: "#945069" }}
                >
                  {props.wrong.length} слов
                </span>
              </div>
            </div>

            <div className="list">
              {props.wrong.map((elem, index) => (
                <Word
                  word={elem.word}
                  translation={
                    dataNew.find((w) => w.word === elem.word).translation
                  }
                  // translation={elem.translation}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
