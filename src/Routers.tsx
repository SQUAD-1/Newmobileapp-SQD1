import { Route, Routes } from 'react-router-dom';
import { Chamados } from './pages/Chamados';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Chamados />} />
    </Routes>
  );
}

