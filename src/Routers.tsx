import { Route, Routes } from "react-router-dom";
import { Chamados } from "./pages/Chamados";
import { AbrirChamado } from "./pages/Chamados/AbrirChamado";
import { ChamadoScreen } from "./pages/Chamados/TelaDoChamado";
import { ConfirmacaoScreen } from "./pages/Chamados/TelaDeConfirmação";
import { Home } from "./pages/Home";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<AbrirChamado />} />
            <Route path="/home" element={<Home />} />
            <Route path="/teladochamado" element={<ChamadoScreen />} />
            <Route path="/teladeconfirmação" element={<ConfirmacaoScreen />} />
        </Routes>
    );
};
