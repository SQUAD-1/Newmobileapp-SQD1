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
import { RecoverPassword } from "./Pages/ForgotPassword/RecoverPassword";
import { NewPassword } from "./Pages/ForgotPassword/NewPassword";
import { CodeVerification } from "./Pages/ForgotPassword/CodeVerification";

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
				path="/AbrirChamado"
				element={<AbrirChamado />}
			/>
			<Route
				path="/Chamado"
				element={<ChamadoScreen />}
			/>
			<Route
				path="/ConfirmarChamado"
				element={<ConfirmacaoScreen />}
			/>
			<Route
				path="/Login"
				element={<Login />}
			/>
			<Route
				path="/Chamado"
				element={<Chamados />}
			/>
			<Route
				path="/Configuracoes"
				element={<Settings />}
			/>
			<Route
				path="/MidiaChamado"
				element={<AttachMidia />}
			/>

			<Route
				path="/Solicitacoes"
				element={<Requests />}
			/>
			<Route
				path="/Cadastro"
				element={<UserRegister />}
			/>
			<Route
				path="/RecuperarSenha"
				element={<RecoverPassword />}
			/>
			<Route
				path="/NovaSenha"
				element={<NewPassword />}
			/>
			<Route
				path="/VerificacaoCodigo"
				element={<CodeVerification />}
			/>
		</Routes>
	);
};
