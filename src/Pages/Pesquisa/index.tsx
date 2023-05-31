/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { verificarLogin } from "../../Assets/Untils";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import Searchbar from "../../Components/Searchbar";
import { searchResults } from "./data";
import { FlexContainer, MainContainer, SearchContainer } from "./styles";

const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
// verificarLogin(!usuarioLogado);

const Pesquisa = () => {
	return (
		<FlexContainer>
			<HeaderMobile userName={usuarioLogado ? usuarioLogado.nome : ""} />
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
			<NavigationBar />
		</FlexContainer>
	);
};

export default Pesquisa;
