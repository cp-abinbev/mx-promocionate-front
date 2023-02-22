import useLoginActions from "./login";
import useProfileActions from "./profile";
import useSuggestionsActions from "./suggestions";

const useAuthActions = () => {
  return {
    useLoginActions,
    useProfileActions,
    useSuggestionsActions,
  };
};

export default useAuthActions;
