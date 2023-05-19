import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
//import Textbook from "../Pages/Textbook";
import { privateRoutes } from "./Routes";

const AppRouter = () => {
  return (
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
          element={<Navigate to="/MainPage" />}
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
