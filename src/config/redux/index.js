//Packages
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { default as reduxImmutableStateInvariant } from "redux-immutable-state-invariant";

// Hooks
import useModels from "../../models";

const useStoreConfig = () => {
  // Models
  const { useReducers } = useModels();
  const reducers = useReducers();

  const initialState = {};
  let middlewaresToApply = [thunk];

  const persistConfig = {
    key: "root",
    storage,
    blacklist: [],
  };

  const persistReduce = persistReducer(persistConfig, reducers);

  if (import.meta.env.DEV) {
    middlewaresToApply = [
      ...middlewaresToApply,
      reduxImmutableStateInvariant(),
    ];
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(applyMiddleware(...middlewaresToApply))
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default useStoreConfig;
