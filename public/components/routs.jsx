import React, { Children } from "react";
import { Home } from "./comp/Home";
import { Contact } from "./comp/Contact";
import { About } from "./comp/About";
import { Routes } from "react-router-dom";
import { Layout } from "./Layout";

const routs = [
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "*", element: <div>Page Not Found</div> },
];

export default routs;
