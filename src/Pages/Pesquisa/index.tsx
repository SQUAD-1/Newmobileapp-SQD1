/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { verificarLogin } from "../../Assets/Utils";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import Searchbar from "../../Components/Searchbar";
import { searchResults } from "./data";
import {
	FlexContainer,
	MainContainer,
	SearchContainer,
	SearchPageContainer,
} from "./styles";

const Pesquisa = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	verificarLogin();
	return (
		<FlexContainer>
			<HeaderMobile userName={usuarioLogado ? usuarioLogado.nome : ""} />
			<SearchPageContainer>
				<SearchContainer>
					<Searchbar />
				</SearchContainer>
				<MainContainer>
					{searchResults.map((issue) => {
						return (
							<IssueMobile
								key={issue.id}
								id={issue.id}
								nome={issue.nome}
								status={issue.status}
								date={issue.date}
								isUpdated={issue.isUpdated}
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
