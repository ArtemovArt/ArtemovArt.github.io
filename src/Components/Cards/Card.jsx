import React from "react";
import classes from "./Card.module.scss";

const Card = () => {
  return (
    <div className={classes.card}>
      {/* <img
        src="/images/test-img.svg"
        alt="test"
      ></img> */}
      <div
        className={classes.top_image}
        // style={{ width: "100%", backgroundImage: "url(/images/test-img.svg)" }}
      >
        <img
          src="/images/test-img.svg"
          alt="test"
          style={{ width: 360 }}
        ></img>
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <span className={classes.header_font}>remark</span>
          <span
            className={classes.header_font}
            style={{ color: "#757575" }}
          >
            note
          </span>
          <span className={[classes.transcription, classes.scnd_font]}>
            [rimɑ́ːrk]
          </span>
        </div>
        <div className={classes.translation}>
          <span
            className={classes.scnd_font}
            style={{ marginBottom: 12 }}
          >
            To remark is to say something. <br></br> - Remarquer, c'est dire
            quelque chose
          </span>
          <img
            src="/images/horiz-line-txtb.svg"
            alt="hr-line"
            style={{ width: 300 }}
          />
          <span
            className={classes.scnd_font}
            style={{ marginBottom: 12, color: "#757575" }}
          >
            The teacher remarked on how quickly <br></br> the students were
            learning.
          </span>
        </div>
        <div className={classes.buttons}>
          <img
            src="/images/add.svg"
            alt="add"
          />
          <img
            src="/images/remove.svg"
            alt="remove"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
