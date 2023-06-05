import {
	IssueContainer,
	IssueContent,
	IssueNumber,
	IssueDescription,
	IssueState,
	IssueStatus,
	OpeningText,
	StatusText,
	IconeSelo,
} from "./styles";
import { Selo } from "../../../Assets/Icons";
import { IssueMobileProps } from "../../../Assets";
import { useNavigate } from "react-router-dom";
export const IssueMobile = ({
	id,
	nome,
	date,
	status,
	isUpdated,
	color,
	borderColor,
}: IssueMobileProps) => {
	const navigate = useNavigate();

	return (
		<IssueContainer
			color={color}
			borderColor={borderColor}
			onClick={() => {
				navigate("/Chamado");
				localStorage.setItem("idChamado", id);
			}}>
			<IconeSelo>{isUpdated ? <Selo /> : null}</IconeSelo>
			<IssueContent>
				<IssueNumber>{`Chamado Nº ${id}`}</IssueNumber>
				<IssueDescription>{nome}</IssueDescription>
			</IssueContent>
			<IssueState>
				<IssueStatus>
					Aberto em:
					<OpeningText>{date}</OpeningText>
				</IssueStatus>
				<IssueStatus>
					Status
					<StatusText>{status}</StatusText>
				</IssueStatus>
			</IssueState>
		</IssueContainer>
	);
};
