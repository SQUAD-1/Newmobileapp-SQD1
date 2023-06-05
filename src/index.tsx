import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Routers } from "./Routers";
import { GlobalStyle } from "./styles/global-styles";
import { TypeCallProvider } from "./Assets/Contexts";
import { firebaseInit } from "./Services";

firebaseInit(false, false);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<TypeCallProvider>
			<BrowserRouter>
				<GlobalStyle />
				<Routers />
			</BrowserRouter>
		</TypeCallProvider>
	</React.StrictMode>
);

reportWebVitals();
