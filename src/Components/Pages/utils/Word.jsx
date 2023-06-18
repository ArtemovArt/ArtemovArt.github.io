import React from "react";

const Word = (props) => {
  return (
    <div className="d-flex flex-row align-start ml-40">
      <span
        className="lower-font"
        style={{ color: "#000000" }}
      >
        {props.word} &nbsp;
      </span>
      <span className="lower-font">-&nbsp;{props.translation}</span>
    </div>
  );
};

export default Word;
