import { useDispatch } from "react-redux";
import useAuthActions from "./auth";
import useBrandsActions from "./brands";
import useGeneralActions from "./general";
import useShareActions from "./share";
import useHocsActions from "./hocs";

const useActions = () => {
  const dispatch = useDispatch();

  return {
    dispatch,
    useAuthActions,
    useBrandsActions,
    useGeneralActions,
    useShareActions,
    useHocsActions,
  };
};

export default useActions;
