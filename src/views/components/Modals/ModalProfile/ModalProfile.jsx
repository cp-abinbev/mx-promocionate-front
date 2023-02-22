import iconProfile from "../../../../assets/iconUser.svg";
import iconSuggestions from "../../../../assets/iconSuggestions.svg";
import { useNavigate } from "react-router-dom";
import useControllers from "../../../../controllers";

const ModalProfile = ({ closeModal }) => {
  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmClickIconProfile, gtmClickIconSuggestions } = useDataLayers();
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-modalBg backdrop z-[2] flex items-end"
      onClick={() => closeModal(false)}
    >
      <div className="bg-white w-full flex flex-col rounded-t-[10px] px-[20px]  items-center">
        <div
          className="flex items-center mt-[50px] mb-[18px] self-start gap-[10px] cursor-pointer w-full"
          onClick={() => {
            gtmClickIconProfile();
            navigate("/perfil");
            closeModal(false);
          }}
        >
          <img src={iconProfile} alt="user" />
          <p className="font-barlow text-[20px] font-semibold flex self-end">
            Perfil
          </p>
        </div>
        <hr className="w-full border-[1px] border-solid border-[rgb(211,211,211)] mb-[18px]" />
        <div
          className="flex items-center mb-[30px] self-start gap-[10px] cursor-pointer w-full"
          onClick={() => {
            gtmClickIconSuggestions();
            navigate("/sugerencias");
            closeModal(false);
          }}
        >
          <img src={iconSuggestions} alt="suggestions" />
          <p className="font-barlow text-[20px] font-semibold flex self-end">
            Sugerencias
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
