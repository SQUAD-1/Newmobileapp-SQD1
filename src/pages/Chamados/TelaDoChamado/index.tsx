import { BackButton } from "../../../Components/BackButton";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import { Midia } from "../../../Components/Midia";
import {
    ButtonDiv,
    ChamadoText,
    DoubleInput,
    InputContainer,
    LastInputDiv,
    MidiaDiv,
    SreenContainer,
} from "./styles";

export const ChamadoScreen = () => {
    return (
        <SreenContainer>
            <ButtonDiv>
                <BackButton actionText="voltar"></BackButton>
            </ButtonDiv>
            <ChamadoText>Chamado n° 99999999</ChamadoText>
            <InputContainer>
                <InputLegend
                    legendText={"Resumo"}
                    placeholder={"Acabou o papel no ponto eletrônico"}
                    widht={"100%"}
                    height={"56px"}
                ></InputLegend>

                <FildsetTextArea
                    legendText={"Descrição"}
                    placeholder={"Acabou o papel no ponto eletrônico"}
                    widht={"100%"}
                    height={"112px"}
                ></FildsetTextArea>
                <MidiaDiv>
                    <Midia />
                </MidiaDiv>

                <DoubleInput>
                    <InputLegend
                        legendText={"Tipo"}
                        placeholder={"Acabou o papel no ponto eletrônico"}
                        widht={"45%"}
                        height={"56px"}
                    ></InputLegend>
                    <InputLegend
                        legendText={"Prioridade"}
                        placeholder={"Acabou o papel no ponto eletrônico"}
                        widht={"45%"}
                        height={"56px"}
                    ></InputLegend>
                </DoubleInput>
                <LastInputDiv>
                    <InputLegend
                        legendText={"Data do ocorrido"}
                        inputType="date"
                        placeholder={"Acabou o papel no ponto eletrônico"}
                        widht={"100%"}
                        height={"56px"}
                    ></InputLegend>
                </LastInputDiv>
            </InputContainer>
        </SreenContainer>
    );
};
