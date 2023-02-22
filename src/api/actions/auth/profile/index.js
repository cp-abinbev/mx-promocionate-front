// Hooks
import useApi from "../../..";
import useStrings from "../../../../strings";

const useProfileActions = () => {
  const { useProviders } = useApi();
  const { useAuthProviders } = useProviders();
  const { useProfileProviders } = useAuthProviders();
  const { updateProfile } = useProfileProviders();

  const { useAuthTypes } = useStrings();
  const { UPDATE_PROFILE, LOGOUT } = useAuthTypes();

  const actUpdateProfile =
    ({ data }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const res = await updateProfile({ data });
        dispatch({ type: UPDATE_PROFILE, payload: data });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actLogout = () => (dispatch) => dispatch({ type: LOGOUT });

  return { actUpdateProfile, actLogout };
};

export default useProfileActions;
