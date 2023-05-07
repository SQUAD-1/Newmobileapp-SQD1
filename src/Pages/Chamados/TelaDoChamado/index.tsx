import { BackButton } from "../../../Components/BackButton";
import { InputLegend } from "../../../Components/FildestInput";
import { FildsetTextArea } from "../../../Components/FildsetTextArea";
import { NavigationBar } from "../../../Components/MenuNavegation";
import { Midia } from "../../../Components/Midia";
import {
	ButtonDiv,
	ChamadoText,
	CircleDiv,
	DoubleInput,
	HistoricoContainer,
	HistoricoText,
	HistoryStatusText,
	HistoryText,
	InputContainer,
	LastInputDiv,
	MidiaDiv,
	SreenContainer,
} from "./styles";

export const ChamadoScreen = () => {
	return (
		<SreenContainer>
			<ButtonDiv>
				<BackButton actionText="voltar" />
			</ButtonDiv>
			<ChamadoText>Chamado n° 99999999</ChamadoText>
			<InputContainer>
				<InputLegend
					legendText={"Resumo"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					widht={"100%"}
					height={"56px"}
				/>

				<FildsetTextArea
					legendText={"Descrição"}
					placeholder={"Acabou o papel no ponto eletrônico"}
					widht={"100%"}
					height={"112px"}
				/>
				<MidiaDiv>
					<Midia />
				</MidiaDiv>

				<DoubleInput>
					<InputLegend
						legendText={"Tipo"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"45%"}
						height={"56px"}
					/>
					<InputLegend
						legendText={"Prioridade"}
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"45%"}
						height={"56px"}
					/>
				</DoubleInput>
				<LastInputDiv>
					<InputLegend
						legendText={"Data do ocorrido"}
						inputType="date"
						placeholder={"Acabou o papel no ponto eletrônico"}
						widht={"100%"}
						height={"56px"}
					/>
				</LastInputDiv>
				<HistoryText>Histórico</HistoryText>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
				<HistoricoContainer>
					<CircleDiv />
					<HistoricoText>#3</HistoricoText>
					<HistoryStatusText>
						Status do chamado passou para Em andamento
					</HistoryStatusText>
				</HistoricoContainer>
			</InputContainer>
			<NavigationBar />
		</SreenContainer>
	);
};
