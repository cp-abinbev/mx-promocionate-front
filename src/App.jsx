import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Hooks
import useConfig from "./config";
import useRoutes from "./routes";
import useViews from "./views";
import GetGlobalHoc from "./hocs/getGlobalHoc";

const App = () => {
  const { Routes } = useRoutes();
  const { useSkeletons } = useViews();
  const { SpinnerLoadingIndicator } = useSkeletons();

  const { useInterceptor, useStoreConfig } = useConfig();
  const { store, persistor } = useStoreConfig();
  useInterceptor(store);

  return (
    <Provider store={store}>
      <SpinnerLoadingIndicator />
      <PersistGate persistor={persistor} loading={null}>
        <GetGlobalHoc>
          <Routes />
        </GetGlobalHoc>
      </PersistGate>
    </Provider>
  );
};

export default App;
