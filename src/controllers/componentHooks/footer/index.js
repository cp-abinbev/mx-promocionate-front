// Packages
import find from "lodash/find";
import filter from "lodash/filter";

// Hooks
import useModels from "../../../models";
import useApi from "../../../api";
import { useEffect } from "react";

const useFooter = () => {
  const { useActions } = useApi();
  const { dispatch, useGeneralActions } = useActions();
  const { useFooterActions } = useGeneralActions();
  const { actGetFooter } = useFooterActions();

  const { useSelectors } = useModels();
  const { useSelector, useGeneralSelectors, useHocsSelectors } = useSelectors();
  const { footerSelector } = useGeneralSelectors();
  const footerData = useSelector(footerSelector);

  const { uiConfigurationsSelector } = useHocsSelectors();
  const footerUiConfiguration = useSelector(uiConfigurationsSelector);

  const bgLogo = footerUiConfiguration?.filter(
    ({ key, type }) => key === "logo" && type === "footer"
  );

  const bgColor = footerUiConfiguration?.filter(
    ({ key, type }) => key === "color_bg" && type === "footer"
  );

  const colorText = footerUiConfiguration?.filter(
    ({ key, type }) => key === "color_text" && type === "footer"
  );

  useEffect(() => {
    dispatch(actGetFooter());
  }, []);

  const links = filter(footerData, ({ type }) => type === "footer-link");

  const socialMedia = filter(
    footerData,
    ({ type }) => type === "footer-social"
  );

  const contactEmail = find(footerData, ({ key }) => key === "contact-email");
  const contactPhone = find(footerData, ({ key }) => key === "contact-phone");

  return {
    links,
    socialMedia,
    contactEmail,
    bgLogo,
    bgColor,
    colorText,
    contactPhone,
  };
};

export default useFooter;
