import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useHocsReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useHocsInitialStates } = useInitialStates();
  const {
    initialStateTextScreens,
    initialStateBgScreens,
    initialStateAgeGate,
    initialStateAnalitycs,
    initialUiConfigurations,
    initialDataCurrency,
  } = useHocsInitialStates();

  const { useHocsTypes } = useStrings();
  const {
    TEXTSCREEN,
    BGSCREEN,
    AGEGATE,
    ANALITYCS,
    UICONFIGURATIONS,
    DATACURRENCY,
  } = useHocsTypes();

  const textScreens = createReducer(initialStateTextScreens, {
    [TEXTSCREEN](state, action) {
      return action.payload;
    },
  });

  const dataCurrency = createReducer(initialDataCurrency, {
    [DATACURRENCY](state, action) {
      return action.payload;
    },
  });

  const bgScreens = createReducer(initialStateBgScreens, {
    [BGSCREEN](state, action) {
      return action.payload;
    },
  });

  const ageGate = createReducer(initialStateAgeGate, {
    [AGEGATE](state, action) {
      return action.payload;
    },
  });

  const analitycs = createReducer(initialStateAnalitycs, {
    [ANALITYCS](state, action) {
      return action.payload;
    },
  });

  const uiConfigurations = createReducer(initialUiConfigurations, {
    [UICONFIGURATIONS](state, action) {
      return action.payload;
    },
  });

  return {
    textScreens,
    bgScreens,
    ageGate,
    analitycs,
    uiConfigurations,
    dataCurrency,
  };
};

export default useHocsReducers;
