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
export const IssueMobile = ({
	id,
	description,
	date,
	status,
	isUpdated,
	color,
}: IssueMobileProps) => {
	return (
		<IssueContainer color={color}>
			<IconeSelo>{isUpdated ? <Selo /> : null}</IconeSelo>
			<IssueContent>
				<IssueNumber>{`Chamado Nº ${id}`}</IssueNumber>
				<IssueDescription>{description}</IssueDescription>
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
