import React from "react";
import Slogan from "./UI/Slogan";

const TextbookPreview = () => {
  return (
    <div className="third_container">
      <div className="second-content">
        <div
          className="slogan"
          style={{ gap: "34px" }}
        >
          <Slogan
            main={"Увеличьте свой словарный запас"}
            bottom={
              "Привычные и новые эффективные подходы к изучению и запоминанию слов"
            }
          />
        </div>
        <img
          className="pict"
          src="images/study-girl.svg"
          alt="girl"
        />
      </div>
    </div>
  );
};

export default TextbookPreview;
