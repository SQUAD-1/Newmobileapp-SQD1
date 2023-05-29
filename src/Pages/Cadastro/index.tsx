import { Link } from "react-router-dom";
import { BackButton } from "../../Components/BackButton";
import {
	HeaderRegister,
	RegisterButton,
	RegisterContainer,
	TitleInputArea,
	FormInput,
	InputArea,
	PasswordText,
	RightImg,
} from "./styles";
import { SelectOption } from "../../Components/SelectOption";
import setores from "../../mocks/setores";
import { useState } from "react";
import axios from "axios";
import RegisterIcon from "./images/Register.png";
import RegisterIconGray from "./images/RegisterGray.png";
import { LoadingScreen } from "../../Components/LoadingScreen";
import EyeIcon from "../Login/svg/eye.svg";
import EyeClosedIcon from "../Login/svg/eyeClosed.svg";
import { InputLegend } from "../../Components/FildestInput";
import { Modal } from "../../Components/Modal";
import ClearIcon from "../../Assets/clear.svg";
import ClearDisabledIcon from "../../Pages/Login/svg/clearDisabled.svg";

interface UserRegisterProps {
	matricula: number;
	nome: string;
	funcao: string;
	email: string;
	senha: string;
	resolutor: number;
	setor_idSetor: number;
	filial_idFilial: number;
}

export const UserRegister = () => {
	const [cargos, setCargos] = useState<{ nome: string }[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const [formState, setFormState] = useState<UserRegisterProps>({
		matricula: 0,
		nome: "",
		funcao: "",
		email: "",
		senha: "",
		resolutor: 0,
		setor_idSetor: 0,
		filial_idFilial: 0,
	});

	const [openModal, setOpenModal] = useState(false);
	const validEmail = /[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$/;

	const isDisabledButton =
		validEmail.test(formState.email) &&
		formState.nome.length >= 8 &&
		formState.senha.length >= 5;

	const verifyModal = () => {
		if (!openModal) {
			setOpenModal(true);

			setTimeout(() => {
				window.location.href = "/Login";
			}, 3000);
		}
	};

	function PostRegister(
		formMatricula: number,
		formNome: string,
		formFuncao: string,
		formEmail: string,
		formSenha: string,
		formResolutor: number,
		formSetorIdSetor: number,
		formFilialIdFilial: number
	) {
		const matricula = formMatricula;
		const nome = formNome;
		const funcao = formFuncao;
		const email = formEmail;
		const senha = formSenha;
		const resolutor = formResolutor;
		const setor_idSetor = formSetorIdSetor;
		const filial_idFilial = formFilialIdFilial;

		axios
			.post("https://fc-services-server.onrender.com/CadastrarUsuario", {
			.post("https://fc-services-server.onrender.com/CadastrarUsuario", {
				matricula,
				nome,
				funcao,
				email,
				senha,
				resolutor,
				setor_idSetor,
				filial_idFilial,
			})
			.then(() => {
				verifyModal();
			})
			.finally(() => {
				setIsLoading(false);
				verifyModal();
			});
	}

	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<>
			{isLoading === true ? (
				<LoadingScreen />
			) : (
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
					<InputLegend
						legendText="Matrícula"
						maxLength={5}
						inputType="tel"
						value={String(formState.matricula)}
						onChange={(e) => {
							setFormState({
								...formState,
								matricula: e.target?.value,
							});
						}}
						placeholder="Ex: 99999"
						border="1px solid #49454f"
						width="auto"
						hasImage
						source={formState.matricula < 5 ? ClearDisabledIcon : ClearIcon}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, matricula: Number("") });
						}}
					/>
					<InputLegend
						legendText="Nome"
						maxLength={80}
						inputType="text"
						value={formState.nome}
						onChange={(e) => {
							setFormState({
								...formState,
								nome: e.target?.value,
							});
						}}
						placeholder="Ex: João de Barros"
						border="1px solid #49454f"
						width="auto"
						hasImage
						source={formState.nome.length < 10 ? ClearDisabledIcon : ClearIcon}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, nome: "" });
						}}
					/>
					<TitleInputArea>Qual sua filial?</TitleInputArea>
					<SelectOption
						onChange={(e) => {
							setFormState({
								...formState,
								filial_idFilial: Number(e.target?.value),
							});
						}}
						legendText="Filial"
						height="56px"
						width="auto">
						<option
							value=""
							disabled
							selected>
							Qual sua filial?
						</option>
						<option value="1">Garanhuns - PE</option>
						<option value="2">Imbiribeira - PE</option>
						<option value="3">Salvador - BA</option>
						<option value="4">Tamarineira - PE</option>
						<option value="5">Aracaju - SE</option>
						<option value="6">João Pessoa - PB</option>
						<option value="7">Natal - RN</option>
						<option value="8">Caruaru - PE</option>
					</SelectOption>
					<TitleInputArea>O que você faz?</TitleInputArea>
					<SelectOption
						onChange={(e) => {
							const setorId = Number(e.target.value);
							const selectedSetor = setores.find(
								(setor) => setor.id === setorId
							);
							const selectedCargos = selectedSetor?.cargos || [];
							setCargos(selectedCargos);
							setFormState({
								...formState,
								setor_idSetor: setorId,
								funcao: "",
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
								value={setor.id}>
								{setor.setor}
							</option>
						))}
					</SelectOption>
					<SelectOption
						onChange={(e) => {
							setFormState({
								...formState,
								funcao: e.target?.value,
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
						{cargos?.map((cargo) => (
							<option
								key={cargo.nome}
								value={cargo.nome}>
								{cargo.nome}
							</option>
						))}
					</SelectOption>
					<TitleInputArea>Crie seu acesso</TitleInputArea>
					<InputLegend
						legendText="Email"
						maxLength={45}
						hasImage
						value={formState.email}
						onChange={(e) => {
							setFormState({
								...formState,
								email: e.target?.value,
							});
						}}
						placeholder="Ex: joao.barros@fc.com"
						height="56px"
						pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
						width="auto"
						border="1px solid #49454f"
						source={formState.email.length < 10 ? ClearDisabledIcon : ClearIcon}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, email: "" });
						}}
					/>
					<InputLegend
						legendText="Senha"
						inputType={passwordVisible ? "text" : "password"}
						maxLength={38}
						minLength={8}
						hasImage
						source={passwordVisible ? EyeClosedIcon : EyeIcon}
						onChange={(e) => {
							setFormState({
								...formState,
								senha: e.target?.value,
							});
						}}
						placeholder="Digite sua senha"
						height="56px"
						required
					/>
					{formState.senha.length < 8 && formState.senha.length > 1 && (
						<PasswordText>Senha deve ter no mínimo 8 caracteres</PasswordText>
					)}
					<RegisterButton
						type="submit"
						disabled={!isDisabledButton}
						onClick={() => {
							PostRegister(
								Number(formState.matricula),
								formState.nome,
								formState.funcao,
								formState.email,
								formState.senha,
								formState.resolutor,
								Number(formState.setor_idSetor),
								Number(formState.filial_idFilial)
							);
							setIsLoading(true);
						}}>
						<img
							src={!isDisabledButton ? RegisterIconGray : RegisterIcon}
							alt="ícone de cadastro"
							onClick={() => {
								setFormState({ ...formState, email: "" });
							}}
						/>
						Cadastrar
					</RegisterButton>
					<Modal
						message={"Usuário cadastrado com sucesso!"}
						isTrue={openModal}
					/>
				</RegisterContainer>
			)}
		</>
	);
};
