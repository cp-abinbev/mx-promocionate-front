import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useHeaderProviders = () => {
  const getHeader = () => {
    const response = axios({
      method: "GET",
      url: "/getHeader",
    });
    return trackPromise(response);
  };

  return { getHeader };
};

export default useHeaderProviders;
