import iconClose from "../../../../assets/IconClose.svg";
import useControllers from "../../../../controllers";
import useComponents from "../..";

const ModalPreview = ({ closeModal, closeDownload, goHome, data, text }) => {
  const { useScreenHooks, useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmReturnHome } = useDataLayers();
  const { useBrandsControllers } = useScreenHooks();
  const { usePreview } = useBrandsControllers();
  const { preview, downloadImage } = usePreview(data);
  const { Button } = useComponents();
  const { previewTitle, buttonDownload, backLink } = text;

  const onPressModal = () => {
    downloadImage();
    closeDownload(true);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-modalBg z-[2] flex items-end md:justify-end backdrop">
      <div
        className="bg-white w-full flex flex-col rounded-t-[10px] md:rounded-none px-[20px]
        items-center md:w-[900px] md:h-full md:justify-center"
      >
        <div
          className="w-full md:w-[500px]
          flex flex-col md:self-start md:ml-[100px]"
        >
          <img
            src={iconClose}
            alt="equis icon"
            className="w-[17px] self-end my-[22px] cursor-pointer"
            onClick={() => closeModal(false)}
          />
          <h3 className="font-barlowCondensed text-[20px] leading-[22px] self-start mb-[11px] md:mb-[30px]">
            {previewTitle[0]?.title}
          </h3>
          <img
            src={preview?.url_img}
            alt="poster"
            className="h-[384px] w-[216px] mb-[21px] md:mb-[50px] justify-center mx-auto"
          />
          <div className="w-full mb-[15px]">
            <Button
              text={buttonDownload[0]?.title}
              className="w-full"
              onPress={onPressModal}
            />
          </div>
          <button
            className="underline font-workSans font-semibold text-[16px] mb-[60px] md:mx-auto md:w-full"
            onClick={() => {
              gtmReturnHome("Image preview");
              goHome();
            }}
          >
            {backLink[0]?.title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPreview;
