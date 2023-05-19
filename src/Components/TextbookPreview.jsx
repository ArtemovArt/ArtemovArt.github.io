import React from "react";
import Slogan from "./UI/Slogan";

const TextbookPreview = () => {
  return (
    <div className="third_container">
      <div
        className="d-flex flex-row"
        style={{ marginLeft: 370 }}
      >
        <div
          className="slogan"
          style={{ gap: "34px" }}
        >
          <Slogan
            main={"Increase your vocabulary"}
            bottom={"Traditional and new effective approaches to word study"}
          />
        </div>
        <img
          style={{ marginLeft: 90 }}
          src="images/study-girl.svg"
          alt="girl"
        />
      </div>
    </div>
  );
};

export default TextbookPreview;
