import useAgeGateBool from "./ModalAgeGateBool";
import useAgeGateDate from "./ModalAgeGateDate";

const useAgeGates = () => {
  return { useAgeGateBool, useAgeGateDate };
};
export default useAgeGates;
