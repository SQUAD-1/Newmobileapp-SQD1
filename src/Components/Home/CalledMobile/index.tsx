import {
	CalledContainer,
	CalledContent,
	CalledNumber,
	CalledDescription,
	CalledState,
	CalledStatus,
	OpeningText,
	StatusText,
	IconeSelo,
} from "./styles";
import { Selo } from "../../../Assets/Icons";
import { CalledMobileProps } from "../../../Assets";
export const CalledMobile = ({
	color,
	callNumber,
	callDescription,
	callDate,
	callStatus,
	updated,
}: CalledMobileProps) => {
	return (
		<CalledContainer color={color}>
			<IconeSelo>{updated ? <Selo /> : null}</IconeSelo>
			<CalledContent>
				<CalledNumber>{callNumber}</CalledNumber>
				<CalledDescription>{callDescription}</CalledDescription>
			</CalledContent>
			<CalledState>
				<CalledStatus>
					Aberto em:
					<OpeningText>{callDate}</OpeningText>
				</CalledStatus>
				<CalledStatus>
					Status
					<StatusText>{callStatus}</StatusText>
				</CalledStatus>
			</CalledState>
		</CalledContainer>
	);
};
