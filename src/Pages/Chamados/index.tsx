import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../Home/styles";
import { Calls } from "./styles";
import { issueMobileData } from "../Home/data";

export const Chamados = () => {
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName="Wellington"
					pageTittle="Meus Chamados"
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
