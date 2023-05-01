import { Route, Routes } from "react-router-dom";
import { Chamados } from "./pages/Chamados";
import { AbrirChamado } from "./pages/Chamados/AbrirChamado";
import { ChamadoScreen } from "./pages/Chamados/TelaDoChamado";
import { ConfirmacaoScreen } from "./pages/Chamados/TelaDeConfirmação";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/OpenCall" element={<AbrirChamado />} />
            <Route path="/CallDetails" element={<ChamadoScreen />} />
            <Route path="/CallConfirmation" element={<ConfirmacaoScreen />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Calls" element={<Chamados />} />
            <Route path="/Settings" element={<Settings />} />
            {/* <Route path="/AttachMidia" element={<AnexarMidia />} /> */}
        </Routes>
    );
};
