//Packages
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Hooks
import useControllers from "../../controllers";

const ProfileRoute = () => {
  const { useGeneralHooks } = useControllers();
  const { useIsAuth } = useGeneralHooks();
  const { isUser } = useIsAuth();

  return isUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProfileRoute;
