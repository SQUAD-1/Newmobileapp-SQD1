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
import { useTypeCall } from "../../../Assets/Contexts";

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
	const { idChamado } = useTypeCall();

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	console.log("listaChamados", listaChamados);

	useEffect(() => {
		setIsLoading(true);
		api
			.get("/ConsultaChamadoId/1470001", {
				headers: { Authorization: `Bearer ${usuarioLogado.token}` },
			})
			.then((response) => setListaChamados(response.data))
			.catch((err) => {
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => setIsLoading(false));
	}, [idChamado, usuarioLogado.matricula, usuarioLogado.token]);

	console.log("lista tela do chamado", idChamado);

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
						<>
							<ChamadoText>{item?.idChamado}</ChamadoText>
							<InputContainer>
								<CallInformation legendText="Resumo">resumo </CallInformation>
								<CallInformation legendText="Descrição">
									{item?.descricao}
								</CallInformation>
								<CallInformation legendText="Setor">setor</CallInformation>

								{item?.linkMidia ? (
									<MidiaWrapper>
										{item?.linkMidia.map((file, index) => (
											<Midia
												key={`${file.idMidia}#${index}`}
												file={file as unknown as File}
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
						</>
					))}
				</>
			)}
		</SreenContainer>
	);
};
