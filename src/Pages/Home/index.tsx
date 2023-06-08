import { ButtonNew } from "../../Components/Home/ButtonNew";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { BoxEmptyContainer, ButtonWrapper } from "./styles";
import { BoxEmpty } from "../../Components/BoxEmpty";
import { useEffect, useState } from "react";
import { api } from "../../Services";
import { LoadingScreen } from "../../Components/LoadingScreen";
import {
	FlexContainer,
	PageContainer,
} from "../../Components/PageStruct/style";
import { MainContainer } from "../Pesquisa/styles";

export interface HomeProps {
	idChamado: string;
	nome: string;
	dataRelato: string;
	status: string;
	horarioUltimaAtualizacao: boolean;
}

export const Home = () => {
	const [listaChamados, setListaChamados] = useState<HomeProps[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [hasContent, setHasContent] = useState(false);

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	verificarLogin();

	useEffect(() => {
		setIsLoading(true);
		setHasContent(false);
		api
			.get(`/ConsultaChamado/${usuarioLogado.matricula}`, {
				headers: { Authorization: `Bearer ${usuarioLogado.token}` },
			})
			.then((response) => {
				setHasContent(true);
				setListaChamados(response.data);
			})
			.catch((err) => {
				setHasContent(false);
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [usuarioLogado.matricula, usuarioLogado.token]);

	const issuesNumber = listaChamados?.length || 0;

	return (
		<FlexContainer>
			<HeaderMobile
				userName={usuarioLogado ? usuarioLogado.nome : ""}
				pageTittle="Meus chamados"
				issueQuantify={issuesNumber}
			/>
			<PageContainer justifyContent={hasContent ? "flex-start" : "center"}>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer>
							{listaChamados?.length ? (
								listaChamados.map((issue) => {
									return (
										<IssueMobile
											key={issue.idChamado}
											id={issue.idChamado}
											nome={issue.nome}
											date={issue.dataRelato}
											status={issue.status}
											isUpdated={false}
										/>
									);
								})
							) : (
								<BoxEmptyContainer>
									<BoxEmpty
										alt="caixa vazia"
										title="Não há chamados no momento."
										color="#494949"
									/>
								</BoxEmptyContainer>
							)}
						</MainContainer>
						<ButtonWrapper>
							{issuesNumber < 5 ? <ButtonNew /> : null}
						</ButtonWrapper>
					</>
				)}
			</PageContainer>
			<NavigationBar />
		</FlexContainer>
	);
};
