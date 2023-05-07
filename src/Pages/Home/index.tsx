import { ButtonNew } from "../../Components/Home/ButtonNew";
import { CalledMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "./styles";

export const Home = () => {
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
					userName={usuarioLogado ? usuarioLogado.nome : ""}
					pageTittle="Chamados Recentes"
				/>
				<>
					<CalledMobile
						color="#D9F5C5"
						callNumber="Chamado N° 9999999-9"
						callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						callDate="99/99/9999"
						callStatus="Registrado"
					/>
					<CalledMobile
						color="#D9F5C5"
						callNumber="Chamado N° 9999999-9"
						callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						callDate="99/99/9999"
						callStatus="Registrado"
					/>
					<CalledMobile
						color="#D9F5C5"
						callNumber="Chamado N° 9999999-9"
						callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						callDate="99/99/9999"
						callStatus="Registrado"
					/>
				</>
				<ButtonNew />
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
