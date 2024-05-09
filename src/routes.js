import { MAIN_ROUTE } from "./utils/consts";
import main from "./components/Pages/MainPage";
import second from "./components/Pages/SecondPage";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: main,
  },
  {
    path: MAIN_ROUTE + "/:id",
    Component: second,
  },
];
