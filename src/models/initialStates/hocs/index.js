const useHocsInitialStates = () => {
  const initialStateTextScreens = [];
  const initialStateBgScreens = [];
  const initialStateAgeGate = {};
  const initialStateAnalitycs = [];
  const initialUiConfigurations = [];
  const initialDataCurrency = [];

  return {
    initialStateTextScreens,
    initialStateBgScreens,
    initialStateAgeGate,
    initialStateAnalitycs,
    initialUiConfigurations,
    initialDataCurrency,
  };
};

export default useHocsInitialStates;
