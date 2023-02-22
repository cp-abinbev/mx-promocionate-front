import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useGeneralReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useGeneralInitialStates } = useInitialStates();
  const { initialStateFooter, initialStateHeader } = useGeneralInitialStates();

  const { useAuthTypes, useGeneralTypes } = useStrings();
  const { LOGOUT } = useAuthTypes();
  const { FOOTER, HEADER } = useGeneralTypes();

  const footer = createReducer(initialStateFooter, {
    [FOOTER](state, action) {
      return action.payload;
    },
    [LOGOUT]() {
      return initialStateFooter;
    },
  });

  const header = createReducer(initialStateHeader, {
    [HEADER](state, action) {
      return action.payload;
    },
  });

  return { footer, header };
};

export default useGeneralReducers;
