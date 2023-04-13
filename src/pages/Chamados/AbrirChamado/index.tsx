import { Buttons } from "../../../Components/Buttons"
import { FildsetTextArea } from "../../../Components/FildsetTextArea"
import { AbrirChamadoContainer, HeaderComponent, InfoChamadosContainer} from "./styles"

export const AbrirChamado = () => {
    return(
        <AbrirChamadoContainer>
            <HeaderComponent>
                <h1>O que aconteceu?</h1>
            </HeaderComponent>
            <InfoChamadosContainer>
                <FildsetTextArea legendText="Resumo" placeholder="Do que se trata o chamado?" height="56px" widht="auto"/>
            </InfoChamadosContainer>
            <Buttons />
        </AbrirChamadoContainer>
    )
}