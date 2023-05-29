import { BackButton } from "../../../Components/BackButton";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import { Button } from "../../../Components/Button";
import UserFound from "../../../Assets/Images/UserFound.png";
import EyeIcon from "../../Login/svg/eye.svg";
import EyeClosedIcon from "../../Login/svg/eyeClosed.svg";
import { InputLegend } from "../../../Components/FildestInput";
import { Link } from "react-router-dom";
import {
	RecoverPasswordContainer,
	InputContainer,
	ContainerButton,
} from "../RecoverPassword/styles";
import { useState } from "react";
import { ButtonSubmit, PasswordText, Title } from "./styles";
import axios from "axios";
import { LoadingScreen } from "../../../Components/LoadingScreen";

interface NewPasswordProps {
	matricula: number;
	novaSenha: string;
	confirmacaoSenha: string;
}

export const NewPassword = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [newPasswordForm, setNewPasswordForm] = useState<NewPasswordProps>({
		matricula: 0,
		novaSenha: "",
		confirmacaoSenha: "",
	});

	async function PutNewPassword(
		formMatricula: number,
		formNovaSenha: string,
		formConfirmacaoSenha: string
	) {
		setIsLoading(true);
		const matricula = formMatricula;
		const novaSenha = formNovaSenha;
		const confirmacaoSenha = formConfirmacaoSenha;

		await axios
			.put(
				"https://fc-services-server.onrender.com/alterar-senha/" + matricula,
				{
					novaSenha,
					confirmacaoSenha,
				}
			)
			.then(() => {
				window.location.href = "/Login";
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<>
			{isLoading === true ? <LoadingScreen /> : undefined}
			<RecoverPasswordContainer>
				<Link to="/login">
					<BackButton
						actionText={"Login"}
						color="#AA0E27"
						fontWeight={"600"}
					/>
				</Link>
				<BoxEmpty
					title="Identidade Confirmada!"
					color="#68A439"
					fontSize="16px"
					icon={UserFound}
				/>
				<InputContainer>
					<Title>Digite uma nova senha:</Title>
					<InputLegend
						legendText="Nova senha"
						inputType={passwordVisible ? "text" : "password"}
						maxLength={38}
						minLength={8}
						hasImage
						source={passwordVisible ? EyeClosedIcon : EyeIcon}
						onChange={(e) => {
							setNewPasswordForm({
								...newPasswordForm,
								novaSenha: e.target?.value,
							});
						}}
						onClickImage={() => {
							setPasswordVisible(!passwordVisible);
						}}
						placeholder="Digite sua senha"
						height="56px"
						width="auto"
						border="1px solid #49454f"
					/>
					{newPasswordForm.novaSenha.length < 8 &&
						newPasswordForm.novaSenha.length > 1 && (
							<PasswordText>
								A senha deve ter no mínimo 8 caracteres!
							</PasswordText>
						)}
					<InputLegend
						legendText="Confirmar senha"
						inputType={newPasswordVisible ? "text" : "password"}
						maxLength={38}
						minLength={8}
						hasImage
						source={newPasswordVisible ? EyeClosedIcon : EyeIcon}
						onChange={(e) => {
							setNewPasswordForm({
								...newPasswordForm,
								confirmacaoSenha: e.target?.value,
							});
						}}
						onClickImage={() => {
							setNewPasswordVisible(!newPasswordVisible);
						}}
						placeholder="Digite sua senha"
						height="56px"
						width="auto"
						border="1px solid #49454f"
					/>
					{newPasswordForm.confirmacaoSenha.length < 8 &&
						newPasswordForm.confirmacaoSenha.length > 1 && (
							<PasswordText>
								A senha deve ter no mínimo 8 caracteres!
							</PasswordText>
						)}
					{newPasswordForm.confirmacaoSenha !== "" &&
						newPasswordForm.confirmacaoSenha.length >= 8 &&
						newPasswordForm.confirmacaoSenha !== newPasswordForm.novaSenha && (
							<PasswordText>
								Digite a mesma senha em ambos os campos!
							</PasswordText>
						)}
				</InputContainer>

				<ContainerButton>
					<ButtonSubmit
						onClick={() => {
							PutNewPassword(
								Number(newPasswordForm.matricula),
								newPasswordForm.novaSenha,
								newPasswordForm.confirmacaoSenha
							);
							setIsLoading(true);
						}}>
						Alterar senha
					</ButtonSubmit>
					<Button
						text="Voltar"
						bg="transparent"
						color="#635F60"
						colorBorder="#635F60"
						nextPage="/VerificacaoCodigo"
					/>
				</ContainerButton>
			</RecoverPasswordContainer>
		</>
	);
};
