import { Route, Routes } from 'react-router-dom';
import { Chamados } from './pages/Chamados';
import { AbrirChamado } from './pages/Chamados/AbrirChamado';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<AbrirChamado />} />
    </Routes>
  );
}

