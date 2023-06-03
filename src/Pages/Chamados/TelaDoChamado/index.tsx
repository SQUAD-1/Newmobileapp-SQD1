import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import {
	ChamadoText,
	CircleDiv,
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
	const [listaChamados, setListaChamados] = useState<ChamadoScreenProps>();
	const [isLoading, setIsLoading] = useState(false);

	console.log(listaChamados);

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	useEffect(() => {
		setIsLoading(true);
		api
			.get(`/ConsultaChamadoId/${usuarioLogado.matricula}`, {
				headers: { Authorization: `Bearer ${usuarioLogado.token}` },
			})
			.then((response) => setListaChamados(response.data))
			.catch((err) => {
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => setIsLoading(false));
	}, [usuarioLogado.matricula, usuarioLogado.token]);

	return (
		<SreenContainer>
			<Link to="/Home">
				<BackButton actionText="voltar" />
			</Link>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<ChamadoText>{listaChamados?.idChamado}</ChamadoText>
					<InputContainer>
						<CallInformation legendText="Resumo">resumo </CallInformation>
						<CallInformation legendText="Descrição">
							{listaChamados?.descricao}
						</CallInformation>
						<CallInformation legendText="Setor">setor</CallInformation>

						<MidiaWrapper>
							<Midia />
						</MidiaWrapper>
						<DoubleInformation>
							<CallInformation
								width="65%"
								legendText="Tipo">
								{listaChamados?.tipo}
							</CallInformation>
							<CallInformation
								legendText="Prioridade"
								width="5%">
								{listaChamados?.prioridade}
							</CallInformation>
						</DoubleInformation>
						<CallInformation legendText="Data do ocorrido">
							{listaChamados?.dataRelato}
						</CallInformation>

						<HistoryText>Histórico</HistoryText>
						<HistoricoContainer>
							<CircleDiv />
							<HistoricoText>#3</HistoricoText>
							<HistoryStatusText>{listaChamados?.status}</HistoryStatusText>
						</HistoricoContainer>
					</InputContainer>
					<NavigationBar />
				</>
			)}
		</SreenContainer>
	);
};
