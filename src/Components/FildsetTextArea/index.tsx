import { Fildset, TextArea, Legend, LegendText } from "./styles";
import { useEffect, useState } from "react";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	placeholder?: string;
	height?: string;
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
	getValue: (e: any) => void;
}

export const FildsetTextArea = ({
	legendText,
	placeholder,
	width,
	height,
	getValue,
}: ILegendProps) => {
	const [value, setValue] = useState<unknown>("");

	useEffect(() => {
		getValue(value);
	}, [getValue, value]);

	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				placeholder={placeholder}
				onChange={(e) => setValue(e.target?.value)}
			/>
		</Fildset>
	);
};
