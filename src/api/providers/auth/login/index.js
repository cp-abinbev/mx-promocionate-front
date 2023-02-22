import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useLoginProviders = () => {
  const login = ({ code }) => {
    const response = axios({
      method: "POST",
      url: "/shop/login",
      data: { code },
    });
    return trackPromise(response);
  };

  const loginDocumentsOptions = () => {
    const response = axios({
      method: "GET",
      url: "/getDocumentTypes",
    });
    return trackPromise(response);
  };

  const loginSuggestionsCodes = ({ document, id }) => {
    const response = axios({
      method: "POST",
      url: "/getBeesCodes",
      data: { document, document_type_id: id },
    });
    return trackPromise(response);
  };

  const loginGetInfoPopUp = () => {
    const response = axios({
      method: "GET",
      url: "/getInfoData",
    });
    return trackPromise(response);
  };

  return {
    login,
    loginDocumentsOptions,
    loginSuggestionsCodes,
    loginGetInfoPopUp,
  };
};

export default useLoginProviders;
