import useHeader from "./header";
import useFooter from "./footer";
import useSearcher from "./searcher";
import useSpinnerLoading from "./useSpinnerLoading";
import useAgeGates from "./Modals";

const useComponentHooks = () => {
  const { useAgeGateBool, useAgeGateDate } = useAgeGates();

  return {
    useHeader,
    useFooter,
    useSearcher,
    useSpinnerLoading,
    useAgeGateBool,
    useAgeGateDate,
  };
};

export default useComponentHooks;
