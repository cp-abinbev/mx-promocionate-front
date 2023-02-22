import useCategories from "./categories";
import useBrandDetail from "./brandDetail";
import useEventDetail from "./eventDetail";
import usePreview from "./preview";
import useFilters from "./filters";

const useBrandsControllers = () => {
  return {
    useCategories,
    useBrandDetail,
    usePreview,
    useFilters,
    useEventDetail,
  };
};

export default useBrandsControllers;
