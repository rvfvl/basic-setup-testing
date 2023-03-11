import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import PostsPage from "./pages/PostsPage/PostsPage";
import Register from "./pages/Register/Register";
import "./style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
