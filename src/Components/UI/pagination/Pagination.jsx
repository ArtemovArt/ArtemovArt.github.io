import React from "react";
import "./styles.scss";

const Pagination = ({
  cardsPerPage,
  totalCards,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Генерируем массив номеров страниц
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="wrapper">
      {pageNumbers.map((p) => (
        <span
          onClick={() => onPageChange(p)}
          key={p}
          className={currentPage === p ? "page page__active" : "page"}
        >
          <span className={currentPage === p ? "font font_active" : "font"}>
            {p}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
