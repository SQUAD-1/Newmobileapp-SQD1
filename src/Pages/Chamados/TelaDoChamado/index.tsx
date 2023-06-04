import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import {
	ChamadoText,
	CircleDiv,
	ContainerChamado,
	DoubleInformation,
	HistoricoContainer,
	HistoricoText,
	HistoryStatusText,
	HistoryText,
	InputContainer,
	MidiaWrapper,
	SreenContainer,
} from "./styles";
import { CallInformation } from "../../../Components/CallInformation";
import { useEffect, useState } from "react";
import { api } from "../../../Services";
import { LoadingScreen } from "../../../Components/LoadingScreen";

type ArrayMidia = {
	idMidia: number;
	link: string;
	tipoMidia: string;
};

export interface ChamadoScreenProps {
	idChamado: string;
	nome: string;
	dataRelato: string;
	descricao: string;
	prioridade: string;
	horarioAbertura: Date;
	horarioUltimaAtualizacao: boolean;
	status: string;
	tempoDecorrido: Date;
	empregado_Matricula: number;
	tipo: string;
	linkMidia: [ArrayMidia];
}

export const ChamadoScreen = () => {
	const [listaChamados, setListaChamados] = useState<ChamadoScreenProps[]>();
	const [isLoading, setIsLoading] = useState(false);

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	const idChamado = localStorage.getItem("idChamado");

	verificarLogin();

	useEffect(() => {
		setIsLoading(true);
		api
			.get(`/ConsultaChamadoId/${idChamado}`, {
				headers: { Authorization: `Bearer ${usuarioLogado.token}` },
			})
			.then((response) => setListaChamados(response.data))
			.catch((err) => {
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => setIsLoading(false));
	}, [idChamado, usuarioLogado.matricula, usuarioLogado.token]);

	return (
		<SreenContainer>
			<Link to="/Home">
				<BackButton actionText="voltar" />
			</Link>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					{listaChamados?.map((item) => (
						<ContainerChamado key={item.idChamado}>
							<ChamadoText>{item?.idChamado}</ChamadoText>
							<InputContainer>
								<CallInformation legendText="Resumo">
									{item.nome}
								</CallInformation>
								<CallInformation legendText="Descrição">
									{item?.descricao}
								</CallInformation>
								<CallInformation legendText="Setor">
									{item.tipo}
								</CallInformation>

								{item?.linkMidia ? (
									<MidiaWrapper>
										{item?.linkMidia.map((file) => (
											<Midia
												key={`${file.idMidia}`}
												file={file.link as unknown as File}
											/>
										))}
									</MidiaWrapper>
								) : null}

								<DoubleInformation>
									<CallInformation
										width="65%"
										legendText="Tipo">
										{item?.tipo}
									</CallInformation>

									<CallInformation
										legendText="Prioridade"
										width="5%">
										{item?.prioridade}
									</CallInformation>
								</DoubleInformation>
								<CallInformation legendText="Data do ocorrido">
									{item?.dataRelato}
								</CallInformation>

								<HistoryText>Histórico</HistoryText>

								<HistoricoContainer>
									<CircleDiv />
									<HistoricoText>#3</HistoricoText>
									<HistoryStatusText>{item?.status}</HistoryStatusText>
								</HistoricoContainer>
							</InputContainer>
							<NavigationBar />
						</ContainerChamado>
					))}
				</>
			)}
		</SreenContainer>
	);
};
