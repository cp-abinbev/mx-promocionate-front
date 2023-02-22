import { useEffect, useState, useRef } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useModels from "../../../../models";
import { useParams } from "react-router-dom";

const useEventDetail = () => {
  const navigate = useNavigate();

  const { useActions } = useApi();
  const { dispatch, useBrandsActions } = useActions();
  const { useEventDetailActions, useBrandDetailActions } = useBrandsActions();
  const { actGetOptionsByEvent } = useEventDetailActions();
  const { actGetPostsByOccasionAndSku, actCreateImage } =
    useBrandDetailActions();

  const { useFormsTypes } = useStrings();
  const { REQUIRED_FIELD } = useFormsTypes();

  const { useSelectors } = useModels();
  const { useSelector, useHocsSelectors } = useSelectors();
  const { textScreenSelector, bgScreenSelector } = useHocsSelectors();

  const bgImages = useSelector(bgScreenSelector);
  const eventDetailImg = bgImages?.filter(({ type }) => type === "eventos");
  const imgMobile = eventDetailImg[0]?.url_img_mobile;
  const imgTablet = eventDetailImg[0]?.url_img_tablet;
  const imgDesktop = eventDetailImg[0]?.url_img_desktop;

  const dataTexts = useSelector(textScreenSelector);
  const text = dataTexts?.filter(({ type }) => type === "eventos");
  const title = text?.filter(({ key }) => key === "title");
  const subtitle = text?.filter(({ key }) => key === "sub-title");
  const selectEventTypes = text?.filter(
    ({ key }) => key === "eventsTypeSelect"
  );
  const dateInput = text?.filter(({ key }) => key === "dateInput");
  const validitySince = text?.filter(({ key }) => key === "validity-since");
  const validityUntil = text?.filter(({ key }) => key === "validity-until");
  const poster = text?.filter(({ key }) => key === "posterSelectTitle");

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

  const { eventId } = useParams();

  const [date, setDate] = useState(null);
  const [optionsEvent, setOptionsEvent] = useState({});
  const [postsOptions, setPostsOptions] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showVigency, setShowVigency] = useState(false);
  const objectData = useRef({});

  const eventSchema = yup.object({
    optionsEvent: yup.string().required(REQUIRED_FIELD),
    date: showDate
      ? yup.date().required(REQUIRED_FIELD).nullable()
      : yup.date().nullable().notRequired(),
    since: showVigency
      ? yup.date().required(REQUIRED_FIELD).nullable()
      : yup.string().notRequired().nullable(),
    until: showVigency
      ? yup.date().required(REQUIRED_FIELD).nullable()
      : yup.string().notRequired().nullable(),
    post: yup.string().notRequired(),
  });

  const eventForm = useForm({
    resolver: yupResolver(eventSchema),
    mode: "onChange",
    defaultValues: {
      post: "",
    },
  });

  const optionsEventChange = eventForm.watch("optionsEvent");

  useEffect(() => {
    if (!showPreview) {
      eventForm.resetField("post");
    }
  }, [showPreview]);

  useEffect(() => {
    dispatch(
      actGetOptionsByEvent({ eventId }, (data) => setOptionsEvent(data))
    );
  }, []);

  useEffect(() => {
    const element = optionsEvent?.event_types?.filter(
      ({ name }) => name === optionsEventChange
    );
    setShowDate(Boolean(element && element[0]?.date_time_flag));
    setShowVigency(Boolean(element && element[0]?.validity_flag));

    dispatch(
      actGetPostsByOccasionAndSku(
        { eventId: element && element[0]?.id },
        setPostsOptions
      )
    );
  }, [optionsEventChange]);

  const handleDateFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  };

  const handleCreateImage = ({ date, since, until, post }) => {
    const element = optionsEvent?.event_types?.filter(
      ({ name }) => name === optionsEventChange
    );

    const object = {
      event_date: date ? handleDateFormat(date) : "",
      postId: post ?? "",
      validity_start: since ?? "",
      validity_end: until ?? "",
      event_type_id: element && element[0]?.id,
      preview: 1,
    };
    objectData.current = object;

    dispatch(actCreateImage(object));
  };

  const goHome = () => navigate("/marcas");

  return {
    optionsEvent,
    eventForm,
    date,
    setDate,
    postsOptions,
    handleCreateImage,
    showDate,
    showVigency,
    title,
    subtitle,
    selectEventTypes,
    dateInput,
    validitySince,
    validityUntil,
    poster,
    imgMobile,
    imgTablet,
    imgDesktop,
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

export default useEventDetail;
