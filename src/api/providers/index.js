import useAuthProviders from "./auth";
import useBrandsProviders from "./brands";
import useGeneralProviders from "./general";
import useShareProviders from "./share";
import useHocsProviders from "./hocs";

const useProviders = () => {
  return {
    useAuthProviders,
    useShareProviders,
    useBrandsProviders,
    useGeneralProviders,
    useHocsProviders,
  };
};

export default useProviders;
