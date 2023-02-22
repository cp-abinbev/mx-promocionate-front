import useApi from "../../..";
import useStrings from "../../../../strings";

const useFooterActions = () => {
  const { useProviders } = useApi();
  const { useGeneralProviders } = useProviders();
  const { useFooterProviders } = useGeneralProviders();
  const { getFooter } = useFooterProviders();

  const { useGeneralTypes } = useStrings();
  const { FOOTER } = useGeneralTypes();

  const actGetFooter = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await getFooter();
      dispatch({ type: FOOTER, payload: res.data });
      onSuccess && onSuccess(res.data);
    } catch (error) {
      console.log("error", error);
      onError && onError(error);
    }
  };
  return {
    actGetFooter,
  };
};
export default useFooterActions;
