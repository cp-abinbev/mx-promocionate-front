// Hooks
import useModels from "../../../models";
import useApi from "../../../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const { useActions } = useApi();
  const { dispatch, useGeneralActions } = useActions();
  const { useHeaderActions } = useGeneralActions();
  const { actGetHeader } = useHeaderActions();

  const { useSelectors } = useModels();
  const { useSelector, useGeneralSelectors, useHocsSelectors } = useSelectors();
  const { headerSelector } = useGeneralSelectors();
  const headerData = useSelector(headerSelector);

  const { uiConfigurationsSelector } = useHocsSelectors();
  const headerUiConfiguration = useSelector(uiConfigurationsSelector);

  const bgColor = headerUiConfiguration?.filter(
    ({ key, type }) => key === "color_bg" && type === "header"
  );
  const profile = headerData.filter(({ key }) => key === "profile");
  const suggestions = headerData.filter(({ key }) => key === "suggestions");

  const navigate = useNavigate();
  const title = headerData[0]?.data;

  useEffect(() => {
    dispatch(actGetHeader());
  }, []);

  const goBack = () => navigate(-1);

  return { goBack, title, bgColor, profile, suggestions };
};

export default useHeader;
