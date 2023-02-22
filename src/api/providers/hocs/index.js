import axios from "../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useHocsProviders = () => {
  const getTextScreens = () => {
    const response = axios({
      method: "GET",
      url: "/getPageTexts",
    });
    return trackPromise(response);
  };

  const getDataCurrency = () => {
    const response = axios({
      method: "GET",
      url: "/getRegionalConfigurations",
    });
    return trackPromise(response);
  };

  const getBgScreens = () => {
    const response = axios({
      method: "GET",
      url: "/getPageBackground",
    });
    return trackPromise(response);
  };

  const getAgeGate = () => {
    const response = axios({
      method: "GET",
      url: "/getAgeGate",
    });
    return trackPromise(response);
  };

  const getAnalitycs = () => {
    const response = axios({
      method: "GET",
      url: "/getAnalytics",
    });
    return trackPromise(response);
  };

  const getUiConfigurations = () => {
    const response = axios({
      method: "GET",
      url: "/getUiConfigurations",
    });
    return trackPromise(response);
  };

  return {
    getTextScreens,
    getBgScreens,
    getAgeGate,
    getAnalitycs,
    getUiConfigurations,
    getDataCurrency,
  };
};

export default useHocsProviders;
