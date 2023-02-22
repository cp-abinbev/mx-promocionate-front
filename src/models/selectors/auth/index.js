// Hooks
import useHelpers from "../../../helpers";

const useAuthSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const authSelector = createSelector(
    (state) => state.auth,
    (auth) => auth
  );

  return { authSelector };
};

export default useAuthSelectors;
