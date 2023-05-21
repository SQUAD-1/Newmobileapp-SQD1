import { BackButton } from "../../Components/BackButton";
import { BoxEmpty } from "../../Components/BoxEmpty";
import { Button } from "../../Components/Button";
import {
	HaederText,
	RecoverPasswordContainer,
	HeaderTitle,
	ContainerButton,
	InputContainer,
	HeaderContainer,
} from "./styles";
import UserNotFound from "../../Assets/Images/UserNotFound.png";
import ClearIcon from "../../Assets/Images/Clear.png";
import { TitleInputArea } from "../Cadastro/styles";
import { InputLegend } from "../../Components/FildestInput";
import { Link } from "react-router-dom";

export const RecoverPassword = () => {
	return (
		<RecoverPasswordContainer>
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<HeaderContainer>
				<HeaderTitle>Esqueceu sua senha?</HeaderTitle>
				<HaederText>
					Não se preocupe, iremos te ajudar a recuperar seu acesso!
				</HaederText>
			</HeaderContainer>

			<BoxEmpty
				// alt=""
				// src=""
				title="Usuário não identificado!"
				color="#E8273F"
				fontSize="16px"
				icon={UserNotFound}
			/>
			<InputContainer>
				<TitleInputArea>Digite as seguintes informações:</TitleInputArea>
				<InputLegend
					legendText="Matrícula"
					maxLength={5}
					inputType="tel"
					placeholder="Ex: 99999"
					border="1px solid #49454f"
					width="auto"
					hasImage
					source={ClearIcon}
					imgDescription="icone de limpar"
				/>
				<InputLegend
					legendText="Email"
					maxLength={45}
					placeholder="Ex: joao.barros@fc.com"
					height="56px"
					pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
					width="auto"
					border="1px solid #49454f"
					hasImage
					source={ClearIcon}
					imgDescription="icone de limpar"
				/>
			</InputContainer>
			<ContainerButton>
				<Button text="Confirmar" />
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage="/Login"
				/>
			</ContainerButton>
		</RecoverPasswordContainer>
	);
};
