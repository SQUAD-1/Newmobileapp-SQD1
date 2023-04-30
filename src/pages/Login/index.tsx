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
    RightImg,
    ScreenContainer,
    TextMobile,
    WelcomeText,
} from "./styles";
import CancelIcon from "./svg/cancel.svg";
import EmailIcon from "./svg/email.svg";
import EyeIcon from "./svg/eye.svg";
import EyeClosedIcon from "./svg/eyeClosed.svg";
import HiddenIcon from "./svg/hidden.svg";
import LockIcon from "./svg/lock.svg";
import LoginIcon from "./svg/login.svg";

export const Login = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);

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
                            type="text"
                            placeholder="Digite o seu email"
                            required
                        ></EmailMobile>
                        <LeftImg src={EmailIcon} alt="Email Icon" />
                        <RightImg src={CancelIcon} alt="Delete email" />
                    </EmailInput>
                    <PasswordInput>
                        <PasswordMobile
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Digite a sua senha"
                            required
                        ></PasswordMobile>
                        <LeftImg src={LockIcon} alt="Lock Icon" />
                        <RightImg
                            src={passwordVisible ? EyeClosedIcon : EyeIcon}
                            alt="Hide password"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                        <div>
                            <span>Esqueci a senha</span>
                        </div>
                    </PasswordInput>
                </InputSection>
                <ButtonSection>
                    <LogIn type="submit">
                        <img src={LoginIcon} alt="Login Icon"></img>
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
