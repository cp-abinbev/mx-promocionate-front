//Hooks
import useModels from "../../../models";

const useIsAuth = () => {
  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const { token, tyc } = useSelector(authSelector);

  return { isAuth: !!token && !!tyc, isUser: !!token };
};

export default useIsAuth;
