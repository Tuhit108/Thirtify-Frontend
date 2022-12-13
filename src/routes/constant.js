import { path } from '../constant/path';
import Home from '../pages/Home/HomePage';
import Login from '../pages/login/login';
import Register from '../pages/register/register';

export const PageRoutes = [
  {
    path: path.HOME,
    element: Home,
  },
  {
    path: path.LOGIN,
    element: Login,
  },
  {
    path: path.REGISTER,
    element: Register,
  },
];
