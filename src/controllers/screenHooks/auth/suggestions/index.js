import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../../../../api";
import { useNavigate } from "react-router-dom";
import useModels from "../../../../models";
import useControllers from "../../..";

const useSuggestion = () => {
  const [showModal, setShowModal] = useState(false);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useHocsSelectors } = useSelectors();
  const { textScreenSelector } = useHocsSelectors();
  const { authSelector } = useAuthSelectors();
  const { code, suggestionTypes } = useSelector(authSelector);
  const textScreen = useSelector(textScreenSelector);

  const textSugerencias = textScreen.filter(
    ({ type }) => type === "sugerencias"
  );
  const selectTitleType = textSugerencias.filter(
    ({ key }) => key === "select-title-type"
  );
  const buttonModal = textSugerencias.filter(
    ({ key }) => key === "button-modal"
  );
  const modalText = textSugerencias.filter(({ key }) => key === "modal-text");
  const modalTitle = textSugerencias.filter(({ key }) => key === "modal-title");
  const buttonSend = textSugerencias.filter(({ key }) => key === "button-send");
  const placeHolderSuggestion = textSugerencias.filter(
    ({ key }) => key === "placeholder-suggestion-input"
  );
  const labelSuggestion = textSugerencias.filter(
    ({ key }) => key === "label-suggestion-input"
  );
  const selectTitleBrands = textSugerencias.filter(
    ({ key }) => key === "select-title-brands"
  );
  const subtitle = textSugerencias.filter(({ key }) => key === "sub-title");
  const title = textSugerencias.filter(({ key }) => key === "title");

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const {
    gtmSendSuggestion,
    gtmSendSuccesSuggestion,
    gtmChangeTextSuggestion,
  } = useDataLayers();

  const { useActions } = useApi();
  const { dispatch, useAuthActions, useBrandsActions } = useActions();
  const { useCategoriesActions } = useBrandsActions();
  const { actGetCategories } = useCategoriesActions();

  const { useSuggestionsActions } = useAuthActions();
  const { actSendSuggestions, actGetTypesSuggestions } =
    useSuggestionsActions();

  const suggestionsSchema = yup.object({
    optionsBrand: yup.string().required("Campo requerido"),
    brand: yup.string().notRequired(),
    suggestion: yup.string().required("Campo requerido"),
  });

  const suggestionsForm = useForm({
    resolver: yupResolver(suggestionsSchema),
    mode: "onChange",
  });

  const handleSendSuggestion = ({ brand, suggestion, optionsBrand }) => {
    const data = {
      type: optionsBrand,
      shop_code: code,
      brand,
      suggestion,
    };
    gtmSendSuggestion(code);
    gtmChangeTextSuggestion(
      suggestion,
      "Input Suggestion",
      "Déjanos tu sugerencia"
    );
    dispatch(
      actSendSuggestions({ data }, () => {
        gtmSendSuccesSuggestion(code);
        setShowModal(true);
      })
    );
  };

  const optBrandValueForm = suggestionsForm.watch("optionsBrand");
  const suggestionValue = suggestionsForm.watch("suggestion");

  const optionsBrandValue = () => {
    const value = suggestionsForm.watch("optionsBrand");
    const whichBrand = suggestionTypes?.filter(({ name }) => value === name);
    return whichBrand[0];
  };

  useEffect(() => {
    dispatch(actGetTypesSuggestions());
  }, []);

  useEffect(() => {
    dispatch(
      actGetCategories({}, (data) => {
        const newArray = [];
        for (let clave in data) {
          newArray.push(...data[clave]);
        }
        setBrands(newArray);
      })
    );
  }, []);

  useEffect(() => {
    suggestionsForm.resetField("brand");
    suggestionsForm.resetField("suggestion");
  }, [optBrandValueForm]);

  const goHome = () => navigate("/marcas");

  return {
    suggestionsForm,
    handleSendSuggestion,
    suggestionValue,
    showModal,
    setShowModal,
    goHome,
    brands,
    optionsBrand: suggestionTypes,
    optionsBrandValue,
    optBrandValueForm,
    selectTitleType,
    buttonModal,
    buttonSend,
    modalText,
    modalTitle,
    placeHolderSuggestion,
    labelSuggestion,
    selectTitleBrands,
    subtitle,
    title,
  };
};

export default useSuggestion;
