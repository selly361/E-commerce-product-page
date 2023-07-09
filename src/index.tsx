import App from "./App";
import CartContextProvider from "contexts/CartContext";
import GlobalStyles from "Global";
import ImagePreviewContextProvider from "contexts/ImagePreviewContext";
import MobileMenuContextProvider from "contexts/MobileMenuContext";
import React from "react";
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
        <MobileMenuContextProvider>
          <App />
        </MobileMenuContextProvider>
      </ImagePreviewContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
