import { Fildset, TextArea, Legend, LegendText } from "./styles";
import { useEffect, useState } from "react";

export interface ILegendProps {
	legendText?: string;
	widht?: string;
	placeholder?: string;
	height?: string;
	// eslint-disable-next-line no-unused-vars
	getValue: (e: string) => void;
}

export const FildsetTextArea = ({
	legendText,
	placeholder,
	widht,
	height,
	getValue,
}: ILegendProps) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		getValue(value);
	}, [value]);

	return (
		<Fildset
			height={height}
			widht={widht}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
		</Fildset>
	);
};
