import { Buttons } from "../../../Components/Buttons"
import { TextAreaLegend } from "../../../Components/FildsetTextArea"
import { AbrirChamadoContainer, HeaderComponent, InfoChamadosContainer} from "./styles"

export const AbrirChamado = () => {
    return(
        <AbrirChamadoContainer>
            <HeaderComponent>
                <h1>O que aconteceu?</h1>
            </HeaderComponent>
            <InfoChamadosContainer>
                <TextAreaLegend legendText="Resumo" placeholder="Do que se trata o chamado?" height="56px" widht="auto"/>
            </InfoChamadosContainer>
            <Buttons />
        </AbrirChamadoContainer>
    )
}