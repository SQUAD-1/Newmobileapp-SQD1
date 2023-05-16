import { Link } from "react-router-dom";
import { BackButton } from "../../Components/BackButton";
import { HeaderRegister, RegisterButton, RegisterContainer, TitleInputArea, FormInput, InputArea } from "./styles";
import { SelectOption } from "../../Components/SelectOption";
import setores from "../../mocks/setores";
import { useState } from "react";
import axios from "axios";
import { Legend, LegendText } from "../../Components/FildestInput/styles";

interface UserRegisterProps {
  matricula: number;
  nome: string;
  funcao: string;
  email: string;
  senha: string;
  resolutor: number;
  setor_idSetor: number;
}

export const UserRegister = () => {

	const [formState, setFormState] = useState<UserRegisterProps>({
		matricula: 0,
		nome: "",
		funcao: "",
		email: "",
		senha: "",
		resolutor: 0,
		setor_idSetor: 0,
	});


	// eslint-disable-next-line no-unused-vars
	function PostRegister (formMatricula: number, formNome: string, formFuncao: string, formEmail: string, formSenha: string, formResolutor: number, formSetorIdSetor: number) {
		const matricula = formMatricula;
		const nome= formNome;
		const funcao = formFuncao;
		const email = formEmail;
		const senha = formSenha;
		const resolutor = formResolutor;
		const setor_idSetor = formSetorIdSetor;
		
		axios
			.post("https://fc-services-server.onrender.com/CadastrarUsuario", { matricula, nome, funcao, email, senha, resolutor, setor_idSetor })
			.then((response) => {
				localStorage.setItem("userData", JSON.stringify(response.data));
				window.location.href = "/Login";
			});
	}
  
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
				<InputArea>
					<Legend>
						<LegendText>{"Matrícula"}</LegendText>
					</Legend>
					<FormInput					
						onChange={(e: any) => {
							setFormState({
								...formState,
								matricula: e.target?.value,
							});
						}}
						placeholder="Ex: 99999"
						width="auto"
						height="56px"/>
				</InputArea>	
				<InputArea>
					<Legend>
						<LegendText>{"Nome"}</LegendText>
					</Legend>
					<FormInput					
						onChange={(e) => {
							setFormState({
								...formState,
								nome: e.target?.value,
							});
						}}
						placeholder="Ex: João de Barros"
						width="auto"
						height="56px"/>
				</InputArea>
				
				<TitleInputArea>O que você faz?</TitleInputArea>
				<SelectOption
					onChange={(e) => {
						setFormState({
							...formState,
							funcao: e.target?.value,
							resolutor: 0,
						});
					}}
					legendText="Setor"
					height="56px"
					width="auto">
					<option
						value=""
						disabled
						selected>
						Qual setor você trabalha?
					</option>
					{setores?.map((setor) => (
						<option
							key={setor.id}
							value={setor.setor}>
							{setor.setor}
						</option>
					))}
				</SelectOption>

				<SelectOption
					onChange={(e: any) => {
						setFormState({
							...formState,
							setor_idSetor: e.target?.value,
						});
					}}
					legendText="Cargo"
					height="56px"
					width="auto">
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
				<InputArea>
					<Legend>
						<LegendText>{"Email"}</LegendText>
					</Legend>
					<FormInput					
						onChange={(e) => {
							setFormState({
								...formState,
								email: e.target?.value,
							});
						}}
						placeholder="Ex: joao.barros@fc.com"
						width="auto"
						height="56px"/>
				</InputArea>	
				<InputArea>
					<Legend>
						<LegendText>{"Senha"}</LegendText>
					</Legend>
					<FormInput					
						onChange={(e) => {
							setFormState({
								...formState,
								senha: e.target?.value,
							});
						}}
						placeholder="Ex: Digite sua senha"
						width="auto"
						height="56px"/>
				</InputArea>

				<RegisterButton 							
					type="submit"
					// disabled={!isInactiveButton}
					// isInactive={!isInactiveButton}
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onClick={() => PostRegister(formState.matricula, formState.nome, formState.funcao, formState.email, formState.senha,  formState.resolutor, formState.setor_idSetor)}
				>
					{/* <img
								src={!isInactiveButton ? LoginDisabledIcon : LoginIcon}
								alt="ícone de entrar"> */}
          Cadastrar
				</RegisterButton>
			</RegisterContainer>
		</>
	);
};
