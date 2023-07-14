import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Notfound from "../pages/Notfound";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const routes = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/products',
    element:<Product/>
  },
  {
    path:'/product-details/:id',
    element:<ProductDetails/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'*',
    element:<Notfound/>
  },
])

export default routes