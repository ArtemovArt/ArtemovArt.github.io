import React, { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="slider">
      <div className="slider__image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slider__image ${
              index === currentImageIndex
                ? "slider__image--active"
                : "slider__image--inactive"
            }`}
          />
        ))}
      </div>
      <button
        className="slider__button slider__button--previous"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="slider__button slider__button--next"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
