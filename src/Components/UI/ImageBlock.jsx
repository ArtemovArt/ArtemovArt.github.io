import React from "react";

const ImageBlock = ({ multiplier }) => {
  const image = "/images/stars.svg"; // Путь к изображению
  // const numImages = multiplier <= 3 ? multiplier : 1; // Определяем количество изображений

  // Создаем массив с нужным количеством элементов и отображаем изображение
  const renderedImages = Array.from({ length: multiplier }, (_, index) => (
    <img
      key={index}
      src={image}
      alt={`pic ${index + 1}`}
    />
  ));

  return <div>{renderedImages}</div>;
};

export default ImageBlock;
