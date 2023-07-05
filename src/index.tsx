import App from "./App";
import GlobalStyles from "Global";
import React from "react";
import CartContextProvider from "contexts/CartContext";
import ImagePreviewContextProvider from "contexts/ImagePreviewContext";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <CartContextProvider>
      <ImagePreviewContextProvider>
        <App />
      </ImagePreviewContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
