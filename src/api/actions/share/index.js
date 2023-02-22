import useApi from "../../";

const useShareActions = () => {
  const { useProviders } = useApi();
  const { useShareProviders } = useProviders();
  const { getImagePreview } = useShareProviders();

  const actGetImgPreview =
    ({ previewId, onSuccess, onError }) =>
    async () => {
      try {
        const response = await getImagePreview({ previewId });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        console.log("error", e);
        onError && onError(e);
      }
    };
  return { actGetImgPreview };
};

export default useShareActions;
