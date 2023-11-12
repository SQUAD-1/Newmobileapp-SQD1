"use client";
import { useState } from "react";
import { LogoFC } from "@/assets/Icons";
import { Header } from "@/components";
// import { UserLoginProps, api } from "../../Services";
import {
	AsteriscText,
	ButtonLogin,
	ButtonSection,
	ContainerLogin,
	DivLogin,
	EmailInput,
	EmailMobile,
	ForgotPassword,
	FormContainer,
	InputLogin,
	InputSection,
	LeftImg,
	LogIn,
	LoginBoxContainer,
	LoginForgotText,
	LoginMobile,
	LoginText,
	Logo,
	PasswordInput,
	PasswordMobile,
	PasswordText,
	RightImg,
	ScreenContainer,
	TextMobile,
	WelcomeText,
} from "./styles";
import { ClearIcon } from "@/assets/Icons";
import { ClearDisabledIcon } from "@/assets/Icons";
import EmailIcon from "@/assets/Icons/email.svg";
import EyeIcon from "@/assets/Icons/eye.svg";
import EyeClosedIcon from "@/assets/Icons/eyeClosed.svg";
import HiddenIcon from "@/assets/Icons/hidden.svg";
import LockIcon from "@/assets/Icons/lock.svg";
import LoginIcon from "@/assets/Icons/login.svg";
import LoginDisabledIcon from "@/assets/Icons/loginDisabled.svg";
import WarnIcon from "@/assets/Icons/warn.svg";
import { LoadingScreen } from "../../components/LoadingScreen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserLoginProps {
	email: string;
	senha: string;
}

export const LoginPage = () => {
	const [isCorrectLogin, setIsCorrectLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formState, setFormState] = useState<UserLoginProps>({
		email: "",
		senha: "",
	});
	const [passwordVisible, setPasswordVisible] = useState(false);

	const router = useRouter();

	const isInactiveButton = false;
	const validEmail = false;
	return (
		<>
			<ScreenContainer>
				{isLoading ? <LoadingScreen /> : undefined}
				<Header />
				<LoginBoxContainer>
					<ContainerLogin>
						<WelcomeText>Seja bem vindo(a)!</WelcomeText>
						<LoginText>
							Email <AsteriscText>*</AsteriscText>
						</LoginText>
						<InputLogin
							type={"text"}
							placeholder="Digite seu email"
							required
						/>
						<LoginText>
							Senha <AsteriscText>*</AsteriscText>
						</LoginText>
						<DivLogin>
							<InputLogin
								type={"password"}
								placeholder="Digite sua senha"
								required
							/>
							<Image
								src={HiddenIcon}
								alt="ícone de ocultar senha"
							/>
						</DivLogin>
						<LoginForgotText className="GoLeft">
							Esqueci a senha
						</LoginForgotText>
						<ButtonLogin
							onClick={() => {
								router.push("/");
							}}>
							Entrar
						</ButtonLogin>
					</ContainerLogin>
				</LoginBoxContainer>

				<LoginMobile>
					<Logo>
						<LogoFC />
					</Logo>
					<FormContainer>
						<TextMobile>
							<h1>Entrar</h1>
						</TextMobile>
						<InputSection>
							<EmailInput>
								<EmailMobile
									type="email"
									placeholder="Digite o seu email"
									required
									value={formState.email}
									pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
									onChange={(e) => {
										setFormState({
											...formState,
											email: e.target.value,
										});
									}}
								/>
								{!validEmail && formState.email.length > 1 && (
									<>
										<span style={{ padding: "2px" }}>
											Formato inválido, tente novamente!
										</span>
										<RightImg
											src={WarnIcon}
											alt=""
										/>
									</>
								)}
								{isCorrectLogin && (
									<>
										<span>Email ou senha inválido</span>
									</>
								)}
								<LeftImg
									src={EmailIcon}
									alt="Email Icon"
								/>

								{formState.email.length < 1 ? (
									<ClearDisabledIcon />
								) : validEmail ? (
									<ClearIcon />
								) : (
									""
								)}
							</EmailInput>
							<PasswordInput>
								<PasswordMobile
									type={passwordVisible ? "text" : "password"}
									placeholder="Digite a sua senha"
									onChange={(e) => {
										setFormState({
											...formState,
											senha: e.target.value,
										});
									}}
									minLength={8}
									required
								/>
								{formState.senha.length < 8 && formState.senha.length > 1 && (
									<PasswordText>
										Senha deve ter no mínimo 8 caracteres
									</PasswordText>
								)}

								<LeftImg
									src={LockIcon}
									alt="Lock Icon"
								/>
								<RightImg
									src={passwordVisible ? EyeClosedIcon : EyeIcon}
									alt="Hide password"
									onClick={() => {
										setPasswordVisible(!passwordVisible);
									}}
								/>
								<ForgotPassword>
									<Link href="/recuperar-senha">
										<span>Esqueci a senha</span>
									</Link>
								</ForgotPassword>
							</PasswordInput>
						</InputSection>
					</FormContainer>
					<ButtonSection>
						<LogIn
							type="submit"
							disabled={!isInactiveButton}
							isInactive={!isInactiveButton}
							onClick={() => alert("Logado!")}>
							<img
								src={!isInactiveButton ? LoginDisabledIcon : LoginIcon}
								alt="ícone de entrar"
							/>
							Entrar
						</LogIn>
						<span>OU</span>
						<Link href="/cadastro">
							<p>
								Não possui uma conta? <span>Cadastre-se</span>
							</p>
						</Link>
					</ButtonSection>
				</LoginMobile>
			</ScreenContainer>
		</>
	);
};
