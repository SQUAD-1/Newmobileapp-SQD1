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
import { useTypeCall } from "../../../Assets/Contexts";

export const ChamadoScreen = () => {
	const { tipo } = useTypeCall();
	const [setor, setSetor] = useState("");

	useEffect(() => {
		if (tipo === "Problema com a internet") {
			setSetor("Suporte e Infraestrutura");
		} else if (tipo === "Solicitação de limpeza") {
			setSetor("Limpeza");
		} else if (tipo === "Objeto perdido") {
			setSetor("Prevenção de perdas");
		} else if (tipo === "Falta de material") {
			setSetor("Recursos Humanos");
		} else {
			setSetor("Outros");
		}
	}, [tipo]);

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
					getValue={(e)=> {e;}}
				/>
				<FildsetTextArea
        getValue={(e)=> {e;}}
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
