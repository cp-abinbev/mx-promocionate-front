import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";

// Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useHelpers from "../../../../helpers";
import useControllers from "../../../index";
import useModels from "../../../../models";

const useProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { fromLogin } = state ?? {};

  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { useProfileActions } = useAuthActions();
  const { actUpdateProfile, actLogout } = useProfileActions();

  const { useFormsTypes } = useStrings();
  const {
    REQUIRED_FIELD,
    ACCEPTS_ONLY_TEXT,
    REQUIRED_BOOL_TRUE,
    MAX_LENGTH_25,
    MAX_LENGTH_30,
    MAX_LENGTH_35,
  } = useFormsTypes();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useHocsSelectors } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const shop = useSelector(authSelector);

  const { textScreenSelector, bgScreenSelector } = useHocsSelectors();

  const bgImages = useSelector(bgScreenSelector);
  const profileImg = bgImages?.filter(({ type }) => type === "perfil");
  const imgMobile = profileImg[0]?.url_img_mobile;
  const imgTablet = profileImg[0]?.url_img_tablet;
  const imgDesktop = profileImg[0]?.url_img_desktop;

  const dataProfile = useSelector(textScreenSelector);
  const textsProfile = dataProfile?.filter(({ type }) => type === "perfil");
  const titleProfile = textsProfile?.filter(({ key }) => key === "title");
  const subtitleProfile = textsProfile?.filter(
    ({ key }) => key === "sub-title"
  );
  const nameBoxProfile = textsProfile?.filter(({ key }) => key === "nameBox");
  const businessNameBoxProfile = textsProfile?.filter(
    ({ key }) => key === "businessNameBox"
  );
  const cityBoxProfile = textsProfile?.filter(({ key }) => key === "cityBox");
  const addressBoxProfile = textsProfile?.filter(
    ({ key }) => key === "addressBox"
  );
  const phoneBoxProfile = textsProfile?.filter(({ key }) => key === "phoneBox");
  const buttonProfile = textsProfile?.filter(({ key }) => key === "button");
  const closeSessionProfile = textsProfile?.filter(
    ({ key }) => key === "link-close-session"
  );

  const { useQuickFunctions } = useHelpers();
  const { regexValidations } = useQuickFunctions();
  const regexText = regexValidations({ regex: "text" });

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmUpdateProfile, gtmLogOutProfile } = useDataLayers();

  const profileSchema = yup.object({
    name: yup
      .string()
      .required(REQUIRED_FIELD)
      .matches(regexText, ACCEPTS_ONLY_TEXT),
    storeName: yup
      .string()
      .required(REQUIRED_FIELD)
      .test("length", MAX_LENGTH_30, (val) => val && val.length <= 30),
    city: yup
      .string()
      .required(REQUIRED_FIELD)
      .test("length", MAX_LENGTH_25, (val) => val && val.length <= 25),
    address: yup
      .string()
      .required(REQUIRED_FIELD)
      .test("length", MAX_LENGTH_35, (val) => val && val.length <= 35),
    phone: yup.string().required(REQUIRED_FIELD),
    terms: fromLogin
      ? yup
          .mixed()
          .oneOf([true])
          .required(REQUIRED_FIELD)
          .test("accepted", REQUIRED_BOOL_TRUE, (val) => val)
      : yup.boolean().notRequired(),
  });

  const profileForm = useForm({
    resolver: yupResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      name: shop.name ?? "",
      storeName: shop.shop_name ?? "",
      address: shop.address ?? "",
      phone: shop.phone ?? "",
      city: shop.city ?? "",
    },
  });

  useEffect(() => {
    profileForm.trigger();
  }, [profileForm.trigger]);

  const handleUpdateProfile = (data) => {
    gtmUpdateProfile(data.name);
    dispatch(
      actUpdateProfile(
        {
          data: {
            shop_id: shop.id,
            name: data.name,
            shop_name: data.storeName,
            address: data.address,
            phone: data.phone,
            city: data.city,
            tyc: 1,
          },
        },
        () => navigate(fromLogin ? "/marcas" : -1)
      )
    );
  };

  const handleLogout = (e) => {
    gtmLogOutProfile(profileForm.getValues().name);
    e.preventDefault();
    dispatch(actLogout());
  };

  return {
    profileForm,
    fromLogin,
    handleUpdateProfile,
    handleLogout,
    closeSessionProfile,
    buttonProfile,
    phoneBoxProfile,
    addressBoxProfile,
    cityBoxProfile,
    businessNameBoxProfile,
    nameBoxProfile,
    subtitleProfile,
    titleProfile,
    imgMobile,
    imgTablet,
    imgDesktop,
  };
};

export default useProfile;
