import useApi from "../..";
import useStrings from "../../../strings";

const useHocsActions = () => {
  const { useProviders } = useApi();
  const { useHocsProviders } = useProviders();
  const {
    getTextScreens,
    getBgScreens,
    getAgeGate,
    getAnalitycs,
    getUiConfigurations,
    getDataCurrency,
  } = useHocsProviders();

  const { useHocsTypes } = useStrings();
  const {
    TEXTSCREEN,
    BGSCREEN,
    AGEGATE,
    ANALITYCS,
    UICONFIGURATIONS,
    DATACURRENCY,
  } = useHocsTypes();

  const actGetTextScreens = () => async (dispatch) => {
    try {
      const res = await getTextScreens();
      dispatch({ type: TEXTSCREEN, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetDataCurrency = () => async (dispatch) => {
    try {
      const res = await getDataCurrency();
      dispatch({ type: DATACURRENCY, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetBgScreens = () => async (dispatch) => {
    try {
      const res = await getBgScreens();
      dispatch({ type: BGSCREEN, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetAgeGate = () => async (dispatch) => {
    try {
      const res = await getAgeGate();
      dispatch({ type: AGEGATE, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetAnalitycs = () => async (dispatch) => {
    try {
      const res = await getAnalitycs();
      dispatch({ type: ANALITYCS, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetUiConfigurations = () => async (dispatch) => {
    try {
      const res = await getUiConfigurations();
      dispatch({ type: UICONFIGURATIONS, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    actGetTextScreens,
    actGetBgScreens,
    actGetAgeGate,
    actGetAnalitycs,
    actGetUiConfigurations,
    actGetDataCurrency,
  };
};

export default useHocsActions;
