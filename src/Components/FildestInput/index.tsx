/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEventHandler, useState } from "react";
import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	inputType?: string;
	placeholder?: string;
	height?: string;
	maxLength?: number;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputLegend = ({
	legendText,
	inputType,
	placeholder,
	width,
	height,
	value,
	maxLength,
	onChange,
}: ILegendProps) => {
	const [write, setWrite] = useState<string>("");

	const isMaxDate = inputType === "date" ? "2023-12-31" : "";

	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>

			<Input
				placeholder={placeholder}
				type={inputType}
				maxLength={maxLength}
				onChange={(e) => setWrite(e.target.value)}
				max={isMaxDate}
				required
				value={value}
				onChangeCapture={onChange}
			/>
		</Fildset>
	);
};
