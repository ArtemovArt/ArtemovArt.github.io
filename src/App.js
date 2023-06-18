import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/router/AppRouter";
import { getCards } from "./actions/cards";
import { getDictCards } from "./actions/dict";
import { auth } from "./actions/user";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  //const dictData = useSelector((state) => state.dict.dict);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(auth());
    }
    dispatch(getCards());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getDictCards());
    }
  }, [token]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
