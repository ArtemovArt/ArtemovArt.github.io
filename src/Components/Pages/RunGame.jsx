import React, { useEffect, useLayoutEffect, useState } from "react";

import Footer from "../Footer";
import Header from "../Header";
import ImageBlock from "../UI/ImageBlock";

import { useSelector } from "react-redux";
import GameOver from "./GameOver";

import { arr } from "./data/NewWords";
import data from "./data/words";

const RunGame = () => {
  const createArr = (data) => {
    const rightWords = data.map((card) => {
      return { word: card.word, translation: card.translation, right: true };
    });
    const uniqueTranslations = [...new Set(data.map((obj) => obj.translation))];
    const wrongWords = data.map((obj) => {
      const availableTranslations = uniqueTranslations.filter(
        (t) => t !== obj.translation
      );
      const randomTranslation =
        availableTranslations[
          Math.floor(Math.random() * availableTranslations.length)
        ];
      uniqueTranslations.splice(
        uniqueTranslations.indexOf(randomTranslation),
        1
      );
      return { word: obj.word, translation: randomTranslation, right: false };
    });
    const temp = rightWords.concat(wrongWords);
    return temp;
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const dataNew = useSelector((state) => state.cards.cards);
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [timer, setTimer] = useState(45);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);
  const [totalArray, setTotalArray] = useState(createArr(dataNew));

  useEffect(() => {
    //const temp = totalArray;
    const shuffledWords = shuffle(totalArray).slice(0, 20);
    //const slicedWords = temp.slice(0, 20);
    //setTotalArray(temp);
    setWords(shuffledWords);
  }, []);

  console.log(words, "aaaaaaa");
  console.log(totalArray);
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(countdown);

      setGameOver(true);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const currentWord = words[currentWordIndex];

    if (answer === words[currentWordIndex].right) {
      const points = score + 10 * multiplier;
      setScore(points);
      setCorrectWords([
        ...correctWords,
        { word: currentWord.word, translation: currentWord.translation },
      ]);

      if ((score + 1) % 3 === 0 && multiplier < 4) {
        setMultiplier((prevMultiplier) => prevMultiplier + 1);
      }
    } else {
      setMultiplier(1);
      setIncorrectWords([
        ...incorrectWords,
        { word: currentWord.word, translation: currentWord.translation },
      ]);
    }

    if (currentWordIndex === words.length - 1) {
      setGameOver(true);
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }
  };

  const startGame = () => {
    const shuffledWords = shuffle(totalArray).slice(0, 20);
    setWords(shuffledWords);
    setCurrentWordIndex(0);
    setScore(0);
    setMultiplier(1);
    setTimer(45);
    setSelectedAnswer(null);
    setGameOver(false);
    setCorrectWords([]);
    setIncorrectWords([]);
  };

  return (
    <div className="App clear">
      <Header></Header>
      {!gameOver ? (
        <div className="run-game">
          <div className="timer">
            <div className="timer-line"></div>
            <div className="timer-body">
              <div className="content">
                <div className="score">
                  <div
                    className="d-flex flex-column align-center"
                    style={{ gap: 3 }}
                  >
                    <span className="main-font">x{multiplier}</span>
                    <span className="lower-font">множитель</span>
                  </div>
                  <img
                    src="/images/score-line.svg"
                    alt="line"
                  />
                  <div
                    className="d-flex flex-column align-center"
                    style={{ gap: 3 }}
                  >
                    <span className="main-font">{score}</span>
                    <span className="lower-font">очков</span>
                  </div>
                </div>
                <div className="d-flex flex-column align-center">
                  <div
                    className="d-flex flex-row align-start"
                    style={{ gap: 10 }}
                  >
                    <ImageBlock multiplier={multiplier} />
                  </div>
                  <span className="main-font">
                    {words.length !== 0
                      ? words[currentWordIndex].word
                      : totalArray[
                          Math.floor(Math.random() * totalArray.length)
                        ].word}
                    {/* {totalArray[currentWordIndex].word} */}
                  </span>
                  <span
                    className="lower-font d-flex flex-column align-center justify-center text-center"
                    style={{
                      fontSize: "28px",
                      lineHeight: "100%",
                      color: "#2B788B",
                    }}
                  >
                    {words.length !== 0
                      ? words[currentWordIndex].translation
                      : totalArray[
                          Math.floor(Math.random() * totalArray.length)
                        ].translation}
                    {/* {totalArray[currentWordIndex].translation} */}
                  </span>
                </div>
                <div className="btns">
                  <button
                    className="wrong"
                    onClick={() => handleAnswer(false)}
                  >
                    <span
                      className="lower-font"
                      style={{ color: "#945069" }}
                    >
                      Неверно
                    </span>
                  </button>
                  <button
                    className="right"
                    onClick={() => handleAnswer(true)}
                  >
                    <span
                      className="lower-font"
                      style={{ color: "#2B788B" }}
                    >
                      Верно
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <GameOver
          score={score}
          right={correctWords}
          wrong={incorrectWords}
          replay={startGame}
        ></GameOver>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RunGame;
