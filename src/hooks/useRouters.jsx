import React from "react";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

const useRouters = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-and-conditions", element: <TermsAndConditions /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return router;
};

export default useRouters;
