import useComponents from "./components";
import useScreens from "./screens";
import useLayouts from "./layouts";
import useSkeletons from "./skeletons";

const useViews = () => {
  return {
    useScreens,
    useComponents,
    useLayouts,
    useSkeletons,
  };
};

export default useViews;
