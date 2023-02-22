import useFooterActions from "./footer";
import useHeaderActions from "./header";

const useGeneralActions = () => {
  return {
    useFooterActions,
    useHeaderActions,
  };
};

export default useGeneralActions;
