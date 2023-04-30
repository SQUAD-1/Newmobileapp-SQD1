import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fclogomobile } from "../../Assets/fclogomobile";
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

export const Login = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [textLogin, setTextLogin] = useState("");
    const [textPassword, setTextPassword] = useState("");

    const validEmail = /[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$/;

    const isInactiveButton =
        validEmail.test(textLogin) && textPassword.length >= 8;

    console.log(textPassword.length < 8);

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
                    ></InputLogin>
                    <LoginText>
                        Senha <AsteriscText>*</AsteriscText>
                    </LoginText>
                    <DivLogin>
                        <InputLogin
                            type={"password"}
                            placeholder="Digite sua senha"
                            required
                        ></InputLogin>
                        <img
                            src={HiddenIcon}
                            alt="ícone de ocultar senha"
                        ></img>
                    </DivLogin>
                    <LoginForgotText className="GoLeft">
                        Esqueci a senha
                    </LoginForgotText>
                    <ButtonLogin onClick={() => navigate("/mainpage")}>
                        Entrar
                    </ButtonLogin>
                </ContainerLogin>
            </LoginBoxContainer>

            <LoginMobile>
                <Logo>
                    <Fclogomobile />
                </Logo>
                <TextMobile>
                    <h1>Entrar</h1>
                </TextMobile>
                <InputSection>
                    <EmailInput>
                        <EmailMobile
                            type="email"
                            placeholder="Digite o seu email"
                            required
                            value={textLogin}
                            pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
                            title="Por favor, insira um endereço de email válido"
                            onChange={(e) => setTextLogin(e.target.value)}
                        ></EmailMobile>
                        {!validEmail.test(textLogin) &&
                            textLogin.length > 1 && (
                                <>
                                    <span>
                                        Formato inválido, tente novamente!
                                    </span>
                                    <RightImg src={WarnIcon} />
                                </>
                            )}
                        <LeftImg src={EmailIcon} alt="Email Icon" />
                        <RightImg
                            onClick={() => setTextLogin("")}
                            src={
                                textLogin.length < 1
                                    ? ClearDisabledIcon
                                    : validEmail.test(textLogin)
                                    ? ClearIcon
                                    : ""
                            }
                        />
                    </EmailInput>
                    <PasswordInput>
                        <PasswordMobile
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Digite a sua senha"
                            onChange={(e) => setTextPassword(e.target.value)}
                            minLength={8}
                            required
                        ></PasswordMobile>
                        {textPassword.length < 8 && textPassword.length > 1 && (
                            <PasswordText>
                                Senha deve ter no mínimo 8 caracteres
                            </PasswordText>
                        )}
                        <LeftImg src={LockIcon} alt="Lock Icon" />
                        <RightImg
                            src={passwordVisible ? EyeClosedIcon : EyeIcon}
                            alt="Hide password"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                        <ForgotPassword>
                            <span>Esqueci a senha</span>
                        </ForgotPassword>
                    </PasswordInput>
                </InputSection>
                <ButtonSection>
                    <LogIn
                        type="submit"
                        disabled={!isInactiveButton}
                        isInactive={!isInactiveButton}
                    >
                        <img
                            src={
                                !isInactiveButton ? LoginDisabledIcon : LoginIcon
                            }
                            alt="Login Icon"
                        ></img>
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
