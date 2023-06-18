import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../actions/cards";
import Card from "../Cards/Card";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../UI/Navbar";
import Pagination from "../UI/pagination/Pagination";

const Textbook = () => {
  const cardsData = useSelector((state) => state.cards.cards);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  // Вычислите индексы первой и последней карточки на текущей странице
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Получите карточки, отображаемые на текущей странице
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Функция для обработки нажатия на кнопки навигации по страницам
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="textbook-wrapper">
        <Navbar />
        <div className="textbook-content">
          {/* <div className="d-flex flex-wrap justify-between"> */}
          <div className="cards-field">
            {currentCards.map((elem) => (
              <Card
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
          <div className="d-flex flex-row align-center justify-center">
            <Pagination
              cardsPerPage={cardsPerPage}
              totalCards={cardsData.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Textbook;
