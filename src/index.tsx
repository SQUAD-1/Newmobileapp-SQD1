import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Routers } from "./Routers";
import { GlobalStyle } from "./styles/global-styles";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Routers />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
