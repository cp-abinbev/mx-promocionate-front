import useLogin from "./login";
import useProfile from "./profile";
import useSuggestion from "./suggestions";

const useAuthControllers = () => {
  return { useLogin, useProfile, useSuggestion };
};

export default useAuthControllers;
