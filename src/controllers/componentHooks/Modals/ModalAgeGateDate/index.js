import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useStrings from "../../../../strings";
import useModels from "../../../../models";
import useApi from "../../../../api";

import useControllers from "../../..";

const useAgeGate = () => {
  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { useLoginActions } = useAuthActions();
  const { actRemember, actIsOld } = useLoginActions();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmSubmitDataAgeGate, gtmContinueAgeGate } = useDataLayers();

  const [closeModal, setCloseModal] = useState(false);
  const checkboxRef = useRef(null);

  const { useFormsTypes } = useStrings();
  const { ERROR_DATE_AGE_GATE } = useFormsTypes();

  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors } = useSelectors();
  const { textScreenSelector } = useHocsSelectors();

  const textsAgeGate = useSelector(textScreenSelector);
  const customText = textsAgeGate?.filter(({ type }) => type === "ageGate");
  const titleAgeGate = customText?.filter(({ key }) => key === "title");
  const birthdayAgeGate = customText?.filter(({ key }) => key === "birthday");
  const checkboxAgeGate = customText?.filter(({ key }) => key === "checkbox");
  const labelAgeGate = customText?.filter(({ key }) => key === "label");
  const buttonAgeGate = customText?.filter(({ key }) => key === "button");

  const verify = ({ val, limit }) => {
    const lengthNumber = ("0" + val).slice(-2);
    const length = lengthNumber && lengthNumber.toString().length === 2;
    const correctDate = val <= limit;
    return length && correctDate;
  };

  const ageGateSchema = yup.object({
    day: yup
      .number()
      .positive()
      .required()
      .test("length", ERROR_DATE_AGE_GATE, (val) => verify({ val, limit: 31 })),
    month: yup
      .number()
      .positive()
      .required()
      .test("length", ERROR_DATE_AGE_GATE, (val) => verify({ val, limit: 12 })),
    year: yup
      .number()
      .positive()
      .required()
      .test("length", ERROR_DATE_AGE_GATE, (val) => {
        const currentYear = new Date().getFullYear();
        const length = val && val.toString().length === 4;
        const correctYear = val <= currentYear;
        return length && correctYear;
      }),
  });
  const ageGateForm = useForm({
    resolver: yupResolver(ageGateSchema),
    mode: "onChange",
  });
  const handleSubmitDate = ({ year, month, day }) => {
    if (validateDaysMonth({ month, day })) {
      const { equalYear, isOldYear, notOldYear } = validateYear(year);
      const { equalMonth, isOldMonth, notOldMonth } = validateMonth(month);
      const { isOldDay, notOldDay } = validateDay(day);
      isOldYear && redirectLogin();
      notOldYear && redirectOtherPage();
      equalYear && isOldMonth && redirectLogin();
      equalYear && notOldMonth && redirectOtherPage();
      equalYear && equalMonth && isOldDay && redirectLogin();
      equalYear && equalMonth && notOldDay && redirectOtherPage();
    }
  };
  const validateDaysMonth = ({ month, day }) => {
    const monthsOfYear = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
    if (day <= monthsOfYear[month]) {
      return true;
    } else {
      ageGateForm.setError("day", {
        type: "required",
        message: ERROR_DATE_AGE_GATE,
      });
      return false;
    }
  };

  const redirectLogin = () => {
    gtmContinueAgeGate({ interaction: "Yes", label: "Yes" });
    dispatch(actIsOld(true));
    checkboxRef.current.checked
      ? dispatch(actRemember(true))
      : dispatch(actRemember(false));
    setCloseModal(true);
  };

  const redirectOtherPage = () => {
    gtmContinueAgeGate({ interaction: "No", label: "No" });
    dispatch(actIsOld(false));
    dispatch(actRemember(false));
  };

  const validateYear = (year) => {
    const currentYear = new Date().getFullYear();
    const isOldYear = year < currentYear - 18;
    const equalYear = year === currentYear - 18;
    const notOldYear = year > currentYear - 18;
    return { equalYear, isOldYear, notOldYear };
  };

  const validateMonth = (month) => {
    const currentMonth = new Date().getMonth();
    const isOldMonth = month < currentMonth + 1;
    const equalMonth = month === currentMonth + 1;
    const notOldMonth = month > currentMonth + 1;
    return { equalMonth, isOldMonth, notOldMonth };
  };

  const validateDay = (day) => {
    const currentDay = new Date().getDate();
    const isOldDay = day <= currentDay;
    const notOldDay = day > currentDay;
    return { isOldDay, notOldDay };
  };

  const handleCheck = (e) => {
    if (e.target.value === "" || e.target.value === "false") {
      gtmSubmitDataAgeGate();
    }
  };

  return {
    ageGateForm,
    handleSubmitDate,
    handleCheck,
    ERROR_DATE_AGE_GATE,
    titleAgeGate,
    birthdayAgeGate,
    checkboxAgeGate,
    labelAgeGate,
    buttonAgeGate,
    closeModal,
    checkboxRef,
  };
};

export default useAgeGate;
