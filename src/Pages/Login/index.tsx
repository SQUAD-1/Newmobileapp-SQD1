import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fclogomobile } from "../../Assets";
import { Header } from "../../Components/Header";
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
import ClearIcon from "./svg/clear.svg";
import ClearDisabledIcon from "./svg/clearDisabled.svg";
import WarnIcon from "./svg/warn.svg";
import EmailIcon from "./svg/email.svg";
import EyeIcon from "./svg/eye.svg";
import EyeClosedIcon from "./svg/eyeClosed.svg";
import HiddenIcon from "./svg/hidden.svg";
import LockIcon from "./svg/lock.svg";
import LoginIcon from "./svg/login.svg";
import LoginDisabledIcon from "./svg/loginDisabled.svg";
import { /* UserLogin, */ UserLoginProps } from "../../Services";

export const Login = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState<UserLoginProps>({
        email: "",
        senha: "",
    });

    /* const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        try {
            await UserLogin(formState);
        } catch (error) {
            alert("algo deu errado!");
        }
    }; */

    const [passwordVisible, setPasswordVisible] = useState(false);

    const validEmail = /[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$/;

    const isInactiveButton =
        validEmail.test(formState.email) && formState.senha.length >= 8;

    return (
        <ScreenContainer>
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
                        <img src={HiddenIcon} alt="ícone de ocultar senha" />
                    </DivLogin>
                    <LoginForgotText className="GoLeft">
                        Esqueci a senha
                    </LoginForgotText>
                    <ButtonLogin
                        onClick={() => {
                            navigate("/Home");
                        }}
                    >
                        Entrar
                    </ButtonLogin>
                </ContainerLogin>
            </LoginBoxContainer>

            <LoginMobile>
                <Logo>
                    <Fclogomobile />
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
                            {!validEmail.test(formState.email) &&
                                formState.email.length > 1 && (
                                    <>
                                        <span>
                                            Formato inválido, tente novamente!
                                        </span>
                                        <RightImg src={WarnIcon} />
                                    </>
                                )}
                            <LeftImg src={EmailIcon} alt="Email Icon" />
                            <RightImg
                                onClick={() => {
                                    setFormState({ ...formState, email: "" });
                                }}
                                src={
                                    formState.email.length < 1
                                        ? ClearDisabledIcon
                                        : validEmail.test(formState.email)
                                            ? ClearIcon
                                            : ""
                                }
                            />
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
                            {formState.senha.length < 8 &&
                                formState.senha.length > 1 && (
                                    <PasswordText>
                                        Senha deve ter no mínimo 8 caracteres
                                    </PasswordText>
                                )}
                            <LeftImg src={LockIcon} alt="Lock Icon" />
                            <RightImg
                                src={passwordVisible ? EyeClosedIcon : EyeIcon}
                                alt="Hide password"
                                onClick={() => {
                                    setPasswordVisible(!passwordVisible);
                                }}
                            />
                            <ForgotPassword>
                                <span>Esqueci a senha</span>
                            </ForgotPassword>
                        </PasswordInput>
                    </InputSection>
                </FormContainer>
                <ButtonSection>
                    <LogIn
                        type="submit"
                        disabled={!isInactiveButton}
                        isInactive={!isInactiveButton}
                        onClick={() => navigate("/Home")}
                    >
                        <img
                            src={
                                !isInactiveButton
                                    ? LoginDisabledIcon
                                    : LoginIcon
                            }
                            alt="ícone de entrar"
                        />
                        Entrar
                    </LogIn>
                    <span>OU</span>
                    <p>
                        Não possui uma conta? <span>Cadastre-se</span>
                    </p>
                </ButtonSection>
            </LoginMobile>
        </ScreenContainer>
    );
};
