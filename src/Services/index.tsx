import axios from "axios";

export const api = axios.create({
	baseURL: "https://fc-services-server.onrender.com/",
});

export interface UserLoginProps {
	email: string;
	senha: string;
}

export function UserLogin(formEmail: string, formSenha: string) {
	const email = formEmail;
	const senha = formSenha;
	api
		.post("/Login", { email, senha })
		.then((response) => {
			localStorage.setItem("userData", JSON.stringify(response.data));
			window.location.href = "/home";
		})
		.catch(() => {
			alert("email ou senha inválido");
		});
}
