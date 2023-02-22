import { useEffect, useState } from "react";
import some from "lodash/some";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useControllers from "../../..";
import useModels from "../../../../models";

const useLogin = () => {
  const navigate = useNavigate();

  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { useLoginActions } = useAuthActions();
  const {
    actLogin,
    actloginDocumentsOptions,
    actGetSuggestionsCodes,
    actGetInfoPopUp,
    actResetSuggestionsCodes,
  } = useLoginActions();

  const { useFormsTypes } = useStrings();
  const { REQUIRED_FIELD, POSITIVE_NUMBER, INTEGER_NUMBER, MIN_LENGTH_NUMBER } =
    useFormsTypes();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useHocsSelectors } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const ageGateRemember = useSelector(authSelector);

  const { textScreenSelector, bgScreenSelector, dataCurrencySelector } =
    useHocsSelectors();
  const dataLogin = useSelector(textScreenSelector);
  const textsLoign = dataLogin?.filter(({ type }) => type === "login");
  const titleLogin = textsLoign?.filter(({ key }) => key === "title");
  const subtitleLogin = textsLoign?.filter(({ key }) => key === "sub-title");
  const selectDocument = textsLoign?.filter(
    ({ key }) => key === "select-title"
  );
  const selectCodeBees = textsLoign?.filter(({ key }) => key === "select-bees");
  const inputBoxLogin = textsLoign?.filter(({ key }) => key === "inputBox");
  const buttonLogin = textsLoign?.filter(({ key }) => key === "button");

  const bgImages = useSelector(bgScreenSelector);
  const mobileBg = bgImages?.filter(({ type }) => type === "login");

  const countryFlag = useSelector(dataCurrencySelector);

  const { useGeneralHooks } = useControllers();
  const { useToggleModal, useDataLayers, useIsAuth } = useGeneralHooks();
  const { isAuth } = useIsAuth();
  const [errorModalOpen, toggleErrorModal] = useToggleModal();
  const { gtmLogIn, gtmLogInSuccess } = useDataLayers();

  const [documentSelected, setDocumentSelected] = useState("");
  const [showBeesCode, setShowBeesCode] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const codeBees = "Código Bees";

  const popUpInfo = ageGateRemember?.popUp;
  const titlePopUp = popUpInfo?.filter(({ key }) => key === "title");
  const paragraphPopUpOne = popUpInfo?.filter(
    ({ key }) => key === "sub-title1"
  );
  const paragraphPopUpTwo = popUpInfo?.filter(
    ({ key }) => key === "sub-title2"
  );
  const imgPopUpOne = popUpInfo?.filter(({ key }) => key === "img1");
  const imgPopUpTwo = popUpInfo?.filter(({ key }) => key === "img2");

  const addValueSuggestionsCodes = ageGateRemember.suggestionsCodes?.map(
    (el) => ({ ...el, value: el.name })
  );

  const loginSchema = yup.object({
    typeDocument: yup
      .string()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    document: yup
      .number()
      .positive(POSITIVE_NUMBER)
      .integer(INTEGER_NUMBER)
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    codeShop:
      documentSelected !== codeBees
        ? yup
            .string()
            .required(REQUIRED_FIELD)
            .typeError(REQUIRED_FIELD)
            .test("length", MIN_LENGTH_NUMBER, (val) => val && val.length >= 8)
        : yup.string().nullable().notRequired(),
  });

  const loginForm = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const typeDocument = loginForm.watch("typeDocument");
  const document = loginForm.watch("document");
  const optsCodesShop = loginForm.watch("codeShop");

  useEffect(() => {
    dispatch(actloginDocumentsOptions());
    dispatch(actGetInfoPopUp());
  }, []);

  useEffect(() => {
    if (ageGateRemember.documents?.length === 1) {
      loginForm.setValue("typeDocument", ageGateRemember?.documents[0]?.name);
    } else {
      const defaultTypeDocument = ageGateRemember?.documents?.filter(
        ({ name }) => name === codeBees
      );
      loginForm.setValue("typeDocument", defaultTypeDocument[0]?.name);
    }
  }, [ageGateRemember.documents?.length]);

  useEffect(() => {
    loginForm.resetField("document");
    loginForm.resetField("codeShop");
    dispatch(actResetSuggestionsCodes());
    setDocumentSelected(typeDocument);
    if (openPopUp) {
      setOpenPopUp(false);
    }
  }, [typeDocument]);

  useEffect(() => {
    if (ageGateRemember?.suggestionsCodes?.length > 0) {
      dispatch(actResetSuggestionsCodes());
      loginForm.setValue("codeShop", "");
      setShowBeesCode(false);
    }
  }, [document]);

  useEffect(() => {
    if (ageGateRemember.suggestionsCodes?.length === 1) {
      const valueDefault = `${addValueSuggestionsCodes[0]?.code.toString()} / ${addValueSuggestionsCodes[0]?.shop_name.toString()}`;
      loginForm.setValue("codeShop", valueDefault);
      loginForm.trigger("codeShop");
    }
  }, [ageGateRemember?.suggestionsCodes?.length]);

  useEffect(() => {
    if (isAuth) {
      navigate("/marcas", { replace: true });
    }
  }, []);

  useEffect(() => {
    try {
      const querys = window.location.search;
      const urlParams = new URLSearchParams(querys);
      const code = urlParams.get("pass") || "";
      code.length > 0 &&
        dispatch(actLogin({ code }, handleLoginSuccess, handleLoginError));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findCodesBees = (e) => {
    e.preventDefault();
    if (document.length >= 4) {
      const [element] = ageGateRemember.documents?.filter(
        ({ name }) => name === documentSelected
      );
      dispatch(
        actGetSuggestionsCodes(
          { document, id: element.document_type_id },
          handleLoginError
        )
      );
      setShowBeesCode(true);
    }
  };

  const handleLoginError = () => {
    toggleErrorModal();
    loginForm.reset();
  };

  const handleLoginSuccess = async (user) => {
    gtmLogInSuccess(user.shop.id);
    const querys = window.location.search;
    const { shop } = user;
    const requiredShopData = [
      "name",
      "shop_name",
      "address",
      "city",
      "phone",
      "tyc",
    ];
    if (some(requiredShopData, (item) => !shop[item])) {
      navigate(`/perfil${querys}`, {
        replace: true,
        state: { fromLogin: true },
      });
    } else {
      navigate(`/marcas${querys}`, { replace: true });
    }
  };

  const handleLogin = (data) => {
    const { codeShop, document } = data;
    const code = codeShop?.split("/");
    const finalCode = code && code[0]?.trim();

    gtmLogIn();
    dispatch(
      actLogin(
        { code: finalCode ?? document },
        (user) => handleLoginSuccess(user),
        handleLoginError
      )
    );
  };

  return {
    loginForm,
    errorModalOpen,
    toggleErrorModal,
    handleLogin,
    titleLogin,
    subtitleLogin,
    buttonLogin,
    inputBoxLogin,
    ageGateRemember,
    selectDocument,
    documentSelected,
    showBeesCode,
    addValueSuggestionsCodes,
    codeBees,
    selectCodeBees,
    mobileBg,
    countryFlag,
    titlePopUp,
    paragraphPopUpOne,
    paragraphPopUpTwo,
    imgPopUpOne,
    imgPopUpTwo,
    openPopUp,
    setOpenPopUp,
    typeDocument,
    optsCodesShop,
    findCodesBees,
    document,
  };
};

export default useLogin;
