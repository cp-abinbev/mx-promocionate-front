import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useCategoriesProviders = () => {
  const getCategories = ({ data } = {}) => {
    const response = axios({
      method: "POST",
      url: "/categoriesBrands",
      data: {
        sku: data?.presentations?.length > 0 ? data.presentations : undefined,
        brands: data?.brands?.length > 0 ? data.brands : undefined,
        search: data?.search?.length > 0 ? data.search : undefined,
        shop_id: data?.shop_id && data?.shop_id,
      },
    });
    return trackPromise(response);
  };

  const getEvents = ({ data }) => {
    const response = axios({
      method: "POST",
      url: "/getEvents",
      data: {
        shop_id: data?.shop_id,
        search: data?.search?.length > 0 ? data?.search : undefined,
        brands: data?.brands,
      },
    });
    return trackPromise(response);
  };

  const getFilters = () => {
    const response = axios({
      method: "GET",
      url: "/filters",
    });
    return trackPromise(response);
  };

  return {
    getCategories,
    getFilters,
    getEvents,
  };
};

export default useCategoriesProviders;
