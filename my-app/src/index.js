import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {ProductProvider} from "./context/product-context";
import { BrowserRouter } from "react-router-dom"
import { ProductListingContextProvider } from "./context/product-listing-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ProductListingContextProvider>
          <App />
        </ProductListingContextProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
