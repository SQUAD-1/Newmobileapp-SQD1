import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import {
	ChamadoText,
	CircleDiv,
	DoubleInput,
	HistoricoContainer,
	HistoricoText,
	HistoryStatusText,
	HistoryText,
	InputContainer,
	LastInputDiv,
	MidiaDiv,
	SreenContainer,
} from "./styles";
import { useEffect, useState } from "react";

interface ChamadoScreenProps {
	tipoSelecionado: string;
}

export const ChamadoScreen = ({ tipoSelecionado }: ChamadoScreenProps) => {
	const [setor, setSetor] = useState("");

	console.log(tipoSelecionado);

	useEffect(() => {
		if (tipoSelecionado === "Problema com a internet") {
			setSetor("Suporte e Infraestrutura");
		} else if (tipoSelecionado === "Solicitação de limpeza") {
			setSetor("Limpeza");
		} else if (tipoSelecionado === "Objeto perdido") {
			setSetor("Prevenção de perdas");
		} else if (tipoSelecionado === "Falta de material") {
			setSetor("Recursos Humanos");
		} else {
			setSetor("Outros");
		}
	}, [tipoSelecionado]);

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
				<InputLegend
					legendText={"Resumo"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					width={"100%"}
					height={"56px"}
				/>

				<FildsetTextArea
					legendText={"Descrição"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					width={"100%"}
					height={"112px"}
				/>
				<FildsetTextArea
					legendText="Setor"
					placeholder={setor}
					width="100%"
					height="56px"
				/>
				<MidiaDiv>
					<Midia />
				</MidiaDiv>

				<DoubleInput>
					<InputLegend
						legendText={"Tipo"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"45%"}
						height={"56px"}
					/>
					<InputLegend
						legendText={"Prioridade"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"45%"}
						height={"56px"}
					/>
				</DoubleInput>
				<LastInputDiv>
					<InputLegend
						legendText={"Data do ocorrido"}
						inputType="date"
						placeholder={"Acabou o papel no ponto eletrônico"}
						width={"100%"}
						height={"56px"}
					/>
				</LastInputDiv>
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
