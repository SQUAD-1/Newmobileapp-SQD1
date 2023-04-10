import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { AttachMedia } from "./pages/AttachMedia";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/anexo" element={<AttachMedia />} />
        </Routes>
    );
};
