import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const YourComponent = () => {
  const [expandedSection1, setExpandedSection1] = useState(false);
  const [expandedSection2, setExpandedSection2] = useState(false);
  const [expandedSection3, setExpandedSection3] = useState(false);

  const handleToggleSection1 = () => {
    setExpandedSection1(!expandedSection1);
  };

  const handleToggleSection2 = () => {
    setExpandedSection2(!expandedSection2);
  };

  const handleToggleSection3 = () => {
    setExpandedSection3(!expandedSection3);
  };

  return (
    <div className="container">
      <div
        className={`element ${
          expandedSection1 ? "font-special" : "font-special"
        }`}
        onClick={handleToggleSection1}
      >
        Нажимай, насладимся прекрасными видами Испании :&#41;&#41;
      </div>
      {expandedSection1 && (
        <div className="content">
          <h2>
            Dedicado al amante del mar. Ну или как-то так, хз не учил испанский
            как ты;&#41;;&#41;
          </h2>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
          >
            <div className="image-slide">
              <img
                src="/special/Spain-1.jpg"
                alt="pic 1"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-2.jpg"
                alt="pic 2"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-4.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-5.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-6.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-7.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-8.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-9.jpg"
                alt="pic 3"
              />
            </div>
            <div className="image-slide">
              <img
                src="/special/Spain-10.jpg"
                alt="pic 3"
              />
            </div>
          </Carousel>
        </div>
      )}

      <div
        className={`element ${
          expandedSection2 ? "font-special" : "font-special"
        }`}
        onClick={handleToggleSection2}
      >
        Или вспомним приятные моменты?...&#41;
      </div>
      {expandedSection2 && (
        <div className="content">
          <h2>
            Ну сори, только на 1 фотке получился нормально, мне только в зале
            фоткаться с жеским видом типа ауф апхпаххап
          </h2>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
          >
            <div className="image-slide-mi">
              <img
                src="/special/mi1.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi2.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi3.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi4.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi5.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi6.jpg"
                alt="pic 4"
              />
            </div>
            <div className="image-slide-mi">
              <img
                src="/special/mi7.jpg"
                alt="pic 4"
              />
            </div>
          </Carousel>
        </div>
      )}
      <div
        className={`element ${
          expandedSection3 ? "font-special" : "font-special"
        }`}
        onClick={handleToggleSection3}
      >
        Ну и напоследок пару слов&#41;
      </div>
      {expandedSection3 && (
        <div className="font-casual">
          Как видишь, бывает у нас и кринжа полная, бывает и super-kife, но без
          этих двух пограничных состояний не бывает :&#41;&#41;. <br></br>
          Да, сейчас и у тебя, и у меня дрочный период, когда заебов херова
          гора, но скоро они закончатся&#41;. <br></br>
          Так что не грусти и не грузись, ты, конечно, очень красивая, когда
          грустишь, но улыбка тебе идет больше. <br></br>
          Надеюсь, что это кринж-поделие смогло хоть немного поднять тебе
          настроение и хоть чуть-чуть улыбнуло&#41;&#41;&#41;
        </div>
      )}
    </div>
  );
};

export default YourComponent;
