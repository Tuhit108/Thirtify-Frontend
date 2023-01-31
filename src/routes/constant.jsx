import { path } from '../constant/path';
import Home from '../pages/Home/HomePage';
import Login from '../pages/Auth/Login/LoginPage';
import Register from '../pages/Auth/Register/RegisterPage';
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import ProfileView from '../pages/ProfileView/ProfileView';
import Profile from '../pages/Profile/ProfilePage';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import ProfileEditPassword from '../pages/ProfileEditPassword/ProfileEditPassword';
import CreatePost from '../pages/CreatePost/CreatePost';
import SearchPage from "../pages/Search/SearchPage";
import OrderPage from "../pages/Order/OrderPage";
import createProduct from "../pages/Product/CreateProduct";

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
    path: path.PROFILEVIEW,
    element: ProfileView,
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
    path: path.SEARCH,
    element: SearchPage,
  },
  {
    path: path.PASSWORD,
    element: ProfileEditPassword,
  },
  {
    path: path.CREATEPOST,
    element: createProduct,
  },
  {
    path: path.ORDER,
    element: OrderPage,
  },
];
