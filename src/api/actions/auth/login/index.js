// Hooks
import useApi from "../../..";
import useStrings from "../../../../strings";

const useLoginActions = () => {
  const { useProviders } = useApi();
  const { useAuthProviders } = useProviders();
  const { useLoginProviders } = useAuthProviders();
  const {
    login,
    loginDocumentsOptions,
    loginSuggestionsCodes,
    loginGetInfoPopUp,
  } = useLoginProviders();

  const { useAuthTypes } = useStrings();
  const {
    LOGIN,
    REMEMBER,
    ISOLD,
    DOCUMENTS,
    SUGGESTIONSCODES,
    POPUP,
    RESETSUGGESTIONSCODES,
  } = useAuthTypes();

  const actLogin =
    ({ code }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const res = await login({ code });
        dispatch({ type: LOGIN, payload: { data: res.data, code } });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };
  const actRemember = (remember) => async (dispatch) => {
    dispatch({ type: REMEMBER, payload: { remember } });
  };
  const actIsOld = (old) => async (dispatch) => {
    dispatch({ type: ISOLD, payload: { isOld: old } });
  };
  const actloginDocumentsOptions = () => async (dispatch) => {
    try {
      const res = await loginDocumentsOptions();
      dispatch({ type: DOCUMENTS, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const actGetSuggestionsCodes =
    ({ document, id }, onError) =>
    async (dispatch) => {
      try {
        const res = await loginSuggestionsCodes({ document, id });
        dispatch({ type: SUGGESTIONSCODES, payload: res.data });
      } catch (error) {
        onError && onError();
        console.log("error", error);
      }
    };

  const actResetSuggestionsCodes = () => async (dispatch) => {
    dispatch({ type: RESETSUGGESTIONSCODES });
  };

  const actGetInfoPopUp = () => async (dispatch) => {
    try {
      const res = await loginGetInfoPopUp();
      dispatch({ type: POPUP, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    actLogin,
    actRemember,
    actIsOld,
    actloginDocumentsOptions,
    actGetSuggestionsCodes,
    actGetInfoPopUp,
    actResetSuggestionsCodes,
  };
};

export default useLoginActions;
