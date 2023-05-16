/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { BackButton, ButtonsContainer, NextButton } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface FooterButtonsProps {
	LastPage: string;
	NextPage?: string;
	actionOnClick?: () => void;
	isDisabled?: boolean;
}
export const FooterButtons = ({
	LastPage,
	NextPage,
	isDisabled,
	actionOnClick,
}: FooterButtonsProps) => {
	return (
		<ButtonsContainer>
			<BackButton>
				<Link to={LastPage}>Voltar</Link>
			</BackButton>
			<Link to={NextPage ?? ""}>
				<NextButton
					disabled={isDisabled}
					onClick={actionOnClick}>
					Próximo
				</NextButton>
			</Link>
		</ButtonsContainer>
	);
};
