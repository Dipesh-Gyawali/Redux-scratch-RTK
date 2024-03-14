import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Route } from "./routes/routes.tsx";
import { store } from "../src/app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter basename="/">
    <React.StrictMode>
      {/* <BrowserRouter> */}
        <Provider store={store}>
          <App />
          <Route></Route>
        </Provider>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </HashRouter>
);
