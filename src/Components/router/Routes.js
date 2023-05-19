import Dictionary from "../Pages/Dictionary";
import GameOver from "../Pages/GameOver";
import MainPage from "../Pages/MainPage";
import RunGame from "../Pages/RunGame";
import SprintGame from "../Pages/SprintGame";
import Textbook from "../Pages/Textbook";

export const privateRoutes = [
  { path: "/main", element: MainPage },
  { path: "/sprint", element: SprintGame },
  { path: "/game", element: RunGame },
  { path: "/end", element: GameOver },
  { path: "/textbook", element: Textbook },
  { path: "/dictionary", element: Dictionary },
];

// export const publicRoutes = [
//     {path: '/login', element:Login}
// ]
