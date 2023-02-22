import useToggleModal from "./toggleModal";
import useDebounce from "./debounce";
import useDataLayers from "./datalayers";
import useIsAuth from "./isAuth";
import useHocs from "./hocs";

const useGeneralHooks = () => {
  return {
    useToggleModal,
    useDebounce,
    useDataLayers,
    useIsAuth,
    useHocs,
  };
};

export default useGeneralHooks;
