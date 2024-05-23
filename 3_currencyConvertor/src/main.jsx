import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);