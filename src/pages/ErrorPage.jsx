import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex h-svh w-full justify-center items-center"
    >
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <Link to={"/"} className="underline">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
