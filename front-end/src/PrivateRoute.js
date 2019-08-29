import React from "react";
import { Route } from "react-router-dom";
import App from "./App";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("key") ? <Component {...props} /> : <App />
    }
  />
);

export default ProtectedRoute;
