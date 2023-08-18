//pages

import HomePage from "./routes/HomePage"
import Products from "./routes/Products";
import PersonalInfoPage from "./routes/PersonalInfoPage";
import MyAddress from "./routes/MyAddress";
import NewAddress from "./routes/NewAddress";
import MyOrders from "./routes/MyOrders";
import SignIn from "./routes/SignIn";
import CreateAccount from "./routes/CreateAccount";

//admin pages
import Statistics from "./routes/Admin/Statistics";
import Orders from "./routes/Admin/Orders";
import AdminProducts from "./routes/Admin/AdminProducts";
import Users from "./routes/Admin/Users";
import Complaints from "./routes/Admin/Complaints";


import {
    createBrowserRouter,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/products",
      element: <Products  />,
    },
    {
      path: "/profile/personal-info",
      element: <PersonalInfoPage/>,
    },
    {
      path: "/profile/address",
      element: <MyAddress/>,
    },  
    {
      path: "/profile/address/new-address",
      element: <NewAddress/>,
    },  
    {
      path: "/profile/my-orders",
      element: <MyOrders/>
    },
    {
      path: "/profile/my-payments",
      element: <div>payments</div>,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
    //admin
    {
      path: "/admin/statistics",
      element: <Statistics/>,
    },
    {
      path: "/admin/orders",
      element: <Orders/>,
    },{
      path: "/admin/products",
      element: <AdminProducts/>,
    },
    {
      path: "/admin/users",
      element: <Users/>,
    },
    {
      path: "/admin/complaints",
      element: <Complaints/>,
    }
  ]);

export default router 

