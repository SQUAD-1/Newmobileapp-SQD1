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

export const ChamadoScreen = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();
	return (
		<SreenContainer>
			<Link to="/Home">
				<BackButton actionText="voltar" />
			</Link>
			<ChamadoText>Chamado n° 99999999</ChamadoText>
			<InputContainer>
				<CallInformation legendText="Resumo">resumo </CallInformation>
				<CallInformation legendText="Descrição">descrição</CallInformation>
				<CallInformation legendText="Setor">setor</CallInformation>

				<MidiaWrapper>
					<Midia />
				</MidiaWrapper>
				<DoubleInformation>
					<CallInformation legendText="Tipo">tipo</CallInformation>
					<CallInformation legendText="Prioridade">Prioridade</CallInformation>
				</DoubleInformation>
				<CallInformation legendText="Data do ocorrido">
					Data do ocorrido
				</CallInformation>

				<HistoryText>Histórico</HistoryText>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
			</InputContainer>
			<NavigationBar />
		</SreenContainer>
	);
};
