import { path } from '../constant/path';
import Home from '../pages/Home/HomePage';
import SearchPage from "../pages/Search/SearchPage";

export const PageRoutes = [
  {
    path: path.HOME,
    element: Home,
  },
  {
    path: path.SEARCH,
    element: SearchPage,
  },

];
