import ContactUs from "./ModalDefault";
import Share from "./ModalShare";
import Info from "./ModalInfo";
import Preview from "./ModalPreview";
import Profile from "./ModalProfile";
import Suggestions from "./ModalSuggestions";
import Download from "./ModalDownloadPoster";
import Filter from "./ModalFilter";
import useAgeGates from "./ModalAgeGate";

const useModals = () => {
  const { AgeGate } = useAgeGates();

  return {
    Filter,
    ContactUs,
    Share,
    AgeGate,
    Info,
    Preview,
    Profile,
    Download,
    Suggestions,
  };
};

export default useModals;
