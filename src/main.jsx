import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
