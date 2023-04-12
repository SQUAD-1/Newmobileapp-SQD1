import { AbrirChamadoContainer, BackButton, ButtonsContainer, HeaderComponent, InfoChamadosContainer, NextButton } from "./styles"

export const AbrirChamado = () => {
    return(
        <AbrirChamadoContainer>
            <HeaderComponent>
                <h1>O que aconteceu?</h1>
            </HeaderComponent>
            <InfoChamadosContainer>

            </InfoChamadosContainer>
            <ButtonsContainer>
                <BackButton>Voltar</BackButton>
                <NextButton>Próximo</NextButton>
            </ButtonsContainer>
        </AbrirChamadoContainer>
    )
}