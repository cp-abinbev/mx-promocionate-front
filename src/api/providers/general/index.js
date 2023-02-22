import useFooterProviders from "./footer";
import useHeaderProviders from "./header";

const useGeneralProviders = () => {
  return { useFooterProviders, useHeaderProviders };
};

export default useGeneralProviders;
