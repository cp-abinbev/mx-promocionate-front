import Routes from "./Routes";
import PrivateRoute from "./PrivateRoute";
import ProfileRoute from "./ProfileRoute";

const useRoutes = () => {
  return {
    PrivateRoute,
    ProfileRoute,
    Routes,
  };
};

export default useRoutes;
