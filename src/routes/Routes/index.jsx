// Packages
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";

// Hooks
import useWrappers from "../../wrappers";
import useViews from "../../views";

// Routes
import PrivateRoute from "../PrivateRoute";
import ProfileRoute from "../ProfileRoute";

const Routes = () => {
  const { ScrollTop } = useWrappers();
  const { useScreens } = useViews();
  const {
    LogIn,
    Profile,
    NotFound,
    Categories,
    CategoryDetail,
    EventDetail,
    Suggestions,
  } = useScreens();

  return (
    <BrowserRouter>
      <ScrollTop>
        <Switch>
          <Route path="/" element={<LogIn />} />
          <Route path="/perfil" element={<ProfileRoute />}>
            <Route path="/perfil" element={<Profile />} />
          </Route>
          <Route path="/sugerencias" element={<PrivateRoute />}>
            <Route path="/sugerencias" element={<Suggestions />} />
          </Route>
          <Route path="/marcas" element={<PrivateRoute />}>
            <Route path="/marcas" element={<Categories />} />
          </Route>
          <Route path="/marcas/:brandId" element={<PrivateRoute />}>
            <Route path="/marcas/:brandId" element={<CategoryDetail />} />
          </Route>
          <Route path="/eventos/:eventId" element={<PrivateRoute />}>
            <Route path="/eventos/:eventId" element={<EventDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Switch>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default Routes;
