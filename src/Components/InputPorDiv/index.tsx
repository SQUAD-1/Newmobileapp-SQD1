import { ReactNode } from "react";
import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	widht?: string;
	inputType?: string;
	placeholder?: string;
	height?: string;
	maxLength?: number;
	children: ReactNode;
}

export const CallInformacion = ({
	legendText,
	widht,
	height,
	children,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			widht={widht}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>

			<Input>{children}</Input>
		</Fildset>
	);
};
