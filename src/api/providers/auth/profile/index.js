import axios from "../../../../config/axios";
import { trackPromise } from "react-promise-tracker";

const useProfileProviders = () => {
  const updateProfile = ({ data }) => {
    const response = axios({
      method: "POST",
      url: "/shop/update",
      data,
    });
    return trackPromise(response);
  };

  return { updateProfile };
};

export default useProfileProviders;
