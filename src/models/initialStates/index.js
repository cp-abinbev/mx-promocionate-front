import useAuthInitialStates from "./auth";
import useBrandsInitialStates from "./brands";
import useGeneralInitialStates from "./general";
import useHocsInitialStates from "./hocs";

const useInitialStates = () => {
  return {
    useAuthInitialStates,
    useBrandsInitialStates,
    useGeneralInitialStates,
    useHocsInitialStates,
  };
};

export default useInitialStates;
