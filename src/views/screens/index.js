import LogIn from "./Login";
import NotFound from "./NotFound";
import useUserScreens from "./User";

const useScreens = () => {
  const { Profile, Categories, CategoryDetail, EventDetail, Suggestions } =
    useUserScreens();
  return {
    LogIn,
    Profile,
    NotFound,
    Categories,
    CategoryDetail,
    EventDetail,
    Suggestions,
  };
};

export default useScreens;
