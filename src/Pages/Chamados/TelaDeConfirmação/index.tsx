import { useState } from "react";
import { BackButton } from "../../../Components/BackButton";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import { FooterButtons } from "../../../Components/FooterButtons";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import { Modal } from "../../../Components/Modal";
import {
	ButtonDiv,
	ChamadoText,
	DoubleInput,
	InputContainer,
	LastInputDiv,
	MidiaDiv,
	SreenContainer,
} from "./styles";

export const ConfirmacaoScreen = () => {
	const [isTrue, setIsTrue] = useState<boolean>(false);

	return (
		<SreenContainer>
			<ButtonDiv>
				<BackButton actionText="Anexar mídia"></BackButton>
			</ButtonDiv>
			<ChamadoText>Confirmar informações</ChamadoText>
			<InputContainer>
				<InputLegend
					legendText={"Resumo"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					widht={"100%"}
					height={"56px"}></InputLegend>
				<DoubleInput>
					<InputLegend
						legendText={"Tipo"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"45%"}
						height={"56px"}></InputLegend>
					<InputLegend
						legendText={"Prioridade"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"45%"}
						height={"56px"}></InputLegend>
				</DoubleInput>
				<LastInputDiv>
					<InputLegend
						legendText={"Data do ocorrido"}
						inputType="date"
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"100%"}
						height={"56px"}></InputLegend>
				</LastInputDiv>
				<FildsetTextArea
					legendText={"Descrição"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					widht={"100%"}
					height={"112px"}></FildsetTextArea>
				<MidiaDiv>
					<Midia />
				</MidiaDiv>
				<FooterButtons
					LastPage=""
					NextPage="/CallDetais"
					OpenModal={setIsTrue}></FooterButtons>
				<Modal isTrue={isTrue} />
			</InputContainer>
			<NavigationBar />
		</SreenContainer>
	);
};
