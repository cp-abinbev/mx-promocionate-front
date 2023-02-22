import axios from "../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useShareProviders = () => {
  const getImagePreview = async ({ previewId }) => {
    const response = axios({ method: "GET", url: `/poster/${previewId}` });
    return trackPromise(response);
  };

  return { getImagePreview };
};

export default useShareProviders;
