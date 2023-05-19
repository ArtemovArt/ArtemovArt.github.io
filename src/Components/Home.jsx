import React from "react";

const Home = () => {
  return (
    <div>
      <div className="first-container">
        <div className="content mb-30">
          <div className="about">
            <div className="left-text">
              <div className="text-content">
                <span className="name">E-COURSE PLATFORM</span>
                <div className="slogan">
                  <span className="slogan-font">
                    Learning and teaching online, made easy.
                  </span>
                  <span className="bottom-slogan-font">
                    Practice your English and learn new things with the
                    platform.
                  </span>
                </div>
                <div className="about-button">
                  <img
                    src="/images/about.svg"
                    alt="about"
                    className="about-button"
                  />
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
                    <span className="lower-text">Popular words</span>
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
                    <span className="lower-text">Mini-games</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ width: "49%", height: "70%" }}
            className="mt-20 "
            src="/images/boy-with-flower.svg"
            alt="boy"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
