import useCreateReducer from './createReducer';
import useCreateSelector from './createSelector';
import useQuickFunctions from './quickFunctions';

const useHelpers = () => {
  return {
    useCreateSelector,
    useCreateReducer,
    useQuickFunctions,
  };
};

export default useHelpers;
