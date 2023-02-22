import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

const useCreateSelector = () => {
  const createSelector = createSelectorCreator(defaultMemoize, isEqual);
  return {
    createSelector,
  };
};

export default useCreateSelector;
