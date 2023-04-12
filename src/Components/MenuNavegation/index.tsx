import { ContainerMenu, MenuList, OptionMenu } from "./styles";
import chamados from './svg/Chamados.svg'
import home from './svg/Home.svg'
import setting from './svg/Settings.svg'

export const NavigationBar = () => {
    return (
        <ContainerMenu>
            <MenuList>
                <OptionMenu>
                    <img src={home} alt="Imagem de home" width={30} height={30}/>
                    Home
                </OptionMenu>
                <OptionMenu>
                    <img src={chamados} alt="Imagem de Chamados" width={30} height={30} />
                    Chamados
                </OptionMenu>
                <OptionMenu>
                    <img src={setting} alt="Imagem de setting" width={30} height={30} />
                    Configurações
                </OptionMenu>
            </MenuList>

        </ContainerMenu>
    )

};