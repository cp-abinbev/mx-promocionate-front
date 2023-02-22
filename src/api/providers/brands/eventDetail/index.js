import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useEventDetailProviders = () => {
  const getOptionsByEvent = ({ eventId }) => {
    const response = axios({
      method: "GET",
      url: `/getEventsType/${eventId}`,
    });
    return trackPromise(response);
  };

  return { getOptionsByEvent };
};
export default useEventDetailProviders;
