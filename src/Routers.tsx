import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { AbrirChamado } from './pages/Chamados/AbrirChamado';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Chamado />} />
    </Routes>
  );
}

