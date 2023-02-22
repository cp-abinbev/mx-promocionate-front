const useAuthInitialStates = () => {
  const initialStateAuth = {
    id: "",
    code: "",
    name: "",
    shop_name: "",
    address: "",
    phone: "",
    control_price: 0,
    token: "",
    remember: false,
    isOld: false,
    documents: [],
    suggestionsCodes: [],
    suggestionTypes: [],
    popUp: [],
  };

  return { initialStateAuth };
};

export default useAuthInitialStates;
