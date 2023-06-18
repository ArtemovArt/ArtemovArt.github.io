import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../actions/dict";
import classes from "./Card.module.scss";

const Card = (props) => {
  const dictData = useSelector((state) => state.dict.dict);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.currentUser.id);

  function deleteHandler(e) {
    e.stopPropagation();
    const cardId = dictData.find((elem) => elem.word === props.word)._id;
    dispatch(deleteCard(cardId));
  }

  function addHandler(e, post, userId) {
    e.stopPropagation();
    dispatch(addCard({ userId, ...post }));
    console.log({ userId, ...post });
  }

  return (
    <div className={classes.card}>
      <div
        className={classes.top_image}
        style={{
          width: "100%",
          height: 200,
          backgroundImage: `url(http://localhost:5000/${props.picture})`,
          backgroundSize: "cover",
          borderRadius: "15px 15px 0 0",
        }}
      >
        {" "}
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <span className={classes.header_font}>{props.word}</span>
          <span
            className={classes.header_font}
            style={{ color: "#757575" }}
          >
            {props.translation}
          </span>
          <span className={[classes.transcription, classes.scnd_font]}>
            [{props.transcription}]
          </span>
          <span className={classes.scnd_font}>{props.explanation}</span>
        </div>
        <img
          src="/images/horiz-line-txtb.svg"
          alt="hr-line"
          style={{ width: "100%" }}
        />
        <div className={classes.translation}>
          <div className="d-flex flex-column justify-between">
            <span
              className={classes.scnd_font}
              style={{ marginBottom: 12 }}
            >
              {props.example}
            </span>
            <span
              className={classes.scnd_font}
              style={{ marginBottom: 12, color: "#757575" }}
            >
              {props.exampleTranslation}
            </span>
          </div>
          <div className={classes.buttons}>
            {!props.isAdded ? (
              <div
                className="add-btn"
                onClick={(e) => addHandler(e, props, id)}
              >
                <span className="inner-font">Добавить в словарь</span>
              </div>
            ) : (
              <div
                className="remove-btn"
                onClick={(e) => deleteHandler(e)}
              >
                <span className="inner-font">Убрать из словаря</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
