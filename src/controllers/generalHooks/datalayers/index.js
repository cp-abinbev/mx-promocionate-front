import { getGtmArgs } from "./GtmArgs";
import TagManager from "react-gtm-module";
import useModels from "../../../models";

const useDataLayers = () => {
  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors } = useSelectors();
  const { analitycsSelector } = useHocsSelectors();
  const dataAnalitycs = useSelector(analitycsSelector);
  const gtm = dataAnalitycs?.filter(({ key }) => key === "GTM");
  const analitycsData = gtm[0]?.data;

  const gtmDayAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Day",
        interaction: "False",
        component_name: "Day",
        element_text: "Day",
      })
    );
  };

  const gtmMonthAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Month",
        interaction: "False",
        component_name: "Month",
        element_text: "Month",
      })
    );
  };

  const gtmYearAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Year",
        interaction: "False",
        component_name: "Year",
        element_text: "Year",
      })
    );
  };

  const gtmTrueAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Yes",
        interaction: "False",
        component_name: "Age Gate Si No",
        element_text: "Age Gate Si No",
      })
    );
  };

  const gtmFalseAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "No",
        interaction: "False",
        component_name: "Age Gate Si No",
        element_text: "Age Gate Si No",
      })
    );
  };

  const gtmSubmitDataAgeGate = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Remember Me",
        interaction: "False",
        component_name: "Remember Me",
        element_text: "Remember Me",
      })
    );
  };

  const gtmRememberDataBooleanAgeGate = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Remember Me",
        interaction: "False",
        component_name: "Age Gate Si No",
        element_text: "Age Gate Si No",
      })
    );
  };

  const gtmSubmitDataBooleanAgeGate = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Send",
        interaction: "False",
        component_name: "Age Gate Si No",
        element_text: "Age Gate Si No",
      })
    );
  };

  const gtmContinueAgeGate = ({ interaction, label }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: `${label}`,
        interaction: "False",
        component_name: `Interaction ${interaction}`,
        element_text: `Interaction ${interaction}`,
      })
    );
  };

  const gtmContinueAgeGateBoolean = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "Send",
        interaction: "False",
        component_name: "Age Gate Si No",
        element_text: "Age Gate Si No",
      })
    );
  };

  const gtmSuccesAgeGate = ({ event_label }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label,
        interaction: "False",
        component_name: "full_age_gate",
        element_text: "full_age_gate",
      })
    );
  };

  const gtmDenyAgeGAte = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Age Gate",
        event_action: "Interaction",
        event_label: "No",
        interaction: "False",
        component_name: "full_age_gate",
        element_text: "deny_full_age_gate",
      })
    );
  };

  const gtmClickCampaign = ({ campaign }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${campaign} - Campaign Type`,
        interaction: "true",
        component_name: "Input Campaign",
        element_text: "Seleccione el tipo de campaña",
      })
    );
  };

  const gtmClickPresentation = ({ presentation }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${presentation} - Presentation Product`,
        interaction: "true",
        component_name: "Input Product",
        element_text: "Seleccione la presentación",
      })
    );
  };

  const gtmPrice = ({ price }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${price} - Price`,
        interaction: "true",
        component_name: "Input Price",
        element_text: "Digite el costo",
      })
    );
  };

  const gtmSelectPoster = ({ diseno }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: diseno,
        interaction: "true",
        component_name: "Content Design",
        element_text: "Pieza Seleccionada",
      })
    );
  };

  const gtmSelectDateVigency = ({ date, component_name, element_text }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${date} - Initial Date`,
        interaction: "true",
        component_name,
        element_text,
      })
    );
  };

  const gtmCreateImage = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Generate Content",
        interaction: "true",
        component_name: "Generate Content",
        element_text: "Crear Pieza",
      })
    );
  };

  const gtmCreateImageError = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Generate Content Error",
        interaction: "true",
        component_name: "Generate Content",
        element_text: "Crear Pieza",
      })
    );
  };

  const gtmLogIn = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Log In",
        interaction: "true",
        component_name: "Log In Principal",
        element_text: "Ingresar",
      })
    );
  };

  const gtmLogInSuccess = (id) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Login",
        event_action: "Sucess",
        event_label: "sucess",
        userUid: id,
      })
    );
  };

  const gtmSelectDocument = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Identification Type",
        interaction: "true",
        component_name: "Input Identification",
        element_text: "Tipo de Identificación",
      })
    );
  };

  const gtmSelectedDocument = (type) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${type} - Identification Type`,
        interaction: "true",
        component_name: "Input Identification",
        element_text: "Tipo de Identificación",
      })
    );
  };

  const gtmOpenPopUp = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Info PopUp BEES Code",
        interaction: "true",
        component_name: "Close PopUp",
        element_text: "Cerrar PopUp",
      })
    );
  };

  const gtmClosePopUp = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Close PopUp BEES Code",
        interaction: "true",
        component_name: "Close PopUp",
        element_text: "Cerrar PopUp",
      })
    );
  };

  const gtmTypeDocumentNumber = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: "Input Identification",
        interaction: "true",
        component_name: "Input Identification",
        element_text: "Número Identificación",
      })
    );
  };

  const gtmSelectBeesCode = (code) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${code} - BEES Code`,
        interaction: "true",
        component_name: "BEES Code",
        element_text: "Selección Código BEES",
      })
    );
  };

  const gtmUpdateProfile = (name) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Save Data",
        interaction: "true",
        component_name: name,
        element_text: "Guardar Datos",
      })
    );
  };

  const gtmLogOutProfile = (name) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Log Out",
        interaction: "true",
        component_name: name,
        element_text: "Guardar Datos",
      })
    );
  };

  const gtmGotoBrandDetail = (brand) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Brand",
        interaction: "true",
        component_name: `${brand.name} - ${brand.category}`,
        element_text: "Guardar Datos",
      })
    );
  };

  const gtmOpenFilters = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Filter Icon",
        interaction: "true",
        component_name: "Filter",
        element_text: "Filtrar",
      })
    );
  };

  const gtmSearch = (search) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: `${search} - Input Filter`,
        interaction: "true",
        component_name: "Input Filter",
        element_text: "Filtrar",
      })
    );
  };

  const gtmApplyFilters = ({ brands, presentations }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Filter",
        interaction: "true",
        component_name: [...brands, ...presentations].join(", "),
        element_text: "Filtrar",
      })
    );
  };

  const gtmCleanFilters = ({ brands, presentations }) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Clean Filter",
        interaction: "true",
        component_name: [...brands, ...presentations].join(", "),
        element_text: "Limpiar Filtrar",
      })
    );
  };

  const gtmGoToProfile = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "User Icon",
        interaction: "true",
        component_name: "User",
        element_text: "Usuario",
      })
    );
  };

  const gtmInfoSelectBrandDetail = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Generate Content Success",
        interaction: "true",
        component_name: "Generate Content",
        element_text: "Crear Pieza",
      })
    );
  };

  const gtmDownloadImage = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Download Content",
        interaction: "True",
        component_name: "Image preview",
        element_text: "Descargar Pieza",
      })
    );
  };

  const gtmReturnHome = (text) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Button",
        event_label: "Return Home Content",
        interaction: "True",
        component_name: text,
        element_text: "Volver a home",
      })
    );
  };

  const gtmDownloadSucces = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: "Download Content Success",
        interaction: "True",
        component_name: "Download Content",
        element_text: "Descarga Finalizada",
      })
    );
  };

  const gtmUnderstandDownload = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "button",
        event_label: "Generate Content",
        interaction: "True",
        component_name: "Download Content",
        element_text: "Entendido",
      })
    );
  };

  const gtmClickHamburguer = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Card",
        event_label: "Hamburguer menu",
        interaction: "True",
        component_name: "Menu",
        element_text: "Menú",
      })
    );
  };

  const gtmClickIconProfile = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Button",
        event_label: "User zone - menu",
        interaction: "True",
        component_name: "User",
        element_text: "Usuario",
      })
    );
  };

  const gtmClickIconSuggestions = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Button",
        event_label: "Suggestions - menu",
        interaction: "True",
        component_name: "Suggestions",
        element_text: "Sugerencias",
      })
    );
  };

  const gtmClickTypeSuggestion = (suggestion) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${suggestion} - Suggestion Type`,
        interaction: "True",
        component_name: "Input Suggestion",
        element_text: "Seleccione el tipo de anuncio",
      })
    );
  };

  const gtmChangeTextSuggestion = (text, name, element) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${text} - Suggestion`,
        interaction: "True",
        component_name: name,
        element_text: element,
      })
    );
  };

  const gtmClickBrandSuggestion = (brand) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: `${brand} - Suggestion Brand`,
        interaction: "True",
        component_name: "Input Suggestion",
        element_text: "Seleccione marca",
      })
    );
  };

  const gtmClickBrandCampaingSuggestion = (brand) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: brand,
        interaction: "True",
        component_name: "Input Suggestion Campaign",
        element_text: "Tipo de campaña",
      })
    );
  };

  const gtmSendSuggestion = (code) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Button",
        event_label: "Send a Suggestion",
        interaction: "True",
        component_name: code,
        element_text: "Enviar sugerencia",
      })
    );
  };

  const gtmSendSuccesSuggestion = (code) => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Content",
        event_label: "Send a Suggestion Success",
        interaction: "True",
        component_name: code,
        element_text: "Sugerencia Correcta",
      })
    );
  };

  const gtmCloseSuggestionModal = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "GAEvent",
        event_category: "Content",
        event_action: "Button",
        event_label: "Finish process Content",
        interaction: "True",
        component_name: "Suggestions",
        element_text: "Finalizar",
      })
    );
  };

  const gtmOpenWhatsapp = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "trackEvent",
        event_category: "Promocionate Trade",
        event_action: "Compartir",
        event_label: "Whatsapp",
      })
    );
  };

  const gtmCopyLink = () => {
    TagManager.dataLayer(
      getGtmArgs({
        id: analitycsData,
        event: "trackEvent",
        event_category: "Promocionate Trade",
        event_action: "Compartir",
        event_label: "Enlace",
      })
    );
  };

  return {
    gtmDayAgeGAte,
    gtmMonthAgeGAte,
    gtmYearAgeGAte,
    gtmTrueAgeGAte,
    gtmFalseAgeGAte,
    gtmSubmitDataAgeGate,
    gtmSubmitDataBooleanAgeGate,
    gtmSuccesAgeGate,
    gtmDenyAgeGAte,
    gtmContinueAgeGate,
    gtmClickCampaign,
    gtmClickPresentation,
    gtmPrice,
    gtmSelectPoster,
    gtmSelectDateVigency,
    gtmCreateImage,
    gtmCreateImageError,
    gtmLogIn,
    gtmUpdateProfile,
    gtmLogOutProfile,
    gtmGotoBrandDetail,
    gtmOpenFilters,
    gtmInfoSelectBrandDetail,
    gtmSearch,
    gtmApplyFilters,
    gtmCleanFilters,
    gtmGoToProfile,
    gtmDownloadImage,
    gtmOpenWhatsapp,
    gtmCopyLink,
    gtmContinueAgeGateBoolean,
    gtmRememberDataBooleanAgeGate,
    gtmSelectDocument,
    gtmSelectedDocument,
    gtmOpenPopUp,
    gtmClosePopUp,
    gtmTypeDocumentNumber,
    gtmSelectBeesCode,
    gtmLogInSuccess,
    gtmReturnHome,
    gtmDownloadSucces,
    gtmUnderstandDownload,
    gtmClickHamburguer,
    gtmClickIconProfile,
    gtmClickIconSuggestions,
    gtmClickTypeSuggestion,
    gtmChangeTextSuggestion,
    gtmClickBrandSuggestion,
    gtmClickBrandCampaingSuggestion,
    gtmSendSuggestion,
    gtmSendSuccesSuggestion,
    gtmCloseSuggestionModal,
  };
};

export default useDataLayers;
