import useAuthControllers from "./auth";
import useBrandsControllers from "./brands";

const useScreenHooks = () => {
  return { useAuthControllers, useBrandsControllers };
};

export default useScreenHooks;
