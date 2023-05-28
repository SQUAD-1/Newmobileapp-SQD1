import { ChangeEventHandler } from "react";
import { InputCode } from "./InputCode";
import { useState, useEffect } from "react";
import { InputCodeValidationContainer } from "./styles";

interface InputBoxValidationProps {
	height?: string;
	width?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
}

export const InputBoxValidation = ({
	height,
	width,
	onChange
}: InputBoxValidationProps) => {
	const [cleancode, setCleancode] = useState("");
	useEffect(() => {
		getInputValue(cleancode);
	}, [cleancode, getInputValue]);
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
