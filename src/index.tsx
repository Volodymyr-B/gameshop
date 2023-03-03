import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";

import { StyledEngineProvider } from "@mui/material";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./firebase/firebase";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StyledEngineProvider injectFirst>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </StyledEngineProvider>
);
