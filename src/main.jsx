import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'

import { RouterProvider } from "react-router-dom";

import "./index.css";
import useRouters from "./hooks/useRouters";

const RootComponent = () => {
  const router = useRouters();
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);
