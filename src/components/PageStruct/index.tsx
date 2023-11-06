import { ReactNode } from "react";
import { HeaderMobile } from "@/components";
import { FlexContainer, PageContainer } from "./style";

const PageStructContainer = ({ children }: any) => {
	return (
		<FlexContainer>
			<HeaderMobile userName={"Usuário não autenticado"} />
			<PageContainer>{children}</PageContainer>
		</FlexContainer>
	);
};

export default PageStructContainer;
