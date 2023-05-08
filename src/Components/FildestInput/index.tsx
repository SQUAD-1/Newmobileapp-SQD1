/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	widht?: string;
	inputType?: string;
	placeholder?: string;
	height?: string;
	maxLength?: number;
	onChange?: () => void;
}

export const InputLegend = ({
	legendText,
	inputType,
	placeholder,
	widht,
	height,
	maxLength,
	onChange,
}: ILegendProps) => {
	const [write, setWrite] = useState<string>("");

	const isMaxDate = inputType === "date" ? "2023-12-31" : "";

	return (
		<Fildset
			height={height}
			widht={widht}
			onChange={() => onChange}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>

			<Input
				placeholder={placeholder}
				type={inputType}
				maxLength={maxLength}
				onChange={(e) => setWrite(e.target.value)}
				max={isMaxDate}
			/>
		</Fildset>
	);
};
