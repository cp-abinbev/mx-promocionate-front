import useModels from "../../../../models";
import { useState, useRef } from "react";
import useApi from "../../../../api";
import useControllers from "../../..";

const useAgeGateBool = () => {
  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { useLoginActions } = useAuthActions();
  const { actRemember, actIsOld } = useLoginActions();

  const [buttonSelect, setButtonSelect] = useState({});
  const [closeModal, setCloseModal] = useState(false);
  const checkboxRef = useRef(null);

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const {
    gtmTrueAgeGAte,
    gtmFalseAgeGAte,
    gtmSubmitDataBooleanAgeGate,
    gtmRememberDataBooleanAgeGate,
  } = useDataLayers();

  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors, useAuthSelectors } = useSelectors();
  const { textScreenSelector } = useHocsSelectors();

  const textsAgeGate = useSelector(textScreenSelector);

  const customText = textsAgeGate?.filter(({ type }) => type === "ageGate");

  const titleAgeGate = customText?.filter(({ key }) => key === "title");
  const checkboxAgeGate = customText?.filter(({ key }) => key === "checkbox");
  const labelAgeGate = customText?.filter(({ key }) => key === "label");
  const buttonAgeGate = customText?.filter(({ key }) => key === "button");

  const { authSelector } = useAuthSelectors();
  const ageGateRemember = useSelector(authSelector);

  const handleCheck = (e) => {
    if (e.target.value === "" || e.target.value === "false") {
      gtmRememberDataBooleanAgeGate();
    }
  };

  const isOld = (e) => {
    e.preventDefault();
    gtmTrueAgeGAte();
  };

  const notOld = (e) => {
    e.preventDefault();
    gtmFalseAgeGAte();
  };

  const handleSubmit = () => {
    gtmSubmitDataBooleanAgeGate();
    if (buttonSelect.si) {
      dispatch(actIsOld(true));
      checkboxRef.current.checked
        ? dispatch(actRemember(true))
        : dispatch(actRemember(false));
      setCloseModal(true);
    } else {
      dispatch(actIsOld(false));
      dispatch(actRemember(false));
      window.location.href =
        "https://www.tapintoyourbeer.com/agegate?destination=";
    }
  };

  return {
    titleAgeGate,
    checkboxAgeGate,
    buttonAgeGate,
    labelAgeGate,
    buttonSelect,
    setButtonSelect,
    handleCheck,
    isOld,
    notOld,
    handleSubmit,
    ageGateRemember,
    checkboxRef,
    closeModal,
  };
};

export default useAgeGateBool;
