import { path } from '../constant/path';
import Home from '../pages/auth/home/home';
import Login from '../pages/auth/login/login';
import Register from '../pages/auth/register/register';
import ProductDetail from '../pages/productDetail/productDetail'
import Profile from '../pages/auth/profile/profile';
import ProfileEdit from '../pages/auth/profileEdit/profileEdit';
import ProfileEditPassword from '../pages/auth/profileEditPassword/profileEditPassword';
import CreatePost from '../pages/auth/createPost/createPost';

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
  {
    path: path.PRODUCTDETAIL,
    element: ProductDetail,
  },
  {
    path: path.PROFILE,
    element: Profile,
  },
  {
    path: path.EDIT,
    element: ProfileEdit,
  },
  {
    path: path.PASSWORD,
    element: ProfileEditPassword,
  },
  {
    path: path.CREATEPOST,
    element: CreatePost,
  },
];