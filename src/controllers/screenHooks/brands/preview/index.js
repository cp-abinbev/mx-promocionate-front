// Hooks
import useControllers from "../../..";
import useModels from "../../../../models";
import useApi from "../../../../api";

const usePreview = (data) => {
  const { useGeneralHooks } = useControllers();
  const { useToggleModal, useDataLayers } = useGeneralHooks();
  const [shareModalOpen, toggleShareModal] = useToggleModal();
  const [linkCopiedNotificationOpen, toggleLinkCopiedNotification] =
    useToggleModal({ closeOnTime: true });
  const { gtmShareImage, gtmDownloadImage, gtmOpenWhatsapp, gtmCopyLink } =
    useDataLayers();

  const { useActions } = useApi();
  const { dispatch, useShareActions, useBrandsActions } = useActions();
  const { useBrandDetailActions } = useBrandsActions();
  const { actCreateImage } = useBrandDetailActions();
  const { actGetImgPreview } = useShareActions();

  const { useSelectors } = useModels();
  const { useSelector, useBrandsSelectors, useHocsSelectors } = useSelectors();
  const { previewSelector } = useBrandsSelectors();
  const preview = useSelector(previewSelector);

  const { bgScreenSelector } = useHocsSelectors();
  const bgImages = useSelector(bgScreenSelector);
  const previewImg = bgImages?.filter(({ type }) => type === "crearPoster");

  const handleOpenShareModal = () => {
    gtmShareImage();
    toggleShareModal();
  };

  const downloadImage = async () => {
    gtmDownloadImage();
    const object = { ...data.current, preview: 0 };
    dispatch(actCreateImage(object));
    const res = await fetch(preview?.url_img);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${preview.shop_name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSuccess = ({ url }) => {
    const md = new MobileDetect(window.navigator.userAgent);
    window.open(
      md.mobile()
        ? `https://wa.me/?text=${url}`
        : `https://web.whatsapp.com/send?text=${url}`,
      "_blank"
    );
  };

  const handleShareOnWhatsapp = () => {
    gtmOpenWhatsapp();
    dispatch(actGetImgPreview({ previewId: preview.id, onSuccess }));
  };

  const handleCopyLinkToClipboard = async () => {
    gtmCopyLink();
    const textToCopy = preview.url_img;
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(textToCopy);
      return toggleLinkCopiedNotification();
    } else {
      document.execCommand("copy", true, textToCopy);
      return toggleLinkCopiedNotification();
    }
  };

  return {
    preview,
    shareModalOpen,
    toggleShareModal,
    linkCopiedNotificationOpen,
    handleOpenShareModal,
    downloadImage,
    handleShareOnWhatsapp,
    handleCopyLinkToClipboard,
    previewImg,
  };
};

export default usePreview;
