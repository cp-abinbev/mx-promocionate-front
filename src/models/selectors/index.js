import { useSelector } from "react-redux";
import useBrandsSelectors from "./brands";
import useAuthSelectors from "./auth";
import useGeneralSelectors from "./general";
import useHocsSelectors from "./hocs";

const useSelectors = () => {
  return {
    useSelector,
    useAuthSelectors,
    useBrandsSelectors,
    useGeneralSelectors,
    useHocsSelectors,
  };
};

export default useSelectors;
