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
import React, { useState } from "react";

export const AbrirChamado = () => {
	const [write, setWrite] = useState<string>("");
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");

	const handleResumeChange = (event: any) => {
		setNome(event.target.value);
	};

	const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	<Link to={`/telaB?nome=${nome}&email=${email}`}>Próxima Tela</Link>;

	verificarLogin();

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
					onChange={() => handleResumeChange}
				/>
				<SelectOption
					legendText="Tipo"
					height="56px"
					widht="auto"
					onChange={() => handleReasonChange}>
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
					onChange={() => handleDateChange}
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
