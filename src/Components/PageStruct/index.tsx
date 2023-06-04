import { ReactNode } from "react";
import { HeaderMobile } from "../Home/HeaderMobile";
import { FlexContainer, PageContainer } from "./style";

const PageStructContainer = (children: ReactNode) => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");

	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}

	verificarLogin();
    
	return (
		<FlexContainer>
			<HeaderMobile userName={usuarioLogado ?? "Usuário não autenticado"} />
			<PageContainer>{children}</PageContainer>
		</FlexContainer>
	);
};

export default PageStructContainer;
