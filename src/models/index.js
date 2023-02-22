import useInitialStates from "./initialStates";
import useReducers from "./reducers";
import useSelectors from "./selectors";

const useModels = () => {
  return {
    useReducers,
    useInitialStates,
    useSelectors,
  };
};

export default useModels;
