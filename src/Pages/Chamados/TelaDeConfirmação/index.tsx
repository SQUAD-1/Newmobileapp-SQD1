import { useState } from "react";
import { BackButton } from "../../../Components/BackButton";
import { FooterButtons } from "../../../Components/FooterButtons";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import { Modal } from "../../../Components/Modal";
import {
	ChamadoContent,
	ChamadoText,
	MidiaDiv,
	SreenContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { useTypeCall } from "../../../Assets/Contexts";
import { CallInformation } from "../../../Components/CallInformation";
import { LoadingScreen } from "../../../Components/LoadingScreen";
import { api } from "../../../Services";

export const ConfirmacaoScreen = () => {
	const [openModal, setOpenModal] = useState(false);
	const [, setCallSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { tipo, resumo, dataOcorrido, descricao } = useTypeCall();

	const confirmarChamado = () => {
		setIsLoading(true);

		const verifyModal = () => {
			if (!openModal) {
				setOpenModal(true);

				setTimeout(() => {
					window.location.href = "/Chamado";
				}, 3000);
			}
		};

		const chamadoData = {
			nome: resumo,
			tipo: tipo,
			dataRelato: "2023/10/21",
			descricao: descricao,
			prioridade: "média",
			horarioAbertura: "00:00:00",
			horarioUltimaAtualizacao: "00:00:00",
			status: "Aberto",
			tempoDecorrido: "00:00:00",
			empregado_Matricula: parseInt(usuarioLogado.matricula),
		};

		api
			.post("/CadastroChamado/", JSON.stringify(chamadoData), {
				headers: {
					Authorization: `Bearer ${usuarioLogado.token}`,
					"Content-Type": "application/json",
				},
			})
			.then(() => {
				verifyModal();
			})
			.catch((err) => {
				setCallSent(true);
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	const data = new Date(dataOcorrido);
	const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

	console.log(dataFormatada);
	return (
		<>
			{isLoading ? <LoadingScreen /> : null}
			<SreenContainer>
				<Link to="/MidiaChamado">
					<BackButton actionText="Anexar mídia"></BackButton>
				</Link>
				<ChamadoText>Confirmar informações</ChamadoText>
				<ChamadoContent>
					<CallInformation legendText="Resumo">{resumo}</CallInformation>
					<CallInformation legendText="tipo">{tipo}</CallInformation>

					<CallInformation legendText="Data do Ocorrido">
						{dataFormatada}
					</CallInformation>
					<CallInformation legendText="Descrição">{descricao}</CallInformation>
					<MidiaDiv>
						<Midia />
					</MidiaDiv>
					<FooterButtons
						LastPage="/MidiaChamado"
						actionOnClick={confirmarChamado}></FooterButtons>
					<Modal isTrue={openModal} />
				</ChamadoContent>
				<NavigationBar />
			</SreenContainer>
		</>
	);
};
