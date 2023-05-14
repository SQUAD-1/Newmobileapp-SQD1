import { useState } from "react";
import { BackButton } from "../../../Components/BackButton";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import { FooterButtons } from "../../../Components/FooterButtons";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import { Modal } from "../../../Components/Modal";
import {
	ChamadoText,
	DoubleInput,
	InputContainer,
	LastInputDiv,
	MidiaDiv,
	SreenContainer,
} from "./styles";
import { Link } from "react-router-dom";

export const ConfirmacaoScreen = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const verifyModal = () => {
		if (!openModal) {
			setOpenModal(true);

			setTimeout(() => {
				window.location.href = "/CallDetails";
			}, 3000);
		}
	};

	if (isTrue) return null;
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	return (
		<SreenContainer>
			<Link to="/AttachMidia">
				<BackButton actionText="Anexar mídia"></BackButton>
			</Link>
			<ChamadoText>Confirmar informações</ChamadoText>
			<InputContainer>
				<InputLegend
					legendText={"Resumo"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					width={"100%"}
					height={"56px"}></InputLegend>
				<DoubleInput>
					<InputLegend
						legendText={"Tipo"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"45%"}
						height={"56px"}></InputLegend>
					<InputLegend
						legendText={"Prioridade"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"45%"}
						height={"56px"}></InputLegend>
				</DoubleInput>
				<LastInputDiv>
					<InputLegend
						legendText={"Data do ocorrido"}
						inputType="date"
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"100%"}
						height={"56px"}></InputLegend>
				</LastInputDiv>
				<FildsetTextArea
					legendText={"Descrição"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					width={"100%"}
					height={"112px"}></FildsetTextArea>
				<FildsetTextArea
					legendText="Setor"
					placeholder="Setor"
					width="100%"
					height="56px"
				/>

				<MidiaDiv>
					<Midia />
				</MidiaDiv>
				<FooterButtons
					LastPage="/AttachMidia"
					actionOnClick={verifyModal}></FooterButtons>
				<Modal isTrue={openModal} />
			</InputContainer>
			<NavigationBar />
		</SreenContainer>
	);
};
