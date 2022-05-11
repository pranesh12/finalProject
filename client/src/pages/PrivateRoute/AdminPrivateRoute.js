import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";
const AdminPrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state.userReducer.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.email && state.isAdmin === true
          ? children
          : (window.location = "/auth")
      }
    />
  );
};

export default AdminPrivateRoute;
