// Hooks
import useApi from "../../..";
import useStrings from "../../../../strings";

const useCategoriesActions = () => {
  const { useProviders } = useApi();
  const { useBrandsProviders } = useProviders();
  const { useCategoriesProviders } = useBrandsProviders();
  const { getCategories, getFilters, getEvents } = useCategoriesProviders();

  const { useBrandsTypes } = useStrings();
  const { FILTERS, SAVE_FILTERS, RESET_FILTERS } = useBrandsTypes();

  const actGetCategories =
    ({ data } = {}, onSuccess, onError) =>
    async () => {
      try {
        const res = await getCategories({ data });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actGetEvents =
    ({ data }, onSuccess, onError) =>
    async () => {
      try {
        const res = await getEvents({ data });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actGetFilters = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await getFilters();
      dispatch({ type: FILTERS, payload: res.data });
      onSuccess && onSuccess(res.data);
    } catch (error) {
      console.log("error", error);
      onError && onError(error);
    }
  };

  const actSaveFilters =
    ({ data }) =>
    (dispatch) => {
      dispatch({ type: SAVE_FILTERS, payload: data });
    };

  const actResetFilters = () => (dispatch) => {
    dispatch({ type: RESET_FILTERS });
  };

  return {
    actGetCategories,
    actGetFilters,
    actSaveFilters,
    actResetFilters,
    actGetEvents,
  };
};

export default useCategoriesActions;
