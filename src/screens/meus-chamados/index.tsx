import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../home/styles";
import { Calls } from "./styles";
import { issueMobileData } from "../home/data";

export const Chamados = () => {
	// const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	// function verificarLogin() {
	// 	if (!usuarioLogado) {
	// 		window.location.replace("/login");
	// 	}
	// }
	// verificarLogin();
	const issuesNumber = issueMobileData.length;
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName="Wellington"
					pageTittle="Meus Chamados"
					issueQuantify={issuesNumber}
				/>
				<Calls>
					{issueMobileData.map((item) => (
						<IssueMobile
							key={item.id}
							id={item.id}
							description={item.description}
							date={item.date}
							status={item.status}
							isUpdated={item.isUpdated}
							color={item.color}
						/>
					))}
				</Calls>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
