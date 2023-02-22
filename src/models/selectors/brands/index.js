// Hooks
import useHelpers from "../../../helpers";

const useBrandsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const previewSelector = createSelector(
    (state) => state.imagePreview,
    (preview) => preview
  );

  const filtersSelector = createSelector(
    (state) => state.filters,
    (filters) => filters
  );

  return { previewSelector, filtersSelector };
};

export default useBrandsSelectors;
