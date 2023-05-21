import { InputCode } from "./InputCode";
import { InputCodeValidationContainer } from "./styles";

interface InputBoxValidationProps {
	height?: string;
	width?: string;
}

export const InputBoxValidation = ({ height, width }: InputBoxValidationProps) => {
	return (
		<InputCodeValidationContainer>
			<InputCode
				height={height}
				width={width}
				length={4}
			/>
		</InputCodeValidationContainer>
	);
};

