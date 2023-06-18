import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
//import Textbook from "../Pages/Textbook";
import { useSelector } from "react-redux";
import LoginMy from "../Pages/Login_my";
import { privateRoutes, publicRoutes } from "./Routes";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return isAuth ? (
    <div>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route
          path=""
          element={<Navigate to="/main" />}
        />
        <Route
          path="/*"
          element={<MainPage />}
        />
      </Routes>
    </div>
  ) : (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route
          path=""
          element={<Navigate to="/main" />}
        />
        <Route
          path="/*"
          element={<MainPage />}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
