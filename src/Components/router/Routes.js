import Dictionary from "../Pages/Dictionary";
import GameOver from "../Pages/GameOver";
import Login from "../Pages/Login";
import LoginMy from "../Pages/Login_my";
import MainPage from "../Pages/MainPage";
import Registration from "../Pages/Registration";

import RunGame from "../Pages/RunGame";

import SprintGame from "../Pages/SprintGame";
import Textbook from "../Pages/Textbook";
import Special from "../Special";

export const privateRoutes = [
  { path: "/sprint", element: SprintGame },
  { path: "/game", element: RunGame },
  { path: "/end", element: GameOver },
  { path: "/textbook", element: Textbook },
  { path: "/dictionary", element: Dictionary },
];

export const publicRoutes = [
  { path: "/main", element: MainPage },
  { path: "/registration", element: Registration },
  { path: "/login", element: Login },
];
