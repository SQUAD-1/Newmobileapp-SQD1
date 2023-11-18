"use client";
import { useState } from "react";
import { FcLogoMobile } from "@/assets/Icons";
// import { UserLoginProps, api } from "../../Services";
import {
	AccessButton,
	AsteriscText,
	ButtonLogin,
	ButtonSection,
	ContainerLogin,
	DivLogin,
	ForgotPassword,
	ForgotPasswordContainer,
	FormContainer,
	InputLogin,
	InputSection,
	LoginBoxContainer,
	LoginForgotText,
	LoginMobile,
	LoginText,
	Logo,
	PasswordInput,
	PasswordMobile,
	PasswordText,
	ScreenContainer,
	TextMobile,
	WelcomeText,
} from "./styles";

import { ClearDisabledIcon } from "@/assets/Icons";
import EyeIcon from "@/assets/Icons/eye.svg";
import EyeClosedIcon from "@/assets/Icons/eyeClosed.svg";
import HiddenIcon from "@/assets/Icons/hidden.svg";
import Lock from "@/assets/Icons/png/Lock.png";
import LockIcon from "@/assets/Icons/lock.svg";
import LoginIcon from "@/assets/Icons/login.svg";
import LoginDisabledIcon from "@/assets/Icons/loginDisabled.svg";
import WarnIcon from "@/assets/Icons/warn.svg";
import { LoadingScreen } from "../../components/LoadingScreen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CustomInput, Icon } from "@/components";
import EmailIcon from "@/assets/Icons/png/MailIcon.png";
import ClearIcon from "@/assets/Icons/png/ClearIcon.png";
import { CustomButton } from "@/components/Buttons/Button";

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
				{isLoading && <LoadingScreen />}
				<LoginMobile>
					<Logo>
						<FcLogoMobile />
					</Logo>
					<FormContainer>
						<TextMobile>Entrar</TextMobile>
						<InputSection>
							<CustomInput
								type="email"
								placeholder="Digite o seu email"
								labelText="Email"
								trailingButton={{ icon: ClearIcon, alt: "Limpar" }}
								leadingButton={{ icon: EmailIcon, alt: "Email" }}
								errorText="Formato inválido, tente novamente!"
							/>

							<CustomInput
								type={passwordVisible ? "text" : "password"}
								labelText="Senha"
								placeholder="Digite a sua senha"
								trailingButton={{
									icon: passwordVisible ? EyeClosedIcon : EyeIcon,
									alt: "Limpar",
									onClick: () => setPasswordVisible(!passwordVisible),
								}}
								leadingButton={{
									icon: Lock,
									alt: "Email",
									size: 24,
								}}
								height="58px"
								$status="valid"
								errorText="Formato inválido, tente novamente!"
							/>
						</InputSection>
						<ForgotPasswordContainer>
							<ForgotPassword href="/recuperar">Esqueci a Senha</ForgotPassword>
						</ForgotPasswordContainer>
					</FormContainer>
					<ButtonSection>
						<CustomButton
							$backgroundColor="#EA374D"
							color="#fff"
							onClick={() => alert("Logado!")}
							type="submit"
							text="Entrar"
							alt="ícone de entrar"
							height="2.6rem"
							disabled={isInactiveButton}
							icon={isInactiveButton ? LoginDisabledIcon : LoginIcon}
						/>
						<span>OU</span>
						<p>
							Não possui uma conta? <Link href="/cadastro">Cadastre-se </Link>
						</p>
					</ButtonSection>
				</LoginMobile>
			</ScreenContainer>
		</>
	);
};
