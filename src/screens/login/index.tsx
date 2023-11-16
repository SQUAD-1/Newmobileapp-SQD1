"use client";
import { useState } from "react";
import { FcLogoMobile } from "@/assets/Icons";
// import { UserLoginProps, api } from "../../Services";
import {
	AsteriscText,
	ButtonLogin,
	ButtonSection,
	ContainerLogin,
	DivLogin,
	ForgotPassword,
	FormContainer,
	InputLogin,
	InputSection,
	LogIn,
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
								labelText="Email"
								trailingButton={{ icon: ClearIcon, alt: "Limpar" }}
								leadingButton={{ icon: EmailIcon, alt: "Email" }}
								errorText="Formato inválido, tente novamente!"
							/>

							<CustomInput
								type="password"
								labelText="Senha"
								trailingButton={{ icon: EyeIcon, alt: "Limpar" }}
								leadingButton={{ icon: LockIcon, alt: "Email", size: 34 }}
							/>
						</InputSection>
					</FormContainer>
					<ButtonSection>
						<LogIn
							type="submit"
							disabled={!isInactiveButton}
							$isInactive={!isInactiveButton}
							onClick={() => alert("Logado!")}>
							<Icon
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
