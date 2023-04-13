import { Route, Routes } from "react-router-dom";
import { Chamados } from "./pages/Chamados";
import { AbrirChamado } from "./pages/Chamados/AbrirChamado";
import { ChamadoScreen } from "./pages/Chamados/TelaDoChamado";
import { ConfirmacaoScreen } from "./pages/Chamados/TelaDeConfirmação";
import { Login } from "./pages/Login";
import { NavigationBar } from "./Components/MenuNavegation";
import { Home } from "./pages/Home";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AbrirChamado" element={<AbrirChamado />} />
            <Route path="/TeladoChamado" element={<ChamadoScreen />} />
            <Route path="/TeladeConfirmação" element={<ConfirmacaoScreen />} />
            <Route path="/NavigationBar" element={<NavigationBar />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Chamados" element={<Chamados />} />
        </Routes>
    );
};
