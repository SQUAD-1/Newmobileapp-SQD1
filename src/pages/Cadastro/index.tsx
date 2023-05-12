import { Link } from "react-router-dom";
import { BackButton } from "../../Components/BackButton";
import { HeaderRegister, RegisterContainer, TitleInputArea } from "./styles";
import { FildsetTextArea } from "../../Components/FildsetTextArea";
import { SelectOption } from "../../Components/SelectOption";
import { useEffect, useState } from "react";

export const UserRegister = () => {
	// interface FormRegister {
	// 	matricula: string;
	// 	nome: string;
	// 	setor: string;
	// 	cargo: string;
	// 	email: string;
	// 	senha: string;
	// }

	const [formRegister, setFormRegister] = useState([
		{
			matricula: "",
			nome: "",
			setor: "",
			cargo: "",
			email: "",
			senha: "",
		},
	]);

	useEffect(() => {
		console.log("teste", formRegister);
	}, [formRegister]);
	return (
		<>
			<RegisterContainer>
				<Link to="/login">
					<BackButton
						actionText={"Login"}
						color="#AA0E27"
						fontWeight={"600"}
					/>
				</Link>
				<HeaderRegister>
					Para começarmos, preencha as informações abaixo:
				</HeaderRegister>
				<TitleInputArea>Quem é você?</TitleInputArea>
				<FildsetTextArea
					legendText="Matrícula"
					placeholder="Ex: 99999"
					widht="auto"
					height="56px"
					getValue={(e) => {
						setFormRegister([
							...formRegister,
							{
								matricula: e,
								nome: "",
								setor: "",
								cargo: "",
								email: "",
								senha: "",
							},
						]);
					}}
				/>
				<FildsetTextArea
					legendText="Nome"
					placeholder="Ex: João de Barros"
					widht="auto"
					height="56px"
					getValue={(e) => {
						e;
					}}
				/>
				<TitleInputArea>O que você faz?</TitleInputArea>
				<SelectOption
					legendText="Setor"
					height="56px"
					widht="auto">
					<option
						value=""
						disabled
						selected>
						Qual setor você trabalha?
					</option>
					<option value="perdas">Prevenção de perdas</option>
					<option value="departamento pessoal">Departameno pessoal</option>
					<option value="Labs">T.I Labs</option>
					<option value="RH">Recursos Humanos</option>
					<option value="Contabilidade">Contabilidade</option>
					<option value="Financeiro">Financeiro</option>
					<option value="Compras">Compras</option>
				</SelectOption>

				<SelectOption
					legendText="Cargo"
					height="56px"
					widht="auto">
					<option
						value=""
						disabled
						selected>
						Qual seu cargo?
					</option>
					<option value="perdas">System Analytics</option>
					<option value="departamento pessoal">Software Engineer</option>
					<option value="Labs">Prompt Engineer</option>
					<option value="RH">Head of Technology</option>
					<option value="Contabilidade">Cientista de Dados</option>
					<option value="Financeiro">Vendedor</option>
					<option value="Compras">Analista de inovação</option>
				</SelectOption>
				<TitleInputArea>Crie seu acesso</TitleInputArea>
				<FildsetTextArea
					legendText="Email"
					placeholder="Ex: joao.barros@fc.com"
					widht="auto"
					height="56px"
					getValue={(e) => {
						e;
					}}
				/>
				<FildsetTextArea
					legendText="Senha"
					placeholder="Ex: Digite sua senha"
					widht="auto"
					height="56px"
					getValue={(e) => {
						e;
					}}
				/>
			</RegisterContainer>
		</>
	);
};
