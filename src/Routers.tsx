import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { NavigationBar } from './Components/MenuNavegation';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />} />
    </Routes>
  );
}

