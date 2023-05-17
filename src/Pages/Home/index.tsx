/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-constant-condition */
import { ButtonNew } from "../../Components/Home/ButtonNew";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import {
	BoxEmptyContainer,
	ButtonWrapper,
	HomeContent,
	MainMobile,
	Overflowdiv,
	ScreenContainer,
} from "./styles";
import { issueMobileData } from "./data";
import { BoxEmpty } from "../../Components/BoxEmpty";
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
					<HomeContent>
						{issueMobileData ? (
							issueMobileData.map((issue) => {
								return (
									<IssueMobile
										key={issue?.id}
										id={issue?.id}
										description={issue?.description}
										date={issue?.date}
										status={issue?.status}
										isUpdated={issue?.isUpdated}
										color={issue?.color}
									/>
								);
							})
						) : (
							<BoxEmptyContainer>
								<BoxEmpty
									alt="caixa vazia"
									title="Não há solicitações no momento."
									color="#494949"
								/>
							</BoxEmptyContainer>
						)}
					</HomeContent>
					<ButtonWrapper>
						{issuesNumber < 4 ? <ButtonNew /> : null}
					</ButtonWrapper>
				</Overflowdiv>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
