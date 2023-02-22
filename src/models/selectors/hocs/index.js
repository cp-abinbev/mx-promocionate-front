import useHelpers from "../../../helpers";

const useHocsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const textScreenSelector = createSelector(
    (state) => state.textScreens,
    (textScreens) => textScreens
  );

  const dataCurrencySelector = createSelector(
    (state) => state.dataCurrency,
    (dataCurrency) => dataCurrency
  );

  const bgScreenSelector = createSelector(
    (state) => state.bgScreens,
    (bgScreens) => bgScreens
  );

  const ageGateSelector = createSelector(
    (state) => state.ageGate,
    (ageGate) => ageGate
  );

  const analitycsSelector = createSelector(
    (state) => state.analitycs,
    (analitycs) => analitycs
  );

  const uiConfigurationsSelector = createSelector(
    (state) => state.uiConfigurations,
    (uiConfigurations) => uiConfigurations
  );

  return {
    textScreenSelector,
    bgScreenSelector,
    ageGateSelector,
    analitycsSelector,
    uiConfigurationsSelector,
    dataCurrencySelector,
  };
};

export default useHocsSelectors;
