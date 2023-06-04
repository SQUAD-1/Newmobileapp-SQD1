/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { verificarLogin } from "../../Assets/Utils";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import Searchbar from "../../Components/Searchbar";
import { searchResults } from "./data";
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

	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	verificarLogin();

	useEffect(() => {
		setIsLoading(true);
		search && searchUserIssue(search);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

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

	return (
		<FlexContainer>
			<HeaderMobile userName={usuarioLogado ? usuarioLogado.nome : ""} />
			<SearchPageContainer>
				<SearchContainer>
					<Searchbar getInputValue={(value: string) => setSearch(value)} />
				</SearchContainer>
				<MainContainer>
					{searchResults.map((issue) => {
						return (
							<IssueMobile
								key={issue.idChamado}
								id={issue.idChamado.toString()}
								nome={issue.nome}
								status={issue.status}
								date={issue.dataRelato}
								isUpdated={true}
							/>
						);
					})}
				</MainContainer>
			</SearchPageContainer>
			<NavigationBar />
		</FlexContainer>
	);
};

export default Pesquisa;
