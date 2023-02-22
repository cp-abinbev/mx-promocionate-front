import { createRoot } from "react-dom/client";
import TagManager from "react-gtm-module";

import App from "./App";
import "./styles/index.css";

const tagManagerArgs = {
  gtmId: `${import.meta.env.VITE_GTM_ID}`,
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(<App />);
