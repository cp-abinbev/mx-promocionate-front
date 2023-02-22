import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useFooterProviders = () => {
  const getFooter = () => {
    const response = axios({
      method: "GET",
      url: "/getFooter",
    });
    return trackPromise(response);
  };

  return { getFooter };
};

export default useFooterProviders;
