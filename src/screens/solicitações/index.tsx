/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Selo } from "../../Assets";
import { ButtonNew } from "../../Components/Home/ButtonNew";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MenuList } from "../../Components/MenuNavegation/styles";
import { MainMobileRequest, RequestContainer } from "./styles";

// import { CalledMobile } from "../../Components/Home/CalledMobile";
import { BoxEmpty } from "../../Components/BoxEmpty";

export const Requests = () => {
	return (
		<RequestContainer>
			<MainMobileRequest>
				<HeaderMobile
					userName="Wellington"
					pageTittle="Chamados solicitados"
					issueQuantify={0}
				/>
				<BoxEmpty
					alt="caixa vazia"
					title="Não há solicitações no momento."
					color="#494949"
				/>
				{/* <>
            <CalledMobile
                color="#9EDC72"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
                updated={true}
            />
            <CalledMobile
                color="#9EDC72"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
            />
            <CalledMobile
                color="#9EDC72"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
            />
            <CalledMobile
                color="#C6C6C6"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
            />
            <CalledMobile
                color="#C6C6C6"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
            />
                        <CalledMobile
                color="#C6C6C6"
                callNumber="Chamado N° 9999999-9"
                callDescription="Lorem Ipsum Dolor Main yongui marua noise dios de 4 patas"
                callDate="12/05/2023"
                callStatus="Registrado"
            />
            </> */}
			</MainMobileRequest>
			<NavigationBar />
		</RequestContainer>
	);
};
