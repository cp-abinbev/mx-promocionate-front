import useCategoriesActions from "./categories";
import useBrandDetailActions from "./brandDetail";
import useEventDetailActions from "./eventDetail";

const useBrandsActions = () => {
  return {
    useCategoriesActions,
    useBrandDetailActions,
    useEventDetailActions,
  };
};

export default useBrandsActions;
