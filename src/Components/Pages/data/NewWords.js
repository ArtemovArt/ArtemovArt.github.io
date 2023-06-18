// import { useSelector } from "react-redux";

// const createArr = (data) => {
//   const rightWords = data.map((card) => {
//     return { word: card.word, translation: card.translation, right: true };
//   });
//   const uniqueTranslations = [...new Set(data.map((obj) => obj.translation))];
//   const wrongWords = data.map((obj) => {
//     const availableTranslations = uniqueTranslations.filter(
//       (t) => t !== obj.translation
//     );
//     const randomTranslation =
//       availableTranslations[
//         Math.floor(Math.random() * availableTranslations.length)
//       ];
//     uniqueTranslations.splice(uniqueTranslations.indexOf(randomTranslation), 1);
//     return { word: obj.word, translation: randomTranslation, right: false };
//   });
//   const temp = rightWords.concat(wrongWords);
//   return temp;
// };

// const shuffle = (array) => {
//   let currentIndex = array.length;
//   let temporaryValue, randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// };

// const dataNew = useSelector((state) => state.cards.cards);

// export const arr = shuffle(createArr(dataNew));
