// Hooks
import useApi from "../../..";
import useStrings from "../../../../strings";

const useSuggestionsActions = () => {
  const { useProviders } = useApi();
  const { useAuthProviders } = useProviders();
  const { useSuggestionsProviders } = useAuthProviders();
  const { sendSuggestions, getTypesSuggestions } = useSuggestionsProviders();

  const { useAuthTypes } = useStrings();
  const { SUGGESTIONSBRANDS, SUGGESTIONSTYPES } = useAuthTypes();

  const actSendSuggestions =
    ({ data }, onSuccess) =>
    async (dispatch) => {
      try {
        const res = await sendSuggestions({ data });
        dispatch({ type: SUGGESTIONSBRANDS, payload: res });
        onSuccess && onSuccess();
      } catch (error) {
        console.log("error", error);
      }
    };

  const actGetTypesSuggestions = (onSuccess) => async (dispatch) => {
    try {
      const res = await getTypesSuggestions();
      dispatch({ type: SUGGESTIONSTYPES, payload: res.data });
      onSuccess && onSuccess();
    } catch (error) {
      console.log("error", error);
    }
  };

  return { actSendSuggestions, actGetTypesSuggestions };
};

export default useSuggestionsActions;
