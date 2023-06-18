import axios from "axios";
import { setСards } from "../reducers/cardReducer";

export function getCards() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://sore-puce-panda-wig.cyclic.app/api/cards"
      );
      //console.log(response.data);
      dispatch(setСards(response.data));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
