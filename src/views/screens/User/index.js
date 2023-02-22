import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Categories from "./Categories";
import CategoryDetail from "./CategoryDetail";
import EventDetail from "./EventDetail";

const useUserScreens = () => {
  return {
    Profile,
    Categories,
    CategoryDetail,
    EventDetail,
    Suggestions,
  };
};

export default useUserScreens;
