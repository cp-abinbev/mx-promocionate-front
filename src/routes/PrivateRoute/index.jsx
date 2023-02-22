//Packages
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Hooks
import useControllers from "../../controllers";

const PrivateRoute = () => {
  const { useGeneralHooks } = useControllers();
  const { useIsAuth } = useGeneralHooks();
  const { isAuth } = useIsAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
