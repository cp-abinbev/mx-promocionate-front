import useApi from "../../..";
import useStrings from "../../../../strings";

const useHeaderActions = () => {
  const { useProviders } = useApi();
  const { useGeneralProviders } = useProviders();
  const { useHeaderProviders } = useGeneralProviders();
  const { getHeader } = useHeaderProviders();

  const { useGeneralTypes } = useStrings();
  const { HEADER } = useGeneralTypes();

  const actGetHeader = () => async (dispatch) => {
    try {
      const res = await getHeader();
      dispatch({ type: HEADER, payload: res.data });
    } catch (error) {
      console.log("error", error);
    }
  };
  return {
    actGetHeader,
  };
};

export default useHeaderActions;
