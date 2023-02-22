const useCreateReducer = () => {
  const createReducer =
    (initialState, handler) =>
    (state = initialState, action) =>
      handler?.hasOwnProperty(action.type)
        ? handler[action.type](state, action)
        : state;

  return {
    createReducer,
  };
};

export default useCreateReducer;
