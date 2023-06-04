/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { verificarLogin } from "../../Assets/Utils";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import Searchbar from "../../Components/Searchbar";
import { searchResults } from "./data";
import { api } from "../../Services";
import { api } from "../../Services";
import {
	FlexContainer,
	MainContainer,
	SearchContainer,
	SearchPageContainer,
} from "./styles";
import { IssueDto, IssueMobileProps } from "../../Assets";

const Pesquisa = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchResults, setSearchResults] = useState<IssueDto[]>([]);
	const [search, setSearch] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [searchResults, setSearchResults] = useState<IssueDto[]>([]);
	const [search, setSearch] = useState("");

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	const searchUserIssue = (issueString: string) => {
		api
			.get(
				`FiltroChamado?matricula=${usuarioLogado.matricula}&nome=${issueString}`,
				{
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						Authorization: `Bearer ${usuarioLogado.token}`,
					},
				}
			)
			.then((response) => {
				setSearchResults(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		search && searchUserIssue(search);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	return (
		<FlexContainer>
			<HeaderMobile userName={usuarioLogado ? usuarioLogado.nome : ""} />
			<PageContainer>
				<SearchContainer>
					<Searchbar getInputValue={(value: string) => setSearch(value)} />
				</SearchContainer>
				<MainContainer>
					{isLoading ? (
						<LoadingScreen />
					) : (
						<>
							{searchResults.length === 0 ? (
								<BoxEmptyContainer>
									<BoxEmpty
										title="Nenhum chamado encontrado"
									/>
								</BoxEmptyContainer>
							) : (
								<></>
							)}
							{searchResults.map((issue) => {
								return (
									<IssueMobile
										key={issue.idChamado}
										id={issue.idChamado.toString()}
										nome={issue.nome}
										status={issue.status}
										date={issue.dataRelato}
										isUpdated
									/>
								);
							})}
						</>
					)}
				</MainContainer>
			</PageContainer>
			<NavigationBar />
		</FlexContainer>
	);
};

export default Pesquisa;
