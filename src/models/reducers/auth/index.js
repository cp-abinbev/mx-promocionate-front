import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useAuthReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useAuthInitialStates } = useInitialStates();
  const { initialStateAuth } = useAuthInitialStates();

  const { useAuthTypes } = useStrings();
  const {
    LOGIN,
    UPDATE_PROFILE,
    LOGOUT,
    REMEMBER,
    ISOLD,
    DOCUMENTS,
    SUGGESTIONSCODES,
    POPUP,
    RESETSUGGESTIONSCODES,
    SUGGESTIONSTYPES,
  } = useAuthTypes();

  const auth = createReducer(initialStateAuth, {
    [LOGIN](state, action) {
      const { shop, token } = action.payload.data;
      return { ...state, ...shop, token, code: action.payload.code };
    },
    [DOCUMENTS](state, action) {
      return { ...state, documents: action.payload };
    },
    [SUGGESTIONSCODES](state, action) {
      return { ...state, suggestionsCodes: action.payload };
    },
    [SUGGESTIONSTYPES](state, action) {
      return { ...state, suggestionTypes: action.payload };
    },
    [RESETSUGGESTIONSCODES](state) {
      return { ...state, suggestionsCodes: [] };
    },
    [POPUP](state, action) {
      return { ...state, popUp: action.payload };
    },
    [UPDATE_PROFILE](state, action) {
      return { ...state, ...action.payload };
    },
    [LOGOUT]() {
      return initialStateAuth;
    },
    [REMEMBER](state, action) {
      const { remember } = action.payload;
      return { ...state, remember };
    },
    [ISOLD](state, action) {
      const { isOld } = action.payload;
      return { ...state, isOld };
    },
  });

  return { auth };
};

export default useAuthReducers;
