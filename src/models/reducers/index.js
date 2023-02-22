import { combineReducers } from "redux";
import useAuthReducers from "./auth";
import useBrandsReducers from "./brands";
import useGeneralReducers from "./general";
import useHocsReducers from "./hocs";

const useReducers = () => {
  const { auth } = useAuthReducers();
  const { imagePreview, filters } = useBrandsReducers();
  const { footer, header } = useGeneralReducers();
  const {
    textScreens,
    bgScreens,
    ageGate,
    analitycs,
    uiConfigurations,
    dataCurrency,
  } = useHocsReducers();

  return combineReducers({
    auth,
    filters,
    imagePreview,
    footer,
    header,
    textScreens,
    bgScreens,
    ageGate,
    analitycs,
    uiConfigurations,
    dataCurrency,
  });
};

export default useReducers;
