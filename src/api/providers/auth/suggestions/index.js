import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useSuggestionsProviders = () => {
  const sendSuggestions = ({ data }) => {
    const response = axios({
      method: "POST",
      url: "/suggestions/store",
      data,
    });
    return trackPromise(response);
  };

  const getTypesSuggestions = () => {
    const response = axios({
      method: "GET",
      url: "/suggestions/types",
    });
    return trackPromise(response);
  };

  return { sendSuggestions, getTypesSuggestions };
};

export default useSuggestionsProviders;
