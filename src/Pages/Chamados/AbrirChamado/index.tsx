import { FooterButtons } from "../../../Components/FooterButtons";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import {
	AbrirChamadoContainer,
	HeaderComponent,
	InfoChamadosContainer,
} from "./styles";

import { SelectOption } from "../../../Components/SelectOption";
import { BackButton } from "../../../Components/BackButton";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../../Components/MenuNavegation";
import typeCall from "../../../mocks/typeCall";
import { ChangeEvent, useEffect, useState } from "react";
import { useTypeCall } from "../../../Assets/Contexts";

export const AbrirChamado = () => {
	const [tipoChamadoSelecionado, setTipoChamadoSelecionado] = useState("");
	const { changeTipo } = useTypeCall();

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	verificarLogin();

	const handleTipoChamadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setTipoChamadoSelecionado(event.target.value);
	};

	useEffect(() => {
		changeTipo(tipoChamadoSelecionado);
	}, [changeTipo, tipoChamadoSelecionado]);

	return (
		<AbrirChamadoContainer>
			<Link to="/Home">
				<BackButton actionText="voltar" />
			</Link>
			<HeaderComponent>
				<h1>O que aconteceu?</h1>
			</HeaderComponent>
			<InfoChamadosContainer>
				<FildsetTextArea
					legendText="Resumo"
					placeholder="Do que se trata o chamado?"
					height="56px"
					width="auto"
					getValue={(e)=> {e;}}

				/>
				<SelectOption
					legendText="Tipo"
					height="56px"
					width="auto"
					value={tipoChamadoSelecionado}
					onChange={handleTipoChamadoChange}>
					<option
						disabled
						value=""
						selected>
						Qual o tipo do chamado?
					</option>
					{typeCall.map((tipo, index) => (
						<option
							value={tipo.type}
							key={`${index + 1}#${tipo.type}`}>
							{tipo.type}
						</option>
					))}
				</SelectOption>

				<FildsetTextArea
					legendText="Descrição"
					placeholder="Nos conte mais detalhes sobre o ocorrido..."
					height="240px"
					width="auto"
					getValue={(e)=> {e;}}

				/>
				<InputLegend
					legendText="Data do ocorrido"
					placeholder="dd/mm/aaaa"
					inputType="date"
					height="56px"
					width="auto"
					maxLength={4}
				/>
			</InfoChamadosContainer>
			<FooterButtons
				LastPage="/Home"
				NextPage="/MidiaChamado"
			/>
			<NavigationBar />
		</AbrirChamadoContainer>
	);
};
