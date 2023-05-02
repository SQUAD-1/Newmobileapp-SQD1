import { Selo } from "../../Assets";
import { ButtonNew } from "../../Components/Home/ButtonNew";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MenuList } from "../../Components/MenuNavegation/styles";
import { RequestContainer } from "./styles";

export const Requests = () => {
    return (
        <RequestContainer>
            <HeaderMobile userName="Wellington" pageTittle="Chamados solicitados"/>
            <ButtonNew/>
            {/* passar background color da NavigationBar por props */}
            
            <NavigationBar/>

        </RequestContainer>
    )
}