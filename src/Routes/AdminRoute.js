import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Utilities/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
