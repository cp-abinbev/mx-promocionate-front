// Packages
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import map from "lodash/map";
import find from "lodash/find";
import { useNavigate } from "react-router-dom";

// Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useModels from "../../../../models";
import useControllers from "../../..";

const useBrandDetail = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();

  const { useActions } = useApi();
  const { dispatch, useBrandsActions } = useActions();
  const { useBrandDetailActions } = useBrandsActions();
  const {
    actGetOccasionByBrand,
    actGetPostsByOccasionAndSku,
    actCreateImage,
    actGetSkusByOccasion,
  } = useBrandDetailActions();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useHocsSelectors } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const { make_deliverys, control_price, id } = useSelector(authSelector);

  const { textScreenSelector, bgScreenSelector, dataCurrencySelector } =
    useHocsSelectors();

  const bgImages = useSelector(bgScreenSelector);
  const brandDetailImg = bgImages?.filter(({ type }) => type === "marcas");
  const imgMobile = brandDetailImg[0]?.url_img_mobile;
  const imgTablet = brandDetailImg[0]?.url_img_tablet;
  const imgDesktop = brandDetailImg[0]?.url_img_desktop;

  const dataTexts = useSelector(textScreenSelector);
  const customData = dataTexts?.filter(({ type }) => type === "crearPoster");
  const titleDetail = customData?.filter(({ key }) => key === "title");
  const subtitleDetail = customData?.filter(({ key }) => key === "sub-title");
  const priceBoxDetail = customData?.filter(({ key }) => key === "priceBox");
  const buttonDetail = customData?.filter(({ key }) => key === "button");
  const validityDetail = customData?.filter(({ key }) => key === "validity");
  const priceBotleDetail = customData?.filter(
    ({ key }) => key === "priceContainer"
  );
  const comboPriceDetail = customData?.filter(
    ({ key }) => key === "comboPrice"
  );
  const validitySinceDetail = customData?.filter(
    ({ key }) => key === "validity-since"
  );
  const validityUntilDetail = customData?.filter(
    ({ key }) => key === "validity-until"
  );
  const posterSelectTitleDetail = customData?.filter(
    ({ key }) => key === "posterSelectTitle"
  );
  const presentationSelectDetail = customData?.filter(
    ({ key }) => key === "presentationSelect"
  );
  const campaignTypeSelectedDetails = customData?.filter(
    ({ key }) => key === "campaignTypeSelect"
  );

  const previewText = dataTexts.filter(({ type }) => type === "previsualizar");
  const previewModalButton = previewText.filter(
    ({ key }) => key === "preview-modal-button"
  );
  const previewModalText = previewText.filter(
    ({ key }) => key === "preview-modal-text"
  );
  const previewModalTitle = previewText.filter(
    ({ key }) => key === "preview-modal-title"
  );
  const backLink = previewText.filter(({ key }) => key === "back-link");
  const buttonDownload = previewText.filter(
    ({ key }) => key === "button-download"
  );
  const previewTitle = previewText.filter(({ key }) => key === "preview-title");

  const currency = useSelector(dataCurrencySelector);

  const { useFormsTypes } = useStrings();
  const { REQUIRED_FIELD } = useFormsTypes();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmInfoSelectBrandDetail, gtmCreateImage, gtmCreateImageError } =
    useDataLayers();

  const [campaignTypeOptions, setCampaignTypeOptions] = useState([]);
  const [presentationsOptions, setPresentationsOptions] = useState([]);
  const [date, setDate] = useState(new Date());
  const [postsOptions, setPostsOptions] = useState([]);
  const [occasionIsCombo, setOccasionIsCombo] = useState(false);
  const [brandSelect, setBrandSelect] = useState({});
  const [isBottle, setIsBootle] = useState(false);
  const [isDisponibility, setIsDisponibility] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const campaignTypeData = useRef({});
  const presentationData = useRef({});
  const postData = useRef({});
  const objectData = useRef({});

  const brandSchema = yup.object({
    campaignType: yup.string().required(REQUIRED_FIELD),
    presentation: yup.string().required(REQUIRED_FIELD),
    date: yup.date().nullable().notRequired(),
    price: yup
      .number()
      .transform((_value, originalValue) =>
        Number(originalValue.replace(/,/, "."))
      )
      .positive()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    price_bottle: isBottle
      ? yup
          .number()
          .positive()
          .required(REQUIRED_FIELD)
          .typeError(REQUIRED_FIELD)
      : yup.number().notRequired(),
    since: isDisponibility
      ? yup.date().required(REQUIRED_FIELD).nullable()
      : yup.string().notRequired().nullable(),
    until: isDisponibility
      ? yup.date().required(REQUIRED_FIELD).nullable()
      : yup.string().notRequired().nullable(),
    post: yup.string().notRequired(),
  });

  const brandForm = useForm({
    resolver: yupResolver(brandSchema),
    mode: "onChange",
    defaultValues: {
      delivery: Boolean(make_deliverys),
      date: null,
      since: null,
      until: null,
      post: "",
    },
  });

  const campaignTypeSelected = brandForm.watch("campaignType");
  const presentationSelected = brandForm.watch("presentation");
  const postSelected = brandForm.watch("post");

  useEffect(() => {
    if (!showPreview) {
      brandForm.resetField("post");
    }
  }, [showPreview]);

  useEffect(() => {
    dispatch(
      actGetOccasionByBrand({ brandId }, (data) => {
        setCampaignTypeOptions(
          map(data.occasions, (o) => ({ ...o, value: o.id }))
        );
        setBrandSelect(data.brand);
      })
    );
  }, []);

  const getOccasionBySkus = () => {
    const [occasion] = campaignTypeOptions?.filter(
      ({ name }) => name === brandForm.getValues().campaignType
    );
    dispatch(
      actGetSkusByOccasion(
        { brandId, occasionId: occasion.id, shop_id: id },
        (data) => {
          setPresentationsOptions(map(data, (s) => ({ ...s, value: s.id })));
        }
      )
    );
    setIsBootle(false);
    setPostsOptions([]);
    setIsDisponibility(Boolean(occasion.validity_flag));
    setOccasionIsCombo(false);

    return occasion;
  };

  useEffect(() => {
    if (campaignTypeSelected) {
      brandForm.resetField("presentation");
      brandForm.setValue("presentation", "");
      brandForm.setValue("products", "");
      brandForm.setValue("post", "");
      brandForm.setValue("date", null);
      brandForm.setValue("since", null);
      brandForm.setValue("until", null);
      brandForm.setValue("price", undefined);
      brandForm.setValue("price_bottle", undefined);
      brandForm.setValue("productCombo", "");

      const occasion = getOccasionBySkus();

      campaignTypeData.current = occasion;
    }
  }, [campaignTypeSelected]);

  useEffect(() => {
    if (presentationSelected) {
      brandForm.resetField("price");
      brandForm.setValue("post", "");
      brandForm.setValue("date", null);
      brandForm.setValue("since", null);
      brandForm.setValue("until", null);
      brandForm.setValue("price", undefined);
      brandForm.setValue("price_bottle", undefined);
      brandForm.setValue("productCombo", "");
      setPostsOptions([]);
      presentationData.current = find(
        presentationsOptions,
        (p) => `${p.name}` === `${presentationSelected}`
      );
      setIsBootle(Boolean(presentationData.current?.bottle_flag));
      setOccasionIsCombo(Boolean(presentationData?.current?.combo_flag));
      dispatch(
        actGetPostsByOccasionAndSku(
          {
            occasionId: campaignTypeData.current?.id,
            [Boolean(presentationData?.current?.combo_flag)
              ? "comboId"
              : "skuId"]: presentationData.current?.id,
          },
          setPostsOptions
        )
      );
    }
  }, [presentationSelected]);

  useEffect(() => {
    if (postSelected) {
      postData.current = find(
        postsOptions,
        (p) => `${p.id}` === `${postSelected}`
      );
    }
  }, [postSelected]);

  const handleSuccessCreateImage = () => {
    gtmInfoSelectBrandDetail();
  };

  const formatDateValidity = ({ since, until }) => {
    const formatSince = new Date(since);
    const formatUntil = new Date(until);
    const yearSince = formatSince.getFullYear();
    const yearUntil = formatUntil.getFullYear();
    const monthSince = formatSince.getMonth();
    const monthUntil = formatUntil.getMonth();
    const daySince = formatSince.getDate();
    const dayUntil = formatUntil.getDate();
    return {
      since: `${yearSince}/${monthSince + 1}/${daySince}`,
      until: `${yearUntil}/${monthUntil + 1}/${dayUntil}`,
    };
  };

  const handleCreateImage = (data) => {
    gtmCreateImage();

    presentationData.current = find(
      presentationsOptions,
      (p) => `${p.name}` === `${presentationSelected}`
    );

    const date =
      data?.since === null
        ? undefined
        : formatDateValidity({ since: data?.since, until: data?.until });

    const object = {
      skuId: data?.presentation,
      postId: data?.post,
      occasionId: campaignTypeData?.current?.id,
      price: Number(data?.price),
      bottle_price: Number(data?.price_bottle),
      combo: data?.products,
      validity_start: date?.since ?? "",
      validity_end: date?.until ?? "",
      [Boolean(presentationData?.current.combo_flag)
        ? "comboId"
        : "occasion_sku_id"]: presentationData?.current?.id,
      preview: 1,
    };

    objectData.current = object;

    dispatch(
      actCreateImage(
        object,
        () => handleSuccessCreateImage(),
        () => gtmCreateImageError()
      )
    );
  };

  const labelPrice = () => {
    if (occasionIsCombo) {
      return `${comboPriceDetail[0]?.title}`;
    } else {
      return `${priceBoxDetail[0]?.title}`;
    }
  };

  const goHome = () => navigate("/marcas");

  return {
    brandForm,
    campaignTypeOptions,
    presentationsOptions,
    postsOptions,
    occasionIsCombo,
    canEditPrice: Boolean(control_price) || occasionIsCombo,
    handleCreateImage,
    brandSelect,
    isBottle,
    labelPrice,
    date,
    setDate,
    isDisponibility,
    titleDetail,
    subtitleDetail,
    campaignTypeSelectedDetails,
    presentationSelectDetail,
    priceBoxDetail,
    buttonDetail,
    posterSelectTitleDetail,
    validityDetail,
    validitySinceDetail,
    validityUntilDetail,
    priceBotleDetail,
    imgMobile,
    imgTablet,
    imgDesktop,
    currency,
    showPreview,
    setShowPreview,
    showDownload,
    setShowDownload,
    goHome,
    objectData,
    previewModalButton,
    previewModalTitle,
    previewModalText,
    previewTitle,
    backLink,
    buttonDownload,
  };
};

export default useBrandDetail;
