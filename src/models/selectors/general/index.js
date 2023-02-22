// Hooks
import useHelpers from "../../../helpers";

const useGeneralSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const footerSelector = createSelector(
    (state) => state.footer,
    (footer) => footer
  );

  const headerSelector = createSelector(
    (state) => state.header,
    (header) => header
  );

  return { footerSelector, headerSelector };
};

export default useGeneralSelectors;
