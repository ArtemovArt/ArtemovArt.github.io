const SET_DICT = "SET_DICT";
const ADD_DICT = "ADD_DICT";
const DEL_DICT = "DEL_DICT";

const defaultState = {
  dict: [],
};

export default function dictReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DICT:
      return { ...state, dict: action.payload };
    case ADD_DICT:
      return { ...state, dict: [...state.dict.concat(action.payload)] };
    case DEL_DICT:
      return {
        ...state,
        dict: [...state.dict.filter((card) => card._id !== action.payload)],
      };
    default:
      return state;
  }
}

export const setDictСards = (dict) => ({ type: SET_DICT, payload: dict });
export const addDictCard = (elem) => ({ type: ADD_DICT, payload: elem });
export const deleteDictCard = (cardId) => ({ type: DEL_DICT, payload: cardId });
