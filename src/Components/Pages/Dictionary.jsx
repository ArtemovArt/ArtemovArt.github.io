import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../UI/Navbar";

const setActive = ({ isActive }) => (isActive ? "" : "text");
const Dictionary = () => {
  const dictData = useSelector((state) => state.dict.dict);
  return (
    <div className="App">
      <Header></Header>
      <div className="dictionary-wrapper">
        <Navbar></Navbar>
        {dictData.length ? (
          <div className="non-empty-wrapper">
            <div className="non-empty-content">
              <div className="d-flex flex-wrap justify-between">
                {dictData.map((elem) => (
                  <Card
                    id={elem.id}
                    isAdded={true}
                    word={elem.word}
                    translation={elem.translation}
                    transcription={elem.transcription}
                    picture={elem.picture}
                    example={elem.example}
                    exampleTranslation={elem.exampleTranslation}
                    explanation={elem.explanation}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-wrapper">
            <div className="empty">
              <img
                src="/images/study-boy.svg"
                alt="lil-boy"
              />
              <div
                className="d-flex flex-column align-start"
                style={{ gap: 40 }}
              >
                <span className="font-main">Пока что здесь пусто...</span>
                <span className="font-bottom">
                  Чтобы сохранить трудные слова для дальнейшего изучения,
                  перейдите к учебнику и выберите "добавить в словарь".
                </span>
                <div className="start-button">
                  <NavLink
                    to="/textbook"
                    className={setActive}
                  >
                    К учебнику
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dictionary;
