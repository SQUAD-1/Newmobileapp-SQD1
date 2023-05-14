import { Fildset, TextArea, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	placeholder?: string;
	height?: string;
}

export const FildsetTextArea = ({
	legendText,
	placeholder,
	width,
	height,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				required
				placeholder={placeholder}
			/>
		</Fildset>
	);
};
