import { Buttons } from "../../../Components/Buttons";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import {
    AbrirChamadoContainer,
    HeaderComponent,
    ImgBackIcon,
    InfoChamadosContainer,
    LastPage,
} from "./styles";

import ArrowLeft from "../../../images/arrowLeft.png";
import { SelectOption } from "../../../Components/SelectOption";

export const AbrirChamado = () => {
    return (
        <AbrirChamadoContainer>
            <LastPage>
                <ImgBackIcon src={ArrowLeft} />
                <span>voltar</span>
            </LastPage>
            <HeaderComponent>
                <h1>O que aconteceu?</h1>
            </HeaderComponent>
            <InfoChamadosContainer>
                <FildsetTextArea
                    legendText="Resumo"
                    placeholder="Do que se trata o chamado?"
                    height="56px"
                    widht="auto"
                />
                <SelectOption
                    legendText="Tipo"
                    height="56px"
                    widht="auto"
                    placeholder="Qual o tipo do chamado?"
                >
                    <option value="limpeza">Solicitação de limpeza</option>
                    <option value="internet">Problema com a internet</option>
                    <option value="material">Falta de material</option>
                    <option value="recurso">Solicitação de recurso</option>
                </SelectOption>
                <FildsetTextArea
                    legendText="Descrição"
                    placeholder="Nos conte mais detalhes sobre o ocorrido..."
                    height="240px"
                    widht="auto"
                />
                <InputLegend
                    legendText="Data do ocorrido"
                    placeholder="dd/mm/aaaa"
                    inputType="date"
                    height="56px"
                    widht="auto"
                />
            </InfoChamadosContainer>
            <Buttons />
        </AbrirChamadoContainer>
    );
};
