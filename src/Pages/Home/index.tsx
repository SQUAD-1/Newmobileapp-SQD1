import { ButtonNew } from "../../Components/Home/ButtonNew";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import {
	ButtonWrapper,
	HeaderContent,
	MainMobile,
	Overflowdiv,
	ScreenContainer,
} from "./styles";
import { issueMobileData } from "./data";
export const Home = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();

	const issuesNumber = issueMobileData.length;
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName={usuarioLogado ? usuarioLogado.nome : ""}
					pageTittle="Meus chamados"
					issueQuantify={issuesNumber}
				/>
				<Overflowdiv>
					<HeaderContent>
						{issueMobileData.map((issue) => {
							return (
								<IssueMobile
									key={issue.id}
									id={issue.id}
									description={issue.description}
									date={issue.date}
									status={issue.status}
									isUpdated={issue.isUpdated}
									color={issue.color}
								/>
							);
						})}
					</HeaderContent>
					<ButtonWrapper>
						{issuesNumber < 4 ? <ButtonNew /> : null}
					</ButtonWrapper>
				</Overflowdiv>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
