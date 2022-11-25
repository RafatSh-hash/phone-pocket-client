import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Main/AdminLayout";
import Main from "../Main/Main";
import SellerLayout from "../Main/SellerLayout";
import AllSellers from "../Pages/AdminRoute/AllSellers/AllSellers";
import AllUsers from "../Pages/AdminRoute/AllUsers/AllUsers";
import Blog from "../Pages/Blog/Blog";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Registration from "../Pages/Registration/Registration";
import AddProduct from "../Pages/SellerRoute/AddProduct/AddProduct";
import MyProducts from "../Pages/SellerRoute/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:1000/allproducts"),
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:1000/category/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/seller",
    element: (
      <SellerRoute>
        <SellerLayout></SellerLayout>
      </SellerRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/seller",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/seller/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/seller/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/admin",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/admin/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/admin/allsellers",
        element: <AllSellers></AllSellers>,
      },
    ],
  },
]);
