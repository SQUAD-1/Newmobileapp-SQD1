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
import { MidiaText } from "../../../Components/Midia/styles";

export const ConfirmacaoScreen = () => {
	const [openModal, setOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { tipo, resumo, dataOcorrido, descricao, file } = useTypeCall();

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
			dataRelato: dataFormatada,
			descricao: descricao,
			empregado_Matricula: parseInt(usuarioLogado.matricula),
		};

		const uploadFile = (idChamado: number) => {
			const matrizFiles = file.find((item) => item) as Blob;
			setIsLoading(true);
			const formData = new FormData();
			formData.append("files", matrizFiles);

			api
				.post(`/AddMidia?chamadoIdChamado=${idChamado}`, formData, {
					headers: {
						Authorization: `Bearer ${usuarioLogado.token}`,
						"Content-Type": "multipart/form-data",
					},
				})
				.then(() => {
					verifyModal();
					localStorage.setItem("idChamado", idChamado as unknown as string);
				})
				.catch((err) => {
					console.error(`ops! ocorreu um erro ${err}`);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};

		api
			.post("/CadastroChamado/", JSON.stringify(chamadoData), {
				headers: {
					Authorization: `Bearer ${usuarioLogado.token}`,
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				if (file.length > 0) {
					uploadFile(response.data);
				} else {
					verifyModal();
					localStorage.setItem("idChamado", response.data);
				}
			})
			.catch((err) => {
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const message = (
		<>
			Chamado registrado <br /> com sucesso
		</>
	);

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	const data = new Date(dataOcorrido);
	const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

	return isLoading ? (
		<LoadingScreen />
	) : (
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
				{file.length ? (
					<>
						<MidiaText>Mídia</MidiaText>
						<MidiaDiv>
							{file.map((file, index) => (
								<Midia
									key={`${file.name}#${index}`}
									file={file}
								/>
							))}
						</MidiaDiv>
					</>
				) : null}
				<FooterButtons
					LastPage="/MidiaChamado"
					actionOnClick={confirmarChamado}></FooterButtons>
				<Modal
					message={message}
					isTrue={openModal}
				/>
			</ChamadoContent>
			<NavigationBar />
		</SreenContainer>
	);
};
