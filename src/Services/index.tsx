import axios from "axios";

export const api = axios.create({
    baseURL: "",
});

export interface UserLoginProps {
    email: string;
    senha: string;
}

export const UserLogin = async (user: UserLoginProps) => {
    const url = "";

    try {
        await axios.post(url, user);
        window.location.href = "/Home";
    } catch {
        console.error("Usuário não encontrado");
    }
};
