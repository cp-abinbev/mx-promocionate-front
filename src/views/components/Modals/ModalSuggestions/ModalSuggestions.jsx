import icon from "../../../../assets/iconCheckSuggestions.svg";
import useComponents from "../..";
import useControllers from "../../../../controllers";

const ModalSuggestions = ({ closeModal, goHome, text, title, button }) => {
  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmCloseSuggestionModal } = useDataLayers();
  const { Button } = useComponents();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-modalBg z-[2] flex items-end md:justify-center md:items-center backdrop">
      <div
        className="bg-white w-full flex flex-col rounded-t-[10px] px-[20px]  items-center
        md:w-[360px] md:h-[410px] md:rounded-b-[10px]"
      >
        <p
          className="font-barlow text-[30px]
          font-semibold mt-[55px] mb-[20px] flex self-start"
        >
          {title}
        </p>
        <p className="font-workSans text-[14px] font-normal mb-[30px]">
          {text}
        </p>
        <img src={icon} alt="checkmark" className="mb-[30px]" />
        <div className="mb-[30px] w-full flex items-center justify-center">
          <Button
            text={button}
            className="w-[90%] cursor-pointer"
            onPress={() => {
              gtmCloseSuggestionModal();
              closeModal(false);
              goHome();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSuggestions;
