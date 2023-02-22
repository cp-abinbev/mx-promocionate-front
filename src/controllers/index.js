import useScreenHooks from './screenHooks';
import useGeneralHooks from './generalHooks';
import useComponentHooks from './componentHooks';

const useControllers = () => {
  return {
    useScreenHooks,
    useGeneralHooks,
    useComponentHooks,
  };
};

export default useControllers;
