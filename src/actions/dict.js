import axios from "axios";
import {
  addDictCard,
  deleteDictCard,
  setDictСards,
} from "../reducers/dictReducer";

export function getDictCards() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://sore-puce-panda-wig.cyclic.app/api/dictionary",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      dispatch(setDictСards(response.data));
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function addCard(post) {
  const {
    userId,
    word,
    translation,
    transcription,
    explanation,
    example,
    exampleTranslation,
    picture,
  } = post;
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://sore-puce-panda-wig.cyclic.app/api/dictionary",
        {
          userId,
          word,
          translation,
          transcription,
          explanation,
          example,
          exampleTranslation,
          picture,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      //console.log(response.data);
      dispatch(addDictCard(response.data));

      alert(response.data.message);
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function deleteCard(id) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://sore-puce-panda-wig.cyclic.app/api/dictionary/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      //console.log(response.data);
      dispatch(deleteDictCard(id));
      alert(response.data.message);
    } catch (error) {
      console.log(error.response);
    }
  };
}
