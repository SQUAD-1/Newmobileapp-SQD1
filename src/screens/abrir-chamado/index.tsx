/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useState } from "react";

export const AbrirChamado = () => {
	const [write, setWrite] = useState<string>("");
	// const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	// function verificarLogin() {
	// 	if (!usuarioLogado) {
	// 		window.location.replace("/login");
	// 	}
	// }
	// verificarLogin();
	return (
		<AbrirChamadoContainer>
			<Link to="/">
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
					widht="auto"
				/>
				<SelectOption
					legendText="Tipo"
					height="56px"
					widht="auto">
					<option
						value=""
						disabled
						selected>
						Qual o tipo do chamado?
					</option>
					<option value="limpeza">Solicitação de limpeza</option>
					<option value="internet">Problema com a internet</option>
					<option value="material">Falta de material</option>
					<option value="recurso">Solicitação de recurso</option>
				</SelectOption>
				<FildsetTextArea
					legendText="Descrição"
					placeholder="Nos conte mais detalhes sobre o ocorrido..."
					height="240px"
					widht="auto"
				/>
				<InputLegend
					legendText="Data do ocorrido"
					placeholder="dd/mm/aaaa"
					inputType="date"
					height="56px"
					widht="auto"
					maxLength={4}
				/>
			</InfoChamadosContainer>
			<FooterButtons
				LastPage="/"
				NextPage="/Home"
			/>
			<NavigationBar />
		</AbrirChamadoContainer>
	);
};