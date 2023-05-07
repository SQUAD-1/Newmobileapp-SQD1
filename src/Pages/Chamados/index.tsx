import { CalledMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../Home/styles";
import { Calls } from "./styles";
import mockChamados from "./mockChamados";

export const Chamados = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName="Wellington"
					pageTittle="Meus Chamados"
				/>
				<Calls>
					{mockChamados.map((item) => (
						<CalledMobile
							key={item.id}
							{...item}
						/>
					))}
				</Calls>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
