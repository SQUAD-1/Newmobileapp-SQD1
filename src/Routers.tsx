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
import { UserRegister } from "./Pages/Cadastro";
import { useEffect, useState } from "react";

export const Routers = () => {
	const [tipoChamadoSelecionado, setTipoChamadoSelecionado] = useState("");

	useEffect(() => {
		setTipoChamadoSelecionado(tipoChamadoSelecionado);
	}, [tipoChamadoSelecionado, setTipoChamadoSelecionado]);

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
				element={
					<AbrirChamado tipoChamado={(e) => setTipoChamadoSelecionado(e)} />
				}
			/>
			<Route
				path="/CallDetails"
				element={<ChamadoScreen tipoSelecionado={tipoChamadoSelecionado} />}
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
			<Route
				path="/Cadastro"
				element={<UserRegister />}
			/>
		</Routes>
	);
};
