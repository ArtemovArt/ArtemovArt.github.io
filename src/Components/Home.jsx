import React from "react";

const Home = () => {
  return (
    <div>
      <div className="first-container">
        <div className="content mb-30">
          <div className="about">
            <div className="left-text">
              <div className="text-content">
                <span className="name">Приложение</span>
                <div className="slogan">
                  <span className="slogan-font">
                    Обучение онлайн теперь проще простого.
                  </span>
                  <span className="bottom-slogan-font">
                    Практикуйте свой английский и узнавайте что-то новое с
                    помощью приложения.
                  </span>
                </div>
              </div>
              <div className="description">
                <div className="description-text">
                  <img
                    className="mb-15 mr-10"
                    width={24}
                    height={30}
                    src="/images/lightning.svg"
                    alt="lightning"
                  />
                  <div className="d-flex flex-column">
                    <span>600+</span>
                    <span className="lower-text">Популярных слов</span>
                  </div>
                </div>
                <img
                  src="images/vert-line.svg"
                  alt="line"
                />
                <div className="description-text">
                  <img
                    className="mb-15"
                    width={24}
                    height={30}
                    src="/images/game-tag.svg"
                    alt="gtag"
                  />
                  <div className="d-flex flex-column align-center">
                    <span>2+</span>
                    <span className="lower-text">Мини-игр</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            // style={{ width: "49%", height: "70%" }}
            className="pict mt-20"
            src="/images/boy-with-flower.svg"
            alt="boy"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
