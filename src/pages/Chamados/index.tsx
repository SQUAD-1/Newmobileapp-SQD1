import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../Home/styles";
import { Calls } from "./styles";

export const Chamados = () => {
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName="Wellington"
					pageTittle="Meus Chamados"
					issueQuantify={0}
				/>
				<Calls>
					<IssueMobile
						color="#D9F5C5"
						id="Chamado N° 9999999-9"
						description="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						date="99/99/9999"
						status="Registrado"
						isUpdated={false}
					/>
					<IssueMobile
						color="#D9F5C5"
						id="Chamado N° 9999999-9"
						description="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						date="99/99/9999"
						status="Registrado"
						isUpdated={true}
					/>
					<IssueMobile
						color="#D9F5C5"
						id="Chamado N° 9999999-9"
						description="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
						date="99/99/9999"
						status="Registrado"
						isUpdated={false}
					/>
				</Calls>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
