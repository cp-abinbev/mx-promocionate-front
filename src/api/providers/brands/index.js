import useCategoriesProviders from "./categories";
import useBrandDetailProviders from "./brandDetail";
import useEventDetailProviders from "./eventDetail";

const useBrandsProviders = () => {
  return {
    useCategoriesProviders,
    useBrandDetailProviders,
    useEventDetailProviders,
  };
};

export default useBrandsProviders;
