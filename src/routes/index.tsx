import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Notfound from "../pages/Notfound";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import SearchResult from "../pages/SearchResult";
import PrivateRoute from "./privateRoutes";

const routes = createBrowserRouter([

{
  path:'/',
  element:<App/>,
  children:[
    {
      index:true,
      element:<Home/>
    },

    {
      path:'/search',
      element:<SearchResult product={undefined}/>
    },
    {
      path:'/products',
      element:<Product/>
    },
    {
      path:'/addproduct',
      element:<PrivateRoute>
        <AddProduct/>
        </PrivateRoute>
    },
    {
      path:'/updateproduct/:id',
      element:<PrivateRoute>
        <UpdateProduct/>
      </PrivateRoute>
    },
    {
      path:'/product-details/:id',
      element:<ProductDetails/>
    },
  ],
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