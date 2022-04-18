import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../sheard/Loading/Loading";

const RequarAuth = ({ children }) => {
  const location = useLocation();
  const [user, looding] = useAuthState(auth);
  if (looding) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequarAuth;
