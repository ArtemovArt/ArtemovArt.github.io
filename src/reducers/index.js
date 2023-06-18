import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cardReducer from "./cardReducer";
import dictReducer from "./dictReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardReducer,
    dict: dictReducer,
  },
});
