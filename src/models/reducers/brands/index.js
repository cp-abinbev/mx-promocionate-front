import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useBrandsReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useBrandsInitialStates } = useInitialStates();
  const { initialStateImagePreview, initialStateFilters } =
    useBrandsInitialStates();

  const { useAuthTypes, useBrandsTypes } = useStrings();
  const { LOGOUT } = useAuthTypes();
  const { FILTERS, CREATE_IMAGE, SAVE_FILTERS, RESET_FILTERS } =
    useBrandsTypes();

  const imagePreview = createReducer(initialStateImagePreview, {
    [CREATE_IMAGE](state, action) {
      return { ...state, ...action.payload };
    },
    [LOGOUT]() {
      return initialStateImagePreview;
    },
  });

  const filters = createReducer(initialStateFilters, {
    [FILTERS](state, action) {
      return {
        ...state,
        all: action.payload,
      };
    },
    [SAVE_FILTERS](state, action) {
      return {
        ...state,
        selectedFilters: { ...state.selectedFilters, ...action.payload },
      };
    },
    [RESET_FILTERS](state) {
      return { ...state, selectedFilters: initialStateFilters.selectedFilters };
    },
    [LOGOUT]() {
      return initialStateFilters;
    },
  });

  return { imagePreview, filters };
};

export default useBrandsReducers;
