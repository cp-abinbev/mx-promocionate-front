// Hooks
import useApi from "../../..";
import useStrings from "../../../../strings";

const useBrandDetailActions = () => {
  const { useProviders } = useApi();
  const { useBrandsProviders } = useProviders();
  const { useBrandDetailProviders } = useBrandsProviders();
  const {
    getOccasionByBrand,
    getPostsByOccasionAndSku,
    createImage,
    getSkusByOccasion,
  } = useBrandDetailProviders();

  const { useBrandsTypes } = useStrings();
  const { CREATE_IMAGE } = useBrandsTypes();

  const actGetOccasionByBrand =
    ({ brandId }, onSuccess, onError) =>
    async () => {
      try {
        const res = await getOccasionByBrand({ brandId });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actGetSkusByOccasion =
    ({ brandId, occasionId, shop_id }, onSuccess, onError) =>
    async () => {
      try {
        const res = await getSkusByOccasion({ brandId, occasionId, shop_id });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actGetPostsByOccasionAndSku =
    ({ occasionId, skuId, eventId, comboId }, onSuccess, onError) =>
    async () => {
      try {
        const res = await getPostsByOccasionAndSku({
          occasionId,
          skuId,
          eventId,
          comboId,
        });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  const actCreateImage =
    (
      {
        occasionId,
        skuId,
        price,
        bottle_price,
        postId,
        combo,
        comboId,
        event_date,
        validity_start,
        validity_end,
        event_type_id,
        occasion_sku_id,
        preview,
      },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const res = await createImage({
          occasionId,
          skuId,
          price,
          postId,
          combo,
          event_date,
          bottle_price,
          validity_start,
          validity_end,
          event_type_id,
          comboId,
          occasion_sku_id,
          preview,
        });
        dispatch({ type: CREATE_IMAGE, payload: res.data });
        onSuccess && onSuccess(res.data);
      } catch (error) {
        console.log("error", error);
        onError && onError(error);
      }
    };

  return {
    actGetOccasionByBrand,
    actGetPostsByOccasionAndSku,
    actCreateImage,
    actGetSkusByOccasion,
  };
};

export default useBrandDetailActions;
