import { useEffect } from "react";
import useApi from "../../../api";

const useHocs = () => {
  const { useActions } = useApi();
  const { dispatch, useHocsActions } = useActions();
  const {
    actGetTextScreens,
    actGetBgScreens,
    actGetAgeGate,
    actGetAnalitycs,
    actGetUiConfigurations,
    actGetDataCurrency,
  } = useHocsActions();

  useEffect(() => {
    dispatch(actGetTextScreens());
    dispatch(actGetBgScreens());
    dispatch(actGetAgeGate());
    dispatch(actGetAnalitycs());
    dispatch(actGetUiConfigurations());
    dispatch(actGetDataCurrency());
  }, []);
};

export default useHocs;
