import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="error">404</h1>
      <h2>Oops! Page not found</h2>
      <p>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;
