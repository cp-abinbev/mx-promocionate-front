import AgeGateDate from "./ModalAgeGateDate";
import AgeGateBool from "./ModalAgeGateBool";
import useModels from "../../../../models";

const useAgeGates = () => {
  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors } = useSelectors();
  const { ageGateSelector } = useHocsSelectors();
  const whichAgeGateShow = useSelector(ageGateSelector);

  const selectAgeGate = {
    yesno: AgeGateBool,
    dateofbirth: AgeGateDate,
  };

  const AgeGate = selectAgeGate[whichAgeGateShow?.key];

  return {
    AgeGate: AgeGate ?? AgeGateDate,
  };
};

export default useAgeGates;
