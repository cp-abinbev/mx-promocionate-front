//Hooks
import useAuthTypes from "./auth";
import useFormsTypes from "./forms";
import useBrandsTypes from "./brands";
import useEventsTypes from "./events";
import useGeneralTypes from "./general";
import useHocsTypes from "./hocs";

const useStrings = () => {
  return {
    useAuthTypes,
    useFormsTypes,
    useBrandsTypes,
    useGeneralTypes,
    useHocsTypes,
    useEventsTypes,
  };
};

export default useStrings;
