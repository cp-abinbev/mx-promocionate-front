import { useEffect } from "react";
import useComponents from "../..";
import useControllers from "../../../../controllers";

const ModalDownloadPoster = ({ closeModal, goHome, data }) => {
  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmDownloadSucces, gtmUnderstandDownload, gtmReturnHome } =
    useDataLayers();
  const { Button } = useComponents();
  const { previewModalButton, previewModalText, backLink, previewModalTitle } =
    data;

  useEffect(() => {
    gtmDownloadSucces();
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-modalBg z-[2] flex items-end md:justify-center md:items-center backdrop">
      <div className="bg-white w-full flex flex-col rounded-t-[10px] px-[20px] md:w-[360px] md:h-[275px] md:rounded-b-[10px]">
        <h3 className="font-semibold font-barlow text-[30px] my-[24px]">
          {previewModalTitle[0]?.title}
        </h3>
        <p className="text-[14px] font-workSans mb-[45px]">
          {previewModalText[0]?.title}
        </p>
        <div className="w-full mb-[15px]">
          <Button
            text={previewModalButton[0]?.title}
            className="w-full"
            onPress={() => {
              gtmUnderstandDownload();
              closeModal(false);
            }}
          />
        </div>
        <button
          className="underline font-workSans font-semibold text-[16px] mb-[50px] md:hidden"
          onClick={() => {
            gtmReturnHome("Download Content");
            goHome();
          }}
        >
          {backLink[0]?.title}
        </button>
      </div>
    </div>
  );
};

export default ModalDownloadPoster;
