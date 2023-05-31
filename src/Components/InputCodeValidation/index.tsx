import { ChangeEventHandler } from "react";
import { InputCode } from "./InputCode";
import { InputCodeValidationContainer } from "./styles";

interface InputBoxValidationProps {
	height?: string;
	width?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputBoxValidation = ({
	height,
	width,
	onChange
}: InputBoxValidationProps) => {
	return (
		<InputCodeValidationContainer>
		
			<InputCode
				height={height}
				width={width}
				length={4}
				onChange={onChange}
			
			/>
		</InputCodeValidationContainer>
	);
};
