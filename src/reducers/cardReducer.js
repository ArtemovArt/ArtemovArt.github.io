const SET_CARDS = "SET_CARDS";

const defaultState = {
  cards: [],
};

export default function cardReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
}

export const setСards = (cards) => ({ type: SET_CARDS, payload: cards });
