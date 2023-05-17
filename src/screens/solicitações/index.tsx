import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { RequestContainer, MainMobileRequest } from "./styles";
import { BoxEmpty } from "../../Components/BoxEmpty";
import { BoxEmptyContainer, HomeContent, Overflowdiv } from "../Home/styles";
import { issueMobileData } from "../Home/data";
import { IssueMobile } from "../../Components/Home/CalledMobile";

export const Requests = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();
	return (
		<RequestContainer>
			<MainMobileRequest>
				<HeaderMobile
					userName={usuarioLogado ? usuarioLogado.nome : ""}
					pageTittle="Chamados Solicitados "
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
										color={"#9edc72"}
										borderColor={"#61A12F"}
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
				</Overflowdiv>
			</MainMobileRequest>
			<NavigationBar />
		</RequestContainer>
	);
};
