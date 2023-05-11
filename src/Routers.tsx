import { Route, Routes } from "react-router-dom";
import { Chamados } from "./Pages/Chamados";
import { AbrirChamado } from "./Pages/Chamados/AbrirChamado";
import { ChamadoScreen } from "./Pages/Chamados/TelaDoChamado";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Settings } from "./Pages/Settings";
import { Requests } from "./Pages/Requests";
import { AttachMidia } from "./Pages/Chamados/AttachMedia";
import { ConfirmacaoScreen } from "./Pages/Chamados/TelaDeConfirmação";

export const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Login />}
			/>
			<Route
				path="/Home"
				element={<Home />}
			/>
			<Route
				path="/OpenCall"
				element={<AbrirChamado />}
			/>
			<Route
				path="/CallDetails"
				element={<ChamadoScreen />}
			/>
			<Route
				path="/CallConfirmation"
				element={<ConfirmacaoScreen />}
			/>
			<Route
				path="/Login"
				element={<Login />}
			/>
			<Route
				path="/Calls"
				element={<Chamados />}
			/>
			<Route
				path="/Settings"
				element={<Settings />}
			/>
			<Route
				path="/AttachMidia"
				element={<AttachMidia />}
			/>

			<Route
				path="/Requests"
				element={<Requests />}
			/>
		</Routes>
	);
};
