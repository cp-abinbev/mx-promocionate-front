import { useEffect } from "react";
import api from "../axios";

// Hooks
import useStrings from "../../strings";

const useInterceptor = (store) => {
  const { useAuthTypes } = useStrings();
  const { LOGOUT } = useAuthTypes();

  const handleRequestSuccess = (request) => {
    const state = store.getState();
    const { token } = state.auth;

    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }
    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    return request;
  };

  const handleRequestError = (error) => {
    console.log(`REQUEST ERROR! => ${error}`);
    return error;
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 401:
        if (error.response?.data.message) {
          store.dispatch({ type: LOGOUT });
          localStorage.clear();
          window.location.replace("/");
        }
        break;
      case 422:
        if (error.response?.data.message) {
          console.log(data.message);
        }
        break;
      case 500:
        if (error.response?.data.message) {
          console.log(data.message);
        }
        break;
      default:
        console.log(error);
    }
    throw error;
  };

  useEffect(() => {
    api.interceptors.request.use(handleRequestSuccess, handleRequestError);
    api.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
