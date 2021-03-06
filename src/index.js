import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ListProductsProvider } from "./providers/listProducts";
import { CartProvider } from "./providers/cart";
import { ColorProvider } from "./providers/color";

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <ListProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ListProductsProvider>
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
