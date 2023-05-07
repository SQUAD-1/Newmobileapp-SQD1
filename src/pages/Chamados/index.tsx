import { CalledMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../Home/styles";
import { Calls } from "./styles";
import chamados from "../../mocks/chamados";

export const Chamados = () => {
    return (
        <ScreenContainer>
            <MainMobile>
                <HeaderMobile
                    userName="Wellington"
                    pageTittle="Meus Chamados"
                />
                <Calls>
                    {chamados.map((item) => (
                        <CalledMobile key={item.id} {...item} />
                    ))}
                </Calls>
            </MainMobile>
            <NavigationBar />
        </ScreenContainer>
    );
};
