// Hooks
import useApi from "../../..";

const useEventDetailActions = () => {
  const { useProviders } = useApi();
  const { useBrandsProviders } = useProviders();
  const { useEventDetailProviders } = useBrandsProviders();
  const { getOptionsByEvent } = useEventDetailProviders();

  const actGetOptionsByEvent =
    ({ eventId }, onSuccess, onError) =>
    async () => {
      try {
        const res = await getOptionsByEvent({ eventId });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  return {
    actGetOptionsByEvent,
  };
};

export default useEventDetailActions;
