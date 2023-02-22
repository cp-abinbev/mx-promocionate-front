import useLoginProviders from "./login";
import useProfileProviders from "./profile";
import useSuggestionsProviders from "./suggestions";

const useAuthProviders = () => {
  return {
    useLoginProviders,
    useProfileProviders,
    useSuggestionsProviders,
  };
};

export default useAuthProviders;
