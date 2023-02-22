import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useBrandDetailProviders = () => {
  const getOccasionByBrand = ({ brandId }) => {
    const response = axios({
      method: "GET",
      url: `/occasionByBrand/${brandId}`,
    });
    return trackPromise(response);
  };

  const getSkusByOccasion = ({ brandId, occasionId, shop_id }) => {
    const response = axios({
      method: "POST",
      url: `/skusByOccasion`,
      data: {
        occasion_id: occasionId,
        brand_id: brandId,
        shop_id,
      },
    });
    return trackPromise(response);
  };

  const getPostsByOccasionAndSku = ({
    occasionId,
    skuId,
    eventId,
    comboId,
  }) => {
    const response = axios({
      method: "POST",
      url: `/posts`,
      data: {
        occasion_id: occasionId,
        event_type_id: eventId,
        occasion_sku_id: skuId,
        combo_id: comboId,
      },
    });
    return trackPromise(response);
  };

  const createImage = ({
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
  }) => {
    const response = axios({
      method: "POST",
      url: `/makePoster`,
      data: {
        occasion_id: occasionId,
        sku_id: skuId,
        price: price && price,
        bottle_price: bottle_price && bottle_price,
        validity_start: validity_start && validity_start,
        validity_end: validity_end && validity_end,
        post_id: postId && postId,
        combo_product: combo && combo,
        event_date: event_date && event_date,
        event_type_id: event_type_id && event_type_id,
        combo_id: comboId && comboId,
        occasion_sku_id: occasion_sku_id && occasion_sku_id,
        preview,
      },
    });
    return trackPromise(response);
  };

  const sharePost = ({ postId }) => {
    const response = axios({
      method: "GET",
      url: `/sharePoster/${postId}`,
    });
    return trackPromise(response);
  };

  return {
    getOccasionByBrand,
    getPostsByOccasionAndSku,
    createImage,
    sharePost,
    getSkusByOccasion,
  };
};

export default useBrandDetailProviders;
