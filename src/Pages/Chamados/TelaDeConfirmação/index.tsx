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

		async function uploadFile(idChamado: number) {
			try {
				if (!file) {
					console.error("Nenhum arquivo selecionado.");
					return;
				}

				const formData = new FormData();
				formData.append("files", file[0]);

				const url = `https://swagger.pixelsquad.tech/AddMidia?chamadoIdChamado=${idChamado}`;

				const response = await fetch(url, {
					method: "POST",
					body: formData,
				});

				if (response.ok) {
					const data = await response.json();
					console.log(data);
					verifyModal();
				} else {
					const errorData = await response.json();
					console.error(errorData);
				}
			} catch (error) {
				console.error(error);
			}
		}

		api
			.post("/CadastroChamado/", JSON.stringify(chamadoData), {
				headers: {
					Authorization: `Bearer ${usuarioLogado.token}`,
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				verifyModal();
				api.post(
					`/AddMidia?tipoMidia=${file.find(
						(file) => file.type
					)}&chamadoIdChamado=${response.data}`,
					JSON.stringify(file),
					{
						headers: {
							Authorization: `Bearer ${usuarioLogado.token}`,
							"Content-Type": "application/json",
						},
					}
				);
			})
			.catch((err) => {
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => {
				setIsLoading(false);
			});

		// api
		// 	.post(
		// 		`/AddMidia?tipoMidia=${file.find(
		// 			(file) => file.type
		// 		)}&chamadoIdChamado=${chamadoData}`,
		// 		JSON.stringify(file),
		// 		{
		// 			headers: {
		// 				Authorization: `Bearer ${usuarioLogado.token}`,
		// 				"Content-Type": "application/json",
		// 			},
		// 		}
		// 	)
		// 	.then(() => {
		// 		verifyModal();
		// 	})
		// 	.catch((err) => {
		// 		console.error(`ops! ocorreu um erro ${err}`);
		// 	})
		// 	.finally(() => {
		// 		setIsLoading(false);
		// 	});
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

	return (
		<SreenContainer>
			<Link to="/MidiaChamado">
				<BackButton actionText="Anexar mídia"></BackButton>
			</Link>
			<ChamadoText>Confirmar informações</ChamadoText>
			{isLoading ? (
				<LoadingScreen />
			) : (
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
					<Modal
						message={message}
						isTrue={openModal}
					/>
				</ChamadoContent>
			)}
			<NavigationBar />
		</SreenContainer>
	);
};
